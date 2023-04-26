const person = {
  name: 'Dmytro',
}

function info(phone, email) {
  console.log(`Name: ${this.name}, phone: ${phone}, Email: ${email}`)
}

// Demo
// info.bind(person)('12345', 'dimka@gmail.com')
// info.bind(person, '12345')('dimka@gmail.com')
// info.bind(person, '12345', 'dimka@gmail.com')()

// 1 Simple
// function bind(fn, context, ...rest) {
//   return fn.bind(context, ...rest)
// }

// 2 Without built-in methods
// function bind(fn, context, ...rest) {
//   return function (...args) {
//     const uniqId = Date.now().toString()
//     context[uniqId] = fn

//     const result = context[uniqId](...rest.concat(args))

//     delete context[uniqId]

//     return result
//   }
// }

// 3 ES5 syntax
// function bind(fn, context) {
//   const rest = Array.prototype.slice.call(arguments, 2)
//   return function () {
//     const args = Array.prototype.slice.call(arguments)
//     return fn.apply(context, rest.concat(args))
//   }
// }

// 4 ES6 syntax
// function bind(fn, context, ...rest) {
//   return function (...args) {
//     // return fn.apply(context, rest.concat(args))
//     return fn.call(context, ...rest.concat(args))
//   }
// }

// bind(info, person)('12345', 'dimka@gmail.com')
// bind(info, person, '12345')('dimka@gmail.com')
// bind(info, person, '12345', 'dimka@gmail.com')()

// Call
function call(fn, context, ...args) {
  const uniqId = Date.now().toString()
  context[uniqId] = fn

  const result = context[uniqId](...args)

  delete context[uniqId]

  return result
}

// call(info, person, '123456', 'c@ukr.net')

// Apply
function apply(fn, context, args) {
  const uniqId = Date.now().toString()
  context[uniqId] = fn

  const result = context[uniqId](...args)

  delete context[uniqId]

  return result
}

apply(info, person, ['123456', 'c@ukr.net'])
