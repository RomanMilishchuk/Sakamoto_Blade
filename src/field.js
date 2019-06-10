import { GameObject } from "./GameObjects";

// @prettier-ignore
export const fieldBlueprint = [
  "########################",
  "#..........##..........#",
  "##....................##",
  "#..........##..........#",
  "#..........##..........#",
  "######............######",
  "#......................#",
  "#......##......##......#",
  "#..........##..........#",
  "#.........####.........#",
  "#......................#",
  "#....##############....#",
  "##....................##",
  "########################"
].map(row => row.split(""));

const PLATFORM = "#";
const EMPTY = ".";

export const FIELD_WIDTH = 900;
export const FIELD_HEIGHT = 525;
export const CELL_WIDTH = FIELD_WIDTH / fieldBlueprint[0].length;
export const CELL_HEIGHT = FIELD_HEIGHT / fieldBlueprint.length;

export const generateMap = scene =>
  fieldBlueprint
    .map((row, row_ind) =>
      row
        .map((elem, col_ind) => {
          switch (elem) {
            case PLATFORM: {
              return new GameObject(
                {
                  x: col_ind * CELL_WIDTH,
                  y: row_ind * CELL_HEIGHT
                },
                { height: CELL_HEIGHT, width: CELL_WIDTH },
                scene
              );
            }
            //TODO: add cases for another objects;
          }
        })
        .filter(val => val)
    )
    .reduce((prev, cur) => prev.concat(cur));
