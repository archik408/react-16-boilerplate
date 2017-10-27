import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { store } from './store';
import './index.css';

import { Routes } from './services/routes';
import configureAxios from './services/axios';
import registerServiceWorker from './services/registerServiceWorker';
import fakeBackend from './services/backend/mockup';

/**
 * Bootstrap React Application
 * @returns {void}
 */
function bootstrap() {
    ReactDOM.render(
        <Provider store={store}>
            <Router>
                <Routes />
            </Router>
        </Provider>,
        document.getElementById('root')
    );
}

configureAxios();
bootstrap();
registerServiceWorker();
fakeBackend();


