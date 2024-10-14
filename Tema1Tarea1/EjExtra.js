const readline = require('readline');

//interfaz para la entrada y salida
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Introduce la anchura de la tableta: ', (ancho) => {
    const N = parseInt(ancho); 
    if(!isNaN(N))// en caso de que sea numero
    {
        rl.question('Introduce la altura de la tableta: ', (altura) => {
            
            const M = parseInt(altura); 
            if(!isNaN(M))// en caso de que sea numero
            {
                
                rl.question('Introduce el numero de rectangulos deseados: ', (rectangulos) => {
                    
                    const K = parseInt(rectangulos);
                    if(!isNaN(K))// en caso de que sea numero
                    {
                        /*Se comprueba si se puede dividir de forma uniforme el numero de rectangulos deseados con el corte entre la altura y anchura.
                        Ademas, se ve tambien si el número de "filas" de rectángulos (que se forman al dividir K / N ) cabe dentro de la altura M.
                        Se comprueban estas dos cosas por separado para la anchura y para la altura. En caso de que sea verdadera alguna de ellas, 
                        quiere decir que si se puede partir de un solo corte en K trozos
                        */
                        if((K%N === 0 && K/N <=M) || (K%M === 0 && K/M <=N)) 
                        {
                            console.log("La tableta se puede partir de un solo corte en "+K+" rectangulos");
                        }else{
                            console.log("La tableta NO se puede partir de un solo corte en "+K+" rectangulos")
                        }
                        

                    }else{
                        console.log(rectangulos + " no es un numero");   
                        
                    }
                    rl.close();

                });
            }else //no es numero
            {
                console.log(altura + " no es un numero");
                rl.close();//para cerrar la interfaz
            }
        });
    }else
    {
        console.log(ancho +" no es un numero");
        rl.close();
    }
});