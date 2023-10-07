var botao = document.getElementById('btn_mobile');
var nav_mobile = document.querySelector('.nav-mobile');

function NavMobile()
{
    if(nav_mobile.classList.contains('nav-mobile-aberta'))
    {
        nav_mobile.classList.remove('nav-mobile-aberta');
        nav_mobile.classList.add('nav-mobile');
    }
    else
    {   
        nav_mobile.classList.remove('nav-mobile');
        nav_mobile.classList.add('nav-mobile-aberta')
    }
}

function fechaNav()
{
    if(window.innerWidth > 814)
    {
        nav_mobile.classList.remove('nav-mobile-aberta');
        nav_mobile.classList.add('nav-mobile');
    }
}

window.addEventListener('resize', fechaNav);
botao.addEventListener('click', NavMobile);