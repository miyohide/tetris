import { Game } from '../../src/js/game'

describe('makeMino', () => {
  it('xが5、yが2、無回転のMinoが返ること', () => {
    let mino = Game.makeMino(undefined)
    expect(mino.x).toEqual(5)
    expect(mino.y).toEqual(2)
    expect(mino.rot).toEqual(0)
  })
})