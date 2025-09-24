document.getElementById('showFilmsButton').addEventListener('click', function(){
    const filmsContainer = document.querySelector('.main2_container');
    const main2height = document.getElementById('main2');


    if (filmsContainer.style.visibility === 'hidden') {
        filmsContainer.style.visibility = 'visible';
        filmsContainer.style.opacity = '1';
        filmsContainer.style.display = 'flex';

    } else {
        filmsContainer.style.visibility = 'hidden';
        filmsContainer.style.display = 'none';
    }
});

const hamburger = document.getElementById('menu_button_ham')
const menu = document.getElementById('menu_ham')
const menuButton = document.getElementById('menu_news_button')
const popupMenu = document.getElementById('popupMenu');
const closeButton = document.querySelector('.close');
const overlay = document.createElement('div');
overlay.className = 'overlay';
document.body.appendChild(overlay);

function toggleMenu() {
    hamburger.classList.toggle('active');
    menu.classList.toggle('active');
    overlay.classList.toggle('active');

    let overflowValue;
    if (menu.classList.contains('active')) {
        overflowValue = 'hidden';
    } else {
        overflowValue = '';
    }
    document.body.style.overflow = overflowValue;
}


hamburger.addEventListener('click', toggleMenu);
overlay.addEventListener('click', toggleMenu);

function openMenu() {
    popupMenu.style.display = 'block';
}
function closeMenu(){
    popupMenu.style.display = 'none';
}

menuButton.addEventListener('click', openMenu);
closeButton.addEventListener('click', closeMenu);

window.addEventListener('click', function(event){
    if(event.target === popupMenu){
        closeMenu();
    }
})

window.addEventListener('load', function() {
    setTimeout(function() {
        const preloader = document.getElementById('preloader');
        preloader.style.opacity = '0';
        setTimeout(() => preloader.remove(), 500);
    }, 1000);
});