/* Ultilizando o Filter 
    Esse é um método que permite filtrar elementos de um array com base em uma 
    condição especificada. Ele cria um novo array com todos os elementos que 
    foram filtrados. O filter não modifica o array original, ele retorna um 
    novo array com os elementos filtrados, mantendo o array original inalterado.
*/

// Criação do array - Notas
let listaDeNotas = [
    { nome: 'Nathalia', nota: 97 },
    { nome: 'Anna', nota: 112 },
    { nome: 'Giovanni', nota: 100 },
    { nome: 'Vitor', nota: 100 },
    { nome: 'Gabriela', nota: 99 },
    { nome: 'Pablo', nota: 120 }
];
//console.log(listaDeNotas); Realizado para verificação do array 

console.log("------------ Exemplo 1 ------------"); // Realizado somente para separar


/* Método Filter 1

    const newVariable = array1.filter((user, index, array) => user.credit > 500);

*/
// Troquei o "const" por let 
// Troquei o "newVariale" pelo nome "alunosAprovados"
// Troquei o "array1" pelo nome do meu array "listaDeNotas" 
// Troquei o "credit" por "nota"
// Troquei o "500" pelo valor que os alunos precisam tirar para serem aprovados "100" (aprovação >= 100)
let alunosAprovadas = listaDeNotas.filter((user, index, array) => user.nota >= 100);

// Exibe os alunos aprovados 
console.log(alunosAprovadas);

console.log("------------ Exemplo 2 ------------"); // Realizado somente para separar


/* Método Filter 2

    function new(user) {
    return user.credit >= 100;

    const newVariable = array1.filter(new, this);

*/
// Utilizo a função callback para verificar se o aluno foi aprovado ou não (se a nota é >=100)
// Troquei o "new" pelo nome de "Aprovado"
// Troquei o "credit" por "nota"
function Aprovado(user) {
    return user.nota >= 100;
}

// Declaro a variável "Aprovados" para juntar os alunos aprovados
// Troquei o "const" por let
// Troquei o "newVariable" pelo nome "Aprovados"
// Troquei o "array1" pelo nome do meu array "listaDeNotas" 
// Troquei o "new" pelo nome de "Aprovado"
let Aprovados = listaDeNotas.filter(Aprovado, this);

// Exibe os alunos aprovados 
console.log(Aprovados);