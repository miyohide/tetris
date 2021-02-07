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

  it('左端からひとつ右にMinoがあるとき、trueを返すこと', () => {
    // shape = 0で凸型のMinoを指定。引数のx座標は真ん中のBlockの座標を
    // 示すため、左端から一つ右に設置するためにx = 2を指定している。
    let mino = new Mino(undefined, 2, 2, 0, 0)
    expect(Game.isMinoMovable(mino, new Field(undefined))).toBeTruthy()
  })

  it('右端にMinoがあるとき、falseを返すこと', () => {
    let f = new Field(undefined)
    // shape = 0で凸型のMinoを指定。引数のx座標は真ん中のBlockの座標を
    // 示すため、右端に設置するために幅から2つ引いた値を指定している。
    let mino = new Mino(undefined, f.GAME_WIDTH - 2, 2, 0, 0)
    expect(Game.isMinoMovable(mino, f)).toBeFalsy()
  })

  it('右端からひとつ左にMinoがあるとき、trueを返すこと', () => {
    let f = new Field(undefined)
    // shape = 0で凸型のMinoを指定。引数のx座標は真ん中のBlockの座標を
    // 示すため、右端から一つ左に設置するために幅から3つ引いた値を指定している。
    let mino = new Mino(undefined, f.GAME_WIDTH - 3, 2, 0, 0)
    expect(Game.isMinoMovable(mino, f)).toBeTruthy()
  })

  it('底辺にMinoがあるとき、falseを返すこと', () => {
    let f = new Field(undefined)
    // shape = 0で凸型のMinoを指定。引数のy座標は真ん中のBlockの座標を
    // 示すため、底辺に設置するために高さから1つ引いた値を指定している。
    let mino = new Mino(undefined, 3, f.GAME_HEIGHT - 1, 0, 0)
    expect(Game.isMinoMovable(mino, f)).toBeFalsy()
  })

  it('底辺から一つ上にMinoがあるとき、falseを返すこと', () => {
    let f = new Field(undefined)
    // shape = 0で凸型のMinoを指定。引数のy座標は真ん中のBlockの座標を
    // 示すため、底辺からひとつ上に設置するために高さから1つ引いた値を指定している。
    let mino = new Mino(undefined, 3, f.GAME_HEIGHT - 1, 0, 0)
    expect(Game.isMinoMovable(mino, f)).toBeFalsy()
  })
})

describe('moveLeftRight', () => {
  it('移動可能な時、指定した分移動すること', () => {
    const g = new Game(undefined)
    const beforeX = g.mino.x
    const beforeY = g.mino.y
    const moveVal = 1
    g.minoVx = moveVal
    g.moveLeftRight()
    expect(g.mino.x).toBe(beforeX + moveVal)
    expect(g.mino.y).toBe(beforeY)
  })

  it('移動不可能な時、移動しないこと', () => {
    const g = new Game(undefined)
    const beforeX = g.mino.x
    const beforeY = g.mino.y
    const moveVal = 13
    g.minoVx = moveVal
    g.moveLeftRight()
    expect(g.mino.x).toBe(beforeX)
    expect(g.mino.y).toBe(beforeY)
  })
})