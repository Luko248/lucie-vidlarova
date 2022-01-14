const menuBtn = document.getElementById('nebuBtn')
const nav = document.querySelector('nav')
const menu = document.querySelector('.nav__menu')
const navItems = document.querySelectorAll('.nav__item')
const htmlDoc = document.querySelector('body')
const gallery = document.getElementById('gallery')
const contact = document.getElementById('contact')
const social = document.querySelector('.social')
const halfDisplayHeight = window.innerHeight / 2

function toggleOpenMenuClasses(){
    menuBtn.classList.toggle('burger--open')
    menu.classList.toggle('nav__menu--open')
    htmlDoc.classList.toggle('overflow-hidden')

    if (nav.classList.contains('nav--dark')){
        nav.classList.toggle('nav--menu-open')
        social.classList.toggle('social--menu-open')
    }
}

function toggleNavColors(){
    if(window.pageYOffset >= gallery.offsetTop){
        nav.classList.add('nav--dark')
    }
    else{ 
        nav.classList.remove('nav--dark')
    }
}

function toggleSocialColors(){
    if(window.pageYOffset >= gallery.offsetTop - halfDisplayHeight){
        social.classList.add('social--dark')
    }
    else{ 
        social.classList.remove('social--dark')
    }
}

// Optimize scroll function
function toggleNavClassesOnScroll(){
    window.addEventListener('scroll', ()=>{
        toggleNavColors()
        toggleSocialColors()
      })
}

export function initNav(){
    menuBtn.addEventListener('click', () => {
        toggleOpenMenuClasses()
    })

    navItems.forEach(navItems => {
        navItems.addEventListener('click', () => {
            toggleOpenMenuClasses()
        })
    })

    toggleNavClassesOnScroll()
}