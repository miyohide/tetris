import { Mino } from '../../src/js/mino'
import { Block } from '../../src/js/block'

describe('calcBlocks', () => {
  describe('shape is 0', () => {
    it('T字型のブロックが返ること', () => {
      let mino = new Mino(undefined, 5, 10, 0, 0)
      let expect_blocks = [
        new Block(undefined, 4, 10),
        new Block(undefined, 5, 10),
        new Block(undefined, 5, 9),
        new Block(undefined, 6, 10)
      ]
      let blocks = mino.calcBlocks()
      for (let i = 0; i < blocks.length; i++) {
        expect(blocks[i].equals(expect_blocks[i])).toBe(true)
      }
    })

    it('rotが1のとき90度回転したT字型のブロックが返ること', () => {
      let mino = new Mino(undefined, 5, 10, 1, 0)
      let expect_blocks = [
        new Block(undefined, 5, 9),
        new Block(undefined, 5, 10),
        new Block(undefined, 6, 10),
        new Block(undefined, 5, 11)
      ]
      let blocks = mino.calcBlocks()
      for (let i = 0; i < blocks.length; i++) {
        expect(blocks[i].equals(expect_blocks[i])).toBe(true)
      }
    })

    it('rotが2のとき180度回転したT字型のブロックが返ること', () => {
      let mino = new Mino(undefined, 5, 10, 2, 0)
      let expect_blocks = [
        new Block(undefined, 6, 10),
        new Block(undefined, 5, 10),
        new Block(undefined, 5, 11),
        new Block(undefined, 4, 10)
      ]
      let blocks = mino.calcBlocks()
      for (let i = 0; i < blocks.length; i++) {
        expect(blocks[i].equals(expect_blocks[i])).toBe(true)
      }
    })

    it('rotが3のとき270度回転したT字型のブロックが返ること', () => {
      let mino = new Mino(undefined, 5, 10, 3, 0)
      let expect_blocks = [
        new Block(undefined, 5, 11),
        new Block(undefined, 5, 10),
        new Block(undefined, 4, 10),
        new Block(undefined, 5, 9)
      ]
      let blocks = mino.calcBlocks()
      for (let i = 0; i < blocks.length; i++) {
        expect(blocks[i].equals(expect_blocks[i])).toBe(true)
      }
    })

    it('rotが4のとき360度回転したT字型のブロックが返ること', () => {
      let mino = new Mino(undefined, 5, 10, 4, 0)
      let expect_blocks = [
        new Block(undefined, 4, 10),
        new Block(undefined, 5, 10),
        new Block(undefined, 5, 9),
        new Block(undefined, 6, 10)
      ]
      let blocks = mino.calcBlocks()
      for (let i = 0; i < blocks.length; i++) {
        expect(blocks[i].equals(expect_blocks[i])).toBe(true)
      }
    })
  })
})