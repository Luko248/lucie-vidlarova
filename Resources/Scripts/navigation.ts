const menuBtn = document.getElementById('nebuBtn');
const menu = document.querySelector('.nav__menu');
const navItems = document.querySelectorAll('.nav__item');
const htmlDoc = document.querySelector('body');

function toggleNavClasses(){
    menuBtn.classList.toggle('burger--open');
    menu.classList.toggle('nav__menu--open');
    htmlDoc.classList.toggle('overflow-hidden');
}

export function initNav(){
    menuBtn.addEventListener('click', () =>{
        toggleNavClasses();
    });

    navItems.forEach(navItems =>{
        navItems.addEventListener('click', () =>{
            toggleNavClasses();
        });
    });
}