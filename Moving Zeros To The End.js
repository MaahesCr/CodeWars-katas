var moveZeros = function (arr) {

}

  console.log(moveZeros([false,1,0,1,2,0,1,3,"a"])) //returns[false,1,1,2,1,3,"a",0,0]
  console.log(moveZeros([1,0,0,0,0,2,null,1,null,1,null,3,null,1])) //returns[false,1,1,2,1,3,"a",0,0]
  
//    expected '[1,2,null,1,null,1,null,3,null,1,0,0,0,0]' 
//    to equal '[1,2,1,1,3,1,0,0,0,0]'
/**expected '["a","b","c","d",1,1,3,[],1,9,{},9,0,0,0,0,0,0,0,0,0,0]' to equal 
 *          '["a","b",null,"c","d",1,false,1,3,[],1,9,{},9,0,0,0,0,0,0,0,0,0,0]' */