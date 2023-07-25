import React, { useRef } from "react";
import { Stage } from "@inlet/react-pixi";
import * as PIXI from "pixi.js";

const Game = ({ uiEvent, setUiState, resetUiEvent }) => {
  const pixiAppRef = useRef(null);

  // Initialize PixiJS and set up the game logic
  const setupPixi = (app) => {
    pixiAppRef.current = app;

    globalThis.__PIXI_APP__ = app; // eslint-disable-line

    // Add your PixiJS game logic here

    var gr = new PIXI.Graphics();
    gr.beginFill(0xffffff);
    gr.lineStyle(0);
    gr.drawCircle(30, 30, 30);
    gr.endFill();

    var texture = app.renderer.generateTexture(gr);
    const circle = new PIXI.Sprite(texture);

    circle.interactive = true;

    circle.on("click", () => {
      circle.tint = circle.tint === 0x00ff00 ? 0xffffff : 0x00ff00;
      console.log("Click from the circle!");
    });

    circle.addChild(circle);

    // Add the sprite to the stage
    app.stage.addChild(circle);

    const tick = () => {
      circle.position.x = circle.position.x + app.ticker.speed;
      setUiState({ x: circle.position.x, y: circle.position.y });
    };

    let state;
    const play = tick;
    state = play;

    const gameLoop = state;

    app.ticker.maxFPS = 60;
    app.ticker.add(gameLoop);

    // First resize
    window.dispatchEvent(new Event("resize"));
  };

  // Listen for UiEvents (Kinda like a redux reducer)
  React.useEffect(() => {
    const handleUiEvents = () => {
      if (!uiEvent) {
        return;
      }

      const app = pixiAppRef.current;
      const circle = app.stage.children[0]; // Container, circle

      console.log(uiEvent);

      if (uiEvent === "CLICKED_MOVE_FORWARD") {
        circle.x = circle.x + 100;
      } else if (uiEvent === "CLICKED_MOVE_DOWN") {
        circle.y = circle.y + 100;
      } else if (uiEvent === "CLICKED_RESET") {
        circle.x = 0;
        circle.y = 0;
      }
      resetUiEvent();
    };
    handleUiEvents();
  }, [uiEvent, resetUiEvent]);

  return (
    <Stage
      options={{
        resizeTo: window,
        resolution: devicePixelRatio,
      }}
      onMount={setupPixi}
    >
      {/* Your PixiJS components will be rendered here */}
    </Stage>
  );
};

export default Game;
