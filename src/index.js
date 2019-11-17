import state from "./state";
import { init } from "./game";
import { WIDTH, HEIGHT } from "./constants";
import { renderScreen } from "./screen";

init();

let action;
// let state = {
//   play: true
// };

function input(key) {
  switch (key) {
    case "p":
      action = "PAUSE";
      break;
  }
}

document.addEventListener("keydown", ev => input(ev.key));

function update() {
  if (action) {
    state.play = !state.play;
    action = null;
  }
}

function gameLoop() {
  update();
  renderScreen(WIDTH, HEIGHT);
  requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);
