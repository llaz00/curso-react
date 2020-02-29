import * as React from "react";
import './TodoItem.css';
import Boton from "./Boton";
import {useStoreActions} from "easy-peasy";

function TodoItem(props) {
    const delTodo = useStoreActions(state => state.todos.delete);

    return (
        <div className="todo-item">
            <span>{props.text} </span>
            <Boton onClick={() => delTodo(props.keyTodo)} tipo={props.tipoClase} label="🗑"/>
        </div>
    )
}

export default TodoItem;
