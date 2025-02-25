import Container from '../Container/Container';
import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';

import css from './Header.module.css';

const Header = () => {
  return (
    <header className={css.header}>
      <Container>
        <nav className={css.nav}>
          <Logo />
          <Navigation />
        </nav>
      </Container>
    </header>
  );
};

export default Header;
