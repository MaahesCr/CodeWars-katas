/**
 Write a program that will calculate the number of trailing zeros in a factorial of a given number.

N! = 1 * 2 * 3 * ... * N

Be careful 1000! has 2568 digits...

For more info, see: http://mathworld.wolfram.com/Factorial.html

Examples
zeros(6) = 1
# 6! = 1 * 2 * 3 * 4 * 5 * 6 = 720 --> 1 trailing zero

zeros(12) = 2
# 12! = 479001600 --> 2 trailing zeros
Hint: You're not meant to calculate the factorial. Find another way to find the number of zeros.

 */

function zeros (n) {
    let output = 0;
    while(n>0){
     n = Math.floor(n/5);
     output +=n
   }
   return output;
    
    /*
    let result = 1;
    while(n){
        result *= n--;
    }

    result = String(result);
    let output = 0; 
    console.log(result)
    while (result.slice(-1) == 0) {
        result = String(result).slice(0, -1);
        console.log(result)
        output++;
    }

    return output;
    */
  }

  console.log(zeros(30)) //1