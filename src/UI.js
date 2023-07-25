import React from "react";

// Use smarter CSS and reusable components in real use-case

const sharedStyle = {
  width: 200,
  color: "white",
  position: "absolute",
  backgroundColor: "blue",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: 20,
  textAlign: "center",
};

const UI = ({ uiState, triggers }) => {
  const [allowClickThrough, setAllowClickThrough] = React.useState(false);

  React.useEffect(() => {
    document.addEventListener("keydown", function (event) {
      if (event.key === "p") {
        setAllowClickThrough(true);
      }
    });

    document.addEventListener("keyup", function (event) {
      if (event.key === "p") {
        setAllowClickThrough(false);
      }
    });
  }, []);

  return (
    <>
      <div
        style={{
          ...sharedStyle,
          top: 0,
          right: 0,
          opacity: allowClickThrough ? 0.5 : 1,
          pointerEvents: allowClickThrough ? "none" : "auto",
        }}
      >
        <h2>Position</h2>
        <div>{Math.round(uiState.x)}</div>
        <div>{Math.round(uiState.y)}</div>
      </div>
      <div
        style={{
          ...sharedStyle,
          bottom: 150,
          left: 0,
        }}
      >
        <h2>Press "P" to allow click through</h2>
      </div>
      <div
        style={{
          ...sharedStyle,
          bottom: 0,
          left: 0,
        }}
      >
        <h2>Reset</h2>
        <button onClick={triggers.reset}>Click</button>
      </div>
      <div
        style={{
          ...sharedStyle,
          bottom: 150,
          right: 0,
        }}
      >
        <h2>Move forward</h2>
        <button onClick={triggers.moveForward}>Click</button>
      </div>
      <div
        style={{
          ...sharedStyle,
          bottom: 0,
          right: 0,
        }}
      >
        <h2>Move down</h2>
        <button onClick={triggers.moveDown}>Click</button>
      </div>
    </>
  );
};

export default UI;
