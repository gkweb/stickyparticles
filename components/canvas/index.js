export default class Canvas {
  /**
   * @param {Object} options -
   * @param {HTMLElement} options.element -
   */
  constructor (options) {
    console.log('Constructed')
    this.element = options.element
    this.canvas = this.element.querySelector('canvas')
    this.ctx = this.canvas.getContext('2d')
  }
  /**
   * @param {Object} i - Point on canvas
   */
  draw (i) {
    // Do something
  }
}
