import { useEffect, useId } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import Select, { components } from 'react-select';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import { apiGetCarBrends } from '../../redux/filters/operations';

import css from './SearchForm.module.css';
import { selectCarBrands } from '../../redux/filters/selectors';
import { apiGetCars } from '../../redux/cars/operations';
import { resetCars } from '../../redux/cars/slice';

const DropdownIndicator = (props) => {
  const { menuIsOpen } = props.selectProps;
  return (
    <components.DropdownIndicator {...props}>
      <svg
        className={css.icon}
        width='16'
        height='16'
        style={{
          transform: menuIsOpen ? 'rotate(180deg)' : 'rotate(0deg)',
          transition: 'transform 250ms cubic-bezier(0.4, 0, 0.2, 1)',
        }}
      >
        <use href='/icons/icons-sprite.svg#arrow'></use>
      </svg>
    </components.DropdownIndicator>
  );
};

const SearchForm = () => {
  const dispatch = useDispatch();
  const carBrands = useSelector(selectCarBrands);

  useEffect(() => {
    dispatch(apiGetCarBrends());
  }, [dispatch]);

  const brand = useId();
  const pricePerHour = useId();
  const carMileageFrom = useId();
  const carMileageTo = useId();

  const initialValues = {
    brand: '',
    pricePerHour: '',
    carMileageFrom: '',
    carMileageTo: '',
  };

  const brandOptions = Array.isArray(carBrands)
    ? carBrands.map((brand) => ({
        value: brand,
        label: brand,
      }))
    : [];

  const priceOptions = [
    { value: '20', label: '20' },
    { value: '30', label: '30' },
    { value: '40', label: '40' },
    { value: '50', label: '50' },
    { value: '60', label: '60' },
    { value: '70', label: '70' },
    { value: '80', label: '80' },
    { value: '90', label: '90' },
    { value: '100', label: '100' },
  ];

  const validationSchema = Yup.object().shape({
    brand: Yup.string().required('Choose a brand'),
    pricePerHour: Yup.number().required('Choose a price'),
    carMileageFrom: Yup.number()
      .required('Choose a mileage')
      .positive('Only positive'),
    carMileageTo: Yup.number()
      // .required('Choose a mileage')
      .positive('Only positive'),
  });

  const handleSubmit = (values) => {
    console.log(values);
    const searchValue = {
      brand: values.brand,
      pricePerHour: +values.pricePerHour,
      carMileageFrom: +values.carMileageFrom,
      carMileageTo: +values.carMileageTo,
    };
    console.log(searchValue);
    dispatch(resetCars());
    dispatch(apiGetCars(searchValue));
  };

  // brand: 'Buick';
  // carMileageFrom: '1000';
  // carMileageTo: '6000';
  // pricePerHour: '20';

  const customStyles = {
    control: (styles) => ({
      ...styles,
      width: '100%',
      height: '44px',
      paddingLeft: '16px',
      paddingRight: '16px',
      borderRadius: '12px',
      border: 'none',
      backgroundColor: 'var(--inputs)',
      boxShadow: 'none',
      cursor: 'pointer',
    }),
    input: (styles) => ({
      ...styles,
      margin: '0',
      paddingBottom: '0px',
      paddingTop: '0px',
    }),
    placeholder: (styles) => ({
      ...styles,
      fontFamily: 'Manrope',
      fontSize: '16px',
      fontWeight: '500',
      lineHeight: '20px',
      color: 'var(--main)',
      margin: '0',
    }),
    valueContainer: (styles) => ({
      ...styles,
      padding: '0',
    }),
    indicatorSeparator: (styles) => ({
      ...styles,
      display: 'none',
    }),
    singleValue: (styles) => ({
      ...styles,
      color: 'var(--main)',
    }),
    menu: (styles) => ({
      ...styles,
      borderRadius: '12px',
      border: '1px solid var(--inputs)',
      backgroundColor: 'var(--white)',
      boxShadow: '0px 4px 36px 0px rgba(0, 0, 0, 0.02)',
      color: 'var(--gray)',
      padding: '14px 8px 14px 18px',

      animationFillMode: 'forwards',
      '@keyframes fadeIn': {
        '0%': { opacity: 0, transform: 'scale(0.9)' },
        '50%': { opacity: 0.3 },
        '100%': { opacity: 1, transform: 'scale(1)' },
      },
      '@keyframes fadeOut': {
        '0%': { opacity: 1, transform: 'scale(1)' },
        '50%': { opacity: 0.3 },
        '100%': { opacity: 0, transform: 'scale(0.9)' },
      },
      '&.react-select__menu': {
        animationName: 'fadeIn',
        animationDuration: '250ms',
        animationTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
      },

      // '&.menu--is-closing': {
      //   animationName: 'fadeOut',
      //   animationDuration: '250ms',
      //   animationTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
      // },
    }),
    option: (styles, { isFocused }) => ({
      ...styles,
      fontFamily: 'Manrope',
      fontSize: '16px',
      fontWeight: '500',
      lineHeight: '20px',
      cursor: 'pointer',
      width: '90%',
      marginBottom: '8px',
      backgroundColor: isFocused ? 'transparent' : 'transparent',
      color: isFocused ? 'var(--main)' : 'inherit',

      '&:hover': {
        color: 'var(--main)',
      },
      '&:first-of-type': {
        color: 'var(--gray)',
      },
      '&:first-of-type:hover': {
        color: 'var(--main)',
      },
    }),
    menuList: (styles) => ({
      ...styles,
      padding: '0',
      backgroundColor: 'transparent',
    }),
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      {({ values, setFieldValue, setFieldTouched }) => (
        <Form className={css.form}>
          <div className={css.selectWrapper}>
            <label className={css.label} htmlFor={brand}>
              Car brand
            </label>
            <Select
              name='brand'
              id={brand}
              placeholder='Choose a brand'
              options={brandOptions}
              value={brandOptions.find(
                (option) => option.value === values.brand
              )}
              onChange={(selectedOption) =>
                setFieldValue('brand', selectedOption.value)
              }
              onBlur={() => setFieldTouched('brand', true)}
              styles={customStyles}
              classNamePrefix='react-select'
              components={{ DropdownIndicator }}
            />
            <ErrorMessage className={css.error} name='brand' component='span' />
          </div>

          <div className={css.selectWrapper}>
            <label className={css.label} htmlFor={pricePerHour}>
              Price/ 1 hour
            </label>
            <Select
              name='pricePerHour'
              id={pricePerHour}
              placeholder='Choose a price'
              options={priceOptions}
              value={brandOptions.find(
                (option) => option.value === values.pricePerHour
              )}
              onChange={(selectedOption) =>
                setFieldValue('pricePerHour', selectedOption.value)
              }
              onBlur={() => setFieldTouched('pricePerHour', true)}
              styles={customStyles}
              classNamePrefix='react-select'
              components={{ DropdownIndicator }}
            />
            <ErrorMessage
              className={css.error}
              name='pricePerHour'
              component='span'
            />
          </div>

          <div className={css.inputWrapper}>
            <label className={css.label} htmlFor={carMileageFrom}>
              Сar mileage / km
            </label>
            <div className={css.inputInner}>
              <Field
                className={`${css.input} ${css.inputFrom}`}
                type='text'
                name='carMileageFrom'
                id={carMileageFrom}
                placeholder='From '
              />
              <ErrorMessage
                className={`${css.error} ${css.errorLeft}`}
                name='carMileageFrom'
                component='span'
              />

              <Field
                className={`${css.input} ${css.inputTo}`}
                type='text'
                name='carMileageTo'
                id={carMileageTo}
                placeholder='To'
              />
              <ErrorMessage
                className={`${css.error} ${css.errorRight}`}
                name='carMileageTo'
                component='span'
              />
            </div>
          </div>

          <button className={css.button} type='submit'>
            Search
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default SearchForm;
