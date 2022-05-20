//Immediately invoked function expression
function resultsBin(){
    let userInput = Number(document.getElementById("results"));
    userInput = userInput.toString(2);
}

function resultsOctal(){
    let userInput = document.getElementById("results");
    userInput = userInput.toString(8);
}

function resultsHex(){
    let userInput = document.getElementById("results");
    userInput = userInput.toString(16);
}



document.getElementById("resultBtn").onclick = function(){
    document.getElementById("binary").innerHTML = "Your decimal is " + resultsBin() + " in Binary!"
    document.getElementById("octal").innerHTML = "Your decimal is " + resultsOctal() + " in Octal!"
    document.getElementById("hex").innerHTML = "Your decimal is " + resultsHex() + " in Hex!"
    document.getElementById("refresh").onclick = function(){
        history.go(0);
    }
}
