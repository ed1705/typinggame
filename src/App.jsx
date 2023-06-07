import React, { useState, useEffect, useRef } from "react";

function App() {
  const initialTimeRemaining = 5;
  const [text, setText] = useState("");
  const [timeRemaining, setTimeRemaining] = useState(1);
  const [gameRunning, setGameRunning] = useState(false);
  const [wordCount, setWordCount] = useState(0);
  const textBoxRef = useRef(null);

  useEffect(() => {
    if (gameRunning && timeRemaining > 0) {
      setTimeout(() => {
        setTimeRemaining((time) => time - 1);
      }, 1000);
    } else if (timeRemaining === 0) {
      setGameRunning(false);
      setWordCount(calculateWordCount(text));
    }
  }, [timeRemaining, gameRunning]);

  const resetCount = () => {
    setTimeRemaining(initialTimeRemaining);
    setGameRunning((prev) => !prev);
    setText("");
    textBoxRef.current.disabled = false;
    textBoxRef.current.focus();
  };

  function handleOnClick() {
    setGameRunning((prev) => !prev);
  }

  function handleChange(e) {
    const { value } = e.target;
    setText(value);
  }

  function calculateWordCount(text) {
    const wordsArr = text.trim().split(" ");
    return wordsArr.filter((word) => word !== "").length;
  }

  return (
    <div>
      <h1>How fast do you type?</h1>
      <textarea
        onChange={handleChange}
        value={text}
        disabled={!gameRunning}
        ref={textBoxRef}
      />
      <h4>Time remaining: {timeRemaining}</h4>

      <button onClick={resetCount} disabled={gameRunning}>
        Start
      </button>
      <h1>Word count: {wordCount}</h1>
    </div>
  );
}

export default App;
