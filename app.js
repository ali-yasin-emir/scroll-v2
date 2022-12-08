'use strict';

const showBtn = document.querySelector('.btn-show');
const modal = document.querySelector('.main-info');

function displayModal() {
  showBtn.addEventListener('click', function (e) {
    e.preventDefault();
    modal.classList.toggle('show-modal');
    console.log('hello world');
  });
}

window.addEventListener('DOMContentLoaded', function () {
  displayModal();
});
