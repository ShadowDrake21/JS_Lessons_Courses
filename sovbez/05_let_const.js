// let
// let a = 'Variable a'
// let b = 'Variable b'
// {
//   a = 'New Variable a'
//   let b = 'Local Variable b'
//   console.log('Scope A', a)
//   console.log('Scope B', b)
//   // console.log('Scope C', c)
//   // let c = 'Something'
// }
// console.log('A:', a)
// console.log('B:', b)

// Const
const PORT = 8080
const array = ['JavaScript', 'is', 'awesome']
array.push('!')
array[0] = 'JS'
console.log(array)

const obj = {}
obj.name = 'Dmytro'
obj.age = 18

console.log(obj)

delete obj.name

console.log(obj)
