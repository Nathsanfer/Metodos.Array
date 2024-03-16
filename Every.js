let numeros = [
    1, 12, 14, 20,
    31, 72, 64, 80
];
console.log(numeros);

console.log("------------ Exemplo 1 ------------");

let todosMaioresQueZero = numeros.every(element => element > 0);

console.log("Todos os números são maiore que 0?")
console.log(todosMaioresQueZero);

console.log("------------ Exemplo 2 ------------");

let todosPares = numeros.every(element => element % 2 === 0);

console.log("Todos os números são pares?")
console.log(todosPares);
