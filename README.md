# PixiJS game with React UI POC

## Demo

https://react-pixi-poc.netlify.app/

<img width="500" alt="Screenshot 2023-07-25 at 15 30 29" src="https://github.com/TimAstier/pixi-react-poc/assets/8555097/475c2c72-66ff-45cf-abd4-6b976a43c57e">

## Motivation

- PixiJS is great for rendering things like games.
- UI is better done with React.

## Features

- PixiJS canvas set to full screen on window load
- PixiJS canvas resizes on window resize
- React UI (responsiveness via css)
- UI can display game state and trigger UI events
- PixiJS game listens to UI events and perform game state change
- New UI state is sent back to the UI
- It's possible to trigger Pixi interaction through the React UI with `pointerEvents: "none"`.  
  For example, try clicking the circle through the "Position" UI.
