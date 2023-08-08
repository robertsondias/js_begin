var idade = 39;
var m = document.getElementById('msg');


// if (idade == 40){
//     m.innerHTML = 'é véi';
// } else if (idade >= 60) {
//     m.innerHTML = 'idoso' ;   
// } else {
//     m.innerHTML = 'é novo';
// }

m.innerHTML = idade >= '40' ? 'Maior' : 'Menor';