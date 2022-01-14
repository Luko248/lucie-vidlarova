const navBtn = document.getElementById('navBtn');
const nav = document.querySelector('nav');
const htmlDoc = document.querySelector('body');

export function initNav(){
    navBtn.addEventListener('click', () =>{
        navBtn.classList.toggle('burger--open');
        nav.classList.toggle('nav--open');
        htmlDoc.classList.toggle('overflow-hidden');
    });
}