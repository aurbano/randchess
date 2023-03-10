export const HEIGHT = 60;

export type Coordinates = {
  x: number;
  y: number;
};

export type Piece = {
  label: string;
  identity: -1 | 1;
  canJump?: boolean;
  move: (location: Coordinates, board: CellData[]) => Coordinates[];
};

export type CellData = {
  index: number;
  piece: Piece | null;
  selected?: boolean;
};
