// Assignment Code
var generateBtn = document.querySelector("#generate");

// Make button clickable?
generateBtn.addEventListener("click", writePassword);

var userPassword = [];
var confirmChar = [];

// Things that the password could contain
var passwordLength = " ";
var useUpperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var useLowerCase = [ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var useNumbers = ["1","2","3","4","5","6","7","8","9","0"];
var useSpecials = ["!","@","#","$","%","^","&","*","(",")","_","+","=","{","}","|","]","[",":",";","'","?","/",".",">",",","<","`","~"];

// Write password to the #password input


function writePassword(){

  var password = generatePassword();
  var passwordText = document.querySelector("#password"); 
      
  passwordText.value = password;
}
  
// ask the user 
function generatePassword(){

  // time to make it clickable. The prompt when the button is pushed 
var passwordLength = prompt("How long would you like your password? No LESS than 8 characters & no MORE than 128! ");
if (passwordLength <=8 || passwordLength >=128) {
  alert("Please choose between 8 and 128, Try Again!");
  return;
}

 // confirming commands: All the questions to prompt the user through

var confrimUseUpperCase = confirm("Would you like Upper Case letters used in your password?");
var confrimUseLowerCase = confirm("would you ike Lower Case letters in your password?");
var confirmUseNumbers = confirm("Would you like to use Numbers in your password?");
var confirmUsespecials = confirm("Would you like to use Special characters in your password?"); 

// if statements that prompt the user through 

  if (confrimUseUpperCase === true) {
      confirmChar.push(useUpperCase);
     
  }

  if (confrimUseLowerCase === true) {
    confirmChar.push(useLowerCase);
  }


  if (confirmUseNumbers == true) {
    confirmChar.push(useNumbers);

  }
  
  if (confirmUsespecials == true) {
    confirmChar.push(useSpecials);

  }
// the loop that causes the code to run through and randomized the data that it has collected 

  for(var i = 0; i < passwordLength; i++) {
    
    userPassword.push(confirmChar[Math.floor(Math.random() * confirmChar.length )]); 

  
  }
  



  console.log (confirmChar);
  console.log (userPassword);
  console.log (password);



}









