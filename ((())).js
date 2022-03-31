function Func(string) {
    let counter = 0;
    
    for (let i = 0; i < string.length; i++){
        (string[i] == '(') ? counter++ : counter--
    }

    return !counter;
}

console.log(Func('((())'))
console.log(Func('((()))'))
console.log(Func('((())(('))
console.log(Func('((()))((((()))(((())))))'))