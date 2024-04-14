const descifrarCesar = (mensajeCifrado, desplazamiento) => {
    let mensajeOriginal = '';

    const regex = /^[a-zA-Z\s]+$/;
    if (!regex.test(mensajeCifrado)) {
        return 'Formato inválido. El mensaje cifrado solo puede contener letras o espacios.';
    }

    for (let i = 0; i < mensajeCifrado.length; i++) {
        const caracter = mensajeCifrado[i];
        
        if (caracter.match(/[A-Z]/)) {
            let codigoAscii = mensajeCifrado.charCodeAt(i);
            let codigoOriginal = ((codigoAscii - 65 - desplazamiento + 26) % 26) + 65;
            mensajeOriginal += String.fromCharCode(codigoOriginal);
        } else if (caracter.match(/[a-z]/)) {
            let codigoAscii = mensajeCifrado.charCodeAt(i);
            let codigoOriginal = ((codigoAscii - 97 - desplazamiento + 26) % 26) + 97;
            mensajeOriginal += String.fromCharCode(codigoOriginal);
        } else {
            mensajeOriginal += caracter;
        }
    }
    
    return mensajeOriginal;
};

const inputCifrado = document.getElementById("input-cifrado");
const resultadoDescifrado = document.getElementById("resultado-descifrado");
const rangoDescifrado = document.getElementById("rango-descifrado");
const outputDescifrado = document.getElementById("nivel-descifrado");

rangoDescifrado.addEventListener('input', () => {
    outputDescifrado.innerHTML = parseInt(rangoDescifrado.value);
});

inputCifrado.addEventListener('input', () => {
    setTimeout(() => {
        resultadoDescifrado.innerHTML = "descifrando...";
        setTimeout(() => {
            resultadoDescifrado.innerHTML = descifrarCesar(inputCifrado.value, parseInt(rangoDescifrado.value));
        }, 400);
    }, 100);
});

const cifrarCesar = (mensaje, desplazamiento) => {
    let mensajeCifrado = '';

    const regex = /^[a-zA-Z\s.,;!?]+$/;
    if (!regex.test(mensaje)) {
        
        return 'formato invalido';
    }

    for (let i = 0; i < mensaje.length; i++) {
        const caracter = mensaje[i];
        
        if (caracter.match(/[A-Z]/)) {
            let codigoAscii = mensaje.charCodeAt(i);
            let codigoCifrado = ((codigoAscii - 65 + desplazamiento) % 26) + 65;
            mensajeCifrado += String.fromCharCode(codigoCifrado);
        } else if (caracter.match(/[a-z]/)) {
            let codigoAscii = mensaje.charCodeAt(i);
            let codigoCifrado = ((codigoAscii - 97 + desplazamiento) % 26) + 97;
            mensajeCifrado += String.fromCharCode(codigoCifrado);
        } else {
            mensajeCifrado += caracter;
        }
    }
    
    return mensajeCifrado;
};

const inputOriginal = document.getElementById("input-original");
const resultado = document.getElementById("resultado");
const rango = document.getElementById("rango");
const output = document.getElementById("nivel");

rango.addEventListener('input', () => {
    output.innerHTML = parseInt(rango.value);
});

inputOriginal.addEventListener('input', () => {
    setTimeout(() => {
        resultado.innerHTML = "cifrando...";
        setTimeout(() => {
            resultado.innerHTML = cifrarCesar(inputOriginal.value, parseInt(rango.value));
            if (resultado.length > 50) {
                resultado.style.overflow = "auto"
            }else{
                resultado.style.overflow = "hide"

            }
        }, 400); // Reducción del tiempo de espera
    }, 100);
});
