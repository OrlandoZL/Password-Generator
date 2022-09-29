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

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
//input variables
var confirmLowerCase;
var confirmUpperCase;
var confirmNumbers;
var confirmCharacters;
var passwordLength = 0;

//saves generated password
var result = "";

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//function to generate a new password
function generatePassword(){

