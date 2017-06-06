// console.log('bk');

// the game board representation
var data = [
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0]
];

// object displaying the players in the game.
var players = {
  player1: 'red',
  player2: 'black'
}

// settting the first turn to player 1
players.currentPlayer = players.player1

// selecting the spot tht will represent the checkers, and adding clicklistener to each
var $checker = $('.checker');
// console.log($checker);
$checker.on('click', handleClick);

// function instructions delegating current player and switching the player.
function nextPlayer(){
  if(players.currentPlayer == players.player1){
    players.currentPlayer = players.player2
  } else {
    players.currentPlayer = players.player1
  }
}


function handleClick(){

  var row = $(this).parent().parent().data("row")
  var column = $(this).parent().data("column")
  console.log("column", column)
  console.log("row", row)
  data[row][column] = players.currentPlayer
  console.log('data',data)

  //sets color of checker to be played according to current player
  if (players.currentPlayer == players.player1) {
    $(this).css('backgroundColor', players.player1);
  }

  if (players.currentPlayer == players.player2) {
    $(this).css('backgroundColor', players.player2);
    $(this).addClass('filled')
  }
  // function to call the next player
  nextPlayer();
  $(this).off('click');
}



function resetGame(){
  $checker.css('backgroundColor', 'white');
}

var $reset = $('#reset');
$reset.click(resetGame);



// veritcal checker -> responsible for checking divs in 7's
// diagnoal checker -> responsible for checking divs in 6's
// horizontal checker -> responsible for checking div next to current div (or by 1)
// a checker to place the element at the bottom-most position that is not occupied
