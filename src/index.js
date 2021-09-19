import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {StateProvider} from './context/StateProvider';
import reducer,{ intialState } from './context/reducer';
import AlertTemplate from 'react-alert-template-basic'
import {Provider as AlertProvider} from 'react-alert'

const options = {
  position: 'bottom center',
  timeout: 4000,
  offset: '30px',
  transition: 'fade'
}
ReactDOM.render(
  <React.StrictMode>
    <AlertProvider template={AlertTemplate} {...options}>
    <StateProvider intialState={intialState} reducer={reducer}>
    <App />
    </StateProvider>
    </AlertProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

