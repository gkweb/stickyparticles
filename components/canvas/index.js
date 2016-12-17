export default class Canvas {
  /**
   * @param {Object} options -
   * @param {HTMLElement} options.element -
   */
  constructor (options) {
    console.log('Constructed')

    this.element = options.element
    this.debug = this.element.querySelector('.debug')
    this.canvas = this.element.querySelector('canvas')
    this.setCanvasSize()
    this.toggleBtn = this.element.querySelector('.toggle')
    this.genBtn = this.element.querySelector('.generate')
    this.ctx = this.canvas.getContext('2d')
    this.colours = ['transparent']
    this.settings = {}
    this.settings.playing = true
    this.settings.gravity = 0
    this.settings.ballsAmount = 10
    this.settings.ballMinWidth = 5
    this.settings.ballMaxWidth = 5
    this.settings.collision = {}
    this.settings.collision.tileSize = 50

    // Setup the balls
    this.balls = []
    this.generateBalls()

    this.toggleBtn.addEventListener('click', event => {
      this.settings.playing = !this.settings.playing
      if (this.settings.playing) this.draw()
    })
    this.genBtn.addEventListener('click', event => {
      this.generateBalls()
    })

    window.addEventListener('resize', ::this.setCanvasSize)

    this.draw()
  }

  /**
   * Sets canvas width to fit whole screen
   */
  setCanvasSize () {
    let elementBounds = this.element.getBoundingClientRect()
    this.canvas.width = elementBounds.width
    this.canvas.height = elementBounds.height
  }

/**
 * @param {Integer} min - minimum int
 * @param {Integer} max - maximum int
 * @returns {Integer} r - random integer -
 */
  getRandomInt (min, max) {
    let r = 0
    min = Math.ceil(min)
    max = Math.floor(max)
    r = Math.floor(Math.random() * (max - min)) + min
    return r
  }

  /**
   * Generates balls to settings speficied amount
   */
  generateBalls () {
    let ballTemplate = {
      x: this.canvas.width / 2,
      y: 20,
      width: 20,
      velocityX: 1,
      velocityY: 1,
      cor: 1,
      colour: 'violet',
      candidate: false
    }

    for (let i = 0; i <= this.settings.ballsAmount; i++) {
      let ball = Object.assign({}, ballTemplate)
      ball.width = this.getRandomInt(this.settings.ballMinWidth, this.settings.ballMaxWidth)
      ball.x = this.getRandomInt(ball.width, (this.canvas.width - ball.width))
      ball.y = ball.width
      ball.velocityY = this.getRandomInt(1, 100) * 0.01
      ball.velocityX = this.getRandomInt(1, 100) * 0.01
      ball.colour = this.colours[this.getRandomInt(0, (this.colours.length - 1))]
      this.balls.push(ball)
    }
  }

  /**
   * Draws onto the canvas
   */
  draw () {
    console.log('looopde doop')
    // Do something
    this.ctx.fillStyle = 'black'
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height)

    for (let i = 0; i < this.balls.length - 1; i++) {
      let candidates = this.getCandidates(this.balls[i].x, this.balls[i].y)
      this.balls[i].candidate = false
      if (candidates.length) {
        candidates.sort((a, b) => {
          const aArc = Math.atan2(a.x, a.y)
          const bArc = Math.atan2(b.x, b.y)
          if (aArc > bArc) {
            return 1
          }
          if (aArc < bArc) {
            return -1
          }
          // a must be equal to b
          return 0
        })
        this.ctx.beginPath()
        for (let i = 0; i < candidates.length - 1; i++) {
          this.balls[this.balls.indexOf(candidates[i])].candidate = true
          // const halfWidth = candidates[i].width * 0.5
          if (i === 0) {
            this.ctx.moveTo(candidates[i].x, candidates[i].y)
          } else {
            this.ctx.lineTo(candidates[i].x, candidates[i].y)
          }
        }
        this.ctx.stroke()
        this.ctx.closePath()
      }

      this.ctx.fillStyle = this.balls[i].candidate ? 'green' : this.balls[i].colour
      this.ctx.beginPath()
      this.ctx.ellipse(this.balls[i].x, this.balls[i].y, this.balls[i].width, this.balls[i].width, 0, (2 * Math.PI), false)
      this.ctx.strokeStyle = 'white'
      this.ctx.fill()
      this.ctx.stroke()

      // if (this.balls[i].candidate) {
      //   // Bounding rect
      //   const halfTile = 0.5 * this.settings.collision.tileSize
      //   this.ctx.beginPath()
      //   this.ctx.rect(this.balls[i].x - halfTile, this.balls[i].y - halfTile, this.settings.collision.tileSize, this.settings.collision.tileSize)
      //   this.ctx.strokeStyle = 'lightgreen'
      //   this.ctx.stroke()
      // }

      this.balls[i].x += this.balls[i].velocityX
      this.balls[i].y += this.balls[i].velocityY

      // Gravity
      this.balls[i].velocityY += this.settings.gravity

      if ((this.balls[i].x + this.balls[i].velocityX) >= (this.canvas.width - this.balls[i].width) || this.balls[i].x <= this.balls[i].width) this.balls[i].velocityX *= -this.balls[i].cor
      if ((this.balls[i].y + this.balls[i].velocityY) >= (this.canvas.height - this.balls[i].width)) {
        this.balls[i].y = this.canvas.height - this.balls[i].width
        this.balls[i].velocityY *= -(this.balls[i].cor)
      } else if ((this.balls[i].y + this.balls[i].velocityY) <= this.balls[i].width) {
        this.balls[i].velocityY *= -(this.balls[i].cor)
      }
    }

    // Recurse
    if (this.settings.playing) this.loop = requestAnimationFrame(::this.draw)
  }

  /**
   * @param {Float} x - center X coord
   * @param {Float} y - center y coord
   * @returns {Object} fBalls - filtered balls
   */
  getCandidates (x, y) {
    let fBalls = []

    fBalls = this.balls.filter((value, index, arr) => {
      let candidates = []
      const halfTile = 0.5 * this.settings.collision.tileSize
      const startX = x - halfTile
      const endX = x + halfTile
      const startY = y - halfTile
      const endY = y + halfTile

      if (value.x >= startX && value.x <= endX && value.y >= startY && value.y <= endY) {
        candidates.push(index)
      }
      return candidates.length > 0
    })
    return fBalls
  }

  /**
   * Sets debug values
   */
  setDebug () {
    this.debug.innerHTML = `
      <span class='ball-x'>X: ${this.ball.x}</span>
      <span class='ball-y'>Y: ${this.ball.y}</span>
      <span class='ball-y'>VY: ${this.ball.velocityY}</span>
      <span class='ball-y'>VX: ${this.ball.velocityX}</span>
      <span class='ball-cor'>COR applied: ${(this.ball.velocityY < 0)}</span>
      <span class='ball-cor'>Gravity: ${this.ball.gravity}</span>
    `
  }
}
