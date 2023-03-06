console.log(isNaN(NaN))
       
let edad = prompt("Ingrese su edad: ");

if (!isNaN(edad)) {   
 alert("su edad es el numero: " + edad);

} else {
 alert("El valor no es un numero, es: " +edad);
}