function spinWords(string){
    let stringArr = string.split(' ');
    let output = '';
    for (let i = 0; i < stringArr.length; i++) {
        if (stringArr[i].length >= 5) {
            output += stringArr[i].split('').reverse().join('') + ' ';
        } else {
            output += stringArr[i] + ' ';
        }
    }
    return output.trimEnd();
  }

  function spinWordsTwo(words){
    return words.split(' ').map(function (word) {
      return (word.length > 4) ? word.split('').reverse().join('') : word;
    }).join(' ');
  }

  console.log(spinWords("Welcome"), 's');
  console.log(spinWords('Hey fellow warriors'));
  console.log(spinWords('This is a test'), 's');
  console.log(spinWords("Just kidding there is still one more"));

  /*
    assert.strictEqual(spinWords("Welcome"), "emocleW");
    assert.strictEqual(spinWords("Hey fellow warriors"), "Hey wollef sroirraw");
    assert.strictEqual(spinWords("This is a test"), "This is a test");
    assert.strictEqual(spinWords("This is another test"), "This is rehtona test");
    assert.strictEqual(spinWords("You are almost to the last test"), "You are tsomla to the last test");
    assert.strictEqual(spinWords("Just kidding there is still one more"), "Just gniddik ereht is llits one more");
    assert.strictEqual(spinWords("Seriously this is the last one"), "ylsuoireS this is the last one");
   */

    //'Hey wollefsroirraw' to equal 
    //'Hey wollef sroirraw'