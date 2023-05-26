const textarea = document.querySelector(".TextoCodificar");
const mensaje = document.querySelector(".TextoCodificado");

/*
La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"
*/

const mensajeAviso = document.getElementById("mensajeAviso");
const tituloVacio = document.getElementById("tituloVacio");
const parrafoVacio = document.getElementById("parrafoVacio");
const Muneco = document.getElementById("Muneco");
const textoCoD = document.getElementById("textoCoD");
const copiar = document.querySelector(".copiar");

function mostrarError(mensaje){
    alert(mensaje);
}

function mostrarExito(textoEnDes,mensajeExito){
    mensaje.value = textoEnDes;
    textarea.value = "";
    copiar.style.display="block";
    textoCoD.style.display="flex";
    textoCoD.style.visibility="visible";
    mensajeAviso.style.display="flex";
    mensajeAviso.textContent = mensajeExito;
    parrafoVacio.textContent = "";
    Muneco.style.display="none";
}

function mostrarMensajeVacio(){
    mensaje.value = "";
    mensajeAviso.style.display = "none";
    Muneco.style.display = "flex";
    Muneco.src = "./Imagenes/muneco.png";
    textoCoD.style.display = "none";
    tituloVacio.textContent = "Ningún mensaje fue encontrado";
    parrafoVacio.textContent = "Ingresa el texto que deseas encriptar o desencriptar"
    copiar.style.display = "none";
    textoCodificar.value = "";
}

function botonEncriptar(){
    let texto = textarea.value;
    if(revisarTexto(texto)){
        const textoEncriptado = encriptar(texto);
        mostrarExito(textoEncriptado,"¡Texto Encriptado con éxito!");
    }else{
        mostrarMensajeVacio();
        mostrarError("No se pueden encriptar numeros o espacios vacios.");
    }
}

function botonDesencriptar(){
    let texto = textarea.value;
    if(revisarTexto(texto)){
        const textoDesencriptado = desencriptar(texto);
        mostrarExito(textoDesencriptado,"¡Texto Desencriptado con éxito!");
    } else{
        mostrarMensajeVacio();
        mostrarError("No se pueden desencriptar numeros o espacios vacios.");
    }
}

function encriptar(textoEncritado){
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];

    textoEncritado = textoEncritado.toLowerCase();

    for(let i=0; i<matrizCodigo.length; i++){
        if(textoEncritado.includes(matrizCodigo[i][0])){
            textoEncritado=textoEncritado.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return textoEncritado;
}

function desencriptar(textoDesencriptado){
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];

    textoDesencriptado = textoDesencriptado.toLowerCase();

    for(let i=0; i<matrizCodigo.length; i++){
        if(textoDesencriptado.includes(matrizCodigo[i][1])){
            textoDesencriptado=textoDesencriptado.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }
    return textoDesencriptado;
}

document.getElementById("copiar").onclick = () => {
    let textoCoD = document.getElementById("textoCoD").value;

    navigator.clipboard.writeText(textoCoD)
    .then(()=>{ alert("Texto copiado en el portapapeles");})
};

function revisarTexto(texto){
    if(texto.trim()==''){
        return false
    }
    return /^[a-z\s\-\_\.\,\:\;\!\?\ñ]+$/.test(texto);
}

window.addEventListener('load',function(){ 
    let textoCodificar = document.getElementById("textoCodificar"); 
    textoCodificar.focus();
});