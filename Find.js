/* Utilizando o Find
    Esse é um método usado para retornar o primeiro elemento de um array que 
    satisfaz a função de teste fornecida, caso nenhum elemento satisfaça a
    condição ele retorna "undefined".
*/

let cestaDeFrutas = [
    {name: "Banana", quantidade: 4},
    {name: "Morango", quantidade: 9},
    {name: "Laranja", quantidade: 3},
    {name: "Melão", quantidade: 1}
]

let Fruta = cestaDeFrutas.find(fruta => fruta.nome == "Laranja")
