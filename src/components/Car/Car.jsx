import Container from '../Container/Container';
import OrderForm from '../OrderForm/OrderForm';

import car from '../../assets/images/car/carb.jpg';

import css from './Car.module.css';

const Car = () => {
  return (
    <section className={css.section}>
      <Container>
        <div className={css.wrapper}>
          <div className={css.imageForm}>
            <img className={css.img} src={car} alt='Car' />
            <OrderForm />
          </div>
          <div className={css.description}>
            <h1 className={css.title}>
              Buick Enclave, 2008
              <span className={css.titleSpan}>Id: 9582</span>
            </h1>
            <div className={css.textWrap}>
              <span className={css.span}>Kyiv, Ukraine</span>
              <span className={css.span}>Mileage: 5 858 km</span>
            </div>
            <p className={css.price}>$40</p>
            <p className={css.text}>
              The Buick Enclave is a stylish and spacious SUV known for its
              comfortable ride and luxurious features.
            </p>
            <h3 className={css.subTitle}>Rental Conditions:</h3>
            <ul className={css.list}>
              <li className={css.item}>Minimum age : 25</li>
              <li className={css.item}>Security deposite required</li>
              <li className={css.item}>Valid driver’s license</li>
            </ul>
            <h3 className={css.subTitle}>Car Specifications:</h3>
            <ul className={css.list}>
              <li className={`${css.item} ${css.calendar}`}>Year: 2008</li>
              <li className={`${css.item} ${css.car}`}>Type: Suv</li>
              <li className={`${css.item} ${css.gas}`}>
                Fuel Consumption: 10.5
              </li>
              <li className={`${css.item} ${css.tools}`}>
                Engine Size: 3.6L V6
              </li>
            </ul>

            <h3 className={css.subTitle}>Accessories and functionalities:</h3>
            <ul className={css.list}>
              <li className={css.item}>Leather seats</li>
              <li className={css.item}>Panoramic sunroof</li>
              <li className={css.item}>Remote start</li>
              <li className={css.item}>Blind-spot monitoring</li>
              <li className={css.item}>Power liftgate</li>
              <li className={css.item}>Premium audio system</li>
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Car;
