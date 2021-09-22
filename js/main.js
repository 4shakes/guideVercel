var swiper = new Swiper(".mySwiper", {
      pagination: {
            el: ".swiper-pagination",
      },
});

var swiper2 = new Swiper(".mySwiper2", {
      slidesPerView: 1,
      spaceBetween: 10,
      slidesPerGroup: 1,
      loop: true,
      loopFillGroupWithBlank: true,
      pagination: {
            el: ".swiper-pagination",
            clickable: true,
      },
      breakpoints: {
            640: {
                  slidesPerView: 1,
                  spaceBetween: 20,
            },
            768: {
                  slidesPerView: 2,
                  spaceBetween: 40,
            },
            1024: {
                  slidesPerView: 3,
                  spaceBetween: 50,
            },
      },
});


const nav = document.getElementById('nav-menu'),
      toggle = document.getElementById('nav-toggle');

const menu = () => {
      if (nav && toggle) {
            toggle.addEventListener('click', () => {
                  nav.classList.toggle('hidden')
            })
      }
}

menu();


/* const imagenGris = document.querySelectorAll('.escudo')
imagenGris.children();
console.log(imagenGris);

function botonTemario() {


      elem.classList.toggle('filter-none');

}
imagenGris.forEach(n => n.addEventListener('click', botonTemario)) */


const navLink = document.querySelectorAll('.nav__link');
console.log(navLink)
function linkAction() {
      const navMenu = document.getElementById('nav-menu');
      navMenu.classList.add('hidden')
}

navLink.forEach(n => n.addEventListener('click', linkAction))


