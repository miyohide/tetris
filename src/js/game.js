import { Mino } from './mino'
import { Field } from './field'

export class Game {
  constructor (p) {
    this.p = p
    this.mino = new Mino(p,5, 10, 0, 0)
    // minoVxはテトリスのパーツを動かす量を媒介する変数
    this.minoVx = 0
    // minoVrはテトリスのパーツを回転する量を媒介する変数
    this.minoVr = 0
    this.field = new Field(p)
    this.frame = 0
  }
  // 新しいテトリスのパーツを作る
  static makeMino(p) {
    return new Mino(p, 5, 2, 0, Math.floor(Math.random() * Math.floor(7)))
  }
  // テトリスのパーツの衝突判定
  static isMinoMovable (mino, field) {
    let blocks = mino.calcBlocks()
    return blocks.every(b => field.tileAt(b.x, b.y) === 0)
  }
  proc () {
    // 落下
    if (this.frame % 20 === 19) {
      let futureMino = this.mino.copy()
      futureMino.y += 1
      if (Game.isMinoMovable(futureMino, this.field)) {
        this.mino.y += 1
      } else {
        // 接地
        for (let b of this.mino.calcBlocks()) {
          this.field.putBlock(b.x, b.y)
          this.mino = Game.makeMino(this.p)
        }
      }
      let line
      while((line = this.field.findLineFilled()) !== -1) {
        this.field.cutLine(line)
      }
    }
    // 左右移動
    if (this.minoVx !== 0) {
      let futureMino = this.mino.copy()
      futureMino.x += this.minoVx
      if (Game.isMinoMovable(futureMino, this.field)) {
        this.mino.x += this.minoVx
      }
      this.minoVx = 0
    }
    // 回転
    if (this.minoVr !== 0) {
      let futureMino = this.mino.copy()
      futureMino.rot += this.minoVr
      if (Game.isMinoMovable(futureMino, this.field)) {
        this.mino.rot += this.minoVr
      }
      this.minoVr = 0
    }
    this.p.background(64)
    this.mino.draw()
    this.field.draw()
    this.frame++
  }
}
