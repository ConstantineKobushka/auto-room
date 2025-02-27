import { useId } from 'react';

import { Formik, Form, Field, ErrorMessage } from 'formik';

import * as Yup from 'yup';

import css from './SearchForm.module.css';

const SearchForm = () => {
  const carBrand = useId();
  const pricePerHour = useId();
  const carMileageFrom = useId();
  const carMileageTo = useId();

  const initialValues = {
    carBrand: '',
    pricePerHour: '',
    carMileageFrom: '',
    carMileageTo: '',
  };

  const validationSchema = Yup.object().shape({
    carBrand: Yup.string().required('Choose a brand'),
    pricePerHour: Yup.number().required('Choose a price'),
    carMileageFrom: Yup.number()
      .required('Choose a mileage')
      .positive('Only positive'),
    carMileageTo: Yup.number()
      .required('Choose a mileage')
      .positive('Only positive'),
  });

  const handleSubmit = (values) => {
    console.log(values);
    console.log('values');
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      <Form className={css.form}>
        <div className={css.selectWrapper}>
          <label className={css.label} htmlFor={carBrand}>
            Car brand
          </label>
          <Field
            as='select'
            className={css.select}
            name='carBrand'
            id={carBrand}
            placeholder='Choose a brand'
          >
            <option value='good'>Good</option>
            <option value='neutral'>Neutral</option>
            <option value='bad'>Bad</option>
          </Field>
          <ErrorMessage
            className={css.error}
            name='carBrand'
            component='span'
          />
        </div>

        <div className={css.selectWrapper}>
          <label className={css.label} htmlFor={pricePerHour}>
            Price/ 1 hour
          </label>
          <Field
            className={css.select}
            as='select'
            name='pricePerHour'
            id={pricePerHour}
            placeholder='Choose a price'
          >
            <option value='good'>Good</option>
            <option value='neutral'>Neutral</option>
            <option value='bad'>Bad</option>
          </Field>
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
              className={css.inputFrom}
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
              className={css.inputTo}
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
    </Formik>
  );
};

export default SearchForm;
