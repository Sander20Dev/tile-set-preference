export enum TILES {
  GRASS,
  FUNGUS_BLOCK,
  BACKGROUND,
  DIRT,
  BRICKS,
  MIDDLE_BRICKS_B,
  MIDDLE_BRICKS_T,
}

export const map: TILES[][] = [
  Array(18).fill(TILES.GRASS),
  [TILES.DIRT, ...Array(16).fill(TILES.BACKGROUND), TILES.DIRT],
  [TILES.DIRT, ...Array(16).fill(TILES.BACKGROUND), TILES.DIRT],
  [
    TILES.DIRT,
    ...Array(6).fill(TILES.BACKGROUND),
    ...Array(4).fill(TILES.FUNGUS_BLOCK),
    ...Array(6).fill(TILES.BACKGROUND),
    TILES.DIRT,
  ],
  [
    TILES.DIRT,
    ...Array(4).fill(TILES.BACKGROUND),
    ...Array(8).fill(TILES.BRICKS),
    ...Array(4).fill(TILES.BACKGROUND),
    TILES.DIRT,
  ],
  [TILES.DIRT, ...Array(16).fill(TILES.BACKGROUND), TILES.DIRT],
  [TILES.DIRT, ...Array(16).fill(TILES.BACKGROUND), TILES.DIRT],
  [
    TILES.DIRT,
    ...Array(2).fill(TILES.BACKGROUND),
    ...Array(12).fill(TILES.BRICKS),
    TILES.BACKGROUND,
    TILES.MIDDLE_BRICKS_T,
    TILES.DIRT,
  ],
  [
    TILES.DIRT,
    ...Array(15).fill(TILES.BACKGROUND),
    TILES.MIDDLE_BRICKS_B,
    TILES.DIRT,
  ],
  [TILES.DIRT, ...Array(17).fill(TILES.BACKGROUND)],
  [TILES.DIRT, ...Array(17).fill(TILES.GRASS)],
  Array(18).fill(TILES.DIRT),
]

export const tilesPos = {
  [TILES.GRASS]: [0, 0],
  [TILES.FUNGUS_BLOCK]: [1, 0],
  [TILES.BACKGROUND]: [2, 0],
  [TILES.DIRT]: [0, 1],
  [TILES.BRICKS]: [1, 1],
  [TILES.MIDDLE_BRICKS_B]: [2, 1],
  [TILES.MIDDLE_BRICKS_T]: [2, 2],
}
