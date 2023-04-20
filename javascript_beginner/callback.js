function myFunc(callback) {
    const a = [4, 5, 6]
    let element = document.querySelector('.out1')
    callback(element, a)
    // out(element, a)
}

function out(elem, arr) {
    elem.innerHTML = arr.join(' ')
}

function out2(elem, arr) {
    elem.innerHTML = arr.join('-')
}

myFunc(out2)
myFunc(out)

function getCats(callback2) {
    fetch('https://cat-fact.herokuapp.com/facts')
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            callback2(data)
        })
}

function showCats(data) {
    data.forEach(item => console.log(item.text))
}

function showCats2(data) {
    data.forEach(item => document.querySelector('.out2').innerHTML += item.text + '<br>')
}


getCats(showCats)
getCats(showCats2)