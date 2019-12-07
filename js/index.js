// Your code goes here

// keypress
const body = document.querySelector('body');
body.addEventListener('keypress', (e) => {
    e.target.style.backgroundColor = "lavender"
})


// Mouseenter&mouseleave
const header = document.querySelector('.main-navigation');
header.addEventListener('mouseenter', (event) => {
    event.stopPropagation();
    event.target.style.fontWeight = 'bold'
    event.target.style.color = 'red'
    });
header.addEventListener('mouseleave', (event) => {
    event.target.style.color = 'lightgray'
})    

// mouse enter
const footerText = document.querySelector('.footer p');
footerText.addEventListener('mouseenter', function () {
    footerText.style.color = 'crimson'
})

// key up
const myBtn = document.querySelector('body');
myBtn.addEventListener('keyup', function () {
    body.style.color = "hotpink"
})

// click
const myBtns = document.querySelectorAll(".btn");
myBtns.forEach(button => {
    button.addEventListener('click', e => {
        e.target.style.border = '3px solid black';
    })
})

// doubleclick
const heading4 = document.querySelectorAll('h4');
heading4.forEach(h4 => {
    h4.addEventListener('dblclick', (event) => {
        event.target.style.fontWeight = 'bold'
    })
})