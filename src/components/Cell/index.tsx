import classNames from "classnames";
import { Coordinates, Piece, HEIGHT, CellData } from "../../constants";

import './index.scss';

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

  const isOddCell = (index % 8 + Math.floor(index / 8)) % 2 !== 0;

  return <div
    className={classNames('cell', {clear: isOddCell, highlight, selectable: piece || highlight})}
    style={{
      width: HEIGHT,
      height: HEIGHT,
      lineHeight: `${HEIGHT}px`,
    }}
    onMouseOver={onCellHover}
    onMouseDown={onCellClick}
  >
    <span className='label'>{index}</span>
    
    {piece && (
      <span className={classNames('piece', {black: piece.identity === -1, selected})}>
        {piece.label}
      </span>
    )}
  </div>
};