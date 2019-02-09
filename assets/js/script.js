function getSee(){
var firstNumber=document.getElementById('firstNumber').value;
var secondNumber=document.getElementById('secondNumber').value;

if (isNaN(firstNumber) == false && !isNaN(secondNumber)){ // pareil pour les 2 //
  //Et on doit dire qu'on ne peut pas diviser par secondNumber
  //Opérateur de comparaison == égalité >= supérieure égale  <= inférieur egale != différent  === valeur et le type sont égaux
if(secondNumber !=0){
  var result = firstNumber % secondNumber;
  alert(result)
}else{
  alert('Mettre un chiffre différent de 0')
  }
}else{
  alert('Veuillez indiquez un chiffre');
}
}
