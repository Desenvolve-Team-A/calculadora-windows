let calculou = false;
let idCalculo;
let idCalculoAnterior;

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
  if (x < 0 && y < 0) {
    return x + y;
  }

  return x - (y);
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

  document.getElementById('calculo').innerText = "√(" + conteudoVisor + ")";

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
  let vetor = conteudoCalculo.split(" ");

  let visor = document.getElementById('visor');
  let conteudoVisor = visor.textContent;
  conteudoVisor *= 1;

  let resultado = porcentagem(vetor[0], conteudoVisor);

  document.getElementById('calculo').innerText = conteudoCalculo + " ";
  document.getElementById('visor').innerText = resultado;
}

function porcentagem(x, y) {
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

function backspace() { //verificar
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
    case 0:
      resultado = recalculo(idCalculoAnterior);
      break;

    case 1:
      resultado = somar(numeroCalculo, conteudoVisor);
      idCalculoAnterior = idCalculo;
      break;

    case 2:
      resultado = subtrair(numeroCalculo, conteudoVisor);
      idCalculoAnterior = idCalculo;
      break;

    case 3:
      resultado = multiplicar(numeroCalculo, conteudoVisor);
      idCalculoAnterior = idCalculo;
      break;

    case 4:
      resultado = dividir(numeroCalculo, conteudoVisor);
      idCalculoAnterior = idCalculo;
      break;

    default:
      break;
  }

  idCalculo = 0;

  historico()
  
    let vetor = conteudoCalculo.split(" ");

    if(vetor.length > 2){
        document.getElementById('calculo').innerText = conteudoVisor + ` ${vetor[1]} ` + vetor[2] + " =";
    } else {
        document.getElementById('calculo').innerText = conteudoCalculo + " " + conteudoVisor + " =";
    }
    
    document.getElementById('visor').innerText = resultado;

}

function recalculo(x) {
  let calculo = document.getElementById('calculo');
  let conteudoCalculo = calculo.textContent;
  let vetor = conteudoCalculo.split(" ");
  let numero = vetor[2];

  if (vetor[1] == "-") {
    numero *= (-1);
  } else {
    numero *= 1;
  }

  let visor = document.getElementById('visor');
  let conteudoVisor = visor.textContent;

  conteudoVisor *= 1;

  switch (x) {
    case 1:
      return somar(numero, conteudoVisor);

    case 2:
      return subtrair(numero, conteudoVisor);

    case 3:
      return multiplicar(numero, conteudoVisor);

    case 4:
      return dividir(numero, conteudoVisor);

    default:
      break;
  }
}

function inverteSinal() {
  let visor = document.getElementById('visor');
  let conteudoVisor = visor.textContent;
  let numeroVisor = parseInt(conteudoVisor);

  numeroVisor *= -1;

  document.getElementById('visor').innerText = numeroVisor;
}

function insereVirgula() {
  let visor = document.getElementById('visor');
  let conteudoVisor = visor.textContent;
  let numeroVisor = parseFloat(conteudoVisor);

  document.getElementById('visor').innerText = numeroVisor + ".";
}


function historico() {
  let calculo = document.getElementById('calculo');
  let visor = document.getElementById('visor');

  let conteudoCalculo = calculo.textContent;
  let conteudoVisor = visor.textContent;

  let span = document.getElementById('historico');
  let novoHistorico = document.createElement('p');
  let br = document.createElement('br');

  novoHistorico.appendChild(document.createTextNode(conteudoCalculo));
  novoHistorico.appendChild(br);
  novoHistorico.appendChild(document.createTextNode(conteudoVisor));

  span.insertBefore(novoHistorico, span.firstChild);

}

function mostrarHistorico(){
  let mostrar = document.getElementById('historico');
  let cliqueParaMostrar = mostrar.textContent;
  cliqueParaMostrar;
}