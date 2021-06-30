'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
e.preventDefault()
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn =>btn.addEventListener('click', openModal) );

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});


const header=document.querySelector(`.header`)
const allSex = document.querySelectorAll(`.section`);
const allButt = document.getElementsByTagName(`button`);
const message=document.createElement(`div`)
message.classList.add(`cookie-message`);
message.innerHTML = `we use cookies for improve functionality!<button class="btn btn--close-cookie">Got it!</button>`;
header.append(message)
document
  .querySelector(` .btn--close-cookie`)
  .addEventListener('click', function () {
    setInterval(()=>message.remove(),550)
    message.style.backgroundColor=`white`
  });
    message.style.backgroundColor = `#39383f`;
  
const btnScrollTo = document.querySelector('.btn--scroll-to');
const sec1 = document.querySelector('#section--1');
btnScrollTo.addEventListener('click',function(e){
  e.preventDefault()
const s1coords=sec1.getBoundingClientRect()
console.log(s1coords);

window.scrollTo({
  left: s1coords.left + window.pageXOffset,
  top: s1coords.top + window.pageYOffset,
  behavior:`smooth`
});
})
//rgb(255,255,255)