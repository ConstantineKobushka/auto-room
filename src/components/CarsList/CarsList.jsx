import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../Loader/Loader';
import CarsItem from '../CarsItem/CarsItem';

import {
  selectCarsData,
  selectIsLoading,
  selectPage,
  selectTotalPages,
} from '../../redux/selectors';
import { apiGetCars } from '../../redux/operations';
// import { incrementPage, resetCars } from '../../redux/slice';

import css from './CarsList.module.css';

const CarsList = () => {
  const dispatch = useDispatch();

  const cars = useSelector(selectCarsData);
  const isLoading = useSelector(selectIsLoading);
  const page = useSelector(selectPage);
  const totalPages = useSelector(selectTotalPages);
  console.log(page);

  useEffect(() => {
    if (page === 1) {
      const params = {
        page: 1,
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
      console.log(params);
      dispatch(apiGetCars(params));
    }
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <ul className={css.list}>
        {Array.isArray(cars) &&
          cars.map((car) => <CarsItem key={car.id} car={car} />)}
      </ul>
      {page <= totalPages && (
        <button className={css.button} onClick={handleLoadMore} type='button'>
          Load more
        </button>
      )}
    </>
  );
};

export default CarsList;
