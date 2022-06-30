const burger = document.querySelector('[data-burger]');
const overlayMenu = document.querySelector('.overlay');
const nav = document.querySelector('[data-nav]');
const navItems = nav.querySelectorAll('a');
const body = document.body;
const header = document.querySelector('.header');
const headerHeight = header.offsetHeight;


document.querySelector(':root').style.setProperty('--header-height', `${headerHeight}px`);
// burder open/close
burger.addEventListener('click', (e) => {
   body.classList.toggle('stop-scroll');
   burger.classList.toggle('burger--active');
   nav.classList.toggle('nav--visible');
});

// click item menu
navItems.forEach(el => {
   el.addEventListener('click', () => {
      body.classList.remove('stop-scroll');
      burger.classList.remove('burger--active');
      nav.classList.remove('nav--visible');
   });
});

// click overlay - burder close
overlayMenu.addEventListener('click', (e) => {
   if (e.target == overlayMenu) {
      body.classList.remove('stop-scroll');
      burger.classList.remove('burger--active');
      nav.classList.remove('nav--visible');
   }
});

const townChange = document.querySelector('#ipt_towns a');
townChange.addEventListener('click', (e) => {
   e.preventDefault();
   document.querySelector('.ipt_townsul').classList.toggle('active');

});

// document.addEventListener('click', (e) => {
//    if (e.target != townChange) {
//       document.querySelector('.ipt_townsul').classList.remove('active');
//    }
// });

// accordion
const btns = document.querySelectorAll(".acc-btn");
function accordion() {
   // this = the btn | icon & bg changed
   this.classList.toggle("is-open");
   // the acc-content
   const content = this.nextElementSibling;

   if (content.style.maxHeight) content.style.maxHeight = null;
   else content.style.maxHeight = content.scrollHeight + "vh";
}
// event
btns.forEach((el) => el.addEventListener("click", accordion));