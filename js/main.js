// console.log('bk');
// -----------VARIABLES--------------------
// the game board representation
var data = [
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0]
];


// select each column by their class
var $col1 = $('.col-1');
var $col2 = $('.col-2');
var $col3 = $('.col-3');
var $col4 = $('.col-4');
var $col5 = $('.col-5');
var $col6 = $('.col-6');
var $col7 = $('.col-7');

// group each selected column into an array
var columns = [$col1,$col2,$col3,$col4,$col5,$col6,$col7];
// console.log(columns)  confirm selection
  // for(var i = 0; i < columns.length; i++){
  //   console.log(columns[i]);
  //   // for(var j = (columns.length-1); j >= 0; j++){
  //     console.log(columns[i][j])
  //   }
  // }


// object displaying the players in the game.
var players = {
  player1: 'red',
  player2: 'black'
}
var numInARow;
// settting the first turn to player 1
players.currentPlayer = players.player1

// selecting the spot tht will represent the checkers, and adding clicklistener to each
var $checker = $('.checker');
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
  $(this).addClass('filled');
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

  checkHorizontalWinR(row, column)
  checkHorizontalWinL(row, column)
  checkVerticalWinner(row, column)
  checkDownwardWinner(row,column)
  checkUpLeftDiagonal(row,column)
  checkDownRightDiagonal(row,column)
  checkDownLeftDiagonal(row, column)
  checkUpRightDiagonal(row,column)
  // function to call the next player
  nextPlayer();
  $(this).off('click');
  // horizontalWinCheck();
}



function resetGame(){
  $checker.css('backgroundColor', 'white');
  data = data;
}


// once win conditons are met this will display winner and lock board
function weHaveAWinner(){
  var $h1 = $('h1').html(players.currentPlayer + ' wins !!!').css('text-transform', 'capitalize');
  lockBoard();
}

function lockBoard(){
  $checker.off('click')
}
// checks for horizontal wins
function checkHorizontalWinR(row, column){
  numInARow = 1
  currentRow = row
  currentColumn = column
  // check for match horizontal/left:
  // Check one over to the left:
  if (data[currentRow][currentColumn -1] === players.currentPlayer && currentColumn -1 >= 0  ){
      // Increase number in a row count:
      numInARow++
      checkFourinRow(numInARow)
      console.log(numInARow + " in a row")
      // Check next one over to the left or right:
      if (data[currentRow][currentColumn -2] === players.currentPlayer && currentColumn -2 >= 0  ){
        numInARow++
        checkFourinRow(numInARow)
        console.log(numInARow + " in a row")
        if(data[currentRow][currentColumn -3] === players.currentPlayer && currentColumn -3 >= 0 ){
          numInARow++
          checkFourinRow(numInARow)
        }
      }
    }
  }

function checkHorizontalWinL(row, column){
  if(data[currentRow][currentColumn +1]=== players.currentPlayer && currentColumn +1 >= 0 && currentColumn+1 <=7){
    numInARow++
    checkFourinRow(numInARow)
    console.log(numInARow + ' in a row');
    if(data[currentRow][currentColumn + 2] === players.currentPlayer && currentColumn +2 >= 0 && currentColumn+2 <=7){
      numInARow++
      checkFourinRow(numInARow)
      console.log(numInARow + ' in a row');
      if(data[currentRow][currentColumn + 3] === players.currentPlayer && currentColumn +3 >= 0 && currentColumn+3 <=7){
        numInARow++
        checkFourinRow(numInARow)
      }
    }
  }
}

