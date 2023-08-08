// alert('Aula de JAvascript');

// var casado = false;
// var msg = document.getElementById('msg');

// if (casado){
//     msg.innerHTML = "É casado";
// } else{
//     msg.innerHTML = "Não é casado";
// }
    
// var valores = [10.5, 20, 7];
// var msg = document.getElementById('msg');
// msg.innerHTML = valores[valores.length-1] ---->pega o ultimo valor do arrays

//orientada a objeto

var msg = document.getElementById('msg');
var servidor1 = {
    nome: 'Joao',
    idade: 28,
    salario: 12800
};
var servidor2 = {
    nome: 'MAria',
    idade: 30,
    salario: 15000
};

msg.innerHTML = servidor2.salario; // ou dessa outra maneira: msg.innerHTML = servidor1["nome"]

