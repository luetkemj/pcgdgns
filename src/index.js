import state from "./state";
import { setMap, setCurrentMapId } from "./state/setters/map-setters";
// import { init } from "./game";
import { generateDungeon } from "./lib/dungeon";
import { WIDTH, HEIGHT } from "./constants";
import { renderScreen } from "./screen";

const sleep = millis => new Promise(resolve => setTimeout(resolve, millis)); // https://stackoverflow.com/a/951057/2009581

// generate map
const dungeon = generateDungeon({
  x: 0,
  y: 0,
  width: WIDTH,
  height: HEIGHT,
  maxRoomCount: 30,
  minRoomSize: 6,
  maxRoomSize: 12,
  callback: async data => {
    setMap({ ...data, tileIds: Object.keys(data.tiles), id: 0 });
    await sleep(300);
    state.play = !state.play;
  }
});

setCurrentMapId(0);

let action;

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
