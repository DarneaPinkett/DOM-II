// Your code goes here

// keypress
const body = document.querySelector('body');
body.addEventListener('keypress', (e) => {
    e.target.style.backgroundColor = "lavender"
})


// Mouseover
const header = document.querySelector('.main-navigation');
header.addEventListener('mouseover', (event) => {
    event.stopPropagation();
    event.target.style.fontWeight = 'bold'
    event.target.style.color = 'red'
})

// mouse enter
const footerText = document.querySelector('.footer p');
footerText.addEventListener('mouseenter', function () {
    footerText.style.color = 'crimson'
})

// key up
const myBtn = document.querySelector('body');
myBtn.addEventListener('keyup', function () {
    body.style.color = "dodgerblue"
})

// click
const myBtns = document.querySelectorAll(".btn");
myBtns.forEach(button => {
    button.addEventListener('click', e => {
        e.target.style.border = '3px solid black';
    })
})
