// Assignment Code
var generateBtn = document.querySelector("#generate");

// Array of numeric characters to be included in password

var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']

// Array of special characters to be included in password

var specialCharacters = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '+', '=']

// Array of lowercase characters to be included in password

var lowercaseCharacters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'y', 'z']

// Array of uppercase characters to be included in password

var uppercaseCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'Y', 'Z']

var characters = numericCharacters.concat(specialCharacters, lowercaseCharacters, uppercaseCharacters)   



function generatePassword() {

    var confirmCharacterNumber = document.getElementById("generate");
    if (confirmCharacterNumber.value.length <= 128 && confirmCharacterNumber.value.length > = 8){
        return true;
    }

    else {
        prompt 
    }

    
    //these are my prompts 

    //a prompt for how many characters the user would like
        //must be 8-128 characters
        //store it in a variable
    

    //ask the user if they want lowercase
        //store it in a variable    }

    function confirmlowercaseCharacter() {
        if (lowercaseCharacter)
            = ("Would you like lowercase characters?");
    }
    //ask the user if they want uppercase
        //store it in a variable

        function confirmuppercaseCharacter() {
            if (uppercaseCharacter)
                = ("Would you like uppercase characters?");

        }

    //ask the user if they want numeric
        //store it in a variable

        function confirmnumericCharacter() {
            if (numericCharacter)
                = ("Would you like numeric characters?");
        }

    //ask the user if they want special characters
        //store it in a variable

        function confirmspecialCharacter() {
            if (specialCharacter)
                = ("Would you like special characters?");
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
