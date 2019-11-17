import state from "./state";
import { setMap, setCurrentMapId } from "./state/setters/map-setters";

import { generateDungeon } from "./lib/dungeon";

import { WIDTH, HEIGHT } from "./constants";

export const init = () => {
  // generate map
  const dungeon = generateDungeon({
    x: 0,
    y: 0,
    width: WIDTH,
    height: HEIGHT,
    maxRoomCount: 30,
    minRoomSize: 6,
    maxRoomSize: 12
  });

  // add map to state
  setMap({ ...dungeon, tileIds: Object.keys(dungeon.tiles), id: 0 });
  setCurrentMapId(0);
};
