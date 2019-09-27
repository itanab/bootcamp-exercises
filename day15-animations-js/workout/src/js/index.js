const photoMouseIn = () => {
  const text = document.querySelector('#text');
  text.style.display = 'none';
};

const photoMouseLeave = () => {
  const text = document.querySelector('#text');
  text.style.display = 'block';
};


document.addEventListener('DOMContentLoaded', () => {
  const photoOut = document.querySelector('#img');
  photoOut.addEventListener('mouseleave', photoMouseLeave);

  const photoIn = document.querySelector('#img');
  photoIn.addEventListener('mouseenter', photoMouseIn);
});
