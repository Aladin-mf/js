'use strict';
const modal = document.querySelector(`.modal`)

const overlay = document.querySelector(`.overlay`);

const btnCloseModal = document.querySelector(`.close-modal`);

const btnOpenModal = document.querySelectorAll(`.show-modal`);

const dismissModal=function(){

modal.classList.add(`hidden`);
overlay.classList.add(`hidden`);
}

const openModal=function(){

modal.classList.remove(`hidden`);
overlay.classList.remove(`hidden`);
}



for(let i =0; i<btnOpenModal.length; i++)btnOpenModal[i].addEventListener(`click`,  openModal);

btnCloseModal.addEventListener(`click`,dismissModal)

overlay.addEventListener(`click`,dismissModal)

document.addEventListener(`keydown`,function(e){
  console.log(e.key);
  if (e.key === ` ` && !modal.classList.contains(`hidden`)) {
      dismissModal()
  }
})