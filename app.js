let nombre = 'pepe';
console.log('nombre', typeof nombre);

let anyo = 2024;
let valor = true;

console.log('valor', typeof valor);

console.log('noDefinido', typeof(sinDefinir));

console.log('null', typeof(null));


let arraycosas = [];
let diasFinde = ['sabado', 'Domingo'];
//se pueden meter de todo en los arrays
let arrayMezcla = [
    true,
    2024,
    "Interfsces",
    10+20, //incluso sumas
    function () {},//incluso funciones
    ()=> {},
    ['uno', 'dos', 'tres'], //incluso arrays
    {usuario: 'manolo', password : '123456'}//incluso clases

];

console.log(arrayMezcla[1]);//imprime el 2024
console.log(arrayMezcla[arrayMezcla.length-1]);//para el ultimo, saco la longitud y le quitas 1

//foreach:
//tiene una funcion nanda dentro
diasFinde.forEach((dia, posicion, arraycopia)=>{

    console.log(posicion+ ": "+dia);
});

//objetos literales
let personaje = {
    nombre: 'tony',
    codeName: 'ironMan',
    edad: 23,
    trajes: ['mark i', 'marc k', 'mark i']
};
//los atributos del objeto se guardan en orden alfabetico, no en el que se declaran
console.log(personaje.trajes[0]);

personaje.casado = true;//meter una nueva propiedad

delete personaje.edad;//elimina esa propiedad en caso de existir

//para que no se pueda modificar el obajeto:
Object.freeze(personaje);//asi lo congela y no se puede modificar
//solo se congelan las variables primitivas, trajes no se congela con esa isntruccion





