import React, { useState, useEffect, useRef } from "react";
import useWordGame from "./hooks/useWordGame";

function App(props) {
  const {
    handleChange,
    text,
    gameRunning,
    textBoxRef,
    timeRemaining,
    resetCount,
    wordCount,
  } = useWordGame();

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
