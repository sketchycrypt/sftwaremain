const navSlide = () =>{
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelector('.nav-links li');

    //toggles the nav because fuck you
    burger.addEventListener('click', () =>{
       nav.classList.toggle('nav-active');
    });
    //animate the links aaaa
    navLinks.array.forEach((link, index) => {
        console.log(index);
    });
}