import TextGrid from "overprint/overprint/text-grid";
import Font from "overprint/overprint/font";

import sprites from "./sprites";
import { getSprite } from "./sprites";

import { WIDTH, HEIGHT, FONT_SIZE } from "./constants";

import state from "./state";

const canvas = document.querySelector("#game");
// Create a default text grid from the canvas element
const grid = new TextGrid(canvas, {
  width: WIDTH,
  height: HEIGHT,
  font: Font("Menlo", false, FONT_SIZE)
});

grid.onClick((x, y) => {
  const locId = `${x},${y}`;
  const currentMap = state.maps[state.maps.currentMapId];
  const entities = currentMap.entityLocations[locId] || [];

  console.log("screen", {
    locId,
    x,
    y,
    tile: currentMap.tiles[locId],
    entities: entities.map(id => state.entities[id]),
    inFov: state.maps.fov.fov.includes(locId),
    fovDistance: state.maps.fov.distance[locId]
  });
});

export const renderScreen = () => {
  grid.clear();
  const { currentMapId } = state.maps;
  const currentMap = state.maps[currentMapId];

  const { tiles, tileIds, revealedTileIds = [] } = currentMap;

  // write tiles
  tileIds.forEach(id => {
    grid.writeCell(tiles[id].x, tiles[id].y, sprites[tiles[id].sprite].LIT);
  });

  // Re-render
  grid.render();
};
