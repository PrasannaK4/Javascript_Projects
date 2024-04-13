const value1 = document.querySelector('#value');
// const decrease = document.querySelector('.btn.decrease');
// const reset = document.querySelector('.reset');
// const increase = document.querySelector('.increase');
const button = document.querySelector('.button-container');
let count= 0;

// decrease.addEventListener('click',() =>{
//    value1.innerHTML = count--;
// });
// reset.addEventListener('click',() =>{
//     value1.innerHTML = 0;
//     count =0;
//  });
//  increase.addEventListener('click',() =>{
//     value1.innerHTML = count++;
//  });

button.addEventListener('click',(e)=>{
    if(e.target.classList.contains('decrease')){
        value1.innerHTML = count--;
    }
    if(e.target.classList.contains('reset')){
        value1.innerHTML = 0;
        count = 0;
    }
    if(e.target.classList.contains('increase')){
        value1.innerHTML = count++;
    }
})
