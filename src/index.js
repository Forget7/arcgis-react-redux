import "@dojo/framework/shim/Promise";
import "./config";

import React from "react";
import ReactDOM from "react-dom";
import {Provider} from 'react-redux'
import tocReducer from './reducers/tocReducer'
import {applyMiddleware,createStore} from 'redux'
import ReduxThunk from 'redux-thunk'

import "./css/main.scss";
import App from "./containers/App";

const addDOMNode = () => {
    const appNode = document.createElement("div");
    appNode.id = "app";
    document.body.appendChild(appNode);
    return appNode;
};
const store = createStore(tocReducer,applyMiddleware(ReduxThunk))
const render = (
    <Provider store={store}>
        <App/>
    </Provider>);

ReactDOM.render(render, addDOMNode());
