import React, {useState} from "react";
import * as uuid from "uuid";

function TodoForm({addTodo}) {
    const [todo, setTodo] = useState({
        id: "",
        task: "",
        completed: false
    })

    function handleTaskInputChange(e) {
        setTodo({ ...todo, task: e.target.value})
    }

    function handleSubmit(e) {
        e.preventDefault()
        if(todo.task.trim()) {
            addTodo({...todo, id: uuid.v4()})
            setTodo({...todo, todo: ""})
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                name="task"
                onChange={handleTaskInputChange}
                value={todo.task}
            />
            <button type="submit">Dodaj zadanie</button>
        </form>
    );
}

export default TodoForm