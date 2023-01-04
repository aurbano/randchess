import { Coordinates, Piece } from "../../../constants";

export const pawn = (identity: -1 | 1): Piece => ({
  identity,
  label: 'P',
  move: (location: Coordinates) => {
    return [
      {x: location.x, y: location.y - identity * 1},
    ];
  },
})