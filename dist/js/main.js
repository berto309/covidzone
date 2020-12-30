const btnHamburger = document.querySelector('#btnHamburger');
const landing = document.querySelector('.landing');
const overlay = document.querySelector('.overlay')



btnHamburger.addEventListener('click', function () {
   if (landing.classList.contains('open')) { 
      //  close hamburger menu
      landing.classList.remove('open')
       overlay.classList.remove('fade-in');
       overlay.classList.add('fade-out');
   } else {
      // open hamburger menu
      landing.classList.add('open')
      overlay.classList.remove('fade-out');
      overlay.classList.add('fade-in');
   }
})
 

