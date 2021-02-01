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
      expect(blocks).toEqual(expect_blocks)
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
      expect(blocks).toEqual(expect_blocks)
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
      expect(blocks).toEqual(expect_blocks)
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
      expect(blocks).toEqual(expect_blocks)
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
      expect(blocks).toEqual(expect_blocks)
    })

    it('rotが-1のとき-90度回転したT字型のブロックが返ること', () => {
      let mino = new Mino(undefined, 5, 10, -1, 0)
      let expect_blocks = [
        new Block(undefined, 5, 11),
        new Block(undefined, 5, 10),
        new Block(undefined, 4, 10),
        new Block(undefined, 5, 9)
      ]
      let blocks = mino.calcBlocks()
      expect(blocks).toEqual(expect_blocks)
    })

    it('rotが-2のとき-180度回転したT字型のブロックが返ること', () => {
      let mino = new Mino(undefined, 5, 10, -2, 0)
      let expect_blocks = [
        new Block(undefined, 6, 10),
        new Block(undefined, 5, 10),
        new Block(undefined, 5, 11),
        new Block(undefined, 4, 10)
      ]
      let blocks = mino.calcBlocks()
      expect(blocks).toEqual(expect_blocks)
    })

    it('rotが-3のとき-270度回転したT字型のブロックが返ること', () => {
      let mino = new Mino(undefined, 5, 10, -3, 0)
      let expect_blocks = [
        new Block(undefined, 5, 9),
        new Block(undefined, 5, 10),
        new Block(undefined, 6, 10),
        new Block(undefined, 5, 11)
      ]
      let blocks = mino.calcBlocks()
      expect(blocks).toEqual(expect_blocks)
    })

    it('rotが-4のとき-360度回転したT字型のブロックが返ること', () => {
      let mino = new Mino(undefined, 5, 10, -4, 0)
      let expect_blocks = [
        new Block(undefined, 4, 10),
        new Block(undefined, 5, 10),
        new Block(undefined, 5, 9),
        new Block(undefined, 6, 10)
      ]
      let blocks = mino.calcBlocks()
      expect(blocks).toEqual(expect_blocks)
    })
  })

  describe('shape is 1', () => {
    it('z字型のブロックが返ること', () => {
      let mino = new Mino(undefined, 5, 10, 0, 1)
      let expect_blocks = [
        new Block(undefined, 4, 9),
        new Block(undefined, 5, 9),
        new Block(undefined, 5, 10),
        new Block(undefined, 6, 10)
      ]
      let blocks = mino.calcBlocks()
      expect(blocks).toEqual(expect_blocks)
    })

    it('rotが1のとき90度回転したz字型のブロックが返ること', () => {
      let mino = new Mino(undefined, 5, 10, 1, 1)
      let expect_blocks = [
        new Block(undefined, 6, 9),
        new Block(undefined, 6, 10),
        new Block(undefined, 5, 10),
        new Block(undefined, 5, 11)
      ]
      let blocks = mino.calcBlocks()
      expect(blocks).toEqual(expect_blocks)
    })

    it('rotが2のとき180度回転したz字型のブロックが返ること', () => {
      let mino = new Mino(undefined, 5, 10, 2, 1)
      let expect_blocks = [
        new Block(undefined, 6, 11),
        new Block(undefined, 5, 11),
        new Block(undefined, 5, 10),
        new Block(undefined, 4, 10)
      ]
      let blocks = mino.calcBlocks()
      expect(blocks).toEqual(expect_blocks)
    })

    it('rotが3のとき270度回転したz字型のブロックが返ること', () => {
      let mino = new Mino(undefined, 5, 10, 3, 1)
      let expect_blocks = [
        new Block(undefined, 4, 11),
        new Block(undefined, 4, 10),
        new Block(undefined, 5, 10),
        new Block(undefined, 5, 9)
      ]
      let blocks = mino.calcBlocks()
      expect(blocks).toEqual(expect_blocks)
    })

    it('rotが4のときz字型のブロックが返ること', () => {
      let mino = new Mino(undefined, 5, 10, 4, 1)
      let expect_blocks = [
        new Block(undefined, 4, 9),
        new Block(undefined, 5, 9),
        new Block(undefined, 5, 10),
        new Block(undefined, 6, 10)
      ]
      let blocks = mino.calcBlocks()
      expect(blocks).toEqual(expect_blocks)
    })
  })

  describe('shape is 2', () => {
    it('逆z字型のブロックが返ること', () => {
      let mino = new Mino(undefined, 5, 10, 0, 2)
      let expect_blocks = [
        new Block(undefined, 4, 10),
        new Block(undefined, 5, 10),
        new Block(undefined, 5, 9),
        new Block(undefined, 6, 9)
      ]
      let blocks = mino.calcBlocks()
      expect(blocks).toEqual(expect_blocks)
    })

    it('rotが1のとき90度回転した逆z字型のブロックが返ること', () => {
      let mino = new Mino(undefined, 5, 10, 1, 2)
      let expect_blocks = [
        new Block(undefined, 5, 9),
        new Block(undefined, 5, 10),
        new Block(undefined, 6, 10),
        new Block(undefined, 6, 11)
      ]
      let blocks = mino.calcBlocks()
      expect(blocks).toEqual(expect_blocks)
    })

    it('rotが2のとき180度回転した逆z字型のブロックが返ること', () => {
      let mino = new Mino(undefined, 5, 10, 2, 2)
      let expect_blocks = [
        new Block(undefined, 6, 10),
        new Block(undefined, 5, 10),
        new Block(undefined, 5, 11),
        new Block(undefined, 4, 11)
      ]
      let blocks = mino.calcBlocks()
      expect(blocks).toEqual(expect_blocks)
    })

    it('rotが3のとき270度回転した逆z字型のブロックが返ること', () => {
      let mino = new Mino(undefined, 5, 10, 3, 2)
      let expect_blocks = [
        new Block(undefined, 5, 11),
        new Block(undefined, 5, 10),
        new Block(undefined, 4, 10),
        new Block(undefined, 4, 9)
      ]
      let blocks = mino.calcBlocks()
      expect(blocks).toEqual(expect_blocks)
    })

    it('rotが4のとき逆z字型のブロックが返ること', () => {
      let mino = new Mino(undefined, 5, 10, 4, 2)
      let expect_blocks = [
        new Block(undefined, 4, 10),
        new Block(undefined, 5, 10),
        new Block(undefined, 5, 9),
        new Block(undefined, 6, 9)
      ]
      let blocks = mino.calcBlocks()
      expect(blocks).toEqual(expect_blocks)
    })
  })

  describe('shape is 3', () => {
    it('L字型のブロックが返ること', () => {
      let mino = new Mino(undefined, 5, 10, 0, 3)
      let expect_blocks = [
        new Block(undefined, 4, 8),
        new Block(undefined, 4, 9),
        new Block(undefined, 4, 10),
        new Block(undefined, 5, 10)
      ]
      let blocks = mino.calcBlocks()
      expect(blocks).toEqual(expect_blocks)
    })

    it('rotが1のとき90度回転したL字型のブロックが返ること', () => {
      let mino = new Mino(undefined, 5, 10, 1, 3)
      let expect_blocks = [
        new Block(undefined, 7, 9),
        new Block(undefined, 6, 9),
        new Block(undefined, 5, 9),
        new Block(undefined, 5, 10)
      ]
      let blocks = mino.calcBlocks()
      expect(blocks).toEqual(expect_blocks)
    })

    it('rotが2のとき180度回転したL字型のブロックが返ること', () => {
      let mino = new Mino(undefined, 5, 10, 2, 3)
      let expect_blocks = [
        new Block(undefined, 6, 12),
        new Block(undefined, 6, 11),
        new Block(undefined, 6, 10),
        new Block(undefined, 5, 10)
      ]
      let blocks = mino.calcBlocks()
      expect(blocks).toEqual(expect_blocks)
    })

    it('rotが3のとき270度回転したL字型のブロックが返ること', () => {
      let mino = new Mino(undefined, 5, 10, 3, 3)
      let expect_blocks = [
        new Block(undefined, 3, 11),
        new Block(undefined, 4, 11),
        new Block(undefined, 5, 11),
        new Block(undefined, 5, 10)
      ]
      let blocks = mino.calcBlocks()
      expect(blocks).toEqual(expect_blocks)
    })

    it('rotが4のときL字型のブロックが返ること', () => {
      let mino = new Mino(undefined, 5, 10, 4, 3)
      let expect_blocks = [
        new Block(undefined, 4, 8),
        new Block(undefined, 4, 9),
        new Block(undefined, 4, 10),
        new Block(undefined, 5, 10)
      ]
      let blocks = mino.calcBlocks()
      expect(blocks).toEqual(expect_blocks)
    })
  })

  describe('shape is 4', () => {
    it('逆L字型のブロックが返ること', () => {
      let mino = new Mino(undefined, 5, 10, 0, 4)
      let expect_blocks = [
        new Block(undefined, 5, 8),
        new Block(undefined, 5, 9),
        new Block(undefined, 4, 10),
        new Block(undefined, 5, 10)
      ]
      let blocks = mino.calcBlocks()
      expect(blocks).toEqual(expect_blocks)
    })

    it('rotが1のとき90度回転した逆L字型のブロックが返ること', () => {
      let mino = new Mino(undefined, 5, 10, 1, 4)
      let expect_blocks = [
        new Block(undefined, 7, 10),
        new Block(undefined, 6, 10),
        new Block(undefined, 5, 9),
        new Block(undefined, 5, 10)
      ]
      let blocks = mino.calcBlocks()
      expect(blocks).toEqual(expect_blocks)
    })

    it('rotが2のとき180度回転した逆L字型のブロックが返ること', () => {
      let mino = new Mino(undefined, 5, 10, 2, 4)
      let expect_blocks = [
        new Block(undefined, 5, 12),
        new Block(undefined, 5, 11),
        new Block(undefined, 6, 10),
        new Block(undefined, 5, 10)
      ]
      let blocks = mino.calcBlocks()
      expect(blocks).toEqual(expect_blocks)
    })

    it('rotが3のとき270度回転した逆L字型のブロックが返ること', () => {
      let mino = new Mino(undefined, 5, 10, 3, 4)
      let expect_blocks = [
        new Block(undefined, 3, 10),
        new Block(undefined, 4, 10),
        new Block(undefined, 5, 11),
        new Block(undefined, 5, 10)
      ]
      let blocks = mino.calcBlocks()
      expect(blocks).toEqual(expect_blocks)
    })

    it('rotが4のとき逆L字型のブロックが返ること', () => {
      let mino = new Mino(undefined, 5, 10, 4, 4)
      let expect_blocks = [
        new Block(undefined, 5, 8),
        new Block(undefined, 5, 9),
        new Block(undefined, 4, 10),
        new Block(undefined, 5, 10)
      ]
      let blocks = mino.calcBlocks()
      expect(blocks).toEqual(expect_blocks)
    })
  })

  describe('shape is 5', () => {
    it('四角型のブロックが返ること', () => {
      let mino = new Mino(undefined, 5, 10, 0, 5)
      let expect_blocks = [
        new Block(undefined, 4, 9),
        new Block(undefined, 4, 10),
        new Block(undefined, 5, 10),
        new Block(undefined, 5, 9)
      ]
      let blocks = mino.calcBlocks()
      expect(blocks).toEqual(expect_blocks)
    })

    it('rotが1のとき90度回転した四角型のブロックが返ること', () => {
      let mino = new Mino(undefined, 5, 10, 1, 5)
      let expect_blocks = [
        new Block(undefined, 6, 9),
        new Block(undefined, 5, 9),
        new Block(undefined, 5, 10),
        new Block(undefined, 6, 10)
      ]
      let blocks = mino.calcBlocks()
      expect(blocks).toEqual(expect_blocks)
    })

    it('rotが2のとき180度回転した四角型のブロックが返ること', () => {
      let mino = new Mino(undefined, 5, 10, 2, 5)
      let expect_blocks = [
        new Block(undefined, 6, 11),
        new Block(undefined, 6, 10),
        new Block(undefined, 5, 10),
        new Block(undefined, 5, 11)
      ]
      let blocks = mino.calcBlocks()
      expect(blocks).toEqual(expect_blocks)
    })

    it('rotが3のとき270度回転した四角型のブロックが返ること', () => {
      let mino = new Mino(undefined, 5, 10, 3, 5)
      let expect_blocks = [
        new Block(undefined, 4, 11),
        new Block(undefined, 5, 11),
        new Block(undefined, 5, 10),
        new Block(undefined, 4, 10)
      ]
      let blocks = mino.calcBlocks()
      expect(blocks).toEqual(expect_blocks)
    })

    it('rotが4のとき四角型のブロックが返ること', () => {
      let mino = new Mino(undefined, 5, 10, 4, 5)
      let expect_blocks = [
        new Block(undefined, 4, 9),
        new Block(undefined, 4, 10),
        new Block(undefined, 5, 10),
        new Block(undefined, 5, 9)
      ]
      let blocks = mino.calcBlocks()
      expect(blocks).toEqual(expect_blocks)
    })
  })

  describe('shape is 6', () => {
    it('横棒型のブロックが返ること', () => {
      let mino = new Mino(undefined, 5, 10, 0, 6)
      let expect_blocks = [
        new Block(undefined, 3, 10),
        new Block(undefined, 4, 10),
        new Block(undefined, 5, 10),
        new Block(undefined, 6, 10)
      ]
      let blocks = mino.calcBlocks()
      expect(blocks).toEqual(expect_blocks)
    })

    it('rotが1のとき90度回転した横棒型のブロックが返ること', () => {
      let mino = new Mino(undefined, 5, 10, 1, 6)
      let expect_blocks = [
        new Block(undefined, 5, 8),
        new Block(undefined, 5, 9),
        new Block(undefined, 5, 10),
        new Block(undefined, 5, 11)
      ]
      let blocks = mino.calcBlocks()
      expect(blocks).toEqual(expect_blocks)
    })

    it('rotが2のとき180度回転した横棒型のブロックが返ること', () => {
      let mino = new Mino(undefined, 5, 10, 2, 6)
      let expect_blocks = [
        new Block(undefined, 7, 10),
        new Block(undefined, 6, 10),
        new Block(undefined, 5, 10),
        new Block(undefined, 4, 10)
      ]
      let blocks = mino.calcBlocks()
      expect(blocks).toEqual(expect_blocks)
    })

    it('rotが3のとき270度回転した横棒型のブロックが返ること', () => {
      let mino = new Mino(undefined, 5, 10, 3, 6)
      let expect_blocks = [
        new Block(undefined, 5, 12),
        new Block(undefined, 5, 11),
        new Block(undefined, 5, 10),
        new Block(undefined, 5, 9)
      ]
      let blocks = mino.calcBlocks()
      expect(blocks).toEqual(expect_blocks)
    })

    it('rotが4のとき横棒型のブロックが返ること', () => {
      let mino = new Mino(undefined, 5, 10, 4, 6)
      let expect_blocks = [
        new Block(undefined, 3, 10),
        new Block(undefined, 4, 10),
        new Block(undefined, 5, 10),
        new Block(undefined, 6, 10)
      ]
      let blocks = mino.calcBlocks()
      expect(blocks).toEqual(expect_blocks)
    })
  })
})

describe('copy', () => {
  it('return Mino instance that all data copied', () => {
    let m = new Mino(undefined, 3, 5, 2, 4)
    let copied = m.copy()
    expect(copied.x).toEqual(m.x)
    expect(copied.y).toEqual(m.y)
    expect(copied.rot).toEqual(m.rot)
    expect(copied.shape).toEqual(m.shape)
  })
})