// 1 Функции
// Function declaration
// function greet(name) {
//     console.log('Привет -', name)
// }
//
// // Function Expression
// const greet2 = function greet2(name) {
//     console.log('Привет 2 -', name)
// }

// greet('Лиза')
// greet2('Лиза')

// console.log(typeof greet)
// console.dir(greet)

// 2 Анонимные функции

// counter = 0
// const interval = setInterval(function() {
//     if (counter === 5){
//         clearInterval(interval) // clearTimeout
//     } else {
//         console.log(++counter)
//     }
// }, 1000)

// 3 Стрелочные функции
// function greet() {
//     console.log('Привет -')
// }
//
// const arrow = (name, age) => {
//     console.log('Привет -', name, age)
// }
//
// const arrow2 = name => console.log('Привет -', name)
//
// arrow('Dmytro')
//
// arrow2('Dmytro')
//
// const pow2 = num => num ** 2
//
// console.log(pow2(5))
//
// // 4 Параметры по умолчанию
// const sum = (a = 40, b = a * 2) => a + b
// console.log(sum())
//
// function sumAll(...all) {
//     let result = 0
//     for(let num of all) {
//         result += num
//     }
//     return result
// }
//
// const res = sumAll(1, 2, 3, 4, 5, 6, 7)
// console.log(res)

// 5 Замыкание
function createMember(name) {
    return function(lastName) {
        console.log(name + lastName)
    }
}

const logWithLastName = createMember('Dmytro')
console.log(logWithLastName('Krapyvianskyi'))
console.log(logWithLastName('Abrahamenko'))