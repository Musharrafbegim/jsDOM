//Immediately invoked function expression
var userInput = Number(prompt("Put a decimal number: "))


document.getElementById("resultBtn").onclick = function(){
    document.getElementById("binary").innerHTML = "Your decimal is " + userInput.toString(2) + " in Binary!"
    document.getElementById("octal").innerHTML = "Your decimal is " + userInput.toString(8) + " in Octal!"
    document.getElementById("hex").innerHTML = "Your decimal is " + userInput.toString(16) + " in Hex!"
   
}
document.getElementById("refresh").onclick = function(){
    history.go(0);
}