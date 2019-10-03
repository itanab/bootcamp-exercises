class Timer{

    constructor(value){
        this.value=value;
        this.intervalID=null;
    }

    increment(){
        if(this.value < 60){
            this.value ++;     
        }
    }
    
    decrement(){
        if(this.value > 0){
            this.value --;
        }
    }

    reset(){
        this.value=0;
    }

    render() {
    this.element = document.createElement('div');
    this.element.className = 'app';
    this.element.innerHTML = (
        `<div id="reset" class="reset">RESET</div>

        <div id="timer" class="timer">
            <div id="up" class="arrow-up"></div>
                 <div id="nbs" class="nbs">37</div> 
            <div id="down" class="arrow-down"></div>
        </div>

        <div id="start" class="start">START</div>`

    );

    const up=this.element.querySelector('#up');
    up.addEventListener('click', () => {
        this.increment();
        this.update();    
    });

    const down=this.element.querySelector('#down');
    down.addEventListener('click', () => {  
        this.decrement();
        this.update();
        
    });

    const resetBtn = this.element.querySelector('#reset');
    resetBtn.addEventListener('click', () => {
        this.reset();
        this.clear();
        this.update();  
    });
    
    const startBtn = this.element.querySelector('#start');
    startBtn.addEventListener('click', () => {
        if(this.intervalID===null){
            this.intervalID=setInterval(() => {
                this.countdown()
                this.update()
            }, 1000);          
           
        }else{
            this.clear();
            this.update();      
        }             
    }); 

    }

    mount(parent) {
        this.render();
        parent.appendChild(this.element);
    }

    update(){
        const nbs = this.element.querySelector('#nbs');
        nbs.textContent = `${this.value}`;  
    
        const btn = this.element.querySelector('#start');
        if(this.intervalID===null){            
            btn.textContent = "START";
        }else{
            btn.textContent = "STOP";
        }
    }

    clear(){
        clearInterval(this.intervalID);
        this.intervalID=null;
    }

    countdown(){
        if(this.value > 0){
            this.value --;
        }else{
            this.clear();               
        }
    }
}




  