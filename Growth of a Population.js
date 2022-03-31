function nbYear(p0, percent, aug, p) {
    let population = p0;
    let yaers = 0;
    while (population < p) {
        population = population + population * percent/100 + aug;
        console.log(population);
        yaers++;
    }
    return yaers;
}

console.log(nbYear(1500, 5, 100, 5000));
console.log(nbYear(1500000, 2.5, 10000, 2000000));
console.log(nbYear(1500000, 0.25, 1000, 2000000));