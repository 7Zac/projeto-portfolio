document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const ulNavbar = document.querySelector('.ul-navbar');
    const navLinks = document.querySelectorAll('.ul-navbar li');

    hamburger.addEventListener('click', () => {
        ulNavbar.classList.toggle('open');
        hamburger.classList.toggle('open');
         navLinks.forEach((link, index) =>{
             if (ulNavbar.classList.contains('open')){
                 link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
             } else{
                 link.style.animation = '';
             }
         })
    });
});

// animateLinks(){
//     this.navLinks.forEach((link) => {
//         link.style.animation
//         ? (link.style.animation = "")
//         : (link.style.animation = `navLinkFade 0.5s ease forwards 0.3s`);
//     });
// }

// handleClick(){
//     this.ulNavbar.classList.toggle(this.openClass);
//     this.animateLinks();
// }