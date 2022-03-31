function duplicateCount(text){
// не смог сделать 
    let duplicateCountVar = 0;
    let currentValue = 0;
    let arr = [];
    for (currentValue = 0; currentValue<text.lenght; currentValue++) {
      for(let i = currentValue + 1; i<text.length; i++){

        let repitExistBool = false;

          console.log(`${text[currentValue]} = ${text[i]} --- ${i}`);
          if(text[currentValue] == text[i] || text[currentValue].toUpperCase() == text[i]){
              
              if (arr.includes(text[i]) || arr.includes(text[i].toUpperCase)){

              } else {
                repitExistBool = true;
                arr.push(text[i]);
                console.log(text[i]);
              }
          }

          if (repitExistBool) {
              duplicateCountVar++;
          }
        
      }
    }
    return duplicateCountVar;
  }

  console.log(duplicateCount(""), " 0");
  console.log(duplicateCount("abcde"), " 0");
  console.log(duplicateCount("aabbcde"), " 2");
  console.log(duplicateCount("aabBcde"), " 2");
  console.log(duplicateCount("Indivisibility"), " 1");
  console.log(duplicateCount("Indivisibilities"), " 2");

            //text = text.replace(/^i+/);
            //text = text.replace(/i/gi);
            //console.log(text.replace(/${i}/gi)); // //gi
            //console.log(text[currentValue]);
            //console.log(text[i])
                          //console.log(text, '----')
              //console.log(arr);
              //console.log(text[i]);