/*
What is an anagram? Well, two words are anagrams of each other if they both contain the same letters. For example:

'abba' & 'baab' == true

'abba' & 'bbaa' == true

'abba' & 'abbba' == false

'abba' & 'abca' == false
Write a function that will find all the anagrams of a word from a list. You will be given two inputs a word and an array with words. You should return an array of all the anagrams or an empty array if there are none. For example:

anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']) => ['aabb', 'bbaa']

anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']) => ['carer', 'racer']

anagrams('laser', ['lazing', 'lazy',  'lacer']) => []

*/

function anagrams(word, words) {

    console.log(word.split('').sort().join(''));
    let origanlLetterInWord = [...new Set(word.split(''))];
    let outputBool = words.map(function (i) {
        return ([...new Set(i)].sort().join(' ') == origanlLetterInWord.sort().join(' ') && i.length == word.length) ? true : false;
      })

      let output = [];

      for (let i = 0; i < outputBool.length; i++){
          (outputBool[i]) ? output.push(words[i]) : null
      }
/*
      console.log('word: ', word)
      console.log('words: ', words)
      console.log('output: ', output)
      */
      return output;
}

console.log(anagrams('abba',['aabb', 'abcd', 'bbaa', 'dada']));
console.log(anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']));
console.log(anagrams('laser', ['lazing', 'lazy',  'lacer']))

/*
anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']) => ['aabb', 'bbaa']

anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']) => ['carer', 'racer']

anagrams('laser', ['lazing', 'lazy',  'lacer']) => []
*/