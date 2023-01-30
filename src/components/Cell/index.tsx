import classNames from "classnames";
import { useState } from "react";
import { Coordinates, HEIGHT, CellData } from "../../constants";
import { idx2coord } from "../../util/idx2coord";

import './index.scss';

export type CellProps = CellData & {
  highlight: boolean;
  onHover: () => void;
  onClick: () => void;
};

export const Cell = ({index, highlight, piece, onHover, selected, onClick}: CellProps) => {
  const [showLabels, setShowLabels] = useState(false);
  
  const onCellHover = () => {
    if (!piece) {
      onHover();
      return;
    }

    const coords = idx2coord(index);
    onHover();
  };

  const onCellClick = () => {
    onClick();
  };

  const coords = idx2coord(index);
  const isOddCell = (coords.x + coords.y) % 2 !== 0;

  return <div
    className={classNames('cell', {clear: isOddCell, highlight, selectable: piece || highlight})}
    style={{
      width: HEIGHT,
      height: HEIGHT,
      lineHeight: `${HEIGHT}px`,
    }}
    onMouseEnter={onCellHover}
    onMouseDown={onCellClick}
  >
    {showLabels && (
      <span className='label'>{index}</span>
    )}
    
    {piece && (
      <span className={classNames('piece', {black: piece.identity === -1, selected})}>
        {piece.label}
      </span>
    )}
  </div>
};