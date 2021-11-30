import { ACTIONS } from "./Todos"

function Todo({todo, dispatch}) {
    return (
        <div>
            <span style={
                {
                    color: todo.complete
                        ? '#AAA'
                        : '#000'
                }
            } >{todo.name}</span>
            <button onClick={() => dispatch({type: ACTIONS.TOGGLE_TODO, paylod: {id: todo.id}})}>Toggle</button>
            <button onClick={() => dispatch({type: ACTIONS.DELETE_TODO, paylod: {id:todo.id}})}>Delete</button>
        </div>
    )
}

export default Todo
