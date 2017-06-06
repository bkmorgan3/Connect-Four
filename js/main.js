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

// the reset button and click listener
var $reset = $('#reset');
$reset.click(resetGame);

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
  console.log('data row:',data[row][column]);
  // .data([row==3][col==5])
  //sets color of checker to be played according to current player
  if (players.currentPlayer == players.player1) {
    $(this).css('backgroundColor', players.player1);
  }

  if (players.currentPlayer == players.player2) {
    $(this).css('backgroundColor', players.player2);
    $(this).addClass('filled')
  }

  checkHorizontalWin(row, column)
  checkVerticalWinner(row, column)
  // function to call the next player
  nextPlayer();
  $(this).off('click');
  // horizontalWinCheck();
}



function resetGame(){
  $checker.css('backgroundColor', 'white');
}


// once win conditons are met this will display winner and lock board
function weHaveAWinner(){
  var $h1 = $('h1').html(players.currentPlayer + ' wins !!!');
  lockBoard();
}

function lockBoard(){
  $checker.off('click')
}
// checks for horizontal wins
function checkHorizontalWin(row, column){
  numInARow = 1
  currentRow = row
  currentColumn = column
  // check for match horizontal/left:
  // Check one over to the left:
  if (data[currentRow][currentColumn -1] === players.currentPlayer && currentColumn -1 >= 0  ){
      // Increase number in a row count:
      numInARow++

      console.log(numInARow + " in a row")

      // Check next one over to the left or right:
      if (data[currentRow][currentColumn -2] === players.currentPlayer && currentColumn -2 >= 0  ){
        numInARow++
        console.log(numInARow + " in a row")
        if(data[currentRow][currentColumn -3] === players.currentPlayer && currentColumn -3 >= 0 ){
            weHaveAWinner();
            if(data[currentRow][currentColumn + 1]=== players.currentPlayer && currentColumn + 1 <7){
              numInARow++
              console.log(numInARow + ' in a row');
            }
        }
      }
  }
}

function checkVerticalWinner(row, column){
  // numInARow = 1
  // currentRow = row
  // currentColumn = column
  // // check for match vertical
  // if(data[currentColumn][currentRow -1 || currentRow +1] === players.currentPlayer && currentRow -1 >=0){
  //   numInARow++
  //
  //   console.log('vert' ,numInARow + " in a row")
  //
  //   if(data[currentColumn][currentRow -2 || currentRow +2]=== players.currentPlayer && currentRow -2 >=0){
  //     numInARow++
  //     console.log('vert', numInARow + " in a row");
  //     if(data[currentColumn][currentRow -3 || currentRow + 3] === players.currentPlayer && currentRow -3 >=0 ){
  //       weHaveAWinner();
  //     }
  //   }
  // }
}

// veritcal checker -> responsible for checking divs in 7's
// diagnoal checker -> responsible for checking divs in 6's
// a checker to place the element at the bottom-most position that is not occupied
