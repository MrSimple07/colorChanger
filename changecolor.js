const body = document.querySelector('body')
const button = document.querySelector('button')
const p = document.querySelector('p')

const colors=['red', 'purple', 'blue', 'green', 'white', 'yellow', 'pink']

body.style.background="red";

const changeColor = () =>{
    const colorIndex = parseInt(Math.random()* colors.length)

    body.style.background = colors[colorIndex]

    if(colorIndex===4){
        p.style.color="black"
    }

}

button.addEventListener('click', changeColor)