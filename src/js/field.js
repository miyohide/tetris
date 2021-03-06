import { Block } from './block'

// プレイする領域を表現するFieldクラス
export class Field {
  constructor (p) {
    this.p = p
    /* 0はブロックがない、1はブロックがある
     * ことを表す二次元配列
     */
    this.tiles = [
      [1,0,0,0,0,0,0,0,0,0,0,1],
      [1,0,0,0,0,0,0,0,0,0,0,1],
      [1,0,0,0,0,0,0,0,0,0,0,1],
      [1,0,0,0,0,0,0,0,0,0,0,1],
      [1,0,0,0,0,0,0,0,0,0,0,1],
      [1,0,0,0,0,0,0,0,0,0,0,1],
      [1,0,0,0,0,0,0,0,0,0,0,1],
      [1,0,0,0,0,0,0,0,0,0,0,1],
      [1,0,0,0,0,0,0,0,0,0,0,1],
      [1,0,0,0,0,0,0,0,0,0,0,1],
      [1,0,0,0,0,0,0,0,0,0,0,1],
      [1,0,0,0,0,0,0,0,0,0,0,1],
      [1,0,0,0,0,0,0,0,0,0,0,1],
      [1,0,0,0,0,0,0,0,0,0,0,1],
      [1,0,0,0,0,0,0,0,0,0,0,1],
      [1,0,0,0,0,0,0,0,0,0,0,1],
      [1,0,0,0,0,0,0,0,0,0,0,1],
      [1,0,0,0,0,0,0,0,0,0,0,1],
      [1,0,0,0,0,0,0,0,0,0,0,1],
      [1,0,0,0,0,0,0,0,0,0,0,1],
      [1,1,1,1,1,1,1,1,1,1,1,1],
    ];
  }
  // (x,y)座標のブロックの状態を返す
  tileAt(x, y) {
    return this.tiles[y][x];
  }
  putBlock(x, y) {
    this.tiles[y][x] = 1
  }
  findLineFilled() {
    for (let y = 0; y < 20; y++) {
      let isFilled = this.tiles[y].every(t => t === 1)
      if (isFilled) {
        return y
      }
    }
    return -1
  }
  cutLine(y) {
    this.tiles.splice(y, 1)
    this.tiles.unshift([1,0,0,0,0,0,0,0,0,0,0,1])
  }
  draw() {
    for (let y = 0; y < this.GAME_HEIGHT; y++) {
      for (let x = 0; x < this.GAME_WIDTH; x++) {
        if (this.tileAt(x, y) !== 0) {
          new Block(this.p, x ,y).draw()
        }
      }
    }
  }
  get GAME_WIDTH() {
    return 12
  }
  get GAME_HEIGHT() {
    return 21
  }
}
