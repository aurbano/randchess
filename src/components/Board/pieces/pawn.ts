import { Piece } from '../../../constants';
import { coord2idx } from '../../../util/coord2idx';

export const pawn = (identity: -1 | 1): Piece => ({
  identity,
  label: 'P',
  move: (location, board) => {
    const ret = [{ x: location.x, y: location.y - identity * 1 }];

    // allow pawn to move 2 spaces if it is in its starting position
    if ((location.y === 1 && identity === -1) || (location.y === 6 && identity === 1)) {
      ret.push({ x: location.x, y: location.y - identity * 2 });
    }

    // allow to move diagonally if there's an enemy piece there
    const leftDiag = { x: location.x - 1, y: location.y - identity * 1 };
    if (
      board[coord2idx(leftDiag)].piece &&
      board[coord2idx(leftDiag)].piece?.identity !== identity
    ) {
      ret.push(leftDiag);
    }

    const rightDiag = { x: location.x + 1, y: location.y - identity * 1 };
    if (
      board[coord2idx(rightDiag)].piece &&
      board[coord2idx(rightDiag)].piece?.identity !== identity
    ) {
      ret.push(rightDiag);
    }

    return ret;
  },
});
