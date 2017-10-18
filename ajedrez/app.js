
//var tamano=8;
var tamano=prompt("Escribe el tamaño de tu cuadricula");
//crear cuadricula
var result = "";

for (var fila =1; fila<=tamano; fila++){
  for(var columna=1; columna<=tamano; columna++){
    if((columna+fila)%2==0){
      result = result + " ";
    }
    else{
      result = result + "#";
    }
  }
  result=result + "\n";
}
console.log(result);
