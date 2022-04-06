const openNav = document.getElementById('open-nav');

function toggleMenu(){
    const nav = document.getElementById('container');
    nav.classList.toggle('active')


}

openNav.addEventListener('click', toggleMenu);