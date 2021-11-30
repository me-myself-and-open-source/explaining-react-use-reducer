import { useReducer, useState } from "react";
import Todo from "./Todo";

export const ACTIONS = {
    ADD_TODO: 'todos.add',
    TOGGLE_TODO: 'todos.toggle',
    DELETE_TODO: 'todos.delete'
}

function todosReducer(todos, action) {
    switch (action.type) {
        
        case ACTIONS.ADD_TODO:
            return [...todos, newTodo(action.paylod.name)]

        case ACTIONS.TOGGLE_TODO:
            return todos.map(todo => {
                if (todo.id === action.paylod.id) {
                    return {...todo, complete: !todo.complete}
                }
                return todo
            })
        
        case ACTIONS.DELETE_TODO:
            return todos.filter(todo => todo.id !== action.paylod.id)

        default:
            return todos;
    }
}

function newTodo(name) {
    return {
        id: Date.now(),
        name: name,
        complete: false
    }
}


function Todos() {

    const initialState = [];

    const [todos, dispatch] = useReducer(todosReducer, initialState);
    const [name, setName] = useState('')

    function handleSubmit(event) {
        event.preventDefault()
        dispatch({ type: ACTIONS.ADD_TODO, paylod: { name: name } })
        setName('')
    }

    console.log(todos);

    return (
        <div className="App">
            <h1>Todos List</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" value={name} onChange={(event) => setName(event.target.value)} />
            </form>
            {todos.map(todo => <Todo key={todo.id} todo={todo} dispatch={dispatch} />)}
        </div>
    )
}

export default Todos
