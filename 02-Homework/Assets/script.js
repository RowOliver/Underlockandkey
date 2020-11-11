// Assignment Code
var generateBtn = document.querySelector("#generate");

// Make button clickable?
generateBtn.addEventListener("click", generatePassword);

var userPassword = [];
var confirmChar = [];

// Things that the password could contain
var passwordLength = " ";
var useUpperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var useLowerCase = "abcdefghijklmnopqrstuvwxyz";
var useNumbers = "123456789";
var useSpecials = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";

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

  if (confrimUseUpperCase) {
      confirmChar.push(...useUpperCase);
     
  }

  if (confrimUseLowerCase) {
    confirmChar.push(...useLowerCase);
  }


  if (confirmUseNumbers) {
    confirmChar.push(...useNumbers);

  }
  
  if (confirmUsespecials) {
    confirmChar.push(...useSpecials);

  }
// the loop that causes the code to run through and randomized the data that it has collected 

  for(var i = 0; i < passwordLength; i++) {
    
    userPassword.push(confirmChar[Math.floor(Math.random() * confirmChar.length )]); 
     console.log(userPassword.join("+"));
  
  }
  // find an element on HTML and give it value
  document.getElementById("password").value = userPassword.join(" ");


  console.log (confirmChar);
  console.log (userPassword);
  console.log (password);
  


}









