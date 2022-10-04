const open = document.querySelector('.fa-bars');
const close = document.querySelector('.fa-xmark');
const menu = document.querySelector('.nav--menu');
const view = document.querySelector('.content--view');

open.addEventListener('click', function(e){
    view.style.display = 'none'
    menu.style.display = 'block'
})

close.addEventListener('click', function(e){
    view.style.display = 'block'
    menu.style.display = 'none'
})

console.log(open, close, menu)