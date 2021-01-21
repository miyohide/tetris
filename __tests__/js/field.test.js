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

  it('初期状態における途中の行の確認', () => {
    let field = new Field(undefined)
    let width = field.GAME_WIDTH
    expect(field.tileAt(0, 5)).toBe(1)
    for (let i = 1; i < width - 1; i++) {
      expect(field.tileAt(i, 5)).toBe(0)
    }
    expect(field.tileAt(width - 1, 5)).toBe(1)
  })

  it('初期状態における最後の行の確認', () => {
    let field = new Field(undefined)
    let width = field.GAME_WIDTH
    let height = field.GAME_HEIGHT
    expect(field.tileAt(0, height - 1)).toBe(1)
    for (let i = 1; i < width - 1; i++) {
      expect(field.tileAt(i, height - 1)).toBe(1)
    }
    expect(field.tileAt(width - 1, height - 1)).toBe(1)
  })
})

describe('putBlock', () => {
  it('指定された場所が1になっていること', () => {
    let field = new Field(undefined)
    expect(field.tileAt(2, 5)).toBe(0)
    field.putBlock(2, 5)
    expect(field.tileAt(2, 5)).toBe(1)
  })
})

describe('findLineField', () => {
  it('すべてが1である行があった場合はその行の番号を返すこと', () => {
    let field = new Field(undefined)
    let width = field.GAME_WIDTH
    let target_line = 7
    for (let x = 0; x < width; x++) {
      field.putBlock(x, target_line)
    }
    expect(field.findLineFilled()).toBe(target_line)
  })

  it('すべてが1である行がなかった場合は-1を返すこと', () => {
    let field = new Field(undefined)
    expect(field.findLineFilled()).toBe(-1)
  })
})
