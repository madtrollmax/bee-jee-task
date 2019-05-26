import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import {createBrowserHistory} from 'history';
import { combineReducers, createStore, applyMiddleware, compose } from 'redux'
import { connectRouter, routerMiddleware, ConnectedRouter } from 'connected-react-router'
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';

import tasksData from './components/tasks-list/reducer';
import user from './components/auth/reducer';

const history = createBrowserHistory();
const reducers = combineReducers({
    tasksData,
    user,
    router: connectRouter(history)
});

const store = createStore(
    reducers, 
    compose(
        applyMiddleware(routerMiddleware(history)),
        applyMiddleware(thunk)
    )
);

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <App />
        </ConnectedRouter>
    </Provider>, 
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
