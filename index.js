let num1 = 0
let num2 = 0
document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2
function add11(){
    num1 = num1 + 1
    document.getElementById("num1-el").textContent = num1
}
function add12(){
     num1 = num1 + 2
    document.getElementById("num1-el").textContent = num1 
}
function add13(){
     num1 = num1 + 3
    document.getElementById("num1-el").textContent = num1 
}
function add21(){
    num2 = num2 + 1
    document.getElementById("num2-el").textContent = num2
}
function add22(){
     num2 = num2 + 2
    document.getElementById("num2-el").textContent = num2 
}
function add23(){
     num2 = num2 + 3
    document.getElementById("num2-el").textContent = num2
}
function reset(){
    document.getElementById("num1-el").textContent = 0
    document.getElementById("num2-el").textContent = 0
}