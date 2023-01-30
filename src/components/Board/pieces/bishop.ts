import { Piece } from '../../../constants';

export const bishop = (identity: -1 | 1): Piece => ({
  identity,
  label: 'B',
  move: (location, board) => {
    const ret = [];

    // eslint-disable-next-line fp/no-mutation
    for (let i = 1; i <= board.length; i++) {
      ret.push({ x: location.x + i, y: location.y + i });
      ret.push({ x: location.x - i, y: location.y + i });
      ret.push({ x: location.x + i, y: location.y - i });
      ret.push({ x: location.x - i, y: location.y - i });
    }

    return ret;
  },
});
