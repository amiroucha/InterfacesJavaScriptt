
//variables globales
let numero = 0;
const numeroHTML = document.querySelector('#numero');
const btnMenos = document.querySelector('#btn-menos');
const btnReset = document.querySelector('#btn-reset');
const btnMas = document.querySelector('#btn-mas');


//Eventos 

btnMas.addEventListener('click',()=>{
    numero++;
    numeroHTML.innerText = numero;
    btnMenos.disabled = false;

});

btnReset.addEventListener('click',()=>
{
    numero = 0;
    numeroHTML.innerText = numero;
    btnMenos.disabled = true;

});
btnMenos.addEventListener('click',()=>
    {
        if(numero > 0){
            numero--;
            numeroHTML.innerText = numero;
        }
        if(numero == 0)
        {
            btnMenos.disabled = true;
        }
    });