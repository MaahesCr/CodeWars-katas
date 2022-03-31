function accum(s) {
	let output = '';

    for (let i = 0; i < s.length; i++){
        let positionOfLetter = i;
        
        output += s[i].toUpperCase();

        if (i) {
            for (let positionOfLetter = i; positionOfLetter > 0; positionOfLetter--) {
                output += s[i].toLowerCase();
            }
        } 
        
        output += '-';
        
    }
    return output.slice(0, -1);
}

function accumTwo(s) {
    //return s.split('').map((c, i)=> {console.log(c); console.log(i, 'i')} );
    return s.split('').map((c, i) => (c.toUpperCase() + c.toLowerCase().repeat(i))).join('-');
  }

console.log(accum("ZpglnRxqenU"));
console.log(accumTwo("ZpglnRxqenU"));

//accum("ZpglnRxqenU"), "Z-Pp-Ggg-Llll-Nnnnn-Rrrrrr-Xxxxxxx-Qqqqqqqq-Eeeeeeeee-Nnnnnnnnnn-Uuuuuuuuuuu")