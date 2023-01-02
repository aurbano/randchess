import { Coordinates, Piece } from "../App";
import { HEIGHT } from "../constants";

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
    className={(index % 8 + Math.floor(index / 8)) % 2 !== 0 ? 'clear' : undefined}
    style={{
      position: 'relative',
      display: 'inline-block',
      width: HEIGHT,
      height: HEIGHT,
      lineHeight: `${HEIGHT}px`,
      outline: 'solid 1px #999',
      background: selected ? 'green' : highlight ? 'blue' : undefined,
      overflow: 'hidden',
      margin: 0, padding: 0,
      cursor: piece ? 'pointer' : undefined,
    }}
    onMouseOver={onCellHover}
    onMouseDown={onCellClick}
  >
    <span style={{
      position: 'absolute',
      top: '-1.5em',
      left: '0.4em',
      fontSize: '0.7em',
      display: 'block',
      color: '#666',
    }}>{index}</span>
    
    {piece && (<span className='piece'>X</span>)}
  </div>
};