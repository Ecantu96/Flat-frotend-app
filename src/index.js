import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import { store } from './_hanzen';
//import './index.css';
import AppRoutes from './routes/AppRoutes';
import registerServiceWorker from './serviceWorker';

// setup fake backend
//import { configureFakeBackend } from './helpers/fake_backend';
//configureFakeBackend();

const app=(
    <Provider store={store}><AppRoutes/></Provider>

);

ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
registerServiceWorker();
