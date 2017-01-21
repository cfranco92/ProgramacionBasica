  <!--EVENTO AL OPRIMIR UNA TECLA-->
document.addEventListener("keydown", dibujarTeclado);

<!--en detalles quedan guardados todos los detalles del evento-->
function dibujarTeclado(detalles){
  console.log("Tecla oprimida");
  console.log(detalles);
}
