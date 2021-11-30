import './App.css';
import { useReducer, useState } from 'react';
import Todos from './Todos';

const ACTIONS = {
	INCREMENT: 'increment',
	DECREMENT: 'increment'
}



function myReducer(currentState, action) {

	switch (action.type) {
		case ACTIONS.INCREMENT:
			return {
				count: currentState.count + 1
			}

		case ACTIONS.DECREMENT:
			return {
				count: currentState.count - 1
			}

		default:
			return currentState;
	}



}

function App() {

	return (
		<div className="App">
			<AppWithUseState/>
			<AppWithUseReducer/>
			<Todos/>
		</div>
	);
}

export default App;

function AppWithUseState() {

	const [count, setCount] = useState(0);

	function increment() {
		setCount(previousCount => previousCount + 1);
	}

	function decrement() {
		setCount(previousCount => previousCount - 1);
	}

	return <div className="App">
		<h1>Use State</h1>
		<button onClick={decrement}>-</button>
		<span>{count}</span>
		<button onClick={increment}>+</button>
	</div>
}

function AppWithUseReducer() {

	const initialState = {
		count: 0
	}

	const [state, dispatch] = useReducer(myReducer, initialState)

	function increment() {
		dispatch({ type: ACTIONS.INCREMENT });
	}

	function decrement() {
		dispatch({ type: ACTIONS.DECREMENT });
	}


	return (
		<div className="App">
			<h1>Use Reducer</h1>
			<button onClick={decrement}>-</button>
			<span>{state.count}</span>
			<button onClick={increment}>+</button>
		</div>
	);
}
