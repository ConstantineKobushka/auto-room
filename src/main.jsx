import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import App from './components/App/App.jsx';

// import { persistor, store } from './redux/store.js';
import { store } from './redux/store.js';

import '../node_modules/modern-normalize/modern-normalize.css';
import './index.css';

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
  // </StrictMode>
);

{
  /* <PersistGate persistor={persistor}>
  <BrowserRouter>
    <App />
  </BrowserRouter>
</PersistGate>; */
}
