/* Utilizando o findIndex
    Esse método é semelhante ao "find" , mas ao invés de retornar o elemento 
    encontrado, ele retorna o índice do primeiro elemento que satisfaz 
    elemento que satisfaz a condição de busca, caso nenhum elemento satisfaça 
    a condição, é retornado -1.
*/

// Crio o array - Frutas 
let listaDeIdades = [
    { nome: 'Nathalia', idade: 16 },
    { nome: 'Luccas', idade: 11 },
    { nome: 'Mirela', idade: 23 },
    { nome: 'Paulo', idade: 19 },
    { nome: 'Sergio', idade: 32 }
]
//console.log(cestaDeFrutas); Realizado para verificação do array 

console.log("------------ Exemplo 1 ------------"); // Realizado somente para separar
console.log("A posição é:");

/* Método findIndex 1

    const newVariable = array.findIndex((user, index, array) => user.name === '?');

*/
// Troquei o "const" por let
// Troquei o "newVariable" pelo nome "Luccas"
// Troquei o "array" pelo nome do meu array "listaDeIdades"
// Troquei o "name" por "nome"
// Troquei o "?" pelo nome que queria encontrar a posição "Luccas" 
let Luccas = listaDeIdades.findIndex((user, index, array) => user.nome === 'Luccas');

//Exibe a posição
console.log(Luccas);

console.log("------------ Exemplo 2 ------------"); // Realizado somente para separar
console.log("A posição é:");

/* Método findIndex 2

    function new1(person) {
        return person.name == '?';
    }

    const newVariable1 = array.findIndex(new1, this);

*/
//Utilizo a função callback para verificação de se existe um item como o Luccas no array
// Troquei o "new1" pelo nome "frutaVerificação"
// Troquei o "array" pelo nome do meu array "cestaDeFrutas" 
// Troquei o "name" por "nome"
// Troquei o "?" pelo nome que queria encontrar a posição "Sergio" 
function cadePessoa(person) {
    return person.nome === 'Sergio';
}

// Declaro a variável "Sergio" 
// Troquei o "const" por let
// Troquei o "newVariable1" pelo nome "Sergio"
// Troquei o "new1" pelo nome "cadePessoa"
let Sergio = listaDeIdades.findIndex(cadePessoa, this);

// Exibe a posição
console.log(Sergio);