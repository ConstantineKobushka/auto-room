import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { toggleFavorite } from '../../redux/favorites/slice';
import { selectFavoritesCars } from '../../redux/favorites/selectors';
import { extractLocation, formatMileAge } from '../../utils/functions';

import css from './CarsItem.module.css';

const CarsItem = ({ car }) => {
  const {
    img,
    brand,
    model,
    year,
    rentalPrice,
    address,
    rentalCompany,
    type,
    mileage,
    id,
  } = car;

  const dispatch = useDispatch();
  const favorites = useSelector(selectFavoritesCars);
  const isFavorite = favorites[id] || false;

  const handleToggleFavorite = () => {
    dispatch(toggleFavorite(id));
  };

  return (
    <li className={css.item}>
      <div className={css.inner}>
        <img
          className={css.img}
          src={img}
          alt={brand}
          width={279}
          height={268}
        />
        <button className={css.favorite} onClick={handleToggleFavorite}>
          <svg className={css.svg} width='16' height='16'>
            <use
              href={`/icons/icons-sprite.svg#${
                isFavorite ? 'heard-blue' : 'heard-white'
              }`}
            ></use>
          </svg>
        </button>
      </div>
      <div className={css.wrapper}>
        <h2 className={css.title}>
          {brand} <span className={css.titleSpan}>{model}</span>, {year}
        </h2>
        <span className={css.price}>${rentalPrice}</span>
      </div>
      <div className={css.info}>
        <span className={css.infoSpan}>
          {extractLocation(address, 'country')}
        </span>
        <span className={css.infoSpan}>{extractLocation(address, 'city')}</span>
        <span className={css.infoSpan}>{rentalCompany}</span>
      </div>
      <div className={css.info}>
        <span className={css.infoSpan}>{type}</span>
        <span className={css.infoSpan}>{formatMileAge(mileage)}</span>
      </div>
      <Link className={css.link} to={`/catalog/${id}`}>
        Read more
      </Link>
    </li>
  );
};

export default CarsItem;
