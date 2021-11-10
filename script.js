// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var passLength = prompt("Choose a length between 8 and 128 Characters");
  if (passLength < 8 || passLength > 128) {
    alert("Must be between 8 and 128 characters");
    return;
  }
  var incLowerCase = confirm("Include lowercase characters?");
  var incUpperCase = confirm("Include uppercase characters?");
  var incNumbers = confirm("Include numbers?");
  var incSpecial = confirm("Include special characters?");

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;



  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
