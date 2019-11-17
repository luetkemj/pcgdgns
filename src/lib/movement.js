import { sample } from "lodash";

const CARDINAL = [
  { x: -1, y: 0 },
  { x: 1, y: 0 },
  { x: 0, y: -1 },
  { x: 0, y: 1 }
];

export const drunkenWalk = (startX, startY) => {
  const direction = sample(CARDINAL);
  const x = startX + direction.x;
  const y = startY + direction.y;
  return { x, y };
};
