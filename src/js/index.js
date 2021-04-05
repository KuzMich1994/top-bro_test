import '../index.html';
import '../bloger.html';
import '../css/style.css';
import '../sass/style.sass';
import './modules/dropdown-select';
import dropDownSelect from './modules/dropdown-select';
import showMobileMenu from './modules/show-mobile-menu';
import { gsap } from 'gsap';
import Swiper from 'swiper/bundle';
import 'swiper/swiper-bundle.css';

const aura = document.getElementById('aura');
const cursor = document.getElementById('cursor');
const links = document.querySelectorAll('a');
const ru = document.querySelector('.ru');
const en = document.querySelector('.en');
const selects = document.querySelectorAll('.blogers__filter-selector');

var mouseX = 0
var mouseY = 0
var posX = 0
var posY = 0


const mouseCords = e => {
  mouseX = e.pageX;
  mouseY = e.pageY;
};

gsap.to({}, .01, {
  repeat: -1,
  onRepeat: () => {
    posX += (mouseX - posX) / 5
    posY += (mouseY - posY) / 5

    gsap.set(cursor, {
      css: {
        left: mouseX,
        top: mouseY,
      }
    });

    gsap.set(aura, {
      css: {
        left: posX - 29,
        top: posY - 29,
      }
    });
  }
});

if ([ru, en, ...selects]) {
  [ru, en, ...selects].forEach(item => {
    item.addEventListener('mouseover', () => {
      aura.classList.add('visible');
    });
    item.addEventListener('mouseout', () => {
      aura.classList.remove('visible');
    });
  });
}

for (let i = 0; i < links.length; i++) {
  links[i].addEventListener('mouseover', () => {
    aura.classList.add('visible');
  });
  links[i].addEventListener('mouseout', () => {
    aura.classList.remove('visible');
  });
}

document.body.addEventListener('mousemove', e => {
  mouseCords(e);
  cursor.classList.remove('hidden');
  aura.classList.remove('hidden');
});

document.body.addEventListener('mouseout', () => {
  cursor.classList.add('hidden');
  aura.classList.add('hidden');
});

const swiper = new Swiper('.other__slider', {
  direction: 'horizontal',
  slidesPerView: 4,
  spaceBetween: 20,
  breakpoints: {
    1401: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
    993: {
      slidesPerView: 3,
      spaceBetween: 20,
      scrollbar: {
        dragSize: 80,
      }
    },
    769: {
      slidesPerView: 2,
      // spaceBetween: 1
    },
    320: {
      slidesPerView: 1,
      spaceBetween: 0,
      scrollbar: {
        dragSize: 120
      }
    }
  },

  // Navigation arrows
  navigation: {
    nextEl: '.other__slide-arrow_next',
    prevEl: '.other__slide-arrow_prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.other__scrollbar',
    dragClass: 'other__scrollbar-drag',
    draggable: true,
  },
});

swiper.init();

dropDownSelect();
showMobileMenu();
