//IMPRIMIR NUMEROS DE 0 A 100 CON 2 EXCEPCIONES
//PARA NUMEROS DIVISIBLES ENTRE 3 IMPRIMIR "FIZZ"
//PARA NUMEROS DIVISIBLES ENTRE 5 IMPRIMIR "BUZZ"
var i;
for (i=1;i<=100;i++){

    if(i%3==0 && i%5==0){
      console.log("fizzbuzz");
    }
    else if(i%3==0){
      console.log("fizz");
    }
    else if(i%5==0){
      console.log("buzz");
    }
    else{
      console.log(i);
    }
}
/*
  if(i%3==0){
    console.log("fizz");
  }
  else if(i%5==0){
    console.log("buzz");
  }
  else {
    console.log(i);
  }
}
*/
