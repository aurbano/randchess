import { Coordinates, Piece } from "../App";

export const king = (identity: -1 | 1): Piece => ({
  identity,
  label: '+',
  move: (location: Coordinates) => {
    return [
      {x: location.x + 1, y: location.y + 1},
      {x: location.x + 1, y: location.y - 1},
      {x: location.x - 1, y: location.y + 1},
      {x: location.x - 1, y: location.y - 1},
      {x: location.x + 1, y: location.y + 0},
      {x: location.x - 1, y: location.y + 0},
      {x: location.x + 0, y: location.y + 1},
      {x: location.x + 0, y: location.y - 1},
    ];
  },
})