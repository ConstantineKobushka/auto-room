import { NavLink } from 'react-router-dom';
import clsx from 'clsx';

import css from './Navigation.module.css';

const Navigation = () => {
  const navLink = ({ isActive }) => {
    return clsx(css.link, isActive && css.active);
  };

  return (
    <div className={css.menu}>
      <NavLink className={navLink} to='/'>
        Home
      </NavLink>
      <NavLink className={navLink} to='/catalog'>
        Catalog
      </NavLink>
    </div>
  );
};

export default Navigation;
