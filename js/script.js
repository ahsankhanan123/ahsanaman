


const menu = document.querySelector('.collapse');
const toggle = document.querySelector('.toggle');

toggle.addEventListener('click', () => {
    menu.classList.toggle('menuactive');
    toggle.classList.toggle('menuactive');
});


var typed = new Typed('.auto-type', {
    strings: [
        'Full Stack Developer', 
        'Freelancer', 
        'Youtuber', 
        'Video Editor'
    ],
    typeSpeed: 70,
    smartBackspace: true,
    backSpeed: 70,

    loop: true,
    loopCount: Infinity,

});








