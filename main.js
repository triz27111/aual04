'use strict';

const botaoMostrarNumeros = document.getElementById('botao-mostrar-numeros');
const botaoMostrarNumerosPares = document.getElementById('botao-mostrar-numeros-pares');
const botaoMostrarDobro = document.getElementById('botao-mostrar-numeros-dobro')
const botaoProximoNumeroPar = document.getElementById('botao-mostrar-numeros-par');
const botaoMultiploDe3e5 = document.getElementById('botao-mostrar-numeros-multiplos')
const botaoMultiploDe3ou5 = document.getElementById('botao-mostrar-numeros-multiplos5')
const botaoMostrarNumerosPrimo = document.getElementById('botao-mostrar-numeros-primo');




function mostrarNumeros() {
    const numeros = document.getElementById('numeros').value.split(',');
    const ultimoIndice = numeros.length;
    const container = document.getElementById('container-mostrar-numeros');
    container.replaceChildren('');

    for (let contador = 0; contador < ultimoIndice; contador++) {
        const novoSpan = document.createElement('span');
        novoSpan.textContent = numeros[contador];
        container.appendChild(novoSpan);
    }
}

function mostrarNumerosPares() {
    const numeros = document.getElementById('numeros').value.split(',');
    const ultimoIndice = numeros.length;
    const container = document.getElementById('container-mostrar-numeros-pares');
    container.replaceChildren('');

    for (let contador = 0; contador < ultimoIndice; contador++) {
        if (numeros[contador] % 2 == 0) {
            const novoSpan = document.createElement('span');
            novoSpan.textContent = numeros[contador];
            container.appendChild(novoSpan);
        }
    }
}


function mostrarDobro() {
    const numeros = document.getElementById('numeros').value.split(',');
    const ultimoIndice = numeros.length;
    const container = document.getElementById('container-mostrar-numeros-dobro');
    container.replaceChildren('');

    for (let contador = 0; contador < ultimoIndice; contador++) {
        const novoSpan = document.createElement('span');
        novoSpan.textContent = parseInt(numeros[contador]) * 2; 
        container.appendChild(novoSpan);
    }
}

function proximoNumeroPar() {
    const numeros = document.getElementById('numeros').value.split(',');
    const ultimoIndice = numeros.length;
    const container = document.getElementById('container-mostrar-numeros-par');
    container.replaceChildren('');

    for (let contador = 0; contador < ultimoIndice; contador++) {
        if (numeros[contador] % 2 == 1) {
            const proximoPar = Number(numeros[contador]) + 1; 
            const novoSpan = document.createElement('span');
            novoSpan.textContent = proximoPar;
            container.appendChild(novoSpan);
        }else{
            const proximoPar = Number(numeros[contador]) + 2; 
            const novoSpan = document.createElement('span');
            novoSpan.textContent = proximoPar;
            container.appendChild(novoSpan);
        }
    }
}

function multiploDe3e5() {
    const numeros = document.getElementById('numeros').value.split(',');
    const ultimoIndice = numeros.length;
    const container = document.getElementById('container-mostrar-numeros-multiplos');
    container.replaceChildren('');

    for (let contador = 0; contador < ultimoIndice; contador++) {
        const numero = parseInt(numeros[contador]);
        if (numero % 3 === 0 && numero % 5 === 0) {
            const novoSpan = document.createElement('span');
            novoSpan.textContent = numero;
            container.appendChild(novoSpan);
        }
    }
}

function multiploDe3ou5() {
    const numeros = document.getElementById('numeros').value.split(',');
    const ultimoIndice = numeros.length;
    const container = document.getElementById('container-mostrar-numeros-multiplos5');
    container.replaceChildren('');

    for (let contador = 0; contador < ultimoIndice; contador++) {
        const numero = parseInt(numeros[contador]);
        if (numero % 3 === 0 || numero % 5 === 0) { 
            const novoSpan = document.createElement('span');
            novoSpan.textContent = numero;
            container.appendChild(novoSpan);
        }
    }
}
// ... (código anterior)


 // ... (código anterior)

function mostrarProximoPrimo() {
    const numeros = document.getElementById('numeros').value.split(',');
    const container = document.getElementById('container-mostrar-numeros-primo');
    container.replaceChildren('');

    function isPrimo(numero) {
        if (numero <= 1) return false;
        for (let i = 2; i <= Math.sqrt(numero); i++) {
            if (numero % i === 0) return false;
        }
        return true;
    }

    for (let contador = 0; contador < numeros.length; contador++) {
        let numero = parseInt(numeros[contador]) + 1;

        while (!isPrimo(numero)) {
            numero++;
        }

        const novoSpan = document.createElement('span');
        novoSpan.textContent = numero;
        container.appendChild(novoSpan);
    }
}



botaoMostrarNumerosPrimo.addEventListener('click', mostrarProximoPrimo);

botaoMostrarNumeros.addEventListener('click', mostrarNumeros);
botaoMostrarNumerosPares.addEventListener('click', mostrarNumerosPares);
botaoMostrarDobro.addEventListener('click', mostrarDobro);
botaoProximoNumeroPar.addEventListener('click', proximoNumeroPar);
botaoMultiploDe3e5.addEventListener('click', multiploDe3e5);
botaoMultiploDe3ou5.addEventListener('click', multiploDe3ou5);
