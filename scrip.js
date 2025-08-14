import {PALAVRAS_RUINS} from "./palavrasRuins.js"
const botaoMostraPalavras = document.querySelector('#botao-palavrachave');

botaoMostraPalavras.addEventListener('click', mostraPalavraChave);

function mostraPalavraChave(){
    const texto = document.querySelector('#entrada-de-texto').value;
    const campoResultado = document.querySelector('#resultado-palavrachave');
    const palavrasChave = processaTexto(texto);
    
    campoResultado.textContent = palavrasChave.join(", ");
}

function processa Texto (texto) {
    let palavras = texto.split(/\P{L}+/u);
    for (let i in palavras) {
        palavras[i] = palavras[i].toLowerCase();
    }
    palavras = tirarPalavrasRuins(palavras);

    const frequencias conta Frequencias (palavras);
    let ordenadas Object.keys (frequencias).sort(ordenaPalavra);
    
    function ordenaPalavra (p1, p2) {
        return frequencias [p2] frequencias [p1];
    }

    console.log(ordenadas);
    return ordenadas.slice(0,10);
}

function processaTexto(texto){
    let frequencias = {};
    for (let i in palavras){
        frequencias[i] = 0
        for (let j in palavras){
            if (i == j){
                frequencias[i]++;
            }
        }
    } 

    console.log(frequencias);
    return palavras;
}

function contafrequencias(palavra){
    let frequencias = {};
    for (let i in palavras){
        frequencias[i] = 0
        for (let j in palavras){
            if (i == j){
                frequencias[i]++;
            }
        }
    } 

    return frequencias;

}
 
function tirarPalavrasRuins(palavras){
  
  const palavrasBoas = [];
    for (let palavras of palavras){
        if (PALAVRAS_RUINS.has (palavra) &&  palavra.length > 2){
            palavrasBoas.push(palavra;)
        }
    }
    retutnepalavrasBoas;

}
