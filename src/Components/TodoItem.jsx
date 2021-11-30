import { ACTIONS } from "./TodoList"

function TodoItem({todo, dispatch}) {

    function handleToggle() {
        dispatch({type: ACTIONS.TOGGLE_TODO, payload: todo})
    }

    function handleDelete() {
        dispatch({type: ACTIONS.DELETE_TODO, payload: todo})
    }

    return (
        <div>
            <span style={{
                color: todo.complete
                    ? '#AAA'
                    : '#000'
            }}>{todo.name}</span> 
            <button onClick={handleToggle}>Toggle</button>
            <button onClick={handleDelete}>Delete</button>
        </div>
    )
}

export default TodoItem
