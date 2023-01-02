import { Coordinates, Piece } from "../App";

export const knight: Piece = {
  label: 'K',
  move: (location: Coordinates) => {
    return [
      {x: location.x + 2, y: location.y + 1},
      {x: location.x + 2, y: location.y - 1},
      {x: location.x - 2, y: location.y + 1},
      {x: location.x - 2, y: location.y - 1},
      {x: location.x + 1, y: location.y + 2},
      {x: location.x + 1, y: location.y - 2},
      {x: location.x - 1, y: location.y + 2},
      {x: location.x - 1, y: location.y - 2},
    ];
  },
}