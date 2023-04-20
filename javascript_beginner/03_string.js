// const name = 'Дмитрий'
// const age = 18

// function getAge() {
//     return age
// }

// const output = 'Привет, меня зовут ' + name + ' и мой возраст ' + age + ' лет.'
// const output = `Привет, меня зовут ${name} и мой возраст ${age < 17 ? 'A' : 'B'} лет`
// console.log(output)
// console.log(typeof name)

// const output = `
//    <div>This is div</div>
//    <p>This is p</p>
// `

// console.log(output)

// const name = 'Дмитрий'
// // new String()
// console.log(name.length)
// console.log(name.toUpperCase())
// console.log(name.toLowerCase())
// console.log(name.charAt(2))
// console.log(name.indexOf('а'))
// console.log(name.toLowerCase().startsWith('дми'))
// console.log(name.startsWith('Дми'))
// console.log(name.endsWith('трий'))
// console.log(name.repeat(3))
//
// const string = '        password        '
// console.log(string.trim())
// console.log(string.trimRight())
// console.log(string.trimLeft())

function logPerson(s, name, age) {
    if (age < 0) {
        age = 'Еще не родился'
    }
    return `${s[0]}${name}${s[1]}${age}${s[2]}`
}

const personName = 'Дмитрий'
const personName2 = 'Андрей'
const personAge = 18
const personAge2 = -10
const output = logPerson`Имя: ${personName}, Возраст: ${personAge}!`
const output2 = logPerson`Имя: ${personName2}, Возраст: ${personAge2}!`

console.log(output)
console.log(output2)