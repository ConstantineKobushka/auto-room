import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../Loader/Loader';
import CarsItem from '../CarsItem/CarsItem';

import {
  selectCars,
  selectCarsIsLoading,
  selectCarsPage,
  selectCarsTotalPages,
} from '../../redux/cars/selectors';
import { apiGetCars } from '../../redux/cars/operations';

import css from './CarsList.module.css';

const CarsList = () => {
  const dispatch = useDispatch();

  const cars = useSelector(selectCars);
  const isLoading = useSelector(selectCarsIsLoading);
  const page = useSelector(selectCarsPage);
  const totalPages = useSelector(selectCarsTotalPages);

  useEffect(() => {
    if (page === 1) {
      const params = {
        page: 1,
        limit: 10,
      };

      dispatch(apiGetCars(params));
    }
    return () => console.log('message');
  }, [dispatch]);

  const handleLoadMore = () => {
    if (page <= totalPages) {
      const params = {
        page,
      };
      dispatch(apiGetCars(params));
    }
  };

  if (isLoading && page === 1) {
    return <Loader />;
  }

  return (
    <>
      <ul className={css.list}>
        {Array.isArray(cars) &&
          cars.map((car) => <CarsItem key={car.id} car={car} />)}
      </ul>
      {isLoading && <Loader />}
      {page <= totalPages && (
        <button className={css.button} onClick={handleLoadMore} type='button'>
          Load more
        </button>
      )}
    </>
  );
};

export default CarsList;
