<!--SE TRAEN EL TEXTO Y EL BOTÓN DEL HTML-->
var texto = document.getElementById("texto_lineas");
var boton = document.getElementById("botoncito");
<!--EVENT LISTENER-->
<!--se para una referencia de la función para ejecutar en el envento. -->
boton.addEventListener("click", dibujoPorClick);

var d = document.getElementById("dibujito");
var ancho = d.width;
var lienzo = d.getContext("2d");
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


<!--FUNCIÓN EVENTOS-->
function dibujoPorClick()
{
  var x = texto.value; <!--value trae el contenido del objeto input-->
  var xInt = parseInt(texto.value);
  dibujarLinea("#AAF", 0, 0, 10, 300);

  var lineas = parseInt(texto.value);
  var l = 0;
  var yi, xf;
  var colorcito = "#AAF"
  var espacio = ancho/lineas;

  for(l = 0; l < lineas; l++){
    yi = espacio * l;
    xf = espacio * (l+1);
    dibujarLinea(colorcito, 0, yi, xf, 300);
    console.log("Linea " + l);
  }

  dibujarLinea(colorcito,1,1,1,299);  /*Esto se hace porque en 0 se dibuja la mitad del pixel*/
  dibujarLinea(colorcito,1,299,299,299);
  console.log("Cristian es genial: " + texto.value);
  console.log(xInt);
}
