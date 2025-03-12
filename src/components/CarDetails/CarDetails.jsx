import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { nanoid } from 'nanoid';

import Container from '../Container/Container';
import OrderForm from '../OrderForm/OrderForm';
import Loader from '../Loader/Loader';

import { apiGetCarById } from '../../redux/cars/operations';
import { selectCar, selectCarsIsLoading } from '../../redux/cars/selectors';

import {
  extractIdFromUrl,
  extractLocation,
  formatMileAge,
} from '../../utils/functions';

import css from './CarDetails.module.css';

const CarDetails = () => {
  const car = useSelector(selectCar);
  const isLoading = useSelector(selectCarsIsLoading);

  const dispatch = useDispatch();
  const { id } = useParams();
  console.log(car);

  useEffect(() => {
    if (id) {
      dispatch(apiGetCarById(id));
    }
  }, [dispatch, id]);

  if (isLoading || !car) {
    return <Loader />;
  }

  return (
    car !== null && (
      <section className={css.section}>
        <Container>
          <div className={css.wrapper}>
            <div className={css.imageForm}>
              <img className={css.img} src={car.img} alt={car.brand} />
              <OrderForm />
            </div>
            <div className={css.description}>
              <h1 className={css.title}>
                {car.brand} {car.model}, {car.year}
                <span className={css.titleSpan}>
                  Id: {extractIdFromUrl(car.img)}
                </span>
              </h1>
              <div className={css.textWrap}>
                <span className={css.span}>
                  {extractLocation(car.address, 'city')},
                  {extractLocation(car.address, 'country')}
                </span>
                <span className={css.span}>
                  Mileage: {formatMileAge(car.mileage)}
                </span>
              </div>
              <p className={css.price}>${car.rentalPrice}</p>
              <p className={css.text}>{car.description}</p>
              <h3 className={css.subTitle}>Rental Conditions:</h3>
              <ul className={css.list}>
                {car.rentalConditions.map((item) => (
                  <li className={css.item} key={nanoid()}>
                    {item}
                  </li>
                ))}
              </ul>
              <h3 className={css.subTitle}>Car Specifications:</h3>
              <ul className={css.list}>
                <li className={`${css.item} ${css.calendar}`}>
                  Year: {car.year}
                </li>
                <li className={`${css.item} ${css.car}`}>Type: {car.type}</li>
                <li className={`${css.item} ${css.gas}`}>
                  Fuel Consumption: {car.fuelConsumption}
                </li>
                <li className={`${css.item} ${css.tools}`}>{car.engineSize}</li>
              </ul>

              <h3 className={css.subTitle}>Accessories and functionalities:</h3>
              <ul className={css.list}>
                {car.functionalities.map((item) => (
                  <li className={css.item} key={nanoid()}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>
    )
  );
};

export default CarDetails;
