let calculou = false;
let idCalculo;
let idCalculoAnterior;
let memoria = 0;
let contexto;
let adicionou = false;
let boolRecalculo = false;
let porcetagemDivisãoMultiplicacao = false;

function botaoSomar() {
  visorToCalculo("+");

  calculou = true;
  adicionou = false;
  porcetagemDivisãoMultiplicacao = false;
  idCalculo = 1;
}

function somar(x, y) {
  return x + y;
}

function botaoSubtrair() {
  visorToCalculo("-");

  calculou = true;
  adicionou = false;
  porcetagemDivisãoMultiplicacao = false;
  idCalculo = 2;
}

function subtrair(x, y) {
  if ((x < 0 && y < 0 && boolRecalculo) || (x > 0 && y > 0 && boolRecalculo) || (x < 0 && y > 0 && boolRecalculo)) {
    return x + y;
  } else if (x < 0 && y > 0) {
    return x - y;
  }
  return x - y;
}

function botaoMultiplicar() {
  visorToCalculo("x");

  calculou = true;
  adicionou = false;
  porcetagemDivisãoMultiplicacao = true;
  idCalculo = 3;
}

function multiplicar(x, y) {
  return x * y;
}

function botaoDividir() {
  visorToCalculo("÷");

  calculou = true;
  adicionou = false;
  porcetagemDivisãoMultiplicacao = true;
  idCalculo = 4;
}

function dividir(a, b) {
  if (a == 0 && b == 0) {
    idCalculo = undefined;
    return "Resultado indefinido";
  } else if (a != 0 && b == 0) {
    idCalculo = undefined;
    return "Não é possível dividir por zero";
  }
  return Math.round((a / b) * 100) / 100;
}

function potencia() {
  let visor = document.getElementById('visor');
  let conteudoVisor = visor.textContent;

  document.getElementById('calculo').innerText = "sqr(" + conteudoVisor + ") = ";
  conteudoVisor *= 1;
  visor.innerText = conteudoVisor * conteudoVisor;
  historico();
  calculou = true;
}

function raiz() {
  let visor = document.getElementById('visor');
  let conteudoVisor = visor.textContent;

  document.getElementById('calculo').innerText = "(" + conteudoVisor + ") = ";
  conteudoVisor *= 1;

  if (conteudoVisor < 0) {
    return visor.innerText = "Entrada inválida";
  } else {
    visor.innerText = Math.sqrt(conteudoVisor);
  }

  historico();
  calculou = true;
}

function fracao() {
  let visor = document.getElementById('visor');
  let conteudoVisor = visor.textContent;

  document.getElementById('calculo').innerText = "1/(" + conteudoVisor + ") = ";
  conteudoVisor *= 1;
  visor.innerText = 1 / conteudoVisor;

  historico();
  calculou = true;
}

function botaoPorcentagem() {
  let calculo = document.getElementById('calculo');
  let conteudoCalculo = calculo.textContent;
  let vetor = conteudoCalculo.split(" ");

  let visor = document.getElementById('visor');
  let conteudoVisor = visor.textContent;
  conteudoVisor *= 1;

  let resultado = porcentagem(vetor[0], conteudoVisor);

  calculo.innerText = conteudoCalculo + " " + resultado;
  visor.innerText = resultado;
}

function porcentagem(x, y) {
  if (porcetagemDivisãoMultiplicacao) {
    return (y / 100);
  } else {
    return (x * (y / 100));
  }
}

function imprimir(x) {
  let visor = document.getElementById('visor');
  let conteudoVisor = visor.textContent;

  if (conteudoVisor == "0") {
    conteudoVisor = "";
  }

  if (adicionou) {
    visor.innerHTML = "";
    conteudoVisor = "";
    calculo.innerHTML = "";
    adicionou = false;
    boolRecalculo = false;
  }

  if (calculou) {
    conteudoVisor = x.toString();
    calculou = false;
  } else {
    conteudoVisor += x.toString();
  }
  visor.innerText = conteudoVisor;
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
  visor.innerText = stringFinal;
}

function ce() {
  document.getElementById('visor').innerText = "0";
}

function c() {
  ce();
  document.getElementById('calculo').innerText = "";
}

function igual() {
  let calculo = document.getElementById('calculo');
  let conteudoCalculo = calculo.textContent;
  let numeroCalculo = parseFloat(conteudoCalculo);

  let visor = document.getElementById('visor');
  let conteudoVisor = visor.textContent;

  conteudoVisor *= 1;

  let resultado;

  switch (idCalculo) {
    case 0:
      resultado = recalculo(idCalculoAnterior);
      if (resultado == 0) {
        conteudoCalculo = "";
        conteudoVisor = "0";
      }
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
      resultado = conteudoVisor;
      break;
  }

  idCalculo = 0;

  let vetor = conteudoCalculo.split(" ");

  if (!vetor.includes("=")) {
    if (vetor.length > 2) {
      calculo.innerText = vetor[0] + ` ${vetor[1]} ` + vetor[2] + " =";
    } else {
      calculo.innerText = conteudoCalculo + " " + conteudoVisor + " =";
    }
    visor.innerText = resultado;
  } else {
    if (vetor.length > 3) {
      calculo.innerText = conteudoVisor + ` ${vetor[1]} ` + vetor[(vetor.length - 2)] + " " + vetor[(vetor.length - 1)];
    } else {
      calculo.innerText = conteudoCalculo;
    }
    visor.innerText = resultado;
  }


  if (resultado != "Resultado indefinido" && resultado != "Não é possível dividir por zero") {
    historico();
  }

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

  if (conteudoVisor == "Resultado indefinido" || conteudoVisor == "Não é possível dividir por zero") {
    return 0;
  }

  if (x != undefined) {

    conteudoVisor *= 1;

    switch (x) {
      case 1:
        return somar(numero, conteudoVisor);

      case 2:
        boolRecalculo = true;
        return subtrair(numero, conteudoVisor);

      case 3:
        return multiplicar(numero, conteudoVisor);

      case 4:
        return dividir(conteudoVisor, numero);

      default:
        break;
    }
  } else {
    return conteudoVisor;
  }
}


