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

// mouse enter + mouseleave
const footerText = document.querySelector('.footer p');
footerText.addEventListener('mouseenter', function () {
    footerText.style.color = 'crimson'
})
footerText.addEventListener('mouseleave', function () {
    footerText.style.fontWeight = 'bold'
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

// resize
const bus = document.querySelector(".bus");
window.addEventListener('resize', () => {
    bus.src ='img/bus.jpg';
})

// scroll
let last_scroll = 0;
let ticking = false;

function doSomething(scroll_pos) {

}
window.addEventListener('scroll', function(e) {
    last_scroll = window.scrollY;

    if(!ticking) {
        window.requestAnimationFrame(function() {
            doSomething(last_scroll);
            ticking = false;
        });
        ticking = true;
    }
})

// contextmenu
window.oncontextmenu = (e) => {
    e.preventDefault();
}