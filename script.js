var jogador = "X";
var gamerX = document.getElementById("gamerX");
var gamerO = document.getElementById("gamerO");
var container = document.getElementsByClassName("container")[0];
var card1 = document.getElementById("1");
var card2 = document.getElementById("2");
var card3 = document.getElementById("3");
var card4 = document.getElementById("4");
var card5 = document.getElementById("5");
var card6 = document.getElementById("6");
var card7 = document.getElementById("7");
var card8 = document.getElementById("8");
var card9 = document.getElementById("9");
var winner = '';

giveTurnTo(jogador);

function pickCard(id) {

    var card = document.getElementById(id);
    
    if (winner === '') {
        if (card.classList.contains("card")) {
            if (jogador == "X") {
                card.innerHTML="<img src='simbolo-x.png' width='50%'/>";
                card.classList.remove("card");
                card.classList.add("pickedX");
                isWinner("X");
                if (winner==='') giveTurnTo("O");
            } else if (jogador =="O") {
                card.innerHTML="<img src='rec.png' width='50%'/>";
                card.classList.remove("card");
                card.classList.add("pickedO");
                isWinner("O");
                if (winner==='') giveTurnTo("X");
            }
        }
    }
}

function giveTurnTo(turn) {
    jogador = turn;

    if (jogador =="O") {
        gamerO.classList.add('load_game');
        unfade(gamerO);
        fade(gamerX);
    } else {
        fade(gamerO);
        unfade(gamerX);
    }
}

function restart() {
    location.reload();
    return false;
}

function fade(element) {
    var op = 1;  // initial opacity
    var timer = setInterval(function () {
        if (op <= 0.1){
            clearInterval(timer);
            element.style.display = 'none';
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op -= op * 0.1;
    }, 5);
}

function unfade(element) {
    var op = 0.1;  // initial opacity
    element.style.display = 'block';
    var timer = setInterval(function () {
        if (op >= 1){
            clearInterval(timer);
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op += op * 0.1;
    }, 5);
}

function isWinner(turn) {
    if ((card1.classList.contains("picked"+turn))&&(card4.classList.contains("picked"+turn))&&(card7.classList.contains("picked"+turn))){
        card1.classList.add("winner");
        card4.classList.add("winner");
        card7.classList.add("winner");
        card2.classList.add("disabled");
        card3.classList.add("disabled");
        card5.classList.add("disabled");
        card6.classList.add("disabled");
        card8.classList.add("disabled");
        card9.classList.add("disabled");
        winner = turn;
      } 
    if ((card2.classList.contains("picked"+turn))&&(card5.classList.contains("picked"+turn))&&(card8.classList.contains("picked"+turn))){
        card2.classList.add("winner");
        card5.classList.add("winner");
        card8.classList.add("winner");
        card1.classList.add("disabled");
        card3.classList.add("disabled");
        card4.classList.add("disabled");
        card6.classList.add("disabled");
        card7.classList.add("disabled");
        card9.classList.add("disabled");
        winner = turn;
      } 
    if ((card3.classList.contains("picked"+turn))&&(card6.classList.contains("picked"+turn))&&(card9.classList.contains("picked"+turn))){
        card3.classList.add("winner");
        card6.classList.add("winner");
        card9.classList.add("winner");
        card1.classList.add("disabled");
        card2.classList.add("disabled");
        card4.classList.add("disabled");
        card5.classList.add("disabled");
        card7.classList.add("disabled");
        card8.classList.add("disabled");
        winner = turn;
      } 
    if ((card1.classList.contains("picked"+turn))&&(card2.classList.contains("picked"+turn))&&(card3.classList.contains("picked"+turn))){
        card1.classList.add("winner");
        card2.classList.add("winner");
        card3.classList.add("winner");
        card4.classList.add("disabled");
        card5.classList.add("disabled");
        card6.classList.add("disabled");
        card7.classList.add("disabled");
        card8.classList.add("disabled");
        card9.classList.add("disabled");
        winner = turn;
      } 
    if ((card4.classList.contains("picked"+turn))&&(card5.classList.contains("picked"+turn))&&(card6.classList.contains("picked"+turn))){
        card4.classList.add("winner");
        card5.classList.add("winner");
        card6.classList.add("winner");
        card1.classList.add("disabled");
        card2.classList.add("disabled");
        card3.classList.add("disabled");
        card7.classList.add("disabled");
        card8.classList.add("disabled");
        card9.classList.add("disabled");
        winner = turn;
      } 
    if ((card7.classList.contains("picked"+turn))&&(card8.classList.contains("picked"+turn))&&(card9.classList.contains("picked"+turn))){
        card7.classList.add("winner");
        card8.classList.add("winner");
        card9.classList.add("winner");
        card4.classList.add("disabled");
        card5.classList.add("disabled");
        card6.classList.add("disabled");
        card1.classList.add("disabled");
        card2.classList.add("disabled");
        card3.classList.add("disabled");
        winner = turn;
      } 
    if ((card1.classList.contains("picked"+turn))&&(card5.classList.contains("picked"+turn))&&(card9.classList.contains("picked"+turn))){
        card1.classList.add("winner");
        card5.classList.add("winner");
        card9.classList.add("winner");
        card2.classList.add("disabled");
        card3.classList.add("disabled");
        card4.classList.add("disabled");
        card6.classList.add("disabled");
        card7.classList.add("disabled");
        card8.classList.add("disabled");
        winner = turn;
      } 
    if ((card3.classList.contains("picked"+turn))&&(card5.classList.contains("picked"+turn))&&(card7.classList.contains("picked"+turn))){
        card7.classList.add("winner");
        card5.classList.add("winner");
        card3.classList.add("winner");
        card1.classList.add("disabled");
        card2.classList.add("disabled");
        card4.classList.add("disabled");
        card6.classList.add("disabled");
        card8.classList.add("disabled");
        card9.classList.add("disabled");
        winner = turn;
      } 
}