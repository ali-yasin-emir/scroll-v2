'use strict';

const showBtn = document.querySelector('.btn-show');
const modal = document.querySelector('.main-info');
const btnAnthem = document.querySelector('.btn-anthem');
const anthem = document.querySelector('.anthem');
const btnPlay = document.querySelector('.btn-play');
const btnPause = document.querySelector('.btn-pause');
const btnVisible = document.querySelector('.btn-visible');

function displayModal() {
  showBtn.addEventListener('click', function (e) {
    e.preventDefault();
    modal.classList.toggle('show-modal');
    console.log('hello world');
  });
}

function displayAnthem() {
  btnPlay.addEventListener('click', function (e) {
    anthem.play();
    btnPlay.style.display = 'none';
    btnPause.style.display = 'block';
  });

  btnPause.addEventListener('click', function (e) {
    anthem.pause();
  });
}

function pauseAnthem() {
  btnAnthem.addEventListener('click', function (e) {
    anthem.pause();
    btnPlay.style.display = 'block';
    btnPlay.style.display = 'none';
  });
}

window.addEventListener('DOMContentLoaded', function () {
  displayModal();
  displayAnthem();
});
