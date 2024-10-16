const batman: string = "Buce";
const superman : string = 'Clarc';

const existe :boolean = false;


//tuplas
const parejaHeroes:[string,string] = [batman,superman];
const villano:[string, number, boolean ] = ['lex luctor', 5, true];


//arreglos
const aliados:string[]=['mujer maravilla, aladin, Acuaman'];

//Enumeraciones
enum dias {
    fuerzaFlash = 5,
    fuerzaSuperMan = 100,
    fuerzaBatman = 1
}

// Retorno de funciones
function activar_batisenial():string{
    return 'activada';
}

function pedirAyuda():void{
    console.log('AAAAAAAAAAAAAAAA');
}

//Aserciones de Tipo
const poder: string = '100';
const largoDelPoder:number = poder.length;
console.log(largoDelPoder);