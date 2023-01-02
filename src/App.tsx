import { useEffect, useState } from 'react';
import { Cell, CellData, CellProps } from './Cell';
import { HEIGHT } from './constants';

import './App.css'

export type Coordinates = {
  x: number;
  y: number;
};

export type Piece = {
  move: (location: Coordinates) => Coordinates[];
};

const pawn: Piece = {
  move: (location: Coordinates) => {
    return [
      {x: location.x, y: location.y + 1},
    ];
  },
}

const knight: Piece = {
  move: (location: Coordinates) => {
    return [
      {x: location.x + 2, y: location.y + 1},
      {x: location.x + 2, y: location.y - 1},
      {x: location.x - 2, y: location.y + 1},
      {x: location.x - 2, y: location.y - 1},
      {x: location.x + 1, y: location.y + 2},
      {x: location.x + 1, y: location.y - 2},
      {x: location.x - 1, y: location.y + 2},
      {x: location.x - 1, y: location.y - 2},
    ];
  },
}

function App() {
  const [selectedCell, setSelectedCell] = useState<number>(-1);

  const onCellHover = (coordinates: Coordinates[]) => {
    // convert coordinates to cell indexes
    const indexes = coordinates.map((coordinate) => coordinate.x + coordinate.y * 8);

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

    newCells[7].piece = pawn;
    newCells[11].piece = knight;

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
