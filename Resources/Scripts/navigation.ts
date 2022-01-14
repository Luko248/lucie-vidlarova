const menuBtn = document.getElementById('nebuBtn');
const menu = document.querySelector('.nav__menu');
const htmlDoc = document.querySelector('body');

export function initNav(){
    menuBtn.addEventListener('click', () =>{
        menuBtn.classList.toggle('burger--open');
        menu.classList.toggle('nav__menu--open');
        htmlDoc.classList.toggle('overflow-hidden');
    });
}