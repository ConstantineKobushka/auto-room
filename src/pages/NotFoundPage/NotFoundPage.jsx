import css from './NotFoundPage.module.css';

const NotFoundPage = () => {
  return (
    <section className={css.section}>
      <picture>
        <source
          media='(max-width: 1440px)'
          srcSet='/not-found-page/not-found-page-bg.jpg 1x, /not-found-page/not-found-page-bg@2x.jpg 2x'
          type='image/jpg'
        />
        <img src='/not-found-page/not-found-page-bg.jpg' alt='Page not found' />
      </picture>
    </section>
  );
};

export default NotFoundPage;
