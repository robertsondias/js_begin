// // var x = 100;
// // var y =2; //exibe soma de valores

// // var x = 100;
// // document.getElementById('msg').innerHTML = (x++); ----> recebe o valor de X + 1
// // alert(x);

// _________________________________________________________
// var x = 100;
// var p = document.getElementById('msg');

// // if (x !== '100') {
// //     p.innerHTML = 'Igual'
// // } else {
// //     p.innerHTML = 'Diferente'
// // }

// p.innerHTML = x == 10 ? 'Igual' : ' Diferente'; ---> outra forma de fazer

var salario = 1000;
var profissao = 'programador';
var p = document.getElementById('msg');

if (salario > 999 || profissao == 'cabista'){
    p.innerHTML = 'É programador'
} else {
    p.innerHTML = 'Não é programador'
}
