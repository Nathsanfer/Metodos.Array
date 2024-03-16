let chamada = [
    { numero: 4, nome: 'Daniel' },
    { numero: 2, nome: 'Bianca' },
    { numero: 5, nome: 'Enzo' },
    { numero: 1, nome: 'Amanda' },
    { numero: 3, nome: 'Carlos' }
]
console.log(chamada);

console.log("------------ Exemplo 1 ------------");
console.log("Chamada do 1 ao 5:");

function numerosChamada(a, b) {
    return a.numero - b.numero;
}

chamada.sort(numerosChamada);

console.log(chamada);

console.log("------------ Exemplo 2 ------------");
console.log("Chamada do 5 ao 1:");

function numerosChamada1(a, b) {
    return b.numero - a.numero;
}

chamada.sort(numerosChamada1);

console.log(chamada);