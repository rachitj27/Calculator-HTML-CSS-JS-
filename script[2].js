var digits = document.querySelectorAll(".digit")
var operators = document.querySelectorAll(".operator")
var equal = document.getElementById("equal")
var clear = document.getElementById("clear")
var box = document.getElementById("display")
var operator = null;
var number1 = null
var number2 = null

for (var i = 0; i < digits.length; i++) {
  digits[i].addEventListener("click", showDigits)
}
for (var i = 0; i < operators.length; i++) {
  operators[i].addEventListener("click", selectOperator)
}
equal.addEventListener("click", getAnswer)
clear.addEventListener("click", clearDiv)
box.innerHTML = ""
function showDigits() {
  //if (number1 =! null ){

  //}
  box.innerHTML = box.innerHTML + this.innerText
}
function selectOperator() {
  if (number1 == null) {
    number1 = box.innerHTML
  }
  if (operator = ! null && number1 == null) {
    box.innerHTML = ""
  }
  else {
    console.log(this.innerText)
    operator = this.innerText
    box.innerHTML = box.innerHTML + this.innerText
    box.innerHTML = ""
  }

}
function getAnswer() {
  number2 = box.innerHTML
  box.innerHTML = ""
  if (operator == "+") {
    box.innerHTML = `${parseInt(number1) + parseInt(number2)}`
  }
  else if (operator == "x") {
    box.innerHTML = `${number1 * number2}`
  }
  else if (operator == "-") {
    box.innerHTML = `${number1 - number2}`
  }
  else if (operator == "÷") {
    box.innerHTML = `${number1 / number2}`
  }
  console.log(number1)
  console.log(number2)
  console.log(operator)
  number1 = null

}
function clearDiv() {
  box.innerHTML = ""
  number1 = null
  number2 = null
  operator = null
}



// 7 + 5 + 3

// 7->number 1, how, bcoz number1 is null
// if number1 != null then this must number2 -> 5, sum 7 + 5 and put it in number1 and make number2 null