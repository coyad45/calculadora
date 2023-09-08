const num = document.getElementById('num1')
const keys = document.querySelectorAll('button');
const resultadokey = document.getElementById('resultado');


function convertir(val) {
    num.value += val;
}

function limpiar(){
    document.getElementById('num1').value = '';
}

function ecuacion() {
    let x = document.getElementById('num1').value;
    let y = eval(x);
    document.getElementById('num1').value = y;
    return y;
}