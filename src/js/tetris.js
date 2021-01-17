import { Game } from './game'

export const tetris = (p) => {
  let game
// キーを押したときにテトリスのパーツを動かす
  p.keyPressed = () => {
    switch (p.keyCode) {
      case 37: // 左矢印を押したとき
        game.minoVx = -1
        break
      case 39: // 右矢印を押したとき
        game.minoVx = 1
        break
      case 82: // rを押したとき
        game.minoVr = 1
        break
    }
  }

  p.setup = () => {
    p.createCanvas(400, 600)
    p.background(64)
    game = new Game(p)
  }
  p.draw = () => {
    game.proc()
  }
}
