
//se pone como argumento cuando se ejecuta el numero 
//node Ej1.js "argumento"
//process arr 
const numero =  Number(process.argv[2]);
console.log(numero);

if (numero % 2 == 0){
    console.log("Es par");
}else{
    console.log("Es impar");
}