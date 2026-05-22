const numeroSecreto = Math.floor(Math.random() * 100) + 1;
let tentativas = 0;
const limite = 15;

function encerrarJogo(mensagem) {
  document.getElementById("resultado").textContent = mensagem;
  document.getElementById("btnReiniciar").style.display = "block";
}

function adivinhar() {
let palpite = parseInt(document.getElementById("palpite").value);

    //Validador de palpite
    if (palpite > 100){
        alert("O número deve ser entre 1 e 100! Escolha outro palpite")
        return; //interrompe a função, não precisa checar mais nada
    } 
    else if (palpite < 1){
        alert("O número deve ser entre 1 e 100! Escolha outro palpite")
        return; //interrompe a função, não precisa checar mais nada
    }

    //Decrementação de tentativas
    tentativas++;
    let tentativasRest = limite - tentativas;

    //Caso acerte
    if (palpite == numeroSecreto) {
        document.getElementById("resultado").textContent = "Parabéns! Você acertou!";
        return; //interrompe a função, não precisa checar mais nada
    }

    //Caso acabem as tentativas
    if (tentativas >= limite) {
        document.getElementById("resultado").textContent = "Game Over! O número era " + numeroSecreto;
        return; //interrompe a função, não precisa checar mais nada
    }

    //Dicas
    if (palpite < numeroSecreto) {
        document.getElementById("resultado").textContent = "Muito baixo! Dê um palpite maior!";
    } else {
        document.getElementById("resultado").textContent = "Muito alto! Dê um palpite menor!";
    }

    //Exibir contador
    document.getElementById("tentativas").textContent = "Tentativas restantes: " + tentativasRest;
}

function encerrarJogo(mensagem) {
  document.getElementById("resultado").textContent = mensagem;
  document.getElementById("btnReiniciar").style.display = "block"
}