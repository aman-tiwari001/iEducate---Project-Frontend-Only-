let navbar = document.querySelector('.navbar');
let navlist = document.querySelector('.nav-list');
let rightnav = document.querySelector('.rightNav');
let burger = document.querySelector('#burger');
let title = document.getElementById('title');
let cont = document.getElementById('cont')

burger.addEventListener('click', ()=>{
    navlist.classList.toggle('v-nav');
    navbar.classList.toggle('h-nav');
    rightnav.classList.toggle('v-nav');
    if(cont.style.display == 'none' ) {
        cont.style.display = 'inline';
    }
    else {
        cont.style.display = 'none';
    }

    if(title.style.display == 'none' ) {
        title.style.display = 'inline';
    }
    else {
        title.style.display = 'none';
    }
});