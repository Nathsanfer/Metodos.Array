/* Utilizando o Find
    Esse é um método usado para retornar o primeiro elemento de um array que 
    satisfaz a função de teste fornecida, caso nenhum elemento satisfaça a
    condição ele retorna "undefined".
*/

// Criação do array - Frutas 
let cestaDeFrutas = [
    { nome: "Banana", quantidade: 4 },
    { nome: "Morango", quantidade: 9 },
    { nome: "Laranja", quantidade: 3 },
    { nome: "Melão", quantidade: 1 }
];
//console.log(cestaDeFrutas); Realizado para verificação do array 

console.log("------------ Exemplo 1 ------------"); // Realizado somente para separar

/* Método Find 1

    const newVariable = array.find(new => new.name == "?")

*/
// Troquei o "const" por let
// Troquei o "newVariable" pelo nome "Fruta"
// Troquei o "array" pelo nome do meu array "cestaDeFrutas" 
// Troquei o "new" pelo nome "fruta"
// Troquei o "name" por "nome"
// Troquei o "?" pela fruta que queria encontrar "Laranja" 
let Fruta = cestaDeFrutas.find(fruta => fruta.nome == "Laranja");

// Exibe a fruta 
console.log(Fruta);

console.log("------------ Exemplo 2 ------------"); // Realizado somente para separar


/* Método Find 2

    function new1(array) {
        return array.name === '?';
    }

    const newVariable1 = array.find(new1, this);

*/
//Utilizo a função callback para verificar aonde e se tem a fruta que desejo
// Troquei o "new1" pelo nome "frutaVerificação"
// Troquei o "array" pelo nome do meu array "cestaDeFrutas" 
// Troquei o "name" por "nome"
// Troquei o "?" pela fruta que queria encontrar "Laranja" 
function frutaVerificação(cestaDeFrutas) {
    return cestaDeFrutas.nome === "Laranja";
}

// Declaro a variável "pFruta" 
// Troquei o "const" por let
// Troquei o "newVariable1" pelo nome "pFruta"
// Troquei o "new1" pelo nome "frutaVerificação"
let pFruta = cestaDeFrutas.find(frutaVerificação, this);

// Exibe a fruta 
console.log(pFruta);