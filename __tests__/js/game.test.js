import { Game } from '../../src/js/game'
import { Mino } from '../../src/js/mino'
import { Field } from '../../src/js/field'

describe('makeMino', () => {
  it('xが5、yが2、無回転のMinoが返ること', () => {
    let mino = Game.makeMino(undefined)
    expect(mino.x).toEqual(5)
    expect(mino.y).toEqual(2)
    expect(mino.rot).toEqual(0)
  })
})

describe('isMinoMovable', () => {
  it('左端にMinoがあるとき、falseを返すこと', () => {
    // shape = 0で凸型のMinoを指定。引数のx座標は真ん中のBlockの座標を
    // 示すため、左端に設置するためにx = 1を指定している。
    let mino = new Mino(undefined, 1, 2, 0, 0)
    expect(Game.isMinoMovable(mino, new Field(undefined))).toBeFalsy()
  })

  it('右端にMinoがあるとき、falseを返すこと', () => {
    let f = new Field(undefined)
    // shape = 0で凸型のMinoを指定。引数のx座標は真ん中のBlockの座標を
    // 示すため、右端に設置するために幅から2つ引いた値を指定している。
    let mino = new Mino(undefined, f.GAME_WIDTH - 2, 2, 0, 0)
    expect(Game.isMinoMovable(mino, f)).toBeFalsy()
  })

  it('下にMinoがあるとき、falseを返すこと', () => {
    let f = new Field(undefined)
    // shape = 0で凸型のMinoを指定。引数のy座標は真ん中のBlockの座標を
    // 示すため、下に設置するために高さから1つ引いた値を指定している。
    let mino = new Mino(undefined, 3, f.GAME_HEIGHT - 1, 0, 0)
    expect(Game.isMinoMovable(mino, f)).toBeFalsy()
  })
})