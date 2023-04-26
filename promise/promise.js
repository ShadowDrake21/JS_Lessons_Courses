function noop() {}

class DmytroPromise {
  constructor(executor) {
    this.queue = []
    this.errorHandler = noop
    this.finallyHandler = noop

    try {
      executor.call(null, this.onResolve.bind(this), this.onReject.bind(this))
    } catch (e) {
      this.errorHandler(e)
    } finally {
      this.finallyHandler()
    }
  }

  then(fn) {
    this.queue.push(fn)
    return this
  }

  onResolve(data) {
    this.queue.forEach((callback) => {
      data = callback(data)
    })

    this.finallyHandler()
  }

  onReject(error) {
    this.errorHandler(error)

    this.finallyHandler()
  }

  catch(fn) {
    this.errorHandler = fn
    return this
  }

  finally(fn) {
    this.finallyHandler = fn
    return this
  }
}

const promise = new DmytroPromise((resolve, reject) => {
  setTimeout(() => {
    resolve('NgRx')
  }, 1500)
})

promise
  .then((course) => course.toUpperCase())
  .then((title) => console.log('Dmytro Promise: ', title))
  .catch((err) => console.log('Error: ', err))
  .finally(() => console.log('Finally'))

module.exports = DmytroPromise
