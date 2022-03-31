/*
Create a RomanNumerals class that can convert a roman numeral to and from an integer value. It should follow the API demonstrated in the examples below. Multiple roman numeral values will be tested for each helper method.

Modern Roman numerals are written by expressing each digit separately starting with the left most digit and skipping any digit with a value of zero. In Roman numerals 1990 is rendered: 1000=M, 900=CM, 90=XC; resulting in MCMXC. 2008 is written as 2000=MM, 8=VIII; or MMVIII. 1666 uses each Roman symbol in descending order: MDCLXVI.

Input range : 1 <= n < 4000

In this kata 4 should be represented as IV, NOT as IIII (the "watchmaker's four").

Examples
RomanNumerals.toRoman(1000); // should return 'M'
RomanNumerals.fromRoman('M'); // should return 1000

*/ // VIII 

function RomanNumeral () {

}

RomanNumeral.prototype.toRoman = function(numb) {
  
  let output = '';
  while (numb > 0) {
    output += RomanNumerals.helper(numb)[0] 
    numb = RomanNumerals.helper(numb)[1]; 
  } 

  return output;
}

RomanNumeral.prototype.helper = function(cutInput) {

  let output = '';
  
  if (cutInput < 4 && cutInput != 0) { 
    return [output + 'I', cutInput - 1]
  }
  if (cutInput < 5) {
    return [output + 'IV', cutInput - 4]
  }
  if (cutInput < 9) {
    return [output + 'V', cutInput - 5]
  }
  if (cutInput < 10) {
    return [output + 'IX', cutInput - 9]
  }
  if (cutInput < 40) {  // 40
    return [output + 'X', cutInput - 10]
  }
  if (cutInput < 50) {  // 40
    return [output + 'XL', cutInput - 40]
  }
  if (cutInput < 90) { // 90
    return [output + 'L', cutInput - 50]
  }
  if (cutInput < 100) { 
    return [output + 'XC', cutInput - 90]
  }
  if (cutInput < 400) { // 400
    return [output + 'C', cutInput - 100]
  }
  if (cutInput < 500) { // 400
    return [output + 'CD', cutInput - 400]
  }
  if (cutInput < 900) {  // 900
    return [output + 'D', cutInput - 500]
  } 
  if (cutInput < 1000) {  
    return [output + 'CM', cutInput - 900]
  } else {
    return [output + 'M', cutInput - 1000]
  }
}

RomanNumeral.prototype.fromRoman = function(input) {
  let output = 0;
  
  while (input.length > 0) {
    if (RomanNumerals.helperTwo(input.slice(0,2)) == 0) {   // если число не двойное 
      output += RomanNumerals.helperTwo(input[0])
      input = input.slice(1);
    } else {  // число двойное 
      output += RomanNumerals.helperTwo(input.slice(0,2))
      input = input.slice(1).slice(1); 
    }
  }
  return output;
}

RomanNumeral.prototype.helperTwo = function(cutInput) {
  if (cutInput == 'M') {
    return 1000
  }
  if (cutInput == 'CM') {
    return 900
  }
  if (cutInput == 'D') { 
    return 500
  }
  if (cutInput == 'CD') {
    return 400
  }
  if (cutInput == 'C') {
    return 100
  }
  if (cutInput == 'XC') {
    return 90
  }
  if (cutInput == 'L') {  //xl
    return 50
  }
  if (cutInput == 'XL') {  //xl
    return 40
  }
  if (cutInput == 'X') {
    return 10
  }
  if (cutInput == 'IX'){
    return 9
  }
  if (cutInput == 'V'){
    return 5
  }
  if (cutInput == 'IV'){
    return 4
  }
  if (cutInput == 'I'){
    return 1
  } else return 0;
}

let RomanNumerals = new RomanNumeral();

// expected 'MCCCCLXXXII' to equal 'MCDLXXXII'
//expected 'MMMXXXXII' to equal 'MMMXLII'

// expected 1864 to equal 1844
// MDCCCLXIV          MDCCCXLIV

// expected 3629 to equal 3429
// MMMDCXXIX      MMMCDXXIX

// expected 'MDCCCCLXXXX' to equal 'M CM XC'


let inputNumb = 1482;

console.log(RomanNumerals.toRoman(inputNumb));//(1234));
console.log(RomanNumerals.fromRoman('MMMCDXXIX')) //2006 MCMXC

// < 10 < 100 < 1000 >= 1000

/*
    assert.strictEqual(RomanNumerals.fromRoman('XXI'), 21);
    assert.strictEqual(RomanNumerals.fromRoman('I'), 1);
    assert.strictEqual(RomanNumerals.fromRoman('IV'), 4);
    assert.strictEqual(RomanNumerals.fromRoman('MMVIII'), 2008);
    assert.strictEqual(RomanNumerals.fromRoman('MDCLXVI'), 1666);
*/

/*
let output = [];
    SN = String(numb);
    //for (let i = 0; i < SN.length; i++) {
        //let currentSymb = SN[SN.length-i-1];
        //console.log('cur: ', currentSymb)
        //switch(currentSymb/1) {
    switch(SN[SN.length-1]) {
      case 0:  
        output.push();
        break;
      case 1:  
              output.push('I');
              break;
            case 2:  
              output.push('II');
              break;
            case 3:  
              output.push('III');
              break;
            case 4:  
              output.push('IV');
              break;
            case 5:  
              output.push('V');
              break;
            case 6:  
              output.push('VI');
              break;
            case 7:  
              output.push('VII');
              break;
            case 8:  
              output.push('VIII');
              break;
            case 9:  
              output.push('IX');  
              break;
          }
          
    //}
    return output;

    //console.log(SN[SN.length-1]);
*/

/*
RomanNumerals.prototype.toRoman = function(numb) {
  let output;
  //console.log(String(numb).length)
  switch (String(numb).length) {
    case 1:  
      output = Rom.minTen(numb);
    case 2:
      output = Rom.minHung(numb);
  }
  return output;
}

RomanNumerals.prototype.minTen = function(numb) {
  switch(numb) {
    case 1:  
      return 'I';
    case 2:
      return 'II';
    case 3:
      return 'III';
    case 4:  
      return 'IV';
    case 5:
      return 'V';
    case 6:
      return 'VI';
    case 7:  
      return 'VII';
    case 8:
      return 'VIII';
    case 9:
      return 'IX';
  }
}

RomanNumerals.prototype.minHung = function(numb){
  console.log('log: ',String(numb)[0])
  switch(String(numb)[0]) {
    case 1:  
      return 'X';
    case 2:
      return 'XX';
    case 3:
      return 'XXX';
    case 4:  
      return 'XL';
    case 5:
      return 'L';
    case 6:
      return 'LX';
    case 7:  
      return 'LXX';
    case 8:
      return 'LXXX';
    case 9:
      return 'XC';
  }
}

RomanNumerals.prototype.fromRoman = function(input) {
    for (let i = 0; i < input; i++){
        input[i]
    }
}*/