import { Link } from 'react-router-dom';

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

  const extractLocation = (address, type) => {
    if (!address || typeof address !== 'string') return 'Location unknown';

    const parts = address.split(',').map((part) => part.trim());

    if (type === 'city') {
      return parts.length > 1 ? parts[1] : 'Kyiv';
    } else if (type === 'country') {
      return parts.length > 2 ? parts[2] : 'Ukraine';
    }

    return 'Location unknown';
  };

  const formatMileAge = (number, unit = 'km') => {
    if (typeof number !== 'number' || isNaN(number)) return 'Invalid distance';
    return new Intl.NumberFormat('uk-UA').format(number) + ` ${unit}`;
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
        <button className={css.favorite}>
          <svg className={css.svg} width='16' height='16'>
            <use href='/icons/icons-sprite.svg#heard'></use>
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
      <Link className={css.link} to={`/catalog/:${id}`}>
        Read more
      </Link>
    </li>
  );
};

export default CarsItem;
