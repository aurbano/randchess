import { useEffect, useState } from 'react';

import { Cell } from '../Cell';
import { Coordinates, HEIGHT, CellData } from '../../constants';
import { getStandardPieces } from './util/getStandardPieces';

import './index.scss'
import { idx2coord } from '../../util/idx2coord';
import { coord2idx } from '../../util/coord2idx';
import classNames from 'classnames';

const Board = () => {
  const [cells, setCells] = useState<CellData[]>([]);
  const [highlightedCells, setHighlightedCells] = useState<number[]>([]);
  const [selectedCell, setSelectedCell] = useState<number>(-1);
  const [turn, setTurn] = useState(0);

  const updateHighlights = (index: number) => {
    const piece = cells[index]?.piece;

    if (!piece) {
      setHighlightedCells([]);
      return;
    }

    let coordinates = piece ? piece.move(idx2coord(index), cells) : [];

    if (!piece.canJump) {
      const currentCoordinates = idx2coord(index);

      // filter out coordinates that are behind any other piece
      coordinates = coordinates.filter(coordinate => {
        const xDir = Math.sign(coordinate.x - currentCoordinates.x);
        const yDir = Math.sign(coordinate.y - currentCoordinates.y);

        let x = currentCoordinates.x;
        let y = currentCoordinates.y;

        while (x !== coordinate.x || y !== coordinate.y) {
          x += xDir;
          y += yDir;

          if (cells[coord2idx({x, y})]?.piece?.label) {
            return false;
          }
        }

        if (cells[coord2idx({x, y})]?.piece?.label) {
          return false;
        }

        return true;
      });
    }

    const indexes = coordinates.filter(
      coordinate => coordinate.x >= 0 && coordinate.x <= 7 &&
                    coordinate.y >= 0 && coordinate.y <= 7
    ).map(coord2idx);

    setHighlightedCells(indexes);
  }

  const selectPiece = (index: number) => {
    setSelectedCell(index);
    updateHighlights(index);
  };

  const onCellHover = (index: number) => {
    // if we have a cell selected, avoid changing highlights
    if (selectedCell > -1) {
      return;
    }

    updateHighlights(index);
  };

  const onCellClick = (index: number) => {
    if (index === selectedCell) {
      // deselect cell
      updateHighlights(-1)
      setSelectedCell(-1);
      return;
    }

    if (selectedCell > -1 && cells[selectedCell].piece) {
      if (cells[index].piece && cells[index].piece?.identity === turn) {
        // if its your own piece, switch selection
        selectPiece(index);
        return;
      }

      if (!highlightedCells.includes(index)) {
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
    
    selectPiece(index);
  };

  useEffect(() => {
    setCells(getStandardPieces());
    setTurn(1);
  }, []);

  return (
    <div className='game-area'>
        <div className='turn-indicator'>
          <div className={classNames('black', {current: turn === -1})}></div>
          <div className={classNames('white', {current: turn === 1})}></div>
        </div>

        <div className="board" style={{width: 8 * HEIGHT, lineHeight: 0}}>
          {cells.map((cell, index) => (
            <Cell
              key={`${cell.piece?.label}-${index}`}
              {...cell}
              highlight={highlightedCells.includes(index)}
              selected={index === selectedCell}
              onHover={() => onCellHover(index)}
              onClick={() => onCellClick(index)}
            />
          ))}
        </div>
    </div>
  )
}

export default Board
