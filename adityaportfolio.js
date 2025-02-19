/*============================ circle skill  ===================*/
const circles = document.querySelectorAll('.circle');
circles.forEach(elem=>{
    var dots = elem.getAttribute("data-dots");
    var marked = elem.getAttribute("data-percent");
    var percent = Math.floor(dots*marked/100);
    var points = "";
    var rotate = 360 / dots;

    for(let i = 0 ; i < dots ; i++){
        points += `<div class="points" style="--i:${i}; --rot:${rotate}deg"></div>`;
    }
    elem.innerHTML = points;
});


/////////////////////// toggle icon navbar////////////////////
let menuIcon = document.querySelector('#menu-icon')
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

///////////////////////scroll section active link////////////////////
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active')
            });
        };
    });

    /*============================sticky navbar ===================*/
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    /*============================ remove toggle icon and navbar when click navabr link (scroll) ===================*/

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

/*============================scroll reveal ===================*/

ScrollReveal({
   // reset: true,
    distance: '80px',
    duration: 2000,
    delay: 150
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .skill-main, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img, .skill-left h3', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content, .skill-right h3', { origin: 'right' });

/*============================typed js ===================*/
const typed = new Typed('.multiple-text', {
    strings: ['Collage Student', 'Frontend Developer', 'Digital Creater'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

