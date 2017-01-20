
var d = document.getElementById("dibujito");  <!--Aqui guardamos el canvas-->
<!--Lienzo en 2D-->
var lienzo = d.getContext("2d"); <!--Área donde va a dibujar-->
console.log(lienzo);

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(xinicial,yinicial);
  lienzo.lineTo(xfinal,yfinal);
  lienzo.stroke();
  lienzo.closePath();
}

/* SE LLAMA LA FUNCIÓN */
dibujarLinea("#AAF", 0, 0, 10, 300);

var lineas = 30;
var l = 0;
var yi, xf;
var colorcito = "#AAF"

for(l = 0; l < 30; l++){
  yi = 10 * l;
  xf = 10 * (l+1);
  dibujarLinea(colorcito, 0, yi, xf, 300);
  console.log("Linea " + l);
}

dibujarLinea(colorcito,1,1,1,299);  /*Esto se hace porque en 0 se dibuja la mitad del pixel*/
dibujarLinea(colorcito,1,299,299,299);


colorcito2 = "#e02239";
for(l = 0; l < 30; l++){
  yi = 10 * l;
  xf = 10 * (l+1);
  dibujarLinea(colorcito2, yi, 0, 300, xf);
  console.log("Linea " + l);
}

dibujarLinea("rgb(245, 95, 225)",1,1,299,1);
dibujarLinea("rgb(245, 95, 225)",299,1,299,299);
