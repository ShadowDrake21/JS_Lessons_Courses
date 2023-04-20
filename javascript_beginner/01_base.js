/*Переменные*/
//camelCase
// const firstName = 'Dmytro'
// // let age = 18 // number
// const isProgrammer = true // boolean
//
// const _ = 'private'
// const $ = 'some value'
//
// const withNum5 = '5'
// // const 5withNum // err
//
// // 2 Типы данных, Мутирование
// // console.log('Имя человека: ' + firstName + ', а возраст человека: ' + age)
// // console.log(age.toString())
// // alert('Имя человека: ' + firstName + ', а возраст человека: ' + age)
// // const lastName = prompt('Введите фамилию:')
// // alert(firstName + ' ' + lastName)
//
// // 3 Операторы
// let currentYear = 2023
// const birthYear = 2004
//
// // const age = currentYear + birthYear
//
// const a = 10
// const b = 5
// let c = 32
// c = c + a
// c += a
// c -= a
// c *= a
// c /= a
//
// console.log(a + b)
// console.log(a - b)
// console.log(a * b)
// console.log(a / b)
// console.log(++currentYear)
// console.log(--currentYear)
// console.log(c)

// 4 Типы данных
// const isProgrammer = true
// const name = 'Dmytro'
// const age = 26
// let x
// console.log(typeof name)
// console.log(typeof age)
// console.log(typeof isProgrammer)
// console.log(null)
// console.log(typeof x)

// 5 Приоритет операторов
// const fullAge = 18
// const birthYear = 2004
// const currentYear = 2023
//
// // > < >= <=
// const isFullAge = currentYear - birthYear >= fullAge // 18 <= 19
//
// console.log(isFullAge)
//
// // 6 Условные операторы
// const courseStatus = 'fail' // ready, fail, pending
//
// if (courseStatus === 'ready') {
//     console.log('Курс уже готов и его можно проходить')
// } else if (courseStatus === 'pending') {
//     console.log('Курс пока находиться в процесе разработки')
// } else {
//     console.log('Курс не получился')
// }

// const isReady = true

// if (isReady) {
//     console.log('Все готово!')
// } else {
//     console.log('Все не готово!')
// }

// Тернарное выражение
// isReady ? console.log('Все готово!') : console.log('Все не готово!')

// const num1 = 42 // number
// const num2 = '42' // string
//
// console.log(num1 === num2)

// 7 Булевая логика

// 8 Функции

// function calculateAge(year){
//     return 2023 - year;
// }

// console.log(calculateAge(2004))
// console.log(calculateAge(1994))
// console.log(calculateAge(2000))
//
// function logInfoAbout(name, year) {
//     const age = calculateAge(year);
//
//     if(age > 0) {
//         console.log('Человек по имени ' + name + ' сейчас имеет возраст ' + age)
//     } else {
//         console.log('Вообще-то это уже будущее')
//     }
// }
//
// logInfoAbout('Дмитрий', 2004)
// logInfoAbout('Катерина', 2002)
//
// logInfoAbout('Катерина', 2025)

// 9 Массивы
// const cars = ['Мазда', 'Мерседес', 'Форд']
// console.log(cars.length)
//
// // const cars = new Array('Мазда', 'Мерседес', 'Форд')
// // console.log(cars)
//
// console.log(cars[1])
// console.log(cars[2])
// console.log(cars[0])
//
// cars[0] = 'Porsche'
// cars[cars.length] = 'Mazda'
// console.log(cars)

// 10 Циклы
// const cars = ['Мазда', 'Мерседес', 'Форд', 'Porsche']

// for(let i = 0; i < cars.length; i++) {
//     const car = cars[i]
//     console.log(car)
// }

// for(let car of cars) {
//     console.log(car)
// }

// 11 Объекты
const person = {
    firstName: 'Dmytro',
    lastName: 'Krapyvianskyi',
    year: 2004,
    languages: ['Ru', 'Ua', 'En', 'Pl'],
    hasWife: false,
    greet: function() {
        console.log('greet from person')
    }
}

console.log(person.firstName)
console.log(person['lastName'])
const key = 'year'
console.log(person[key])
person.hasWife = true
console.log(person)
person.isProgrammer = true
console.log(person)
person.greet()