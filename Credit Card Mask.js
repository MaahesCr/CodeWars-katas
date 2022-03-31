function maskify(cc) {
    return cc.split('').reverse().map( function (letter, i) {
        return (i>3) ? letter = '#' : letter; 
    }).reverse().join('');
}

function maskifyTwo(cc) {
    return cc.slice(0, -4).replace(/./g, '#') + cc.slice(-4);
  }

console.log(maskify('4556364607935616'));

//l = 4 i = 0
/*    Test.assertEquals(maskify('4556364607935616'), '############5616');
    Test.assertEquals(maskify('1'), '1');
    Test.assertEquals(maskify('11111'), '#1111');
*/