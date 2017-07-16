import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'
import './static/css/common.less';
import Router from "./router/router";

const store = configureStore();

render(
    <Provider store={store}>
        <Router />
    </Provider>,
    document.getElementById('root')
)