// use same code as Horizontal L and R but change the row to +1 and at current colum at end use row.
function checkVerticalWinner(row, column){
  numInARow = 1
  currentRow = row
  currentColumn = column

  if(currentRow+1 <=5 && data[currentRow+1][currentColumn] === players.currentPlayer && currentRow +1 >=0){
    numInARow++;
    checkFourinRow(numInARow);
    console.log(numInARow +  ' in a row');
    if(currentRow+2 <=5 && data[currentRow+2][currentColumn] === players.currentPlayer && currentRow +2 >=0){
      numInARow++;
      checkFourinRow(numInARow);
      console.log(numInARow + ' in a row');
      if(currentRow+3 <=5 && data[currentRow+3][currentColumn] === players.currentPlayer && currentRow +3 >=0){
        numInARow++;
        checkFourinRow(numInARow);
      };
    };
  };
}
function checkDownwardWinner(row,column){

  if(currentRow -1 >= 0 && data[currentRow -1][currentColumn] === players.currentPlayer && currentRow -1 <=5){
    numInARow++
    checkFourinRow(numInARow);
    console.log(numInARow + ' in a row');
    if(currentRow -2 >=0 && data[currentRow -2][currentColumn] === players.currentPlayer && currentRow -2<=5){
      numInARow++
      checkFourinRow(numInARow);
      console.log(numInARow + ' in a row');
      if(currentRow -3 >=0 && data[currentRow -3][currentColumn] === players.currentPlayer && currentRow -3 <=5){
        numInARow++
        checkFourinRow(numInARow);
      }
    }
  }
}

function checkDownRightDiagonal(row,column){

  if(currentRow -1 >= 0 && data[currentRow -1][currentColumn - 1] === players.currentPlayer && currentRow -1 <=5){
    numInARow++
    checkFourinRow(numInARow);
    console.log(numInARow + ' in a row');
    if(currentRow -2 >=0 && data[currentRow -2][currentColumn - 2] === players.currentPlayer && currentRow - 2 <=5){
      numInARow++
      checkFourinRow(numInARow)
      console.log(numInARow + ' in a row')
      if(currentRow -3 >=0 && data[currentRow -3][currentColumn -3] === players.currentPlayer && currentRow -3 <=5){
        numInARow++
        checkFourinRow(numInARow)
      }
    }
  }
}
function checkDownLeftDiagonal(row, column){
  numInARow = 1
  currentRow = row
  currentColumn = column
  if(currentRow - 1 >=0 && data[currentRow -1][currentColumn + 1] === players.currentPlayer && currentRow -1 <=5){
    numInARow++
    checkFourinRow(numInARow)
    console.log(numInARow + ' in a row')
    if(currentRow -2 >=0 && data[currentRow -2][currentColumn + 2] === players.currentPlayer && currentRow -2 <=5){
      numInARow++
      checkFourinRow(numInARow)
      console.log(numInARow + ' in a row')
      if(currentRow -3 >= 0 && data[currentRow -3][currentColumn +3] === players.currentPlayer && currentRow -3 <=5){
        numInARow++
        checkFourinRow(numInARow)
      }
    }
  }
}
function checkUpLeftDiagonal(row,column){
  numInARow = 1
  currentRow = row
  currentColumn = column
  if(currentRow+1 <=5 && data[currentRow+1][currentColumn +1] === players.currentPlayer && currentRow +1 >=0){
    numInARow++
    checkFourinRow(numInARow)
    console.log(numInARow + ' in a row');
    if(currentRow +2 <=5 && data[currentRow +2][currentColumn +2] === players.currentPlayer && currentRow +2 >=0){
      numInARow++
      checkFourinRow(numInARow)
      console.log(numInARow + ' in a row')
      if(currentRow +3 <=5 && data[currentRow +3] [currentColumn +3] === players.currentPlayer && currentRow +3 >=0){
        numInARow++
        checkFourinRow(numInARow)
        console.log(numInARow + ' in a row')
      }
    }
  }
}

function checkUpRightDiagonal(row, column){

  if(currentRow +1 <=5 && data[currentRow +1][currentColumn -1] === players.currentPlayer && currentRow +1>=0){
    numInARow++
    checkFourinRow(numInARow)
    console.log(numInARow + ' in a row')
    if(currentRow +2 <=5 && data[currentRow +2][currentColumn -2] === players.currentPlayer && currentRow +2 >=0){
      numInARow++
      checkFourinRow(numInARow)
      console.log(numInARow + ' in a row')
      if(currentRow +3 <=5 && data[currentRow +3][currentColumn -3] === players.currentPlayer && currentRow +3 >=0){
        numInARow++
        checkFourinRow(numInARow);
      }
    }
  }
}


function checkFourinRow(numInARow){
  if(numInARow >= 4 ){
    weHaveAWinner();
  }
}

// veritcal checker -> responsible for checking divs in 7's
// diagnoal checker -> responsible for checking divs in 6's
// a checker to place the element at the bottom-most position that is not occupied
