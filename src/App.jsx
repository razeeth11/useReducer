import "./App.css";
import { useReducer } from "react";

const initial_value = { count: 0 , color : ""};

const reducer = (state, action) => {
  switch (action.type) {
    case "decrement":
      return { ...state , count: state.count > 0 ? state.count - 1 : state.count };
    case "increment":
      return { ...state , count: state.count + 1 };
    case 'reset':
      return { ...state , count: action.payload };
      case 'update color':
        return { count : state.count , color : state.color = action.payload }
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, initial_value);
  const style = {
    background : state.color
  }

  return (
    <div className="App">
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
      count : {state.count}
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <button onClick={() => dispatch({ type: 'reset' , payload : 0 })}>0</button>
      <button onClick={() => dispatch({ type: 'reset' , payload : 100 })}>100</button>
      <input style={style} type="text" onChange={(ev)=> dispatch({type : "update color" , payload : ev.target.value})}/>
    </div>
  );
}

export default App;
