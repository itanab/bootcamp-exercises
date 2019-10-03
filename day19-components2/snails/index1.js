let position = 0;
let speed = 10;
let intervalID=null;

const update = () => {
 
  const btn = document.querySelector('#button');
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

const move = () =>{
  const snail = document.querySelector('.snail-racer');
  if (position < 1000){
    snail.style.marginLeft=`${position}px`;
    position += speed;
    console.log(position);
    update();
  }
  
}

document.addEventListener('DOMContentLoaded', () => {
  const start = document.querySelector('#button');
  start.addEventListener('click', () => {
    if(intervalID===null){
      intervalID=setInterval(()=>{
        move();
        update();
      }, 1000);            
      
  }else{
      clear();
      update();      
  }       
    
  });
  
})


