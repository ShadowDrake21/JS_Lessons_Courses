// const people = [
//   { id: 1, name: 'Dmytro', age: 20 },
//   { id: 2, name: 'Vasilisa', age: 40 },
//   { id: 3, name: 'Taras', age: 10 },
//   { id: 4, name: 'Alona', age: 30 },
// ]

// console.table(people)

console.time('timer')

const items = []
for (let i = 0; i < 1000000; i++) {
  items.push({ el: i + 1 })
}

console.timeEnd('timer')
