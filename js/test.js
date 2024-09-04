'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModel = document.querySelector('.close-modal');
const btnsOpenModals = document.querySelectorAll('.show-modal');

const openModal =  function () {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}




const closeModal = function (params) {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

for (let i = 0; i < btnsOpenModals.length; i++) {
    btnsOpenModals[i].addEventListener('click' , openModal)
}

btnCloseModel.addEventListener('click' , closeModal);

overlay.addEventListener('click' , closeModal)

document.addEventListener('keydown' , function (e) {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
            closeModal();
    }
});