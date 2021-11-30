import { useReducer, useState } from "react"
import TodoItem from "./TodoItem";

export const ACTIONS = {
    CREATE_TODO: 'todos.create',
    TOGGLE_TODO: 'todos.toggle',
    DELETE_TODO: 'todos.delete'
}

function todoReducer(todos, action) {
    switch (action.type) {
        case ACTIONS.CREATE_TODO:
            return [...todos, createTodo(action.payload.name)]

        case ACTIONS.TOGGLE_TODO:
            return todos.map(todo => {
                if (todo.id === action.payload.id) {
                    return {...todo, complete: !action.payload.complete}
                }
                return todo;
            })

        case ACTIONS.DELETE_TODO:
            return todos.filter(todo => todo.id !== action.payload.id)
    
        default:
            return todos;
    }
}

function createTodo(name) {
    return {
        id: Date.now(),
        name: name,
        complete: false
    }
}

function TodoList() {

    const initialState = [];

    const [todos, dispatch] = useReducer(todoReducer, initialState)

    const [txtName, setTxtName] = useState('')

    function handleSubmit(event) {
        event.preventDefault()
        dispatch({type: ACTIONS.CREATE_TODO, payload: {name: txtName}})
        setTxtName('')
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" value={txtName} onChange={(event) => setTxtName(event.target.value)} />
            </form>

            {
                todos.map(todo => <TodoItem key={todo.id} todo={todo} dispatch={dispatch} />)
            }
            
        </div>
    )
}

export default TodoList
