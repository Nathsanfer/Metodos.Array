let estadosDaRegiãoSudeste = [
    'Espirito Santo',
    'Minas Gerais',
    'Rio de Janeiro',
    'São Paulo'
];
console.log(estadosDaRegiãoSudeste);

let estadosDaRegiãoSul = [
    'Paraná',
    'Rio Grande do Sul',
    'Santa Catarina'
];
console.log(estadosDaRegiãoSul);

console.log("------------ Exemplo 1 ------------"); 
console.log("Quais são os estados da região Sul e Sudeste?");

let regiãoSulSudeste = estadosDaRegiãoSudeste.concat(estadosDaRegiãoSul);

console.log(regiãoSulSudeste);

console.log("------------ Exemplo 2 ------------"); 
console.log("Qual o nome dos alunos da sala 1ºA?");

let meninasDaSala = [
    'Anna', 'Beatriz',
    'Julia', 'Isabela',
    'Mariana', 'Nathalia'
];
console.log(meninasDaSala);

let meninosDaSala = [
    'Julio', 'Matheus',
    'Cauã', 'Rafael',
    'Gustavo', 'André'
];
console.log(meninosDaSala);

let salaPrimeiroA = meninasDaSala.concat(meninosDaSala);

console.log(salaPrimeiroA);
