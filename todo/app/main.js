import React from "react";
import ReactDom from "react-dom";
import {createSrore,applyMiddleware} from "redux";
import {provider} from "react-redux";
import logger from "redux-logger";
//引入app组建
import App from "./App.js";
//引入reducer
import reducer from "./reducers/index.js";
//创建store
const store = createStore(reducer,applyMiddleware(logger));
ReactDOM.render(
    <div>
        <Provider store={store}>
            <App></App>
        </Provider>

    </div>
    ,
    document.getElementById("app-container")
);
