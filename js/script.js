AOS.init({});

AOS.init({
    disable: false, 
    startEvent: 'DOMContentLoaded', 
    initClassName: 'aos-init', 
    animatedClassName: 'aos-animate', 
    useClassNames: false,
    disableMutationObserver: false, 
    debounceDelay: 50,
    throttleDelay: 99, 
});


window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    header.classList.toggle("header__active__scroll", scrollY > 30);
})