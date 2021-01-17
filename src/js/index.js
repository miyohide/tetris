import p5 from 'p5'
import { tetris } from './tetris.js'

document.body.style.margin = '0'

const app = new p5(tetris, document.body)
