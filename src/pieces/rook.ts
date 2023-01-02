import { Coordinates, Piece } from "../App";

export const rook: Piece = {
  label: 'R',
  move: (location: Coordinates) => {
    const ret = [];

    for (let i = 1; i <= 8; i++) {
      ret.push({x: location.x + i, y: location.y + 0});
      ret.push({x: location.x - i, y: location.y + 0});
      
      ret.push({x: location.x + 0, y: location.y + i});
      ret.push({x: location.x + 0, y: location.y - i});
    }
    
    return ret;
  },
}