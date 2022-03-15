var generateBtn = document.querySelector("#generate");

function generatePassword() {

var uppercaseArray = ['Q','O','G','H','S','R','F','W','A','D'];
var lowercaseArray = ['f','e','t','y','z','k','j'];
var numbArray = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9','123'];
var characterArray = ['+', ';', '$', '%', '`', '&', '*', '(', ')', '-', '_', '=', '+',',','<','>','?','/','|','=']; 
var resultArray = [];
var userArray = [];

uppercaseArray [1]

  var numCharacter = prompt ("Password must be a minimum of 8 max of 128?");
  var numbers = confirm ("Would you like numbers in your password prompt?");
  var uppercases = confirm ("Would you like Uppercases in your password?");
  var lowercases = confirm (" Do you want lowercases in your password?");
  var characters = confirm ("Does your password need special characters?");

if (numbers){
  resultArray = resultArray.concat(numbArray);
}

if (uppercases){
  resultArray = resultArray.concat(uppercaseArray);
}

if (lowercases){
  resultArray = resultArray.concat(lowercaseArray);
}

if (characters){
  resultArray = resultArray.concat(characterArray);
}

console.log(resultArray)

for (var i = 0; i < numCharacter; i++) {
      
  userArray.push (resultArray[Math.floor(Math.random() * resultArray.length)]); 
}

  return userArray.join("") ;
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
    passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword)