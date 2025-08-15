let count = 0;

if(localStorage.getItem('counter')){
    count = parseInt(localStorage.getItem('counter'))
}
document.getElementById('counter').textContent= count;

const increase = document.getElementById('increase');
const decrease = document.getElementById('decrease')
const reset = document.getElementById('reset')


increase.addEventListener('click', function(){
    count = count+1;
     document.getElementById('counter').textContent = count;
        localStorage.setItem('counter', count);
})

decrease.addEventListener('click', function(){
    count = count-1;
     document.getElementById('counter').textContent = count;
        localStorage.setItem('counter', count);
})

reset.addEventListener('click', function(){
    count = 0;  
    document.getElementById('counter').textContent = count;
        localStorage.setItem('counter', count);
})