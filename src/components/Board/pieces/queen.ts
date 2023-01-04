import { Coordinates, Piece } from "../../../constants";

export const queen = (identity: -1 | 1): Piece => ({
  identity,
  label: 'Q',
  move: (location, board) => {
    const ret = [];

    for (let i = 1; i <= 8; i++) {
      ret.push({x: location.x + i, y: location.y + i});
      ret.push({x: location.x + i, y: location.y - i});
      ret.push({x: location.x - i, y: location.y + i});
      ret.push({x: location.x - i, y: location.y - i});
      ret.push({x: location.x + i, y: location.y + 0});
      ret.push({x: location.x + 0, y: location.y + i});
      ret.push({x: location.x - i, y: location.y + 0});
      ret.push({x: location.x + 0, y: location.y - i});
    }
    
    return ret;
  },
})