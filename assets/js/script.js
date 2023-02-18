var numero = document.getElementById("numero");
var aviso = document.getElementById("aviso");
var contador = 0;

function increment(){
    if (contador >= 5) {
        aviso.innerHTML = "Número Máximo";
        return;
    } else {
        contador++;
        numero.innerHTML = contador;
        aviso.innerHTML = "";
        if (contador >= 5) {
            aviso.innerHTML = "Número Máximo";
            return;
        }
    }
}

function decrement(){
    if (contador == -5) {
        aviso.innerHTML = "Número Mínimo";
        return;
    } else {
        contador--;
        numero.innerHTML = contador;
        aviso.innerHTML = "";
        if (contador == -5) {
            aviso.innerHTML = "Número Mínimo";
            return;
        }
    }
}

