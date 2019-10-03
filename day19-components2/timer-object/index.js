const timer = new Timer(37);

update = () => {
    const nbs = document.querySelector('#nbs');
    nbs.textContent = `${timer.value}`;  

    const btn = document.querySelector('#start');
    if(timer.intervalID===null){            
        btn.textContent = "START";
    }else{
        btn.textContent = "STOP";
    }
}

document.addEventListener('DOMContentLoaded', () => {
    update();

    const up=document.querySelector('#up');
    up.addEventListener('click', () => {

        timer.increment();
        update();    
    });

    const down=document.querySelector('#down');
    down.addEventListener('click', () => {
        
        timer.decrement();
        update();
        
    });
  
    const resetBtn = document.querySelector('#reset');
    resetBtn.addEventListener('click', () => {
        timer.reset();
        timer.clear();
        update();  
    });
    
    const startBtn = document.querySelector('#start');
    startBtn.addEventListener('click', () => {
        if(timer.intervalID===null){
            timer.intervalID=setInterval(() => {
                timer.countdown()
                update()
            }, 1000);          
           
        }else{
            timer.clear();
            update();      
        }             
    }); 
});