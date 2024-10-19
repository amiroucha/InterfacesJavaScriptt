// Variables globales de javaScript
let baraja = [];
let puntosJugador = 0;
let puntosComputadora = 0;

const btnPedir = document.querySelector('#btnPedir');
const btnPasar = document.querySelector('#btnPasar');
const btnNuevoJuego = document.querySelector('#btnNuevoJuego');
console.log(btnPedir, btnPasar, btnNuevoJuego);

const puntosHTMLJugador = document.querySelector('.jugador small');
//tengo que buscar el small de la clase jugador
const puntosHTMLComputadora = document.querySelectorAll('.computadora small');
const divCartasJugador = document.querySelector('#jugador-cartas');
const divCartasComputadora = document.querySelector('#computadoras-cartas');



// Funciones

// La función devuelve un array con todas las cartas de una baraja de forma aleatoria
//suffle para barajar las cartas
function crearBarajaAleatoria() {
    let cartas = ['01C','02C','03C','04C','05C','06C','07C','08C','09C','10C','10JC','10QC','10KC',
                  '01D','02D','03D','04D','05D','06D','07D','08D','09D','10D','10JD','10QD','10KD',
                  '01P','02P','03P','04P','05P','06P','07P','08P','09P','10P','10JP','10QP','10KP',
                  '01T','02T','03T','04T','05T','06T','07T','08T','09T','10T','10JT','10QT','10KT'
                ];

    baraja = cartas.sort(() => Math.random() - 0.5);
}

const pedirCarta = () => {
    if (baraja.length === 0) {
        throw 'Baraja vacia'; 
    }
    const carta = baraja.pop();
    return carta;
}

const valorCarta = (carta) => {
    const valor = carta.substring(0, carta.length - 1);

    return (valor === '01') ? 1 : (isNaN(valor) ? 10 : valor * 1);
}

//turno del ordenador
const turnoComputadora = (puntosMinimos) => {
    
    do
    {
        const carta = pedirCarta();
        puntosComputadora = puntosComputadora + valorCarta(carta);
        puntosHTMLComputadora[1].innerText = puntosComputadora;

        const imgCarta = document.createElement('img');
        imgCarta.src = `assets/cartas/${carta}.png`; //carpeta donde estan las cartas
        imgCarta.classList.add('carta');
        divCartasComputadora.append(imgCarta);

        if(puntosMinimos > 21)
        {
            break;
        }


    }while((puntosComputadora<puntosMinimos) && (puntosMinimos<21))

    setTimeout(() => {
       // Meter aquí los alert para que se muestren después de mostrar las cartas de la computadora
        if(puntosJugador === puntosComputadora)
        {
            alert('Empatee');
        }else if (puntosJugador > puntosComputadora && puntosJugador <= 21  || puntosComputadora > 21)
        {
            alert('HAS GANADO');
        }else if (puntosJugador < puntosComputadora && puntosComputadora <= 21 || puntosJugador > 21)
        {
            alert('HAS PERDIDOO');
        }
    },100);
}

// Eventos 

btnPedir.addEventListener('click', () => {
    const carta   = pedirCarta();
    puntosJugador += valorCarta(carta);
    puntosHTMLJugador.innerText = puntosJugador;

    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${carta}.png`;
    imgCarta.classList.add('carta');
    divCartasJugador.append(imgCarta);

    if(puntosJugador > 21){

        btnPedir.disabled   = true;
        btnDetener.disabled = true;
        console.log("Perdiste");
        turnoComputadora(puntosJugador);

    }else if(puntosJugador === 21){
        
        btnPedir.disabled = true;
        btnPasar.disabled = true;
        console.log("Ganaste");
        turnoComputadora(puntosJugador);
    }
});

btnPasar.addEventListener('click', () => {
    btnPasar.disabled = true;
    btnPedir.disabled = true;
    turnoComputadora(puntosJugador);
});

btnNuevoJuego.addEventListener('click', () =>{
    crearBarajaAleatoria();

    puntosComputadora= 0;
    puntosJugador= 0;
    puntosHTMLJugador.innerText = 0;
    puntosHTMLComputadora.innerText = 0;
    btnPasar.disabled= false;
    btnPedir.disabled= false;
    divCartasJugador.innerHTML= '';
    divCartasComputadora.innerHTML ='';
   
});


// Código principal









