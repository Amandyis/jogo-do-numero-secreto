let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumero();
let tentativas = 1;

function exibirTexto(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate: 1.2});
}

function mensagemInicial(){
exibirTexto('h1', 'Jogo do número secreto');

exibirTexto('p', 'Escolha um número de 1 a 10');
}

mensagemInicial();

function verificarChute(){
    let chute = document.querySelector('input').value;
    console.log(numeroSecreto);

    
  
    
    if (chute != numeroSecreto){
        exibirTexto('h1', 'Você errou!')
            if (chute < numeroSecreto){
                exibirTexto('p','O número secreto é maior que o informado');
            } 
            else{
                exibirTexto('p','O número secreto é menor que o chutado.');
            }
            tentativas++;

          limparCampo();
            
            
    }
    else{
        exibirTexto('h1', 'Você acertou!');
        exibirTexto('p', 'Você descobriu o número secreto');

        palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        mensagemTentativa = 'Você descobriu o número secreto com: ' + tentativas  +' '+ palavraTentativa

        exibirTexto('p', mensagemTentativa);

        document.getElementById('reiniciar').removeAttribute('disabled');
    }
    
}

function gerarNumero() {

    let quantidadeEscolhida = listaDeNumerosSorteados.length; 
    let numeroEscolhido = parseInt(Math.random() * 10 + 1);

    if (quantidadeEscolhida == 10){
        listaDeNumerosSorteados = [];
    }

     if (listaDeNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumero;
     }
     else{
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados)
        return numeroEscolhido;
     }
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo(){
        numeroSecreto = gerarNumero();
        limparCampo();
        tentativas = 1;
        mensagemInicial();
        document.getElementById('reiniciar').setAttribute('disabled', true);
}








