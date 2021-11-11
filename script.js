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

  //Makes an array of character codes
  function charLowToHigh(low, high) {
    var array = [];
    for (let i = low; i <= high; i++) {
      array.push(i);
    }
    return array;
  }

  //Makes an array of specific character codes
  var lowerCharCodes = charLowToHigh(97, 122);
  var upperCharCodes = charLowToHigh(65, 90);
  var numberCharCodes = charLowToHigh(48, 57);
  var specialCharCodes = charLowToHigh(32, 47).concat(charLowToHigh(58, 64)).concat(charLowToHigh(91, 96)).concat(charLowToHigh(123, 126));

  function generatePassword(length, lowercase, uppercase, numbers, special) {
    //Makes sure at least one is selected, if not, alert displays "Please try again"
    if (lowercase || uppercase || numbers || special) {
      //Makes an array of character codes, depending on which characters were selected
      var charArray = [];
      if (lowercase) {
        charArray.push(...lowerCharCodes);
      }
      if (uppercase) {
        charArray.push(...upperCharCodes);
      }
      if (numbers) {
        charArray.push(...numberCharCodes);
      }
      if (special) {
        charArray.push(...specialCharCodes);
      }

      //Create Password Array that will hold all the character codes at random, and will then be converted into characters and returned in unity
      var passwordArray = [];
      for (var i = 0; i < length; i++) {
        var character = charArray[Math.floor(Math.random() * charArray.length)];

        passwordArray.push(String.fromCharCode(character));
      }

      return passwordArray.join('');


    } else {
      alert("Please try again");
      return "";
    }
 
  }

  var password = generatePassword(passLength, incLowerCase, incUpperCase, incNumbers, incSpecial);

  console.log(password);

  var passwordText = document.querySelector("#password");

  passwordText.value = password;



  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
