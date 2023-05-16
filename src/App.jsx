import "./App.css";
import { useReducer } from "react";

const initial_value = { count: 0 };

const reducer = (state, action) => {
  switch (action.type) {
    case "decrement":
      return { count: state.count - 1 };
    case "increment":
      return { count: state.count + 1 };
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, initial_value);

  return (
    <div className="App">
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
      count : {state.count}
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
    </div>
  );
}

export default App;
