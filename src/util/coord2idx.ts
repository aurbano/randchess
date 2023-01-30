import { Coordinates } from '../constants';

export const coord2idx = (coord: Coordinates): number => {
  return coord.y * 8 + coord.x;
};
