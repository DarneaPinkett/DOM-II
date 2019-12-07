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