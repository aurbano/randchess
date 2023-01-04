import { Coordinates, Piece } from "../../../constants";

export const pawn = (identity: -1 | 1): Piece => ({
  identity,
  label: 'P',
  move: (location: Coordinates) => {
    if (location.y == 1 && identity == -1 || location.y == 6 && identity == 1) {
      return [
        {x: location.x, y: location.y - identity * 1},
        {x: location.x, y: location.y - identity * 2},
      ];
    }
    return [
      {x: location.x, y: location.y - identity * 1},
    ];
  },
})