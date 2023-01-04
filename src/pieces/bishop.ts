import { Coordinates, Piece } from "../App";

export const bishop = (identity: -1 | 1): Piece => ({
  identity,
  label: 'B',
  move: (location: Coordinates) => {
    const ret = [];

    for (let i = 1; i <= 8; i++) {
      ret.push({x: location.x + i, y: location.y + i});
      ret.push({x: location.x - i, y: location.y + i});
      ret.push({x: location.x + i, y: location.y - i});
      ret.push({x: location.x - i, y: location.y - i});
    }

    return ret;
  },
})