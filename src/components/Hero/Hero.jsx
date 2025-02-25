import { Link } from 'react-router-dom';

import css from './Hero.module.css';

const Hero = () => {
  return (
    <section className={css.section}>
      <h1 className={css.title}>Find your perfect rental car</h1>
      <p className={css.text}>
        Reliable and budget-friendly rentals for any journey
      </p>
      <Link className={css.link} to='/catalog'>
        View Catalog
      </Link>
    </section>
  );
};

export default Hero;
