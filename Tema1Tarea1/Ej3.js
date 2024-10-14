const readline = require('readline');

//interfaz para la entrada y salida
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Introduce el valor de A: ', (numA) => {
    if(parseInt(numA))//si es numero
    {
        const A = parseInt(numA); //se asigna

        rl.question('Introduce el valor de B: ', (numB) => {
            
            if(parseInt(numB))//si es numero
            {
                const B = parseInt(numB); 
                if(B<A)//en caso de que el a sea mayor que b
                {
                    VerPrimos(A,B);

                }else{
                    console.log("El segundo numero debe de ser menor que el primero")
                }
              
            }else //no es numero
            {
                console.log(numB + " no es un numero");
            }
            rl.close();//para cerrar la interfaz
        });
    }else
    {
        console.log(numA +" no es un numero");
        rl.close();//para cerrar la interfaz
    }
});

function VerPrimos(numeA, numeB)
{
    let numerooss = [];//array donde guardo los primos
    for (let i = numeB; i <= numeA; i++) {
        if (esPrimo(i)) {
            numerooss.push(i)
        }
    }

    if(numerooss.length > 0)//si contiene informacion...
    {
        console.log("Numeros primos entre "+numeA+" y "+numeB+": " +numerooss.join(', '));

    }else{
        console.log("No hay numeros primos entre "+numeA+" y "+numeB);
    }
}

function esPrimo(numero) {
    if (numero < 2) return false; 
    //el 2 es el primer numero primo
    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) return false; 
        // Si el resto es 0 quiere decir que no es primo
    }
    return true; //si llega hasta aqui es primo
}

