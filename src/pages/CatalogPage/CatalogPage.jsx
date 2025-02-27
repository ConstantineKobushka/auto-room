import Container from '../../components/Container/Container';
import SearchForm from '../../components/SearchForm/SearchForm';
import Catalog from '../../components/Catalog/Catalog';

import css from './CatalogPage.module.css';

const CatalogPage = () => {
  return (
    <section className={css.section}>
      <Container>
        <h1 className={css.visuallyHidden}>Find your perfect rental car</h1>
        <SearchForm />
        <Catalog />
      </Container>
    </section>
  );
};

export default CatalogPage;
