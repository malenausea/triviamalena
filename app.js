var nickName = prompt('Ingrese su Nickname porfavor');
var challengeQuestion = prompt('Deseas participar? :  \n 1: Sí  \n 2: No');
if (challengeQuestion === '1') {
  document.getElementById("nickName").innerHTML = nickName;
} else if (challengeQuestion === '2'){
  alert('Oki '  + nickName +  ' inténtalo luego :)');
}

function corregir(){
var p1
var p2
var p3
var aciertos = 0
var fallos = 0
var blancos = 0
var nota
var notaFinal

if (document.getElementById('p11').checked==true) {
   p1 = 1;
   aciertos++;
}else if (document.getElementById('p12').checked==true){
      p1 = -0.5;
         fallos++;
}else if (document.getElementById('p13').checked==true){
      p1 = -0.5;
        fallos++;
}else if (document.getElementById('p14').checked==true){
      p1 = -0.5;
         fallos++;
}else{
      p1= -0.1;
      blancos++;
      }


if (document.getElementById('p21').checked==true) {
   p2 = 1;
   aciertos++;
}else if (document.getElementById('p22').checked==true){
      p2 = -0.5;
         fallos++;
}else if (document.getElementById('p23').checked==true){
      p2 = -0.5;
         fallos++;
}else if (document.getElementById('p24').checked==true){
      p2 = -0.5;
         fallos++;
}else{
      p2= -0.1;
      blancos++;
         }


if (document.getElementById('p31').checked==true) {
   p3 = 1;
   aciertos++;
}else if (document.getElementById('p32').checked==true){
      p3 = -0.5;
         fallos++;
}else if (document.getElementById('p33').checked==true){
      p3 = -0.5;
        fallos++;
}else if (document.getElementById('p34').checked==true){
      p3 = -0.5;
         fallos++;
}else{
      p3= -0.1;
      blancos++;
      }

nota = p1+p2+p3;
if(nota<0){
puntuacion = 0;
}else{
puntuacion = nota;
}
document.getElementById('aciertos').value = aciertos;
document.getElementById('fallos').value = fallos;
document.getElementById('blancos').value = blancos;
document.getElementById('puntuacion').value = puntuacion;
}
