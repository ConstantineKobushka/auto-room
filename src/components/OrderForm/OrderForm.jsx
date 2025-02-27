import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import css from './OrderForm.module.css';

const OrderForm = () => {
  const initialValues = {
    name: '',
    email: '',
    booking: '',
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
      .required('Booking date is required')
      .min(new Date(), 'Booking date cannot be in the past'),
    comment: Yup.string().max(300, 'Comment must be at most 300 characters'),
  });

  const handleSubmit = (values) => {
    console.log(values);
    console.log('values');
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
        <Form className={css.form}>
          <Field
            className={css.input}
            type='text'
            name='name'
            placeholder='Name*'
          />
          <ErrorMessage className={css.error} name='name' component='span' />
          <Field
            className={css.input}
            type='email'
            name='email'
            placeholder='Email*'
          />
          <ErrorMessage className={css.error} name='email' component='span' />
          <Field
            className={css.input}
            type='date'
            name='booking'
            placeholder='Booking date'
          />
          <ErrorMessage className={css.error} name='booking' component='span' />
          <Field
            className={`${css.input} ${css.textarea}`}
            as='textarea'
            type='text'
            name='comment'
            placeholder='Comment'
          />
          <ErrorMessage className={css.error} name='comment' component='span' />
          <button className={css.button} type='submit'>
            Send
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default OrderForm;
