function solve(val){
    let val = document.getElementById('num')
    v.value += val
}
function clear(){
    let num1 = document.getElementById('num').value
    let num2 = eval(num1)
    document.getElementById('num').value = num2
}
function Clear() {
    var inp = document.getElementById('num');
    inp.value = '';
 }
 function Back() {
    var ev = document.getElementById('num');
    ev.value = ev.value.slice(0,-1);
 }