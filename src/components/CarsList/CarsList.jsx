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
import { incrementPage } from '../../redux/slice';

import css from './CarsList.module.css';

const CarsList = () => {
  const dispatch = useDispatch();

  const cars = useSelector(selectCarsData);
  const isLoading = useSelector(selectIsLoading);
  const page = useSelector(selectPage);
  const totalPages = useSelector(selectTotalPages);

  useEffect(() => {
    dispatch(apiGetCars({ page }));
  }, [dispatch, page]);

  const handleLoadMore = () => {
    if (page < totalPages) {
      dispatch(incrementPage());
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
      {page < totalPages && (
        <button className={css.button} onClick={handleLoadMore}>
          Load more
        </button>
      )}
    </>
  );
};

export default CarsList;
