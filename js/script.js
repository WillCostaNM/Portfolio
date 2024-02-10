const hamburguer = document.getElementById('hamburguer');
const navLinks= document.getElementById('nav-links');


hamburguer.addEventListener('click', (e) => {
    e.currentTarget.classList.toggle('hamburguer-rotate');
    toggleNavLinks(e);
})


function toggleNavLinks(e){
    if(e.currentTarget.classList.contains('hamburguer-rotate')){
        navLinks.classList.remove('close-nav');
        navLinks.classList.add('open-nav');
    }
    else{
        navLinks.classList.remove('open-nav');
        navLinks.classList.add('close-nav');
    }
}
