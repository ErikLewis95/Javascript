// Given two strings s and t, return true if t is an anagram of s, and false otherwise.
// ● An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, 
// typically using all the original letters exactly once.
// ● Example 1:
// ○ Input: s = "anagram", t = "nagaram"
// ○ Output: true
// ● Example 2:
// ○ Input: s = "rat", t = "car"
// ○ Output: false


//cara1
// let s = "anagram"
// let t = "nagaram"

// function cek(a, b) {
//     let snew = a.split("").sort().join()
//     let tnew = b.split("").sort().join()
//     return (snew === tnew? true : false)
// }

// console.log(cek(s, t))

function Compare(str1, str2){
    if (str1.length !== str2.length) {
       return false
    }
 
    else {
        return str1.toLowerCase().split("").sort().join("") === str2.toLowerCase().split("").sort().join("")
    }
}

console.log(Compare("Listen", "Silent"))