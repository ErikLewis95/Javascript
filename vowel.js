// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

// STRINGSFUNDAMENTALS

//cara 1
// function isVowel(ch) {
//     ch = ch.toLowerCase();
//     return ch == "a" || ch == "e" || ch == "i" || ch == "o" || ch == "u";
//    }
  
//    // Returns count of vowels in str
//    function countVowels(str)
//    {
//     var count = 0;
//     for (var i = 0; i < str.length; i++)
//     if (isVowel(str[i]))
    
//      // Check for vowel
//      ++count;
//     return count;
//    }

//    var str = "Hallo Selamat Pagi Dunia";
//    console.log(countVowels(str));

//cara2
// function getCount(str) {
//     let vowelsCount = 0
//     for (var i = 0; i <= str.length - 1; i++) {
//     if ('aeiou'.includes(str[i].toLowerCase())) {
//       vowelsCount += 1;
//     }
//   }
//     return vowelsCount
//   }
//   console.log(getCount("Hallo Selamat Pagi Dunia"));

//cara3
// function getCount(str) {
//     let count = str.match(/[aeiou]/gi);
//     return count === null ? 0 : count.length;
//   }
//   console.log(getCount("Hallo Selamat Pagi Dunia"));

//cara4 
// function getCount(str) {
//   let vocal = "aiueo"
//   let result = str.split("").filter((letter) => vocal.includes(letter)).length
//   return result;
// }
//   console.log(getCount("Hallo Selamat Pagi Dunia"));

//cara5
// function getCount(str) {
//   let vowel = "aiueo".split("");
//   let x = str;
//   x = x
//     .toLowerCase()
//     .split("")
//     .filter((y) => {
//       return vowel.includes(y);
//     })
//     .join("");
//   let query = 0;
//   for (let i = 0; i < x.length; i++) {
//     query += 1;
//   }
//   return query;
// }
//   console.log(getCount("Hallo Selamat Pagi Dunia"));