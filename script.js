let calculou = false;
let idCalculo;

function botaoSomar() {
    visorToCalculo("+");

    calculou = true;
    idCalculo = 1;
}

function somar(x, y) {
    return x + y;
}

function botaoSubtrair() {
    visorToCalculo("-");

    calculou = true;
    idCalculo = 2;
}

function subtrair(x, y) {
    return x - y;
}

function botaoMultiplicar() {
    visorToCalculo("x");

    calculou = true;
    idCalculo = 3;
}

function multiplicar(x, y) {
    return x * y;
}

function botaoDividir() {
    visorToCalculo("/");

    calculou = true;
    idCalculo = 4;
}

function dividir(a, b) {
    visorToCalculo("/");

    return a / b;
}

function potencia() {
    let visor = document.getElementById('visor');
    let conteudoVisor = visor.textContent;

    document.getElementById('calculo').innerText = "sqr(" + conteudoVisor + ")";

    conteudoVisor *= 1;

    document.getElementById('visor').innerText = conteudoVisor * conteudoVisor;
}

function raiz() {
    let visor = document.getElementById('visor');
    let conteudoVisor = visor.textContent;

    document.getElementById('calculo').innerText = "(" + conteudoVisor + ")";

    conteudoVisor *= 1;

    document.getElementById('visor').innerText = Math.sqrt(conteudoVisor);
}

function fracao() {
    let visor = document.getElementById('visor');
    let conteudoVisor = visor.textContent;

    document.getElementById('calculo').innerText = "1/(" + conteudoVisor + ")";

    conteudoVisor *= 1;

    document.getElementById('visor').innerText = 1 / conteudoVisor;
}

function botaoPorcentagem() {
    let calculo = document.getElementById('calculo');
    let conteudoCalculo = calculo.textContent;
    let numeroCalculo = parseInt(conteudoCalculo);

    let visor = document.getElementById('visor');
    let conteudoVisor = visor.textContent;

    //dividir()
    //CONTINUAR DAQUI
    
}

function dividir(x, y) {
    return (x * (y / 100));
}

function imprimir(x) {
    let visor = document.getElementById('visor');
    let conteudoVisor = visor.textContent;

    if (calculou) {
        conteudoVisor = x.toString();
    } else {
        conteudoVisor += x.toString();
    }

    document.getElementById('visor').innerText = conteudoVisor;
}

function visorToCalculo(simbolo) {
    let visor = document.getElementById('visor');
    let conteudoVisor = visor.textContent;

    conteudoVisor += " " + simbolo.toString();

    document.getElementById('calculo').innerText = conteudoVisor;
}

function backspace() {
    let visor = document.getElementById('visor');
    let conteudoVisor = visor.textContent;

    let vetorInicial = conteudoVisor.split('');

    let vetorFinal = [];

    for (let i = 0; i < (vetorInicial.length - 1); i++) {
        vetorFinal[i] = vetorInicial[i];
    }

    let stringFinal = vetorFinal.join('');

    document.getElementById('visor').innerText = stringFinal;
}

function ce() {
    document.getElementById('visor').innerText = "";
}

function c() {
    ce();
    document.getElementById('calculo').innerText = "";
}

function igual() {
    let calculo = document.getElementById('calculo');
    let conteudoCalculo = calculo.textContent;
    let numeroCalculo = parseInt(conteudoCalculo);

    let visor = document.getElementById('visor');
    let conteudoVisor = visor.textContent;

    conteudoVisor *= 1;

    let resultado;

    switch (idCalculo) {
        case 1:
            resultado = somar(numeroCalculo, conteudoVisor);
            calculou = false;
            break;

        case 2:
            resultado = subtrair(numeroCalculo, conteudoVisor);
            calculou = false;
            break;

        case 3:
            resultado = multiplicar(numeroCalculo, conteudoVisor);
            calculou = false;
            break;

            case 4:
            resultado = dividir(numeroCalculo, conteudoVisor);
            calculou = false;
            break;

        default:
            break;
    }

    idCalculo = 0;

    document.getElementById('calculo').innerText = conteudoCalculo + " " + conteudoVisor + " =";
    document.getElementById('visor').innerText = resultado;
}