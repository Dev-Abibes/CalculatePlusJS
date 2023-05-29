const screen = document.getElementById('screen');
const buttons = document.querySelectorAll('.btn');
const equal = document.getElementById('equal');
const clear = document.getElementById("clear");

let val = "";
let lastVal = val[val.length - 1];
const operators = ["+", "-", "/", "*"];

buttons.forEach((btn)=>{

    btn.addEventListener("click", e=>{

        let value = e.target.dataset.num;
        screen.value += value;
        // console.log(screen.value);
    })
})

equal.addEventListener('click', e=>{
    if(screen.value === ''){
        window.alert("please enter of value");
    } else{
        let answer = eval(screen.value);
        screen.value = answer;
    }
});
clear.addEventListener("click", e=>{
    screen.value ='';
})



