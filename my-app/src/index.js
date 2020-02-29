import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore, action, StoreProvider} from "easy-peasy";


const store = createStore({
    todos: {
        items: [{text: 'Create store'}, {text: 'Wrap application'}, {text: 'Use store'}],
        add: action((state, payload) => {
            state.items.push(payload);
        }),
        delete: action((state, payload) => {
            state.items = state.items.filter((item, j) => j !== payload);
        }),
        deleteAll: action((state, payload) => {
            state.items = [];
        })
    }
});

ReactDOM.render(
    <StoreProvider store={store}>
        <App />
    </StoreProvider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
