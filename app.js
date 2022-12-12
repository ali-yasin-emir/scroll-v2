'use strict';

const showBtn = document.querySelector('.btn-show');
const modal = document.querySelector('.main-info');
// const btnAnthem = document.querySelector('.btn-anthem');

// const btnPlay = document.querySelector('.play');
// const btnPause = document.querySelector('.pause');
// const btnVisible = document.querySelector('.btn-visible');

const track = document.getElementById('track');
const controlBtn = document.getElementById('play-pause');

window.addEventListener('DOMContentLoaded', function () {
  displayModal();
});

function playPause() {
  if (track.paused) {
    track.play();
    controlBtn.className = 'pause';
  } else {
    track.pause();
    controlBtn.className = 'play';
  }
}

controlBtn.addEventListener('click', playPause);
track.addEventListener('ended', function () {
  controlBtn.className = 'play';
});

function displayModal() {
  showBtn.addEventListener('click', function (e) {
    e.preventDefault();
    modal.classList.toggle('show-modal');
    console.log('hello world');
  });
}
