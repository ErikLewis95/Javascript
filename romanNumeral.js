// function roman_to_Int(str1) {
//     if(str1 == null) return -1;//jika stringnya kosong maka hasilnya -1
//     var num = char_to_int(str1.charAt(0)); //variabel num isinya untuk mengengembalikan karakter function char to integer ke index 0
//     var pre,curr
    
//     for(var i = 1; i < str1.length; i++){ // looping untuk jika variabel i=1;i< dari pannjang string str1, i++
//     curr = char_to_int(str1.charAt(i));//curr isinya fungtion char_to_int dimana str1  dimasukkan ke index ke i
//     pre = char_to_int(str1.charAt(i-1));//pre dimana isinya fungtion char to integet  dimana isi str1 diumbah bari inde
//     if(curr <= pre){
//     num += curr;
//     } else {
//     num = num - pre*2 + curr;
//     }
//     }
    
//     return num;
//     }
    
//     function char_to_int(c){
//     switch (c){
//     case 'I': return 1;
//     case 'V': return 5;
//     case 'X': return 10;
//     case 'L': return 50;
//     case 'C': return 100;
//     case 'D': return 500;
//     case 'M': return 1000;
//     default: return -1;
//     }
//     }
//     console.log(roman_to_Int('III'));
//     console.log(roman_to_Int('LVII'));
//     console.log(roman_to_Int('MCMXCIV'));


//cara 2
const roman = (str) => {
    let romanCharacters = {
      M: 1000,
      D: 500,
      C: 100,
      L: 50,
      X: 10,
      V: 5,
      I: 1,
    };
  
    let res = 0; // 1994
  
    for (let i = 0; i < str.length; i++) {
      // 1
      let current = str[i];
      let next = str[i + 1];
  
      if (romanCharacters[current] < romanCharacters[next]) {
        res -= romanCharacters[current];
      } else {
        res += romanCharacters[current];
      }
    }
  
    return res;
  };
  
  console.log(roman("MCMXCIV"));
