import { useEffect, useState } from 'react';
import { Cell, CellData, CellProps } from './Cell';
import { HEIGHT } from './constants';

import './App.css'
import { bishop, king, knight, pawn, queen, rook } from './pieces';

export type Coordinates = {
  x: number;
  y: number;
};

export type Piece = {
  label: string;
  move: (location: Coordinates) => Coordinates[];
};

function App() {
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

  const [cells, setCells] = useState<CellData[]>(
    Array(8*8).fill(0).map((_, index) => ({index, highlight: false, piece: null}))
  );

  useEffect(() => {
    // init the board
    const newCells = [...cells];

    newCells[48].piece = pawn;
    newCells[49].piece = pawn;
    newCells[50].piece = pawn;
    newCells[51].piece = pawn;
    newCells[52].piece = pawn;
    newCells[53].piece = pawn;
    newCells[54].piece = pawn;
    newCells[55].piece = pawn;

    newCells[57].piece = knight;
    newCells[62].piece = knight;

    newCells[58].piece = bishop;
    newCells[61].piece = bishop;
    
    newCells[56].piece = rook;
    newCells[63].piece = rook;

    newCells[59].piece = queen;
    newCells[60].piece = king;

    setCells(newCells);
  }, []);

  return (
    <div className="App" style={{width: 8 * HEIGHT, lineHeight: 0}}>
      {cells.map((cell, index) => (
        <Cell {...cell} selected={index === selectedCell} onHover={onCellHover} onClick={() => onCellClick(index)} />
      ))}
    </div>
  )
}

export default App
