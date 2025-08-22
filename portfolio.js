const closeBtn = document.querySelector('.close_btn');
const project1 = document.querySelector('.content');
const project2 = document.querySelector('.parallax_box');
const project3 = document.querySelector('.tic_box');
const Btn1 = document.querySelector('.btn1');
const Btn2 = document.querySelector('.btn2');
const Btn3 = document.querySelector('.btn3');
const p_tab = document.querySelector('.p_tab');

Btn1.addEventListener('click', () => {
  p_tab.style.display = 'flex';
  project1.style.display = 'block';   // show animation
  project2.style.display = 'none';
 project3.style.display='none';
});

Btn2.addEventListener('click', () => {
  p_tab.style.display = 'flex';
  project2.style.display = 'block';  // show parallax
  project1.style.display = 'none';
    project3.style.display='none';
});

Btn3.addEventListener('click', () => {
  p_tab.style.display = 'flex';
  project3.style.display='block';
  project1.style.display = 'none';
  project2.style.display = 'none';
});

closeBtn.addEventListener('click', () => {
  p_tab.style.display = 'none';
  project1.style.display = 'none';
  project2.style.display = 'none';
  project3.style.display = 'none';

});
