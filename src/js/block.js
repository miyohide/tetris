// 1マス1マスを表現するBlockクラス
export class Block {
  constructor (p, x, y) {
    this.p = p
    this.x = x
    this.y = y
  }
  draw() {
    this.p.push()
    // 幅・高さが25の四角を描く
    let s = 25
    this.p.rect(s*this.x, s*this.y, s, s)
    this.p.pop()
  }
  equals(other) {
    return this.x === other.x && this.y === other.y
  }
}
