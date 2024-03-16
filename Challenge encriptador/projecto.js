const campo_texto = document.querySelector("#mensaje");
const campo_mensaje = document.querySelector("#textoEncriptado")

const matriz_code = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
    ["E", "ENTER"],
    ["I", "IMES"],
    ["A", "AI"],
    ["O", "OBER"],
    ["U", "UFAT"],
];

const matriz_decode = [
    ["enter", "e"],
    ["imes", "i"],
    ["ai", "a"],
    ["ober", "o"],
    ["ufat", "u"],
    ["ENTER", "E"],
    ["IMES", "I"],
    ["AI", "A"],
    ["OBER", "O"],
    ["UFAT", "U"],
];

//ENCRIPTAR

function btnEncriptar() {
    const texto = encriptar(campo_texto.value);
    campo_mensaje.value = texto;
}

function encriptar(fraseEncriptada) {
    for (let i = 0; i < matriz_code.length; i++) {
        if(fraseEncriptada.includes(matriz_code[i][0])){
            fraseEncriptada = fraseEncriptada.replaceAll(
                matriz_code[i][0],
                matriz_code[i][1]
            )
        }
    }
    return fraseEncriptada;
}

//DESENCRIPTAR

function btnDesencriptar() {
    const texto = desencriptar(campo_texto.value);
    campo_mensaje.value = texto;
}

function desencriptar(fraseDesencriptada) {
    for (let i = 0; i < matriz_decode.length; i++) {
        if(fraseDesencriptada.includes(matriz_decode[i][0])){
            fraseDesencriptada = fraseDesencriptada.replaceAll(
                matriz_decode[i][0],
                matriz_decode[i][1]
            )
        }
    }
    return fraseDesencriptada;
}

function copy() {
    var copyText = document.getElementById("textoEncriptado");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyText.value);
  }

function limpiarCaja() {
    document.querySelector("#mensaje").value = "";
    document.querySelector("#textoEncriptado").value = "";
}
