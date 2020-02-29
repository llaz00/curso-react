import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {action, createStore, StoreProvider} from "easy-peasy";
import SwPeopleApi from './services/sw-people';

const store = createStore({
    people: {
        items: [],
        getPeople: action(async (state, payload) => {
            const response = await SwPeopleApi.get('/people');
            state.items = response.data.results;
        })
    }
});

ReactDOM.render(<StoreProvider store={store}><App /></StoreProvider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
