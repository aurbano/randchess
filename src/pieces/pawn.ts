import { Coordinates, Piece } from "../App";

export const pawn: Piece = {
  label: 'P',
  move: (location: Coordinates) => {
    return [
      {x: location.x, y: location.y - 1},
    ];
  },
}