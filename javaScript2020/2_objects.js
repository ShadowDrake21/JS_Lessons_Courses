const person = {
    name: 'Max',
    age: 30
}

// console.log(Object.getOwnPropertyDescriptors(person))
// console.log(Object.getOwnPropertyDescriptor(person))

// console.log(Object.entries(person))
// console.log(Object.fromEntries([ [ 'name', 'Max' ], [ 'age', 30 ] ]))
// console.log(Object.fromEntries(Object.entries(person)))

// console.log(Object.entries(['M', 'A', 'X']))

// for(const [key, value] of Object.entries(person)) {
//     console.log(`${JSON.stringify(key)}: ${JSON.stringify(value)}`)
// }

console.log(Object.keys(person))
console.log(Object.values(person))