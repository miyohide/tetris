import { Block } from '../../src/js/block'

describe('equals', () => {
  it('xが異なる時はequalsはfalseを返すこと', () => {
    let b1 = new Block(undefined, 1, 2)
    let b2 = new Block(undefined, 2, 2)
    expect(b1.equals(b2)).toBeFalsy()
  })

  it('yが異なる時はequalsはfalseを返すこと', () => {
    let b1 = new Block(undefined, 1, 2)
    let b2 = new Block(undefined, 1, 3)
    expect(b1.equals(b2)).toBeFalsy()
  })

  it('xとyが同じ時はequalsはtrueを返すこと', () => {
    let b1 = new Block(undefined, 1, 2)
    let b2 = new Block(undefined, 1, 2)
    expect(b1.equals(b2)).toBeTruthy()
  })
})