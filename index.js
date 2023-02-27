let price1 = document.getElementById('price1');
let price2 = document.getElementById('price2');
let price3 = document.getElementById('price3');
let price4 = document.getElementById('price4');

let price11=price1.textContent;
let price22=price2.textContent;
let price33=price3.textContent;
let price44=price4.textContent;

function sumAll(){let sum=+price11+ +price22+ +price33+ +price44;
    document.getElementById("resultSum").textContent = sum}
sumAll();

resultFinal.addEventListener('click', showResult, {once : true});
function showResult() {let final = +document.getElementById("resultSum").value;
let resultFinal=final*0.8;
document.getElementById("resultFinal").textContent = resultFinal;  
//final.addEventListener(`sumAll*0.8`, showResult);
}
//showResult();
