if (window.matchMedia('screen and (max-width: 768px)').matches) {
    window.onload = f;
}

function f() {
    var nav = document.getElementById('nav');
    var menu = document.getElementById('menu');
    
    menu.onclick = function() {
        if(nav.style.opacity == 0) {
            nav.style.opacity = 1;
            menu.style.color = 'var(--dark_blue)';
        } else {
            nav.style.opacity = 0;
            menu.style.color = 'var(--off_white)';
        }
    }
}

