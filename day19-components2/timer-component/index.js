document.addEventListener('DOMContentLoaded', () => {
    const app = document.querySelector('#app');
    const timer = new Timer(37);
    timer.mount(app);   
});