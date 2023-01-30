/* eslint-disable fp/no-mutation */
import { CellData } from '../../../constants';
import { pawn, knight, bishop, rook, queen, king } from '../pieces';

export const getStandardPieces = () => {
  const board: CellData[] = Array(8 * 8)
    .fill(0)
    .map((_, index) => ({ index, highlight: false, piece: null }));

  // black pieces
  board[8].piece = pawn(-1);
  board[9].piece = pawn(-1);
  board[10].piece = pawn(-1);
  board[11].piece = pawn(-1);
  board[12].piece = pawn(-1);
  board[13].piece = pawn(-1);
  board[14].piece = pawn(-1);
  board[15].piece = pawn(-1);

  board[1].piece = knight(-1);
  board[6].piece = knight(-1);

  board[2].piece = bishop(-1);
  board[5].piece = bishop(-1);

  board[0].piece = rook(-1);
  board[7].piece = rook(-1);

  board[3].piece = queen(-1);
  board[4].piece = king(-1);

  // white pieces
  board[48].piece = pawn(1);
  board[49].piece = pawn(1);
  board[50].piece = pawn(1);
  board[51].piece = pawn(1);
  board[52].piece = pawn(1);
  board[53].piece = pawn(1);
  board[54].piece = pawn(1);
  board[55].piece = pawn(1);

  board[57].piece = knight(1);
  board[62].piece = knight(1);

  board[58].piece = bishop(1);
  board[61].piece = bishop(1);

  board[56].piece = rook(1);
  board[63].piece = rook(1);

  board[59].piece = queen(1);
  board[60].piece = king(1);

  return board;
};
