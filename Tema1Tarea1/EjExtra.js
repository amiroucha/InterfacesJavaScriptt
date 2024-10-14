const readline = require('readline');

//interfaz para la entrada y salida
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Introduce la anchura de la tableta: ', (ancho) => {
    const N = parseInt(ancho); 
    if(!isNaN(N))//si es numero
    {
        

        rl.question('Introduce la altura de la tableta: ', (altura) => {
            
            const M = parseInt(altura); 
            if(!isNaN(M))
            {
                
                rl.question('Introduce el numero de rectangulos deseados: ', (rectangulos) => {
                    
                    const K = parseInt(rectangulos);
                    if(!isNaN(K))
                    {
                        
                        if((K%N === 0 && K/N <=M) || (K%M === 0 && K/M <=N))
                        {
                            console.log("La tableta se puede partir de un solo corte en "+K+" rectangulos");
                        }else{
                            console.log("La tableta NO se puede partir de un solo corte en "+K+" rectangulos")
                        }
                        rl.close();

                    }else{
                        console.log(rectangulos + " no es un numero");   
                        rl.close();
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
        rl.close();
    }
});