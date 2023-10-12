var operators = document.getElementsByClassName('operator')
var display = document.getElementsByClassName('display')
var button = document.getElementsByTagName('button')
var result = ""

// function calculate(oper){
//     if(oper == "=" && result != ""){
//        result = Function(result.replace("%", "/100"))
//     }
//     else if(oper == "AC"){
//         result = ""
//     }
//     else if(oper == "Del"){
//         result = toString().slice(0, -1)
//     }
//     else{
//         if(result == ""){
//             result += oper
//         }
//     }
//     display.value = result;
// }
// calculate()
function reset(){  
    document.getElementsByClassName("buttons").reset();  
  }   

function Result(op, calc){
    let num1 = document.getElementsByTagName("button")
    let num2 = document.getElementsByTagName("button")
    
    var result = eval(num1 + op + num2)
    document.getElementById(calc).value = result;
    return result;
}
