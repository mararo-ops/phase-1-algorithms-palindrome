function isPalindrome(word) {
  // Write your algorithm here
  //Reverse the given string.
  //Compare the reversed string with the original string.
  //Return true if they are identical, otherwise return false.
}

/* 
  Add your pseudocode here
*/
//FUNCTION isPalindrome(string)
   // SET reversedString TO reverse of string
    //IF reversedString EQUALS string THEN
    //    RETURN true
   // ELSE
    //    RETURN false
   // END IF
//END FUNCTION

/*
  Add written explanation of your solution here
*/
//Reverse the String: We begin by reversing the entire string. This means, if our input string was "racecar", the reversed string would also be "racecar".

//Comparison: Next, we compare the reversed string with the original string. If they are identical, it confirms that the string remains unchanged when its letters are reversed, which is the very definition of a palindrome.

//Return the Result: If the reversed string matches the original string, our function returns true, indicating that the input string is a palindrome. If they don't match, it returns false, indicating the string is not a palindrome.
// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
