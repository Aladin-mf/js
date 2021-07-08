'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnOpenModal = document.querySelectorAll('.btn--show-modal');
const tabs = document.querySelectorAll('.operations__tab');
const tabContainer = document.querySelector('.operations__tab-container');
const tabContent = document.querySelectorAll('.operations__content');
const header = document.querySelector(`.header`);
const allSex = document.querySelectorAll(`.section`);
const allButt = document.getElementsByTagName(`button`);
const message = document.createElement(`div`);
const btnScrollTo = document.querySelector('.btn--scroll-to');
const sec1 = document.querySelector('#section--1');
const nav=document.querySelector('.nav')
const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});


// message.classList.add(`cookie-message`);
// message.innerHTML = `we use cookies for improve functionality!<button class="btn btn--close-cookie">Got it!</button>`;
// header.append(message);
// document
//   .querySelector(` .btn--close-cookie`)
//   .addEventListener('click', function () {
//     setInterval(() => message.remove(), 550);
//     message.style.backgroundColor = `white`;
//   });
// message.style.backgroundColor = `#39383f`;


btnScrollTo.addEventListener('click', function (e) {
  e.preventDefault();
  const s1coords = sec1.getBoundingClientRect();

  //.//...  way 1
  window.scrollTo({
    left: s1coords.left + window.pageXOffset,
    top: s1coords.top + window.pageYOffset,
    behavior: `smooth`,
  });
  //.//...  way 2
  sec1.scrollIntoView({ behavior: `smooth` });
});

//***working but not worth code for thousand
// document.querySelectorAll(`.nav__link`).forEach(function (el) {
//   el.addEventListener(`click`, function (e) {
//     e.preventDefault()
//     const id=this.getAttribute(`href`)
//     console.log(id);
//     document.querySelector(id).scrollIntoView(             {behavior:`smooth`})

//   });
// });

//***(part 2) working but not worth code for thousand
//*** worth code*/
//*** add event listener to common parent element*/

document.querySelector(`.nav__links`).addEventListener(`click`, function (e) {
  e.preventDefault();

  if (e.target.classList.contains(`nav__link`)) {
    const id = e.target.getAttribute(`href`);
    console.log(id);
    document.querySelector(id).scrollIntoView({ behavior: `smooth` });
  }
});

// const h1 = document.querySelector(`h1`);

// h1.firstElementChild.style.color = `tomato`;
// h1.lastElementChild.style.color = `orangeRed`;

// h1.closest(`.header`).style.backgroundColor = `var(--color-primary-darker)`;
// h1.closest(`h1`).style.backgroundColor = `var(--color-secondary)`;


//***tab component */

tabContainer.addEventListener('click',function(e){
const clicked = e.target.closest(`.operations__tab`);
if (!clicked) return 
tabs.forEach(tab=>tab.classList.remove(`operations__tab--active`))

clicked.classList.add(`operations__tab--active`);
tabContent.forEach(con => con.classList.remove(`operations__content--active`));

document
  .querySelector(`.operations__content--${clicked.dataset.tab}`)
  .classList.add(`operations__content--active`);
})


//****nav hover fade out   */ */
const handleHover=function (e) {
  if (e.target.classList.contains(`nav__link`)) {
    const link = e.target;

    const siblings = link.closest(`.nav`).querySelectorAll(`.nav__link`);
    const logo = link.closest(`.nav`).querySelector(`img`);

    siblings.forEach(el => {
      if (el !== link) {
        el.style.opacity = this;
        logo.style.opacity = this ;
      }
    });
  }
}
nav.addEventListener(`mouseover`,handleHover.bind(0.5))
nav.addEventListener(`mouseout`,handleHover.bind(1))
// const initialCoords=sec1.getBoundingClientRect()
// window.addEventListener('scroll',function(){
// if (window.scrollY > initialCoords.top) {
//   nav.classList.add(`sticky`);
// } else {
//   nav.classList.remove(`sticky`);
// }
// })


// const obsCallBack=function (entries,observer) {
//   entries.forEach(entry=>{
//     console.log(entry);
    
//   })
// }
// const obsOption = {
//   root: null,
//   threshold: [0, 0.2],
// }; 

// const observer = new IntersectionObserver(obsCallBack,obsOption)
// observer.observe(sec1)

