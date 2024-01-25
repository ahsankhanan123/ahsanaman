



const toggle = document.querySelector('.toggle');
const nav = document.querySelector('.nav');

toggle.addEventListener('click', () => {
    toggle.classList.toggle('shownav');
    nav.classList.toggle('shownav');
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




function sendEmail() {

    Email.send({
        Host : "smtp.gmail.com",
        Username : "ahsanaman883@gmail.com",
        Password : "namanasha883",
        To : 'ahsanaman883@gmail.com',
        From : document.getElementById("cemail").value,
        Subject : "This is the subject",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    );
    
    
}




AOS.init();







const swiper = new Swiper('.swiper', {
    // Optional parameters
  //  direction: 'vertical',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  
    // And if we need scrollbar
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },
  });




