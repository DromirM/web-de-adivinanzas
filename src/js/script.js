// El juego selecciona un numero al azar para que el jugador adivine.

let numeroAzar = Math.floor(Math.random()*100) + 1;
let numeroEntrada = document.getElementById('numeroEntrada');
let mensaje = document.getElementById('mensaje');

function chequearResultado(){
  let numeroIngresado = parseInt(numeroEntrada.value);

  if(numeroIngresado < 1 || numeroIngresado > 100 || isNaN(numeroIngresado)){
    mensaje.textContent = 'Por favor, introduce un numero valido entre 1 y 100';
    mensaje.style.color = 'antiquewhite';
    return;
  }

  if(numeroIngresado === numeroAzar){
    mensaje.textContent = '¡Felicitaciones! ¡Has adivinado el numero!';
    mensaje.style.color = 'yellowgreen';
    numeroEntrada.disabled = true;
  } else if(numeroIngresado < numeroAzar){
    mensaje.textContent = '¡Mas alto! ¡El numero es mayor al que dijiste!';
    mensaje.style.color = 'red';
  } else {
    mensaje.textContent = '¡Mas bajo! ¡El numero es menor al que dijiste!';
    mensaje.style.color = 'red';
  }
}

function reiniciarJuego(){
  numeroAzar = Math.floor(Math.random()*100) + 1;
  numeroEntrada.disabled = false;
  mensaje.textContent = '';
}