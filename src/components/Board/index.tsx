import { useEffect, useState } from 'react';

import { Cell } from '../Cell';
import { Coordinates, HEIGHT, CellData } from '../../constants';
import { getStandardPieces } from './util/getStandardPieces';

import './index.scss'
import { idx2coord } from '../../util/idx2coord';
import { coord2idx } from '../../util/coord2idx';
import classNames from 'classnames';

const Board = () => {
  const [selectedCell, setSelectedCell] = useState<number>(-1);
  const [turn, setTurn] = useState(1);

  const onCellHover = (coordinates: Coordinates[]) => {
    // if we have a cell selected, avoid changing highlights
    if (selectedCell > -1) {
      return;
    }

    // convert coordinates to cell indexes
    const indexes = coordinates.filter(
      coordinate => coordinate.x >= 0 && coordinate.x <= 7 &&
                    coordinate.y >= 0 && coordinate.y <= 7
    ).map(coord2idx);

    const newCells = cells.map(cell => ({
      ...cell,
      highlight: false,
    }));
    
    for (let i = 0; i < indexes.length; i++) {
      if (!newCells[indexes[i]]) {
        continue;
      }
      newCells[indexes[i]].highlight = true;
    }

    setCells(newCells);
  };

  const onCellClick = (index: number) => {
    if (index === selectedCell) {
      onCellHover([]);
      setSelectedCell(-1);
      return;
    }

    if (selectedCell > -1 && cells[selectedCell].piece) {
      if (cells[index].piece && cells[index].piece?.identity === cells[selectedCell].piece?.identity) {
        // you can't take your own piece
        return;
      }

      const selectedCoords = idx2coord(selectedCell);
      const validMoves = cells[selectedCell].piece?.move(selectedCoords).map(coord2idx) || [];

      if (!validMoves.includes(index)) {
        if (cells[index].piece && cells[index].piece?.identity === turn) {
          // change selection to this other piece
          setSelectedCell(index);
        }
        return;
      }
      
      // Move your piece
      const newCells = [...cells];

      newCells[index].piece = cells[selectedCell].piece;
      newCells[selectedCell].piece = null;

      setCells(newCells);
      setSelectedCell(-1);
      setTurn(turn * -1);
      return;
    }

    if (cells[index].piece?.identity !== turn) {
      // not your piece
      return;
    }
    
    setSelectedCell(index);
  };

  const [cells, setCells] = useState<CellData[]>([]);

  useEffect(() => {
    setCells(getStandardPieces());
  }, []);

  return (
    <div className='game-area'>
        <div className='turn-indicator'>
          <div className={classNames('black', {current: turn === -1})}></div>
          <div className={classNames('white', {current: turn === 1})}></div>
        </div>

        <div className="board" style={{width: 8 * HEIGHT, lineHeight: 0}}>
        {cells.map((cell, index) => (
          <Cell key={`${cell.piece?.label}-${index}`} {...cell} selected={index === selectedCell} onHover={onCellHover} onClick={() => onCellClick(index)} />
        ))}
      </div>
    </div>
  )
}

export default Board
