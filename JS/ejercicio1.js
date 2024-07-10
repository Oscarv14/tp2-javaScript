/* 1- Escribir un programa que solicite la edad y si es mayor de 18 años mostrar un mensaje que ya puede conducir, si la edad ingresada no es un número válido indicarlo en un mensaje.*/
const edad = parseInt(prompt("Ingrese una edad"))
if(edad >= 18 && edad<=75){
    document.write(`Con la edad de ${edad} años ya puede conducir`)
}else{
    document.write(`Con la edad de ${edad} años no puede conducir`)
}
