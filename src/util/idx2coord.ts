import { Coordinates } from "../constants";

export const idx2coord = (idx: number): Coordinates => {
  return {
    x: idx % 8,
    y: Math.floor(idx / 8),
  };
};