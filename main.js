function solve(){
    let val = document.getElementById('num')
    val.value += val
}
function clear(){
    let num1 = document.getElementById('num').value
    let num2 = Function(num1)
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