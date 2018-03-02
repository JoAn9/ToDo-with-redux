import React, { PropTypes } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './store/configureStore';
import User from './components/User';
import HelloPage from './components/HelloPage';
import './styles/styles.css';


render(
  <Provider store={store}>
    <User />
  </Provider>
  , document.getElementById('root')
);