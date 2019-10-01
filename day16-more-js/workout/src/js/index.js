// js for the side menu

document.addEventListener('DOMContentLoaded', () => {
  const menu = document.querySelector('#svg');
  menu.addEventListener('click', () => {
    const hidden = document.querySelector('.hidden');
    if (hidden.style.display === 'block') {
      hidden.style.display = 'none';
    } else hidden.style.display = 'block';
  });
});
