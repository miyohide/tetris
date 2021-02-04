import { Block } from '../../src/js/block'

describe('draw', () => {
  it('call p5 functions', () => {
    const push_mock = jest.fn()
    const rect_mock = jest.fn()
    const pop_mock = jest.fn()
    const mock = {
      push() { push_mock() },
      rect(a1, a2, a3, a4) { rect_mock(a1, a2, a3, a4) },
      pop() { pop_mock() },
    }
    const x_val = 2
    const y_val = 4
    const block_size = 25
    let b = new Block(mock, x_val, y_val)
    b.draw()
    expect(push_mock.mock.calls.length).toBe(1)
    expect(rect_mock.mock.calls.length).toBe(1)
    expect(rect_mock.mock.calls[0][0]).toBe(x_val * block_size)
    expect(rect_mock.mock.calls[0][1]).toBe(y_val * block_size)
    expect(rect_mock.mock.calls[0][2]).toBe(block_size)
    expect(rect_mock.mock.calls[0][3]).toBe(block_size)
    expect(pop_mock.mock.calls.length).toBe(1)
  })
})