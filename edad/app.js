var age = prompt("Dame tu edad:");

//function isInteger (age){
var isInteger = function(age){
   if (age % 1 == 0) {
      return true;
   } else {
      return false;
   }
}
if(!age || isInteger(age) == false || age == " " || age <= 0){
  alert("Lo sentimos, sólo debes escribir números enteros");
} else {

    if (age >= 1 && age <= 3){
      document.write("Tu clasificación es *toddler*");
    }
    else if(age >= 3 && age <= 5){
      document.write("Tu clasificación es *preschooler*");
    }
    else if(age >= 5 && age <= 12){
      document.write("Tu clasificación es *grandeschooler*");
    }
    else if(age >= 12 && age <= 18){
      document.write("Tu clasificación es *teenager*");
    }
    else if(age >= 18 && age <= 21){
      document.write("Tu clasificación es *young adult*");
    }
    else{
      document.write("Tu clasificación es *adult*");
    }
}
