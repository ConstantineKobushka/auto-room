import { Link } from 'react-router-dom';

import img from '../../assets/images/catalog-page/car.jpg';

import css from './Catalog.module.css';

const Catalog = () => {
  return (
    <>
      <ul className={css.list}>
        <li className={css.item}>
          <div className={css.inner}>
            <img
              className={css.img}
              src={img}
              alt='Car'
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
              Subaru <span className={css.titleSpan}>Outback</span>, 2016
            </h2>
            <span className={css.price}>$50</span>
          </div>
          <div className={css.info}>
            <span className={css.infoSpan}>Lviv</span>
            <span className={css.infoSpan}>Ukraine</span>
            <span className={css.infoSpan}>Premium Auto Rentals</span>
          </div>
          <div className={css.info}>
            <span className={css.infoSpan}>Suv</span>
            <span className={css.infoSpan}>5 352 km</span>
          </div>
          <Link className={css.link} to='/catalog/:id'>
            Read more
          </Link>
        </li>

        <li className={css.item}>
          <div className={css.inner}>
            <img
              className={css.img}
              src={img}
              alt='Car'
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
              Subaru <span className={css.titleSpan}>Outback</span>, 2016
            </h2>
            <span className={css.price}>$50</span>
          </div>
          <div className={css.info}>
            <span className={css.infoSpan}>Lviv</span>
            <span className={css.infoSpan}>Ukraine</span>
            <span className={css.infoSpan}>Premium Auto Rentals</span>
          </div>
          <div className={css.info}>
            <span className={css.infoSpan}>Suv</span>
            <span className={css.infoSpan}>5 352 km</span>
          </div>
          <Link className={css.link} to='/catalog/:id'>
            Read more
          </Link>
        </li>

        <li className={css.item}>
          <div className={css.inner}>
            <img
              className={css.img}
              src={img}
              alt='Car'
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
              Subaru <span className={css.titleSpan}>Outback</span>, 2016
            </h2>
            <span className={css.price}>$50</span>
          </div>
          <div className={css.info}>
            <span className={css.infoSpan}>Lviv</span>
            <span className={css.infoSpan}>Ukraine</span>
            <span className={css.infoSpan}>Premium Auto Rentals</span>
          </div>
          <div className={css.info}>
            <span className={css.infoSpan}>Suv</span>
            <span className={css.infoSpan}>5 352 km</span>
          </div>
          <Link className={css.link} to='/catalog/:id'>
            Read more
          </Link>
        </li>

        <li className={css.item}>
          <div className={css.inner}>
            <img
              className={css.img}
              src={img}
              alt='Car'
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
              Subaru <span className={css.titleSpan}>Outback</span>, 2016
            </h2>
            <span className={css.price}>$50</span>
          </div>
          <div className={css.info}>
            <span className={css.infoSpan}>Lviv</span>
            <span className={css.infoSpan}>Ukraine</span>
            <span className={css.infoSpan}>Premium Auto Rentals</span>
          </div>
          <div className={css.info}>
            <span className={css.infoSpan}>Suv</span>
            <span className={css.infoSpan}>5 352 km</span>
          </div>
          <Link className={css.link} to='/catalog/:id'>
            Read more
          </Link>
        </li>

        <li className={css.item}>
          <div className={css.inner}>
            <img
              className={css.img}
              src={img}
              alt='Car'
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
              Subaru <span className={css.titleSpan}>Outback</span>, 2016
            </h2>
            <span className={css.price}>$50</span>
          </div>
          <div className={css.info}>
            <span className={css.infoSpan}>Lviv</span>
            <span className={css.infoSpan}>Ukraine</span>
            <span className={css.infoSpan}>Premium Auto Rentals</span>
          </div>
          <div className={css.info}>
            <span className={css.infoSpan}>Suv</span>
            <span className={css.infoSpan}>5 352 km</span>
          </div>
          <Link className={css.link} to='/catalog/:id'>
            Read more
          </Link>
        </li>
      </ul>
      <button className={css.button}>Load more</button>
    </>
  );
};

export default Catalog;
