import { Field } from '../../src/js/field'
import { Block } from '../../src/js/block'

jest.mock('../../src/js/block')

describe('draw', () => {
  it('call Block.draw', () => {
    const draw_mock = jest.fn()
    Block.mockImplementation(() => {
      return {
        draw: draw_mock
      }
    })
    const f = new Field(undefined)
    f.draw()
    // Fieldにて1である数のチェック。
    // 底辺以外の両端が1+底辺が全て1。
    // 高さが21、幅が12であるため、2（両端）x20（底辺以外の高さ）+12（底辺）=52
    expect(draw_mock.mock.calls.length).toBe(52)
  })
})