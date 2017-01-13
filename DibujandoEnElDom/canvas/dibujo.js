alert("Hablando desde el javascript");

var d = document.getElementById("dibujito");  <!--Aqui guardamos el canvas-->
<!--Lienzo en 2D-->
var lienzo = d.getContext("2d"); <!--Área donde va a dibujar-->
console.log(lienzo);

lienzo.beginPath(); <!-- Arrancamos un trazo-->
lienzo.strokeStyle = "red";  <!--Va a dibujar una línea roja-->
lienzo.moveTo(100,100); <!--Inicio de la linea-->
lienzo.lineTo(200,200);
lienzo.stroke(); <!--Dibuja la linea-->
lienzo.closePath(); <!--Levanta el lápiz-->
