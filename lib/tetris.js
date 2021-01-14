// 1マス1マスを表現するBlockクラス
class Block {
  constructor (x, y) {
    this.x = x;
    this.y = y;
  }
  draw() {
    push();
    // 幅・高さが25の四角を描く
    let s = 25;
    rect(s*this.x, s*this.y, s, s);
    pop();
  }
}

// Blockクラスが集まってテトリスのパーツを表現するMino
class Mino {
  /* xはx軸の座標
     yはy軸の座標
     rotは回転数。右回りで90度ごとに1ずつ増加
     shapeはテトリスのパーツを表すもの
  */
  constructor (x, y, rot, shape) {
    this.x = x;
    this.y = y;
    this.rot = rot;
    this.shape = shape;
  }
  calcBlocks() {
    // とりあえず凸のブロックを表現
    let blocks = [
      new Block(-1, 0),
      new Block(0, 0),
      new Block(0, -1),
      new Block(1, 0)
    ]
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
      blocks = blocks.map(b => new Block(-b.y, b.x))
    }
    return blocks
  }
  draw() {
    let blocks = this.calcBlocks()
    blocks.forEach(b => (b.x+=this.x, b.y+=this.y))
    for (let b of blocks) {
      b.draw()
    }
  }
}

// プレイする領域を表現するFieldクラス
class Field {
  constructor () {
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
  // (x,y)座標を二次元配列に変換する
  tileAt(x, y) {
    return this.tiles[y][x];
  }
  draw() {
    for (let y = 0; y < 21; y++) {
      for (let x = 0; x < 12; x++) {
        if (this.tileAt(x, y) !== 0) {
          new Block(x ,y).draw()
        }
      }
    }
  }
}

// p5.jsの最初のセットアップ関数
function setup () {
  // 描画領域のセットアップ
  createCanvas(400, 600)
  background(64)
}
// p5.jsの繰り返し実行される関数
function draw () {
}
