//PARALLAX EFFECT 
window.addEventListener('scroll', () => {
    const value = window.scrollY
    title.style.top = `${0.6*value}px`
    
})
// window.onscroll = function() {
//     let Y = window.scrollY
//     h1.style.transform = `translateY(${Y/1.5}px)`
// }

// DARK MODE 
const body = document.querySelector('body')
const footer = document.querySelector('footer a')

const button = document.querySelector('button')
button.addEventListener('click', (e) => {
    body.classList.toggle('darkMode')
})
