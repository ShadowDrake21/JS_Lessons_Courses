// Wrapper
const withDefaultValue = (target, defaultValue = 0) => {
    return new Proxy(target, {
        get: (obj, prop) => (prop in obj ? obj[prop] : defaultValue)
    })
}

const position = withDefaultValue({
        x: 24,
        y: 42
    },
    0
)

// console.log(position)

// Hidden properties
const withHiddenProps = (target, prefix = '_') => {
    return new Proxy(target, {
        has: (obj, prop) => (prop in obj) && (!prop.startsWith(prefix)),
        ownKeys: obj => Reflect.ownKeys(obj).filter(p => !p.startsWith(prefix)),
        get: (obj, prop, receiver) => (prop in receiver ? obj[prop] : void 0)
    })
}

const data = withHiddenProps({
    name: 'Dmytro',
    age: 18,
    _uid: '12312312341'
})

// Optimization

// const index = {}
// userData.forEach(i => (index[i.id] = i))

const IndexedArray = new Proxy(Array, {
    construct(target, [args]) {
        const index = {}
        args.forEach(item => (index[item.id] = item))

        return new Proxy(new target(...args), {
            get(arr, prop) {
                switch (prop) {
                    case 'push':
                        return item => {
                            index[item.id] = item
                            arr[prop].call(arr, item)
                        }
                    case 'findById':
                        return id => index[id]
                    default:
                        return arr[prop]
                }
            }
        })
    }
})

const users = new IndexedArray([
    {id: 11, name: 'Dmytro', job: 'Programmer', age: 18},
    {id: 22, name: 'Elena', job: 'Student', age: 22},
    {id: 33, name: 'Victor', job: 'Backend', age: 23},
    {id: 44, name: 'Vasilisa', job: 'Teacher', age: 24}])