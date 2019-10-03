
document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.container');
    const snail=new Snail('Jayne', 80, 'pink');
    snail.mount(container);
    const snail2=new Snail('Itana', 10, 'green');
    snail2.mount(container);
    const snail3=new Snail('Andrew', 100, 'blue');
    snail3.mount(container);
    const snail4=new Snail('Juan', 40, 'orange');
    snail4.mount(container);    
});