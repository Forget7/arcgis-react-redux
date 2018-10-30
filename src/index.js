import "@dojo/framework/shim/Promise";
import "./config";

import React from "react";
import ReactDOM from "react-dom";
import {Provider} from 'react-redux'
import rootReducers from "./reducers/index"
import finalCreateStore from './store/finalCreateStore.js'

import "./css/main.scss";
import App from "./containers/App";

const addDOMNode = () => {
    const appNode = document.createElement("div");
    appNode.id = "app";
    document.body.appendChild(appNode);
    return appNode;
};
const store = finalCreateStore(rootReducers);
const render = (
    <Provider store={store}>
        <App/>
    </Provider>);

ReactDOM.render(render, addDOMNode());
