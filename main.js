function Solve(val){
    let var1 = document.getElementById("num")
    var1.value += val
}

function Result(){
    let num1 = document.getElementById("num").value
    let num2 = eval(num1)
    document.getElementById("num").value = num2
}

function Clear(){
    let input = document.getElementById("num")
    input.value = ""
}

function Back(){
    let evaluation = document.getElementById("num")
    evaluation.value = evaluation.value.slice(0,-1)
}
