let numerosTransferencia = [
    {nome: 'Julio', depositado: 50},
    {nome: 'Anna', depositado: 20},
    {nome: 'Marcelo', depositado: 70}
];
console.log(numerosTransferencia);

console.log("------------ Exemplo 1 ------------")
console.log("Algum elemento é igual a 50: ")

let numeroIgual = numerosTransferencia.some(element => element = 50);

console.log(numeroIgual);

console.log("------------ Exemplo 2 ------------")
console.log("Algum elemento é um número negativo: ")

let numerosMenorQueDez = numerosTransferencia.some((user, index, array) => user.depositado < 10);

console.log(numerosMenorQueDez);