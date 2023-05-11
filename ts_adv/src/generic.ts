// const cars: string[] = ['Ford', 'Audi']
// const cars2: Array<string> = ['Ford', 'Audi']

// const promise: Promise<number> = new Promise(resolve => {
//   setTimeout(() => {
//     resolve(42)
//   }, 2000)
// })

// promise.then(data => {
//   console.log(data.toFixed(1))
// })

function mergeObjects<T extends object, R extends object>(a:T, b:R) {
  return Object.assign({}, a, b)
}


const merged = mergeObjects({name: 'Dmytro'}, {age: 18})
const merged2 = mergeObjects({model: 'Ford'}, {year: 2010})

// const merged3 = mergeObjects({a: 1}, {'bbb'})
// console.log(merged3)
// console.log(merged)

// =====================
interface ILength {
  length: number
}

function withCount<T extends ILength>(value: T): {value: T, count: string} {
  return {
    value,
    count: `In this object ${value.length} symbols`
  }
}

// console.log(withCount('Hi TypeScript'))
// console.log(withCount(['I', 'Am', 'An', 'Array']))
// console.log(withCount(20))
// console.log(withCount({length: 20}))

// ===========================
// function getObjectValue<T extends object, R extends keyof T>(obj: T, key: R) {
//   return obj[key]
// }
// const person = {
//   name: 'Dmytro',
//   age: 26,
//   job: 'JavaScript'
// }

// console.log(getObjectValue(person, 'name'))
// console.log(getObjectValue(person, 'age'))
// console.log(getObjectValue(person, 'job'))

// ================

class Collection<T extends number | string | boolean> {
  constructor(private _items: T[] = []) {
  }

  add (item: T) {
    this._items.push(item)
  }

  remove(item: T) {
    this._items = this._items.filter(i => i !== item)
  }

  get items(): T[] {
    return this._items
  }
}

// const strings = new Collection(['I', 'Am', 'Strings'])
// strings.add('!')
// strings.remove('Am')
// console.log(strings.items)

// const numbers = new Collection([1, 2, 3])
// numbers.add(2)
// numbers.remove(3)
// console.log(numbers.items)

// const objs = new Collection([{a: 1}, {b: 2}])
// objs.remove({b: 2})
// console.log(objs.items)

interface Car {
  model: string
  year: number
}

function createAndValidateCar(model: string, year: number): Car {
  const car: Partial <Car> = {}
  if (model.length > 3) {
    car.model = model
  }

  if(year > 2000) {
    car.year = year
  }

  return car as Car
}

// =========================
 const cars: Readonly<Array<string>> = ['Ford', 'Audi']
//  cars.shift()
// cars[1]

const ford: Readonly<Car> = {
  model: 'Ford',
  year: 2020
}

// ford.model = 'Ferrari'