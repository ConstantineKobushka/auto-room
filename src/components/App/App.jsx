import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

const HomePage = lazy(() => import('../../pages/HomePage/HomePage.jsx'));
const AutoPage = lazy(() => import('../../pages/AutoPage/AutoPage.jsx'));
const CatalogPage = lazy(() =>
  import('../../pages/CatalogPage/CatalogPage.jsx')
);
const NotFoundPage = lazy(() =>
  import('../../pages/NotFoundPage/NotFoundPage.jsx')
);

import Layout from '../Layout/Layout.jsx';

import './App.module.css';

function App() {
  return (
    <Layout>
      <Suspense>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/catalog' element={<CatalogPage />} />
          <Route path='/catalog/:id' element={<AutoPage />} />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </Layout>
  );
}

export default App;
