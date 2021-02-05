import { Field } from '../../src/js/field'
import { Block } from '../../src/js/block'

jest.mock('../../src/js/block')

describe('draw', () => {
  it('call Block.draw', () => {
    Block.mockImplementation(() => {
      return {
        draw: () => {
          console.log('call block.draw')
        }
      }
    })
    const f = new Field(undefined)
    f.draw()
  })
})