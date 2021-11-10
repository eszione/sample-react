import React from 'react';
import { render } from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { store } from './core/store/store';
import { BrowserRouter } from 'react-router-dom';
import RouterWrapper from './core/routing/routes-wrapper';
import Footer from './core/components/footer/footer';
import Header from './core/components/header/header';
import Main from './core/components/main/main';

render(
    <Provider store={store}>
      <React.StrictMode>
          <Header />
          <Main>
            <BrowserRouter>
            <RouterWrapper />
            </BrowserRouter>
          </Main>
          <Footer />
      </React.StrictMode>
    </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
