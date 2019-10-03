
document.addEventListener('DOMContentLoaded', () => {
    
  const container = document.querySelector('.container');
  
  fetch('http://bootcamp.podlomar.org/api/snails/5')
    .then(response => response.json())
    .then(snails => {
      for(const snail of snails) {
        const puz = new Snail(snail.name, snail.velocity, snail.color);
        puz.mount(container);
      }
    });
});