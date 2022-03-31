/*
Snail Sort
Given an n x n array, return the array elements arranged from outermost elements to the middle element, traveling clockwise.

array = [[1,2,3],
         [4,5,6],
         [7,8,9]]
snail(array) #=> [1,2,3,6,9,8,7,4,5]
For better understanding, please follow the numbers of the next array consecutively:

array = [[1,2,3],
         [8,9,4],
         [7,6,5]]
snail(array) #=> [1,2,3,4,5,6,7,8,9]
This image will illustrate things more clearly:


NOTE: The idea is not sort the elements from the lowest value to the highest; the idea is to traverse the 2-d array in a clockwise snailshell pattern.

NOTE 2: The 0x0 (empty matrix) is represented as en empty array inside an array
*/

snail = function(array) {
    
    if (array.length == 1 && array[0].length == 0) return []

    let n = array.length; 
    let outputArr = [];

    [X, Y] = [0 , 0];
    let increment = 1;

    outputArr.push(array[0][0]);

    for (let i = 1; i < n; i++) {
        Y++;
        outputArr.push(array[X][Y]);
    }

    for (let j = 1; j < n; j++) {

        for (let i = 0; i < n - j; i++){
            X = X + increment;
            outputArr.push(array[X][Y]);
        }

        for (let i = 0; i < n - j; i++){
            Y = Y - increment;
            outputArr.push(array[X][Y]);
        }

        increment = -increment;
    }

    return outputArr;
  }


 bestSol = function (array) {
    var result;
    while (array.length) {
      
      result = (result ? result.concat(array.shift()) : array.shift());
      
      for (var i = 0; i < array.length; i++)
        result.push(array[i].pop());
      
      result = result.concat((array.pop() || []).reverse());
      
      for (var i = array.length - 1; i >= 0; i--)
        result.push(array[i].shift());
    }
    return result;
 }


  let inputArray = 
  [[1,2,3,4,5],                   
  [6,7,8,9,10],
  [11,12,13,14,15],
  [16,17,18,19,20],
  [21,22,23,24,25]];
  
                    [[1,2,3],                
                    [8,9,4],
                    [7,6,5]];

                    00, 01, 02 
                    12, 22 
                    21, 20 
                    10 
                    11

                    [[1,2,3,4,5],                   
                    [1,2,3,4,5],
                    [1,2,3,4,5],
                    [1,2,3,4,5],
                    [1,2,3,4,5]];

                    00, 01, 02, 03, 04 
                    14, 24, 34, 44 
                    43, 42, 41, 40
                    30, 20, 10 
                    11, 12, 13
                    23, 33
                    32, 31
                    21 
                    22

  console.log(snail(inputArray));
  console.log([[]].length)

  /*Test.assertDeepEquals(snail([[]]), []);
Test.assertDeepEquals(snail([[1]]), [1]);
Test.assertDeepEquals(snail([[1, 2, 3], [4, 5, 6], [7, 8, 9]]), [1, 2, 3, 6, 9, 8, 7, 4, 5]);
Test.assertDeepEquals(snail([[1, 2, 3, 4, 5], [6, 7, 8, 9, 10], [11, 12, 13, 14, 15], [16, 17, 18, 19, 20], [21, 22, 23, 24, 25]]), [1, 2, 3, 4, 5, 10, 15, 20, 25, 24, 23, 22, 21, 16, 11, 6, 7, 8, 9, 14, 19, 18, 17, 12, 13]);
Test.assertDeepEquals(snail([[1, 2, 3, 4, 5, 6], [20, 21, 22, 23, 24, 7], [19, 32, 33, 34, 25, 8], [18, 31, 36, 35, 26, 9], [17, 30, 29, 28, 27, 10], [16, 15, 14, 13, 12, 11]]), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36]);
}); */

/*    outputArr.push(array[0][0]);
    for (let i = 1; i < n; i++) {
        koordY++;
        outputArr.push(array[koordX][koordY]);
    }
    // ----
    for (let i = 0; i < n - 1; i++){
        koordX++;
        outputArr.push(array[koordX][koordY]);
    }

    for (let i = 0; i < n - 1; i++){
        koordY --;
        outputArr.push(array[koordX][koordY]);
    }

    for (let i = 0; i < n - 2; i++){
        koordX --;
        outputArr.push(array[koordX][koordY]);
    }

    for (let i = 0; i < n - 2; i++){
        koordY ++
        outputArr.push(array[koordX][koordY]);
    }

    for (let i = 0; i < n - 3; i++){
        koordX ++;
        outputArr.push(array[koordX][koordY]);
    }

    for (let i = 0; i < n - 3; i++){
        koordY --;
        outputArr.push(array[koordX][koordY]);
    }

    for (let i = 0; i < n - 4; i++){
        koordX--
        outputArr.push(array[koordX][koordY]);
    }

    for (let i = 0; i < n - 4; i++){
        koordY++
        outputArr.push(array[koordX][koordY]);
    } */