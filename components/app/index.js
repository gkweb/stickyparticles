import 'dom4'
import 'svgxuse'
import domready from 'domready'
import Canvas from '../canvas'

domready(() => {
  let canvas = new Canvas({element: document.querySelector('[data-component=canvas]')})
})
