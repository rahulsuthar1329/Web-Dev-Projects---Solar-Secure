const add = document.getElementById('add')
const sub = document.getElementById('sub')
const count = document.getElementById('count')
const reset = document.getElementById('reset')

add.addEventListener('click', ()=>{
    count.innerHTML++;
    if(count.textContent>0){
        count.style.color = 'green'
    }
    else if(count.textContent==0){
        count.style.color = 'black'
    }
})

sub.addEventListener('click', ()=>{
    count.innerHTML--;
    if(count.textContent<0){
        count.style.color = 'red'
    }
    else if(count.textContent==0){
        count.style.color = 'black'
    }
})

reset.addEventListener('click', ()=>{
    count.innerHTML=0;
    count.style.color = 'black'
})