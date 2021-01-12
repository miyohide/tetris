// 1マス1マスを表現するBlockクラス
class Block {
  constructor (x, y) {
    this.x = x;
    this.y = y;
  }
}

// Blockクラスが集まってテトリスのパーツを表現するMino
class Mino {
  constructor (x, y, rot, shape) {
    this.x = x;
    this.y = y;
    this.rot = rot;
    this.shape = shape;
  }
}

// p5.jsの最初のセットアップ関数
function setup () {
  // 描画領域のセットアップ
  createCanvas(800, 500)
}
// p5.jsの繰り返し実行される関数
function draw () {
}
