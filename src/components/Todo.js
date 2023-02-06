import React from "react";

function Todo({todo, toggleComplete, deleteTodo}) {
    function handleCheckboxClick() {
        toggleComplete(todo.id)
    }

    function handleRemoveClick() {
        deleteTodo(todo.id)
    }

    return(
        <div className="pt-1 container">
            <input className="d-inline" type="checkbox" onClick={handleCheckboxClick}/>
            <li className="d-inline" style={{
                color: "black",
                textDecoration: todo.completed ? "line-though" : "none",
            }}>{todo.task}</li>
            <button className="btn btn-danger d-inline" onClick={handleRemoveClick}>X</button>
        </div>
    )
}

export default Todo