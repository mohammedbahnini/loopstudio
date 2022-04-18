const nav_menu = document.querySelector('.nav-menu');
nav_menu.addEventListener('click' , ()=>{
    const menu = document.querySelector('header nav');
    const body =document.querySelector('body');

    if( nav_menu.classList.contains('open')){
        nav_menu.classList.remove('open');
        menu.classList.remove('open');
        body.style.overflow = 'auto';
        body.style.height = 'auto';
    }
    else{
        nav_menu.classList.add('open');
        menu.classList.add('open');
        body.style.overflow = 'hidden';
        body.style.height = '100%';
    }
});
