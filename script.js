// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
var passwordThing= " ";

// what the password could contain
var upperCase = ["A", "B", "C", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V","W", "X", "Y", "Z", ]; 
var lowerCase = ["a", "b", "c","d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", ];
var special = [",","!", "@"];
var number = [0,1,2,3,4,5,6,7,8,9,];


// create functions to run code
function writePassword() {
var passwordThing = " ";
var password = generatePassword();
var passwordText = document.querySelector("#password");

 
passwordText.value = password; 
   

// when you click the button- this prompt should open on it's own 
function generatePassword();
  // what happens when the infomation is inputed and if an error occurs
  if (passwordThing.length < 8 || >128){
  alert("How long would you like your password?")
}

    
















  










// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
