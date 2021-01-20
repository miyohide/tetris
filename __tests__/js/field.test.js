import { Field } from '../../src/js/field'

describe('tileAt', () => {
  it('初期状態における一番最初の行の確認', () => {
    let field = new Field(undefined)
    let width = field.GAME_WIDTH
    expect(field.tileAt(0, 0)).toBe(1)
    for (let i = 1; i < width - 1; i++) {
      expect(field.tileAt(i, 0)).toBe(0)
    }
    expect(field.tileAt(width - 1, 0)).toBe(1)
  })
})
