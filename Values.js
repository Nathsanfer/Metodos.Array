let dadosNathalia = {
        nome: 'Nathalia',
        idade: 16,
        cidade: 'Valinhos'
}
console.log(dadosNathalia);


console.log("------------ Exemplo 1 ------------"); 
console.log("Dados:"); 

let dados = Object.values(dadosNathalia);

console.log(dados);

console.log("------------ Exemplo 2 ------------"); 
console.log("Dados:"); 

let dados1 = Array.from(Object.values(dadosNathalia));

console.log(dados1);