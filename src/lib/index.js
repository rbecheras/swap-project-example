import debug from 'debug'

const d = debug('swap-project-example')

d('starting app')

export default class DemoClass {
  constructor () {
    this.propA = 'A'
    this.propB = 'B'
  }

  concatenate () {
    return this.propA + this.propB
  }
}

d('finished app')
