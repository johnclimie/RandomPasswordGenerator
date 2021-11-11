// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input


function writePassword() {
  
  //Asks for length of password, and cancels function if under 8 or above 128 characters
  var passLength = prompt("Choose a length between 8 and 128 Characters");
  if (passLength < 8 || passLength > 128) {
    alert("Must be between 8 and 128 characters");
    return;
  }

  //Asks user which types of characters they would like to use
  var incLowerCase = confirm("Include lowercase characters?");
  var incUpperCase = confirm("Include uppercase characters?");
  var incNumbers = confirm("Include numbers?");
  var incSpecial = confirm("Include special characters?");

  function generatePassword(length, lowercase, upppercase, numbers, special) {
    if (lowercase || upppercase || numbers || special) {
      return "testing";
    } else {
      alert("Please try again");
      return "";
    }
 
  }


  var password = generatePassword(passLength, incLowerCase, incUpperCase, incNumbers, incSpecial);

  var passwordText = document.querySelector("#password");

  passwordText.value = password;



  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
