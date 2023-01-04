import { useEffect, useState } from 'react';

import { Cell } from '../Cell';
import { Coordinates, HEIGHT, CellData } from '../../constants';
import { getStandardPieces } from './util/getStandardPieces';

import './index.scss'

const Board = () => {
  const [selectedCell, setSelectedCell] = useState<number>(-1);

  const onCellHover = (coordinates: Coordinates[]) => {
    // if we have a cell selected, avoid changing highlights
    if (selectedCell > -1) {
      return;
    }

    // convert coordinates to cell indexes
    const indexes = coordinates.filter(
      coordinate => coordinate.x >= 0 && coordinate.x <= 8 &&
                    coordinate.y >= 0 && coordinate.y <= 8
    ).map(
      (coordinate) => coordinate.x + coordinate.y * 8
    );

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
      const validMoves = cells[selectedCell].piece?.move({
        x: selectedCell % 8,
        y: Math.floor(selectedCell / 8)
      }).map(coordinates => coordinates.x + coordinates.y * 8) || [];

      if (!validMoves.includes(index)) {
        if (cells[index].piece) {
          setSelectedCell(index);
        }
        return;
      }
      
      const newCells = [...cells];

      newCells[index].piece = cells[selectedCell].piece;
      newCells[selectedCell].piece = null;

      setCells(newCells);
      setSelectedCell(-1);
      return;
    }
    
    setSelectedCell(index);
  };

  const [cells, setCells] = useState<CellData[]>([]);

  useEffect(() => {
    setCells(getStandardPieces());
  }, []);

  return (
    <div className="board" style={{width: 8 * HEIGHT, lineHeight: 0}}>
      {cells.map((cell, index) => (
        <Cell key={`${cell.piece?.label}-${index}`} {...cell} selected={index === selectedCell} onHover={onCellHover} onClick={() => onCellClick(index)} />
      ))}
    </div>
  )
}

export default Board
