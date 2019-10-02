let result = 4;

const handlePlus = () => {
  const progress = document.querySelector('#knob');
  progress.style.width = '70%';

};

const handleMinus = () => {
  const progress = document.querySelector('#knob');

  const counter = document.querySelector('#counter');
  const result = parseInt(counter.textContent, 10);

   result++;

  progress.style.width = '60%';


};



document.addEventListener('DOMContentLoaded', () => {
 
  const plus = document.querySelector('#plus');
  plus.addEventListener('click', handlePlus);

  const minus = document.querySelector('#minus');
  minus.addEventListener('click', handleMinus);

});