var jogador = "X";
var statusBar = document.getElementById("turn");

function pickCard(id) {

    var card = document.getElementById(id);
    
    if (card.classList.contains("card")) {
        if (jogador == "X") {
            card.innerHTML="<img src='simbolo-x.png' width='50%'/>";
            card.classList.remove("card");
            card.classList.add("pickedX");
            giveTurnTo("O");
        } else if (jogador =="O") {
            card.innerHTML="<img src='rec.png' width='50%'/>";
            card.classList.remove("card");
            card.classList.add("pickedO");
            giveTurnTo("X");
        }
    }
    
}

function giveTurnTo(turn) {
    jogador = turn;
    statusBar.innerText = "Jogador " + turn;
}

function restart() {
    location.reload();
    return false;
}