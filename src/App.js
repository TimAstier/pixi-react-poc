import React from "react";
import Game from "./Game";
import UI from "./UI";

const App = () => {
  const [uiState, setUiState] = React.useState({ x: 0, y: 0 });
  const [uiEvent, setUiEvent] = React.useState("");

  // Functions to handle clicks from the React UI
  const moveForward = () => setUiEvent("CLICKED_MOVE_FORWARD");
  const moveDown = () => setUiEvent("CLICKED_MOVE_DOWN");
  const reset = () => setUiEvent("CLICKED_RESET");

  const triggers = {
    moveForward,
    moveDown,
    reset,
  };

  return (
    <>
      <Game
        uiEvent={uiEvent}
        setUiState={setUiState}
        resetUiEvent={() => setUiEvent("")}
      />
      <UI uiState={uiState} triggers={triggers} />
    </>
  );
};

export default App;
