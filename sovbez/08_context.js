// const person = {
//   surname: 'Старк',
//   knows: function (what, name) {
//     console.log(`Ты ${what} знаешь, ${name} ${this.surname}`)
//   },
// }

// const john = { surname: 'Сина' }

// person.knows('все', 'Тони')
// person.knows.call(john, 'ничего не', 'Джон')
// person.knows.apply(john, ['ничего не', 'Джон'])
// person.knows.call(john, ...['ничего не', 'Джон'])
// const bound = person.knows.bind(john, 'ничего не', 'Джон')
// bound()

// ===============
// function Person(name, age) {
//   this.name = name
//   this.age = age

//   console.log(this)
// }

// const elena = new Person('Elena', 20)

// =============== explicit
// function logThis() {
//   console.log(this)
// }

// const obj = { num: 42 }
// logThis.apply(obj)
// logThis.call(obj)
// logThis.bind(obj)()

// // =============== implicit
// const animal = {
//   legs: 4,
//   logThis: function () {
//     console.log(this)
//   }
// }

// animal.logThis()

function Cat(color) {
  this.color = color
  console.log('This', this)
  ;(() => console.log('Arrow this', this))()
}

new Cat('red')