function inverteSinal() {
  let visor = document.getElementById('visor');
  let conteudoVisor = visor.textContent;
  let numeroVisor = parseFloat(conteudoVisor);

  numeroVisor *= -1;

  visor.innerText = numeroVisor;
}

function insereVirgula() {
  let visor = document.getElementById('visor');
  let conteudoVisor = visor.textContent;
  let numeroVisor = parseFloat(conteudoVisor);

  visor.innerText = numeroVisor + ".";
}

function historico() {
  mostrarHistorico();
  adicionou = true;
  let calculo = document.getElementById('calculo');
  let visor = document.getElementById('visor');

  let conteudoCalculo = calculo.textContent;
  let conteudoVisor = visor.textContent;

  let span = document.getElementById('historico');
  let novoHistorico = document.createElement('div');
  let br = document.createElement('br');
  let visorNegrito = document.createElement('strong');
  novoHistorico.id = "nova-div";

  novoHistorico.appendChild(document.createTextNode(conteudoCalculo));
  visorNegrito.appendChild(br);
  visorNegrito.appendChild(document.createTextNode(conteudoVisor));
  novoHistorico.appendChild(visorNegrito);

  span.insertBefore(novoHistorico, span.firstChild);
}

function mostrarHistorico() {
  contexto = "h";
  let bottomHist = document.getElementById('hist');
  let bottomMemo = document.getElementById('memo');

  bottomHist.style.borderBottom = "4px solid blue";
  bottomMemo.style.borderBottom = "";

  let mostrar = document.getElementById('historico');
  let ocultar = document.getElementById('memoria');

  mostrar.style.display = 'block';
  ocultar.style.display = 'none';
}

function mostrarMemoria() {
  contexto = "m";
  let mostrar = document.getElementById('memoria');
  let ocultar = document.getElementById('historico');

  mostrar.style.display = 'block';
  ocultar.style.display = 'none';

  let bottomHist = document.getElementById('hist');
  let bottomMemo = document.getElementById('memo');

  bottomHist.style.borderBottom = "";
  bottomMemo.style.borderBottom = "4px solid blue";
}

function somarMemoria() {
  let visor = document.getElementById('visor');
  let conteudoVisor = visor.textContent;

  let valorAtual = parseFloat(visor.innerText);
  let span = document.getElementById('memoria');
  let ultimaMemoria = span.firstChild;


  if (ultimaMemoria == null) {
    let somar = document.createElement('strong');
    somar.id = 'nova-div';

    somar.textContent = valorAtual + memoria;
    memoria += valorAtual;
    span.insertBefore(somar, span.firstChild);
  } else {
    let valorUltimaMemoria = parseFloat(ultimaMemoria.textContent);
    ultimaMemoria.textContent = valorUltimaMemoria + valorAtual;
  }
}

function subtrairMemoria() {
  let visor = document.getElementById('visor');
  let conteudoVisor = visor.textContent;

  let valorAtual = parseFloat(visor.innerText);
  let span = document.getElementById('memoria');
  let ultimaMemoria = span.firstChild;

  if (ultimaMemoria == null) {
    let substrair = document.createElement('strong');
    substrair.id = 'nova-div';
    substrair.textContent = memoria - valorAtual;
    memoria -= valorAtual;

    span.insertBefore(substrair, span.firstChild);
  } else {
    let valorUltimaMemoria = parseFloat(ultimaMemoria.textContent);
    ultimaMemoria.textContent = valorUltimaMemoria - valorAtual;
  }
}

function deletarHistorico() {
  let span = document.getElementById('historico');
  span.innerHTML = "";
}

function deletarMemoria() {
  let span = document.getElementById('memoria');
  span.innerHTML = "";
}
function qualRetorna() {
  if (contexto == "h") {
    return deletarHistorico();
  } else if (contexto == "m") {
    return deletarMemoria();
  }
}

function recuperarMemoria() {
  let visor = document.getElementById('visor');
  let ultimaMemoria = document.getElementById('memoria').firstChild;

  visor.textContent = ultimaMemoria.textContent;
}

function adicionarMemoria() {
  let visor = document.getElementById('visor');
  let span = document.getElementById('memoria');
  let somar = document.createElement('strong');

  somar.id = 'nova-div';

  somar.textContent = visor.innerText;
  span.insertBefore(somar, span.firstChild);
}
