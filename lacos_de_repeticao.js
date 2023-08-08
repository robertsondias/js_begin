// var p = document.getElementById('msg');

// // for (variaveis; condição; incremento){}

// for (var x=0; x<9; x++) {
//     p.innerHTML += x;
// }

var produtos = [
    {
        nome: 'Caneta',
        preco: 4.99
    },
    {
        nome: 'Cola',
        preco: 8.00
    }
]
var lista = document.getElementById('produtos');

// USANDO O FOR
// for (var x=0; x<produtos.length; x++){
//     var prod = document.createElement('p');
//     prod.innerHTML = produtos[x].nome + ': R$' + produtos[x].preco;
//     lista.appendChild(prod);
// }

// USANDO O WHILE
var x=0;
// while (x<produtos.length){
//     var prod = document.createElement('p');
//     prod.innerHTML = produtos[x].nome + ': R$' + produtos[x].preco;
//     lista.appendChild(prod);
//     x++;
// }

//USANDO O DO WHILE
do{
    var prod = document.createElement('p');
    prod.innerHTML = produtos[x].nome + ': R$' + produtos[x].preco;
    lista.appendChild(prod);
    x++;
}while (x<produtos.length);