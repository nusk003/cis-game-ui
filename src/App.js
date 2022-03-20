import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

const ButtonStyle = { padding: "8px", borderRadius: "8px" };

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);

  const [timerCount, setCount] = useState(10);

  useEffect(() => {
    const timer = setInterval(() => {
      if (timerCount > 0 && loggedIn && gameStarted) {
        setCount(timerCount - 1);
      }
    }, 1000);

    return () => clearInterval(timer);
  });

  const answers = [1, 2, 4, 11];

  return (
    <div
      style={{
        display: "grid",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      {!loggedIn ? (
        <div style={{ width: "500px" }}>
          <h1 style={{ textAlign: "center" }}>Login</h1>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setLoggedIn(true);
            }}
          >
            <div style={{ display: "grid", gridAutoFlow: "row", gap: "16px" }}>
              <input
                style={{ padding: "8px", borderRadius: "8px" }}
                type="email"
                placeholder="Email"
                required
              />
              <input
                style={{ padding: "8px", borderRadius: "8px" }}
                type="password"
                placeholder="Password"
                required
              />
              <button style={ButtonStyle} type="submit">
                Login
              </button>
            </div>
          </form>
        </div>
      ) : gameStarted ? (
        <div>
          <button onClick={() => setGameStarted(false)} style={ButtonStyle}>
            Quit
          </button>
          <h1 style={{ textAlign: "center" }}>00:{timerCount}</h1>
          <h1 style={{ textAlign: "center" }}>Question 1</h1>
          <textarea style={{ width: "500px", height: "250px" }} disabled>
            Write the answer for the question below 1 + 10 = ?
          </textarea>
          <div>
            {answers.map((answer) => (
              <div key={answer} style={{ margin: 8 }}>
                <input type="radio" id={answer} />
                <label for={answer}>{answer}</label>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div>
          <button
            onClick={() => {
              setGameStarted(true);
            }}
            style={ButtonStyle}
          >
            Start Game
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
