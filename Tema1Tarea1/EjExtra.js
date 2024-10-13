const readline = require('readline');

//interfaz para la entrada y salida
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Introduce la anchura de la tableta: ', (ancho) => {
    if(parseInt(ancho))//si es numero
    {
        const N = parseInt(ancho); 

        rl.question('Introduce la altura de la tableta: ', (altura) => {
            
            if(parseInt(altura))
            {
                const M = parseInt(altura); 
                rl.question('Introduce el numero de rectangulos deseados: ', (rectangulos) => {
                    
                    if(parseInt(rectangulos))
                    {
                        const K = parseInt(rectangulos);
                        if((K%N === 0 && K/N <=M) || (K%M === 0 && K/M <=N))
                        {
                            console.log("La tableta se puede partir de un solo corte en "+K+" rectangulos");
                        }else{
                            console.log("La tableta NO se puede partir de un solo corte en "+K+" rectangulos")
                        }

                    }else{
                        console.log(rectangulos + " no es un numero");   
                    }

                });
            }else //no es numero
            {
                console.log(altura + " no es un numero");
            }
            rl.close();//para cerrar la interfaz
        });
    }else
    {
        console.log(ancho +" no es un numero");
    }
});