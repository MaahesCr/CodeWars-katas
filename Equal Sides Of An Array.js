function findEvenIndex(arr)
{
  for (let i = 0; i < arr.length; i++){
      let sumOfLeftSide = 0;
      let sumOfRightSide = 0;

      for (let j = 0; j < i; j++) {
        sumOfLeftSide += arr[j];
      }

      for (let j = arr.length; j > i + 1; j--) {
        sumOfRightSide += arr[j-1];
      }

      if (sumOfRightSide == sumOfLeftSide){
          return i;
      } else {

      }
  }
  return -1
}

console.log(findEvenIndex([1,2,3,4,3,2,1]));
console.log(findEvenIndex([20,10,-80,10,10,15,35]));
/*
describe("FindEvenIndex", function() {
    it("Tests", function() {
      Test.assertEquals(findEvenIndex([1,2,3,4,3,2,1]),3, "The array was: [1,2,3,4,3,2,1] \n");
      Test.assertEquals(findEvenIndex([1,100,50,-51,1,1]),1, "The array was: [1,100,50,-51,1,1] \n");
      Test.assertEquals(findEvenIndex([1,2,3,4,5,6]),-1, "The array was: [1,2,3,4,5,6] \n");
      Test.assertEquals(findEvenIndex([20,10,30,10,10,15,35]),3, "The array was: [20,10,30,10,10,15,35] \n");
    });
  });
  */