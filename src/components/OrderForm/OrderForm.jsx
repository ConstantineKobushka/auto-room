import { useEffect, useState } from 'react';

import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import toast, { Toaster } from 'react-hot-toast';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';
import css from './OrderForm.module.css';

const OrderForm = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  const initialValues = {
    name: '',
    email: '',
    booking: null,
    comment: '',
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, 'Name must be at least 2 characters')
      .max(50, 'Name must be at most 50 characters')
      .required('Name is required'),
    email: Yup.string()
      .email('Invalid email format')
      .required('Email is required'),
    booking: Yup.date()
      .nullable()
      .max(
        new Date(new Date().setFullYear(new Date().getFullYear() + 1)),
        'Booking date cannot be more than 1 year ahead'
      ),
    comment: Yup.string().max(300, 'Comment must be at most 300 characters'),
  });

  const bookingCar = () =>
    toast.success('Car was booked successfully!', {
      duration: 3000,
      position: 'top-right',
    });

  const handleSubmit = (values, actions) => {
    console.log(values);
    actions.resetForm();
    setSelectedDate(null);
    bookingCar();
  };

  return (
    <div className={css.wrapper}>
      <p className={css.title}>Book your car now</p>
      <p className={css.descr}>
        Stay connected! We are always ready to help you.
      </p>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        {({ setFieldValue, values }) => {
          useEffect(() => {
            setFieldValue('booking', selectedDate);
          }, [selectedDate, setFieldValue]);

          return (
            <Form className={css.form}>
              <Field
                className={css.input}
                type='text'
                name='name'
                placeholder='Name*'
              />
              <ErrorMessage
                className={css.error}
                name='name'
                component='span'
              />

              <Field
                className={css.input}
                type='email'
                name='email'
                placeholder='Email*'
              />
              <ErrorMessage
                className={css.error}
                name='email'
                component='span'
              />

              <DatePicker
                className={css.input}
                wrapperClassName={css.datepickerWrapper}
                selected={selectedDate}
                onChange={(date) => setSelectedDate(date)}
                minDate={new Date()}
                maxDate={
                  new Date(new Date().setFullYear(new Date().getFullYear() + 1))
                }
                dateFormat='dd-MM-yyyy'
                placeholderText='Booking date'
                name='booking'
              />
              <ErrorMessage
                className={css.error}
                name='booking'
                component='span'
              />

              <Field
                className={`${css.input} ${css.textarea}`}
                as='textarea'
                type='text'
                name='comment'
                placeholder='Comment'
              />
              <ErrorMessage
                className={css.error}
                name='comment'
                component='span'
              />

              <button className={css.button} type='submit'>
                Send
              </button>
            </Form>
          );
        }}
      </Formik>
      <Toaster />
    </div>
  );
};

export default OrderForm;
