const heading = document.getElementById('hello')
// const heading2 = document.getElementsByTagName('h2')[0]
// const heading2 = document.getElementsByClassName('h2-class')[0]
// const heading2 = document.querySelector('.h2-class')
// const heading2 = document.querySelector('#sub-hello')
const heading2 = document.querySelector('h2')

// console.dir(heading2)
//
// const heading3 = heading2.nextElementSibling
// console.log(heading3)

const h2List = document.querySelectorAll('h2')
// console.log(h2List)
const heading3 = h2List[h2List.length - 1]
// console.log(heading3)

setTimeout(() => {
    addStylesTo(heading, 'JavaScript')
}, 1500)

const link = heading3.querySelector('a')

link.addEventListener('click', (event) => {
    event.preventDefault()
    console.log('Click on link', event.target.getAttribute('href'))
    const url = event.target.getAttribute('href')

    window.location = url
})

setTimeout(() => {
    addStylesTo(link, 'Практикуйся', 'blue')
}, 3000)

setTimeout(() => {
    addStylesTo(heading2, 'И все получится!', 'yellow', '2rem')
}, 4500)

function addStylesTo(node, text, color = 'red', fontsize) {
    node.textContent = text
    node.style.color = color
    node.style.textAlign = 'center'
    node.style.backgroundColor = 'black'
    node.style.padding = '2rem'
    node.style.display = 'block'
    node.style.width = '100%'
    if (fontsize) {
        node.style.fontsize = fontsize
    }
}

heading.onclick = () => {
    if (heading.style.color === 'red') {
        heading.style.color = '#000'
        heading.style.backgroundColor = '#fff'
    } else {
        heading.style.color = 'red'
        heading.style.backgroundColor = '#000'
    }
}

heading2.addEventListener('dblclick', () => {
    if (heading2.style.color === 'yellow') {
        heading2.style.color = '#000'
        heading2.style.backgroundColor = '#fff'
    } else {
        heading2.style.color = 'yellow'
        heading2.style.backgroundColor = '#000'
    }
})