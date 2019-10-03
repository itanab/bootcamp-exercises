let intervalID = null;
let value = 37;

const update = () => {
    const timer = document.querySelector('#nbs');
    timer.textContent = `${value}`;  

    const btn = document.querySelector('#start');
    if(intervalID===null){            
        btn.textContent = "START";
    }else{
        btn.textContent = "STOP";
    }
}

const clear = () =>{
    clearInterval(intervalID);
    intervalID=null;
}

const countdown = () =>{
    if(value > 0){
        value --;
        update();
    }else{
        clear();
        update();
    }
}

document.addEventListener('DOMContentLoaded', () => {
    update();

    const up=document.querySelector('#up');
    up.addEventListener('click', () => {
        if(value < 60){
            value ++;
            update();
        }
    });

    const down=document.querySelector('#down');
    down.addEventListener('click', () => {
        if(value > 0){
            value --;
            update();
        }
    });
  
    const resetBtn = document.querySelector('#reset');
    resetBtn.addEventListener('click', () => {
        value = 0;
        clear();
        update();  
    });

    const startBtn = document.querySelector('#start');
    startBtn.addEventListener('click', () => {
        if(intervalID===null){
            intervalID=setInterval(countdown, 1000);            
            update();
        }else{
            clear();
            update();      
        }             
    }); 
});
  
