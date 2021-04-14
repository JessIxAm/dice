var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

document.getElementById('dice_player1').setAttribute('src', `assets/dice${randomNumber1}.png`);
document.getElementById('dice_player2').setAttribute('src', `assets/dice${randomNumber2}.png`);

var winner = document.getElementById('winner');

     if (randomNumber1 > randomNumber2) {
          winner.setAttribute('class', 'wrinkle');
          winner.innerHTML = "🚩Player 1 Wins !!!";
     } else if (randomNumber1 < randomNumber2) {
          winner.setAttribute('class', 'wrinkle');
          winner.innerHTML = "🚩Player 2 Wins !!!";
     } else {
          winner.setAttribute('class', '');
          winner.innerHTML = "It's a draw!! Try again?";
     }
