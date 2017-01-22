var teclas = {
  UP: 38,
  DOWN: 40,
  LEFT: 37,
  RIGHT: 39
};

console.log(teclas);

  <!--EVENTO AL OPRIMIR UNA TECLA-->
/*document.addEventListener("keydown", dibujarTeclado);*/
document.addEventListener("keyup", dibujarTeclado);

<!--En ventos quedan guardados todos los detalles del evento-->
function dibujarTeclado(evento){

  switch (evento.keyCode)
  {
    case teclas.UP:
      console.log("Arriba");
    break;
    case teclas.DOWN:
      console.log("Abajo");
    break;
    case teclas.LEFT:
      console.log("Izquierda");
    break;
    case teclas.RIGHT:
      console.log("Derecha");
    break;
    default:
      console.log("Otra tecla");
    break;
  }
}
