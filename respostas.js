// 1) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.

// IMPORTANTE: Esse número pode ser informado através de qualquer entrada de sua preferência ou pode ser previamente definido no código;

// 2) Escreva um programa que verifique, em uma string, a existência da letra ‘a’, seja maiúscula ou minúscula, além de informar a quantidade de vezes em que ela ocorre.

// IMPORTANTE: Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;

// 3) Observe o trecho de código abaixo: int INDICE = 12, SOMA = 0, K = 1; enquanto K < INDICE faça { K = K + 1; SOMA = SOMA + K; } imprimir(SOMA);
                                                                                          
// Ao final do processamento, qual será o valor da variável SOMA?

// 4) Descubra a lógica e complete o próximo elemento:
// a) 1, 3, 5, 7, ___
// b) 2, 4, 8, 16, 32, 64, ____
// c) 0, 1, 4, 9, 16, 25, 36, ____
// d) 4, 16, 36, 64, ____
// e) 1, 1, 2, 3, 5, 8, ____
// f) 2,10, 12, 16, 17, 18, 19, ____


// 5) Você está em uma sala com três interruptores, cada um conectado a uma lâmpada em salas diferentes. Você não pode ver as lâmpadas da sala em que está, mas pode ligar e desligar os interruptores quantas vezes quiser. Seu objetivo é descobrir qual interruptor controla qual lâmpada. Como você faria para descobrir, usando apenas duas idas até uma das salas das lâmpadas, qual interruptor controla cada lâmpada? 


// 1) Resposta da questão 1.

function Fibonaccisequency(number){
    let n0 = 0
    let n1 = 1
    if(number == n0 || number == n1){
        return "pertence a sequencia de fibonacci"
    }

    let nfibonacci = 0

    while(nfibonacci < number){
        nfibonacci = n0 + n1
        n0 = n1
        n1 = nfibonacci
    }

    console.log(nfibonacci)
    if(nfibonacci == number){
        return "pertence a sequencia de fibonacci"
    }else{
        return "não pertence a sequencia de fibonacci"
    }
}

console.log(Fibonaccisequency(33))

// 2) Resposta da Questão 1. Fiquei em Dúvida se poderia inserir letras ("á","ã"...) acentuadas, então não inclui elas.

function verifyA(string) {
    const regex = /a/gi
    const matches = string.match(regex)
    let quant = 0

    if(matches.length > 0){
        quant = matches.length
        return `a quantidade de "a" na string é: ${quant}`
    }else{
        return `não tem letras "a" nessa string.`
    }
}

console.log(verifyA('olhando para o céu eu vejo um avião'))

// 3) Resposta da 3
// a Resposta é: 77 acredito eu kkk
function question3(){
    const indice = 12
    let soma = 0
    let k = 1

    while(k < indice){
        k = k + 1
        soma += k

    }
    return soma
}

console.log("questão 3:", question3())

// 4) Descubra a lógica e complete o próximo elemento:
// a) 1, 3, 5, 7, 9 logica +2
// b) 2, 4, 8, 16, 32, 64, 128  logica *2
// c) 0, 1, 4, 9, 16, 25, 36, 49  logica (+1 +3 +5 +7 +9 +11 +*13*) de 2 em 2 a partir do 1
// d) 4, 16, 36, 64, 90 logica (+12 +20 +28 *+36*) de 8 em 8 a partir do 4
// e) 1, 1, 2, 3, 5, 8, 13 Sequencia de Fibonacci eu espero kkk
// f) 2,10, 12, 16, 17, 18, 19, ____ não faço a menor ideia, quebrei a cabeça nessa

// 5) Questão 5
// Resposta: acredito que só daria pra descobrir apenas 1 ligação de interruptor e lampada, então eu chutaria as outras 2 ligações.
// posso ligar 2 lampadas e ir na sala, se não estiver acesa é
//  o terceiro interruptor, se ela estiver acesa, eu volto apago uma das luzes e verifico, e assim descubro pelo menos 1 ligação.

//Gostei dos desafios. Se conseguirem dar um feedback sobre as questões que eu errei seria mt grato, ajudaria no meu aprendizado.
