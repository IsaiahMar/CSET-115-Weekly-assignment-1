let display = document.querySelector(".display");
let buttons1 = document.querySelectorAll("button");
let operators = ["%", "*", "/", "-", "+", "="];
let output = "";


function calculate(btnValue){
  display.focus();
  if (btnValue === "=" && output !== "") {
  
    output = eval(output.replace("%", "/100"));
  } 
  
  else if (btnValue === "AC") {
    output = "";
  } 
  
  else if (btnValue === "DEL") {
   
    output = output.toString().slice(0, -1);
  } 
   else {
   
if (output === "" && operators.includes(btnValue)) return;
    output += btnValue;
  }
  display.value = output;
};

buttons1.forEach((button) => {
  button.addEventListener("click", (e) => calculate(e.target.dataset.value));
});