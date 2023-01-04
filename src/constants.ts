export const HEIGHT = 60;

export type Coordinates = {
  x: number;
  y: number;
};

export type Piece = {
  label: string;
  identity: -1 | 1;
  move: (location: Coordinates) => Coordinates[];
};

export type CellData = {
  index: number;
  highlight: boolean;
  piece: Piece | null;
  selected?: boolean;
};