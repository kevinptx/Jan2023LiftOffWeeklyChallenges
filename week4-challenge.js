function LongestWord(sen) {
  // code goes here
  //The match() method retrieves the result of matching a string against a regular expression.
  //g modifier: global. All matches (don't return on first match)
  //i modifier: insensitive. Case insensitive match (ignores case of [a-zA-Z])
  let array = sen.match(/[a-z]+/gi);
  console.log(array);
  let sorted = array.sort(function (a, b) {
    return b.length - a.length;
  });
  return sorted[0];
}

// keep this function call here
//LongestWord(readline());

console.log(LongestWord("fun&!! time"));

console.log(LongestWord("I love dogs"));

/*
Longest Word
Have the function LongestWord(sen) take the sen parameter being passed and return the longest word in the string. If there are two or more words that are the same length, return the first word from the string with that length. Ignore punctuation and assume sen will not be empty. Words may also contain numbers, for example "Hello world123 567"
Examples
Input: "fun&!! time"
Output: time
Input: "I love dogs"
Output: love
 */
