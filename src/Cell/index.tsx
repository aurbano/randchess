import { Coordinates, Piece } from "../App";

export type CellData = {
  index: number;
  highlight: boolean;
  piece: Piece | null;
  selected?: boolean;
};

export type CellProps = CellData & {
  onHover: (coordinates: Coordinates[]) => void;
  onClick: () => void;
};

export const Cell = ({index, highlight, piece, onHover, selected, onClick}: CellProps) => {
  const onCellHover = () => {
    if (!piece) {
      onHover([]);
      return;
    }

    const x = index % 8;
    const y = Math.floor(index / 8);

    onHover(piece.move({x, y}));
  };

  const onCellClick = () => {
    onClick();
  };

  return <div
    style={{
      position: 'relative',
      display: 'inline-block', width: '50px', height: '50px', outline: 'solid 1px #ccc',
      background: selected ? 'green' : highlight ? 'blue' : 'transparent',
      overflow: 'hidden', margin: 0, padding: 0
    }}
    onMouseOver={onCellHover}
    onMouseDown={onCellClick}
  >
    <span style={{position: 'absolute', top: '-5px', left: '2px', fontSize: '0.7em', display: 'block'}}>{index}</span>
    {piece && ('p')}
  </div>
};