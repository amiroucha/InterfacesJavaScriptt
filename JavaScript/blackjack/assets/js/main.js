// Variables globales de javaScript
let baraja = [];
let puntosJugador = 0;
let puntosComputadora = 0;

const btnPedir = document.querySelector('#btnPedir');
const btnPasar = document.querySelector('#btnPasar');
const btnNuevoJuego = document.querySelector('#btnNuevoJuego');
console.log(btnPedir, btnPasar, btnNuevoJuego);
//muestra los puntos del ordenador
const puntosHTMLJugador = document.querySelector('.jugador small');
const puntosHTMLComputadora = document.querySelectorAll('.computadora small')[0]; 
//donde se enseñan las cartas
const divCartasJugador = document.querySelector('#jugador-cartas');
const divCartasComputadora = document.querySelector('#computadoras-cartas');



// Funciones

// La función devuelve un array con todas las cartas de una baraja de forma aleatoria
function crearBarajaAleatoria() {
    let cartas = ['01C','02C','03C','04C','05C','06C','07C','08C','09C','10C','10JC','10QC','10KC',
                  '01D','02D','03D','04D','05D','06D','07D','08D','09D','10D','10JD','10QD','10KD',
                  '01P','02P','03P','04P','05P','06P','07P','08P','09P','10P','10JP','10QP','10KP',
                  '01T','02T','03T','04T','05T','06T','07T','08T','09T','10T','10JT','10QT','10KT'
                ];
    //con el metodo sort se mezclan aleatoriamente
    baraja = cartas.sort(() => Math.random() - 0.5);
}

const pedirCarta = () => {
    if (baraja.length === 0) {//si esta vacia avisa
        throw 'Baraja vacia'; 
    }
    const carta = baraja.pop();//se extrae la ultima carta de la baraja, tras ser barajada
    return carta;
}

const valorCarta = (carta) => {
    const valor = carta.substring(0, carta.length - 1);
    //calcula el valor
    //01 = A // J Q K = 10 // si no el valor de la carta por si
    return (valor === '01') ? 1 : (isNaN(valor) ? 10 : valor * 1);
}

//turno del ordenador
const turnoComputadora = (puntosMinimos) => {

    if (puntosMinimos <= 21) {
        do {
            const carta = pedirCarta(); //cogemos una nueva carta
            puntosComputadora += valorCarta(carta); //se actualiza el valor de los puntos
            puntosHTMLComputadora.innerText = puntosComputadora;

            const imgCarta = document.createElement('img');
            imgCarta.src = `assets/cartas/${carta}.png`; // Ruta de la imagen
            imgCarta.classList.add('carta'); 
            divCartasComputadora.append(imgCarta); //se añade la imagen de la carta

            //Si el jugador se ha pasado de los 21, la computadora ya no juega, ya gano
            if (puntosMinimos > 21)
            { 
                break;
            }

        } while (puntosComputadora < puntosMinimos && puntosComputadora <= 21);
    }

    setTimeout(() => {
       //Alert para avisar de quien gano y perdio
        if(puntosJugador === puntosComputadora)
        {
            alert('Empate');
        }else if ((puntosJugador > puntosComputadora && puntosJugador <= 21)  || puntosComputadora > 21)
        {
            alert('Has ganado');
        }else if ((puntosJugador < puntosComputadora) && (puntosComputadora <= 21) || puntosJugador > 21)
        {
            alert('Has perdido');
        }
    },100);
}

// Eventos 

btnPedir.addEventListener('click', () => {
    const carta = pedirCarta();//pido la carta
    puntosJugador += valorCarta(carta);//añado el valor de la carta a los puntos
    puntosHTMLJugador.innerText = puntosJugador;

    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${carta}.png`;
    imgCarta.classList.add('carta');
    divCartasJugador.append(imgCarta);

    if(puntosJugador > 21){
        //se desabilitan pedir y pasar porq ya ha excedido 21
        btnPedir.disabled = true;
        btnPasar.disabled = true;
        setTimeout(() => {
            alert("Has perdido");
        },100);

    }else if(puntosJugador === 21){
        
        //se desabilitan pedir y pasar porq ya ha gaado        
        btnPedir.disabled = true;
        btnPasar.disabled = true;
        setTimeout(() => {
            alert("Has ganado");
        },100);
    }
});

btnPasar.addEventListener('click', () => {
    turnoComputadora(puntosJugador);
    btnPasar.disabled = true;
    btnPedir.disabled = true;
    //se desabilitan los botones cuando juega el ordenador 
});

btnNuevoJuego.addEventListener('click', () =>{
   //creo la baraja
    crearBarajaAleatoria();
    //Reinicia los puntos
    puntosComputadora= 0;
    puntosJugador= 0;
    //actualiza los HTML
    puntosHTMLJugador.innerText = 0;
    puntosHTMLComputadora.innerText = 0;
    //habilita los botones para jugar
    btnPasar.disabled= false;
    btnPedir.disabled= false;
    //PAra que las cartas no desaparezcan cuando se le da a nuevo

    divCartasJugador.innerHTML= '<img class="carta" src="assets/cartas/red_back.png"">';
    divCartasComputadora.innerHTML ='<img class="carta" src="assets/cartas/red_back.png">';
   
});


// Código principal
//Llamar a baraja nueva para empezar
crearBarajaAleatoria();








