import Container from '../../components/Container/Container';
import SearchForm from '../../components/SearchForm/SearchForm';
import CarList from '../../components/CarsList/CarsList';

import css from './CatalogPage.module.css';

const CatalogPage = () => {
  return (
    <section className={css.section}>
      <Container>
        <h1 className={css.visuallyHidden}>Find your perfect rental car</h1>
        <SearchForm />
        <CarList />
      </Container>
    </section>
  );
};

export default CatalogPage;
