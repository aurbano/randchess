import { Coordinates, Piece } from "../App";

export const rook = (identity: -1 | 1): Piece => ({
  identity,
  label: 'R',
  move: (location: Coordinates) => {
    const ret = [];

    for (let i = 1; i <= 7; i++) {
      ret.push({x: location.x + i, y: location.y + 0});
      ret.push({x: location.x - i, y: location.y + 0});
      
      ret.push({x: location.x + 0, y: location.y + i});
      ret.push({x: location.x + 0, y: location.y - i});
    }
    
    return ret;
  },
});