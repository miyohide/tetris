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

describe('rotation', () => {
  it('回転可能な時、回転すること', () => {
    const g = new Game(undefined)
    const moveRot = 1
    g.minoVr = moveRot
    g.rotation()
    expect(g.mino.rot).toBe(moveRot)
    expect(g.minoVr).toBe(0) // 初期値に戻ること
  })

  it('回転不可能な時、回転しないこと', () => {
    const g = new Game(undefined)
    const moveVal = -3 // 左端に寄せて反時計回りに回転しないことを確認
    g.minoVx = moveVal
    g.moveLeftRight()
    g.minovr = -1
    g.rotation()
    expect(g.mino.rot).toBe(0)
    expect(g.minoVr).toBe(0) // 初期値に戻ること
  })
})

describe('moveDown', () => {
  it('下に移動可能な時、下に移動すること', () => {
    const g = new Game(undefined)
    const beforeMinoX = g.mino.x
    const beforeMinoY = g.mino.y
    g.moveDown()
    expect(g.mino.x).toBe(beforeMinoX)
    expect(g.mino.y).toBe(beforeMinoY + 1)
  })

  it('下に移動不可能な時、設置すること', () => {
    const g = new Game(undefined)
    for(let i = 0; i < 9; i++) {
      g.moveDown()
    }
    g.moveDown()
    expect(g.field.tiles[17]).toEqual([1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1])
    expect(g.field.tiles[18]).toEqual([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1])
    expect(g.field.tiles[19]).toEqual([1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1])
  })
})
