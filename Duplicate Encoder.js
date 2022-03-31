/*
    The goal of this exercise is to convert a string to a new string where each character in the new string is "(" 
    if that character appears only once in the original string, or ")" if that character appears more than once in 
    the original string. Ignore capitalization when determining if a character is a duplicate.

    Examples
    "din"      =>  "((("
    "recede"   =>  "()()()"
    "Success"  =>  ")())())" 
    "(( @"     =>  "))((" 

 */

    function duplicateEncode(word){
    
        word = word.toLowerCase();

        let repit = false;
        let outputArray = []; 

        for (let i = 0; i < word.length; i++) {

            for (let j = i+1; j < word.length; j++) {
                if (word[i] == word[j])  {
                    repit = true;
                }             
            }

            for (let j = i-1; j >= 0; j--) {
                if (word[i] == word[j])  {
                    repit = true;
                }             
            }
 
        outputArray.push(repit);
        repit = false;    
        
    }

    for (let n = 0; n < outputArray.length; n++) {
         (outputArray[n]) ? outputArray[n] = ')' :  outputArray[n] = '('
    }
    
    return outputArray.join('');

    }

    //----------------------------------------

    function duplicateEncodeTwo(word){
        return word
          .toLowerCase()
          .split('')
          .map( function (a, i, w) {
            return w.indexOf(a) == w.lastIndexOf(a) ? '(' : ')'
          })
          .join('');
      }

    console.log(duplicateEncode("din"));        // Success
    console.log(duplicateEncode("Success"));    //")())())"
    console.log(duplicateEncode("recede"));  
    console.log(duplicateEncode("(( @"));

    ')()('