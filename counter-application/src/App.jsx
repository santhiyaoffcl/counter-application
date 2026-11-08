
import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prev) => prev + 1);
  };

  const decrement = () => {
    if (count > 0) {
      setCount((prev) => prev - 1);
    }
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div className="container">
      <div className="counter-card">
        <h1>React Counter App</h1>

        <p className="subtitle">
          Manage your count with React useState
        </p>

        <div className="count-display">
          {count}
        </div>

        {count === 0 ? (
          <p className="message">
            Minimum limit reached!
          </p>
        ) : (
          <p className="success-message">
            Counter is running!
          </p>
        )}

        <div className="button-group">
          <button className="increment" onClick={increment}>
            + Increment
          </button>

          <button
            className="decrement"
            onClick={decrement}
            disabled={count === 0}
          >
            - Decrement
          </button>

          <button className="reset" onClick={reset}>
            Reset
          </button>
        </div>

        <p className="footer">
          Built with React useState ❤️
        </p>
      </div>
    </div>
  );
}

export default App;
