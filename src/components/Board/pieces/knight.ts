import { Coordinates, Piece } from "../../../constants";

export const knight = (identity: -1 | 1): Piece => ({
  identity,
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
})