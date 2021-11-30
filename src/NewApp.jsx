import { useReducer, useState } from "react";

import './App.css';
import TodoList from "./Components/TodoList";

function NewApp() {

    return (
        <div className="App">
            <NewAppWithState/>
            <NewAppWithReducer/>
            <TodoList/>
        </div>
    )
}

export default NewApp

function NewAppWithState() {
    function increment() {
        setCount(previousCount => previousCount + 1);
    }

    function decrement() {
        setCount(previousCount => previousCount - 1);
    }

    const [count, setCount] = useState(0)
    return (
        <div className="App">
            <h1>Use state</h1>
            <button onClick={decrement}>-</button>
            <span>{ count }</span>
            <button onClick={increment}>+</button>
        </div>
    )
}

const ACTIONS = {
    INCREMENT: 'increment',
    DECREMENT: 'decrement'
}

function myReducer(currentState, action) {
    switch (action.type) {
        case ACTIONS.INCREMENT:
            return {
                count: currentState.count + 1,
            }

        case ACTIONS.DECREMENT:
            return {
                count: currentState.count - 1,
            }
    
        default:
            return currentState;
    }
}

function NewAppWithReducer() {

    const initialState = {
        count: 0
    }

    const [state, dispatch] = useReducer(myReducer, initialState)

    function increment() {
        dispatch({type: ACTIONS.INCREMENT});
    }

    function decrement() {
        dispatch({type: ACTIONS.DECREMENT});
    }

    return (
        <div className="App">
            <h1>Use Reducer</h1>
            <button onClick={decrement}>-</button>
            <span>{ state.count }</span>
            <button onClick={increment}>+</button>
        </div>
    )
}
