# PixiJS game with React UI POC

## Demo

https://react-pixi-poc.netlify.app/

<img width="500" alt="Screenshot" src="https://github.com/TimAstier/pixi-react-poc/assets/8555097/21c58d8b-c013-4a8d-bf98-607fd037b1ec">


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
