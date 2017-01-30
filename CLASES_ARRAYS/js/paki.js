var imagenes =[];
imagenes["Cauchin"] = "imagenes/vaca.png";
imagenes["Pokacho"] = "imagenes/pollo.png";
imagenes["Tocinauro"] = "imagenes/cerdo.png";

console.log(imagenes);


/*
var cauchin = new Pakiman("Cauchin", 100, 30);
var pokacho = new Pakiman("Pokacho", 80, 50);
var tocinauro = new Pakiman("Tocinauro", 120, 40);
console.log(cauchin, pokacho, tocinauro);

cauchin.mostrar();
pokacho.mostrar();
tocinauro.mostrar();
*/

var coleccion = [];
coleccion.push(new Pakiman("Cauchin", 100, 30));
coleccion.push(new Pakiman("Pokacho", 80, 50));
coleccion.push(new Pakiman("Tocinauro", 120, 40));

/*
for(var cositos in coleccion)
{
  console.log(coleccion[cositos]);
}
*/

//Nueva función de javascript
//OF ME MUESTRA LA INSTANCIA EN VEZ DEL INDICE
for(var cositos of coleccion)
{
  cositos.mostrar();
  console.log(cositos);
}

for(var x in imagenes)
{
  console.log(x);
}

for(var x in coleccion[0])
{
  console.log(x);
}
