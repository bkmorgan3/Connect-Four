// console.log('bk');
// object displaying the players in the game.
var players = {
  player1: 'red',
  player2: 'black'
}
// select each group of colums
var $col1 = $('.col-1');
var $col2 = $('.col-2');
var $col3 = $('.col-3');
var $col4 = $('.col-4');
var $col5 = $('.col-5');
var $col6 = $('.col-6');
var $col7 = $('.col-7');

// array of all columns as jQuery selected items
var columns = [
  $col1, $col2, $col3, $col4, $col5, $col6, $col7
];
// console.log(columns[0])
for(var i = 0; i < columns.length; i++){
  var firstDrop = columns[i][5];
  var secondDrop = columns[i][4];
  var thirdDrop = columns[i][3];
  var fourthDrop = columns[i][2];
  var fifthDrop = columns[i][1];
  var sixthDrop = columns[i][0];

  console.log(sixthDrop)
// console.log( 'column: ', columns[i][5])
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

const data = [
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, "r", 0, 0]
];




function handleClick(){
  // get row data
  // data[data.length -1][data-row];
  // check array
  // fill in lowest column that isnt filled
  //console.log($(this).parent().parent().children().last().css('background-color', 'purple'));
  $(this).addClass('filled');
  console.log($(this))
  // prevent grid from being played if there is not a checker at the bottom, or under current position
// if($(!this).hasClass('first')){
//


// loop throug the array of the clicked column to get the last available element that hasnt
// been clicked
// }

  //sets color of checker to be played according to current player
  if (players.currentPlayer == players.player1) {
    $(this).css('backgroundColor', players.player1);
    console.log('first');
  }

  if (players.currentPlayer == players.player2) {
    $(this).css('backgroundColor', players.player2);
    $(this).addClass('filled')
    console.log('second')
  }
  // function to call the next player
  nextPlayer();
}



function resetGame(){
  $checker. css('backgroundColor', 'white');
}

var $reset = $('#reset');
$reset.click(resetGame);



// veritcal checker -> responsible for checking divs in 7's
// diagnoal checker -> responsible for checking divs in 6's
// horizontal checker -> responsible for checking div next to current div (or by 1)
// a checker to place the element at the bottom-most position that is not occupied
