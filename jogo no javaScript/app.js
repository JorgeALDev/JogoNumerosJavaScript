alert('Olá Jogador, Bem vindo ao jogo do numero secreto');
let numeroMaximo = 50
let numeroSecreto = parseInt(Math.random()*numeroMaximo +1);
console.log(numeroSecreto);
let chute;
let tentativas = 1;

do {
    chute = prompt(`Escolha um numero entre 1 e ${numeroMaximo}`)

    if (numeroSecreto == chute){
        break;
    } else {
        alert('Você errou o numero HAHA')
        if (numeroSecreto>chute){
            alert(`O numero secreto é maior que ${chute}`);
        }else {
            alert(`O numero secreto é menor que ${chute}`);
        }
        tentativas++;
    }
} while (numeroSecreto != chute);

let palavraTentativa = tentativas>1? 'tentativas' : 'tentativa'
alert(`Parabens, Você descobriu que o numero secreto era: ${numeroSecreto}\nE acertou com ${tentativas} ${palavraTentativa}`)