// const stickyNav = function (entries) {
//   const [entry] = entries;
//   console.log(entry);
//   if (!entry.isIntersecting) {
//   nav.classList.add(`sticky`)
//   }else{
//   nav.classList.remove(`sticky`);

//   }
// };
const navHeight=nav.getBoundingClientRect().height
const HeaderObserver = new IntersectionObserver(
  function (entries) {
  const [entry] = entries;
 
  if (!entry.isIntersecting) {
  nav.classList.add(`sticky`)
  }else{
  nav.classList.remove(`sticky`);

  }
},//..................
 {
  root: null,
  threshold: 0,
  rootMargin:`-${navHeight}px`
});
HeaderObserver.observe(header);



//**revealing section */
const allSection=document.querySelectorAll('.section')
const revealSection= function (entries,observer) {
  const [entry]=entries

 if (!entry.isIntersecting) return
   
   entry.target.classList.remove(`section--hidden`);
 
 observer.unobserve(entry.target)
 
}
const sectionObserver=new IntersectionObserver(revealSection,{
  root:null,
  threshold:0.15
})
allSection.forEach(sec=>{
  sectionObserver.observe(sec)
  sec.classList.add(`section--hidden`);

})


//* **lazy loading img */

const imgTarget=document.querySelectorAll('img[data-src]')
const loadImg=function (entries,observe) {
const [entry]=entries
 if (!entry.isIntersecting) return;

 entry.target.src=entry.target.dataset.src
entry.target.addEventListener('load',function(){
entry.target.classList.remove(`lazy-img`)
})
observe.unobserve(entry.target)
}

const imgObserver=new IntersectionObserver(loadImg,{root:null,threshold:0})

imgTarget.forEach(img => {
  imgObserver.observe(img)
});


//**slides */
const slider = function () {
  
const slides = document.querySelectorAll('.slide');
const btnLeft = document.querySelector('.slider__btn--left');
const btnRight = document.querySelector('.slider__btn--right');
// const slider = document.querySelector('.slider');
let currSlide = 0;
const maxSlide = slides.length;
const dotContainer = document.querySelector('.dots');

const creatDots = function () {
  slides.forEach(function (_, i) {
    dotContainer.insertAdjacentHTML(
      `beforeend`,
      `<button class="dots__dot" data-slide="${i}"></button>`
    );
  });
};
creatDots();
const activeDot = function (slide) {
  document
    .querySelectorAll('.dots__dot')
    .forEach(dot => dot.classList.remove(`dots__dot--active`));

  document
    .querySelector(`.dots__dot[data-slide="${slide}"]`)
    .classList.add(`dots__dot--active`);
};
activeDot(0);
const goToSlide = function (slide) {
  slides.forEach(
    (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
  );
};
const nextSlide = function () {
  if (currSlide === maxSlide - 1) {
    currSlide = 0;
  } else {
    currSlide++;
  }
  goToSlide(currSlide);
  activeDot(currSlide);
};
const prevSlide = function () {
  if (currSlide === 0) {
    currSlide = maxSlide - 1;
  } else {
    currSlide--;
  }
  goToSlide(currSlide);
  activeDot(currSlide);
};
//
// slider.style.transform = `scale(.35) translateX(-800px)`;
// slider.style.overflow=`visible`

goToSlide(0);

btnRight.addEventListener('click', nextSlide);
btnLeft.addEventListener('click', prevSlide);
document.addEventListener('keydown', function (e) {
  if (e.key === 'ArrowLeft') {
    prevSlide();
  }
  if (e.key === 'ArrowRight') {
    nextSlide();
  }
});
dotContainer.addEventListener('click', function (e) {
  console.log(e.target.dataset);

  if (e.target.classList.contains(`dots__dot`)) {
    const { slide } = e.target.dataset;
    console.log(slide);
    goToSlide(slide);
    activeDot(slide);
  }
});
}
slider()
//rgb(255,255,255)

/* added new line  */
// const randomInt = (min , max)=>Math.floor(Math.random()*(max-min+1)+min)
// const randomColor = () =>
//   `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;
//   document.querySelector(`.nav__link`).addEventListener('click',function(e){
// this.style.backgroundColor=randomColor()

//   })

//   document.querySelector(`.nav__links`).addEventListener('click',function(e){
// this.style.backgroundColor = randomColor();

//   })

//   document
//     .querySelector(`.nav`)
//     .addEventListener('click', function (e) {

// this.style.backgroundColor = randomColor();

//     });
