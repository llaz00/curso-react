import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Boton from './components/Boton';
import TodoItem from "./components/TodoItem";
import {useStoreActions, useStoreState} from "easy-peasy";

function App(props) {
    const todos = useStoreState(state => state.todos.items);
    const addTodo = useStoreActions(state => state.todos.add);
    const delAllTodos = useStoreActions(state => state.todos.deleteAll);

    const [inputText, setInputText] = useState('');

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>
                    Hola <code>src/App.js</code> and save to reload.
                </p>

                <input type="text" value={inputText}
                       onChange={(event) => setInputText(event.target.value)}/>
                <Boton label="Añadir" tipo="add" onClick={() => addTodo({text: inputText})}/>
                <Boton label="Limpiar todo" onClick={() => delAllTodos()}/>

                {
                    todos.map((todo, index) => {
                        return (
                            <TodoItem key={index} keyTodo={index} text={todo.text} tipoClase={'borrar'}/>
                        );
                    })
                }

            </header>
        </div>
    );
}

export default App;
