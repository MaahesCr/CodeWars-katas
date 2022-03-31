/**
 Your job is to write a function which increments a string, to create a new string.

If the string already ends with a number, the number should be incremented by 1.
If the string does not end with a number. the number 1 should be appended to the new string.
Examples:

foo -> foo1

foobar23 -> foobar24

foo0042 -> foo0043

foo9 -> foo10

foo099 -> foo100

Attention: If the number has leading zeros the amount of digits should be considered.

 */

function incrementString (strng) {

    let counter = 0;

    for (let i = 0; i < strng.length; i++) {
        (isNaN(strng.slice(-1-i)) == false) ? counter++  : null
        //console.log(typeof(strng.slice(-1-i)));
    }   // ['0-9']

    let output = '';    // 000
    /*
    if (counter>0){  
        for (let i = 0; counter.slice(-1-i) != 9; i++){
            let j;
        } 
    } else {
        output = strng + '1';
    }
    */
    return counter
  }

  function incrementStringTwo (strng) {
      let output = '';
    (strng.length == 0) ? output = '1' : null;
    (/^[A-Z]$/i.test(strng)) ? null : output = strng + '1';


    return output;
  }

  //console.log(incrementString("foobar000")) //, "foobar001";

  /* let regex = /[0-9]/g;
  let index = strng.search(regex);
  let arr = [];
  
  //split string at where a number first appears
  if (index === -1 || strng === "") {
    return strng + "1";
  }
  else arr.push( strng.substring(0, index), strng.substring(index, strng.length) );
  
  //loop through element of array with numbers and increment by 1 when necessary
  let secondArr = arr[1].split("");
  for (let i = secondArr.length - 1; i >= 0; i--) {
    if (secondArr[i] < 9) {
      secondArr[i]++;
      break;
    }
    else if (i === 0 && secondArr[i] == 9) {
      secondArr[i] = 10;
    }
    else if (secondArr[i] == 9) {
      secondArr[i] = 0;
    }
  }
  secondArr = secondArr.join("");
  return arr[0] + secondArr;*/

  console.log(incrementStringTwo(''))
  console.log(incrementStringTwo("foobar"))
