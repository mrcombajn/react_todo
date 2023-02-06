import React, {useEffect, useState} from "react";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min"

const LOCAL_STORAGE_KEY = "react-todos"

function App() {
    const [todos, setTodos] = useState([])

    useEffect(() => {
        const storageTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
        if(storageTodos) {
            setTodos(storageTodos)
        }
    }, [])

    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
        }, [todos])

    function addTodo(todo) {
        setTodos([todo, ...todos])
    }

    function toggleComplete(id) {
        setTodos(
            todos.map(todo => {
                if(todo.id === id) {
                    return {
                        ...todo,
                        completed: !todo.completed
                    }
                }
                return todo
            })

        )
    }

    function deleteTodo(id) {
        setTodos(todos.filter(todo => todo.id !== id))
    }

    return (
        <div className="container text-center pt-5 rounded">
            <TodoForm className="col-lg-3" addTodo={addTodo}/>
            <TodoList className="col-lg-3 text-center" todos={todos} toggleComplete={toggleComplete} removeTodo={deleteTodo}/>
        </div>
    );
}

export default App;
