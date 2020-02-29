import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {useStoreActions, useStoreState} from "easy-peasy";

function App() {
  const people = useStoreState(state => state.people.items);
  const getPeople = useStoreActions(actions => actions.people.getPeople);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button onClick={() => getPeople()}>Cargar</button>
        <ul>
          {
            people.map(pj => <li>{pj.name}</li>)
          }
        </ul>
      </header>
    </div>
  );
}

export default App;
