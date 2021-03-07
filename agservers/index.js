const navSlide = () => {
    const burger = document.querySelector('.burger')
    const nav = document.querySelector('.nav-links')
    const navLinks = document.querySelectorAll('.nav-links li')
    //toggles the nav because fuck you
    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
    });
    //animate the links aaaa
    navLinks.forEach((link, index) => {
       link.style.animation = `navLinkFade 0.5s ease forwards ${index / 2}s`;
    });
};

navSlide();