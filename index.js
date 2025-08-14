let count = 0;

const increase = document.getElementById('increase');
const decrease = document.getElementById('decrease')
const reset = document.getElementById('reset')


increase.addEventListener('click', function(){
    count = count+1;
    let val = document.getElementById('counter')
    val.textContent=count;
})

decrease.addEventListener('click', function(){
    count = count-1;
     let val = document.getElementById('counter')
    val.textContent=count;
})

reset.addEventListener('click', function(){
    count = 0;
     let val = document.getElementById('counter')
    val.textContent=count;
})