// const add = document.querySelector(".add");
// const resetCount = document.querySelector(".reset");
// const sub = document.querySelector(".substract");
const count = document.querySelector(".count");
const allbuttons = document.querySelector(".buttons");

allbuttons.addEventListener("click",(e)=>{
    if(e.target.classList.contains('add')){
        count.innerHTML++;
        setColor();
    }
})
allbuttons.addEventListener("click",(e)=>{
    if(e.target.classList.contains('substract')){
        count.innerHTML--;
        setColor();
    }
})
allbuttons.addEventListener("click",(e)=>{
    if(e.target.classList.contains('reset')){
        count.innerHTML = 0;
        setColor();
    }
})

function setColor(){
    if(count.innerHTML > 0){
        count.style.color = "yellow"
    } else if (count.innerHTML < 0){
        count.style.color = "orange"        
    }
    else{
        count.style.color = "red"
    }
}

// add.addEventListener("click",()=>{
//     count.innerHTML++;
// });
// sub.addEventListener("click",()=>{
//     count.innerHTML--;
// });
// resetCount.addEventListener("click",()=>{
//     count.innerHTML = 0;
// });