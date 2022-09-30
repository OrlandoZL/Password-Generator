// Assignment Code
var generateBtn = document.querySelector("#generate");

//array for lowercase letters
var LowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

//array for uppercase letters
var UpperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

//array for numbers 
var Numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

//array for special characters
var Characters = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "+", "=", "`", "~", "[", "]", "{", "}", ";", ":", "'", "\\", "|", ",", ".", "<", ">"]

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//function to generate a new password
function generatePassword(){
//variable for length of the password  
var passwordLength = 0;
// asks for password length
while (passwordLength < 8 || passwordLength > 128) {
  passwordLength = window.prompt("How many characters do you want your password to be? \nBetween 8 and 128 characters");

//if you press cancel
if (passwordLength === null) {
  return "Your secure password";
}
else {
  //makes sure password is between 8-128
  if (passwordLength < 8|| passwordLength > 128){
    alert("Must be between 8 and 128 characters.");
    return "Your secure password";
  }
}

}
//input variables
var confirmLowerCase = window.confirm("Would you like lowercase letters in your password?")
var confirmUpperCase = window.confirm("Would you like uppercase letters in your password?")
var confirmNumbers = window.confirm("Would you like numbers in your password?")
var confirmCharacter = window.confirm("Would you like special characters in your password?")

}

//saves generated password
var finalresult = "";

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}