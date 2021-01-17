import { Block } from './block'

// Blockクラスが集まってテトリスのパーツを表現するMino
export class Mino {
  /* xはx軸の座標
     yはy軸の座標
     rotは回転数。右回りで90度ごとに1ずつ増加
     shapeはテトリスのパーツを表すもの
  */
  constructor (p, x, y, rot, shape) {
    this.p = p
    this.x = x;
    this.y = y;
    this.rot = rot;
    this.shape = shape;
  }
  calcBlocks() {
    let blocks = []
    switch (this.shape) {
      case 0:
        blocks = [new Block(this.p, -1, 0), new Block(this.p, 0, 0), new Block(this.p, 0, -1), new Block(this.p, 1, 0)]
        break
      case 1:
        blocks = [new Block(this.p, -1, -1), new Block(this.p, 0, -1), new Block(this.p, 0, 0), new Block(this.p, 1, 0)]
        break
      case 2:
        blocks = [new Block(this.p, -1, 0), new Block(this.p, 0, 0), new Block(this.p, 0, -1), new Block(this.p, 1, -1)]
        break
      case 3:
        blocks = [new Block(this.p, -1, -2), new Block(this.p, -1, -1), new Block(this.p, -1, 0), new Block(this.p, 0, 0)]
        break
      case 4:
        blocks = [new Block(this.p, 0, -2), new Block(this.p, 0, -1), new Block(this.p, -1, 0), new Block(this.p, 0, 0)]
        break
      case 5:
        blocks = [new Block(this.p, -1, -1), new Block(this.p, -1, 0), new Block(this.p, 0, 0), new Block(this.p, 0, -1)]
        break
      case 6:
        blocks = [new Block(this.p, -2, 0), new Block(this.p, -1, 0), new Block(this.p, 0, 0), new Block(this.p, 1, 0)]
        break
    }
    /* this.rotが負の数（反時計回り回転）に対応するために
     * とても大きい数4の倍数の数を足して正値にして
     * 時計回りの回転として扱う。
     * 例えば、反時計回り90度回転（this.rot = -1）は
     * 時計回り270度回転（this.rot = 3）と同じ。
     * (4000000 + 3) mod 4 ≡ 3、
     * (4000000 - 1) mod 4 ≡ 3
     * となり、負の数でも正値として計算できる
     */
    let rot = (4000000 + this.rot) % 4
    // 90度回転させる
    for (let r = 0; r < rot; r++) {
      blocks = blocks.map(b => new Block(this.p, -b.y, b.x))
    }
    blocks.forEach(b => (b.x+=this.x, b.y+=this.y))
    return blocks
  }
  draw() {
    let blocks = this.calcBlocks()
    for (let b of blocks) {
      b.draw()
    }
  }
  copy () {
    return new Mino(this.p, this.x, this.y, this.rot, this.shape)
  }
}
