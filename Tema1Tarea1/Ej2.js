//con == comparo si el contenido el igual aunque el contenido no coincida
//con === compara tanto el tipo como el contenido

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Introduce un año entre 1900 y 3000:  ', (entrada) => {
  
  const anyo = Number(entrada);
  if(anyo < 1900 || anyo > 3000)
  {
    console.log('Debe de estar entre 1900 y 3000');      
  }else if(!Number.isInteger(anyo)){
    console.log(anyo +' no es');
  }else if(anyo % 400 === 0 || (anyo % 4 === 0 && anyo % 100 !== 0)){
    console.log(anyo + ' ES BISIESTOOOOOOOO' );
  }else
  {
    console.log(anyo + ' ES BISIESTOOOOOOOO' );
  }

rl.close();
});
