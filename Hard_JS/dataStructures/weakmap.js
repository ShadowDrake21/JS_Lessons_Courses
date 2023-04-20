let obj = {name: 'weakmap'}

// const arr = [obj]
//
// obj = null
//
// console.log(obj)
// console.log(arr[0])

const map = new WeakMap([
    [obj, 'obj data']
])
// get, set, delete, has
obj = null

// ========================
const cache = new WeakMap()

function cacheUser(user) {
    if(!cache.has(user)) {
        cache.set(user, Date.now())
    }
    return cache.get(user)
}

let elena = {name: 'Elena'}
let alex = {name: 'Alex'}

cacheUser(elena)
cacheUser(alex)

elena = null

console.log(cache.has(elena))
console.log(cache.has(alex))