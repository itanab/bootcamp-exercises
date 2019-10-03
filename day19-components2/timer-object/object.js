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




  