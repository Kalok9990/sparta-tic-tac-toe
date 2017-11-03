$(function(){
  var $boxes = $("td");
  var $turnText = $(".playerTurn")
  var counter = 1;
  var winCounter = 0;
  var OMoves = [];
  var XMoves = [];

  var $winningCombinations = $([[0,1,2],[3,4,5],[6,7,8],
  [0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]);

  function start(){
    addXandOListener();
    addResetListener();
  }

  function addXandOListener(){
    $boxes.click(addXorO)
  }

  function addXorO(){
    var $box = $(this);
    // If the box has nothing then lets go on to add an X or O
    if ($box.html().length === 0){
      // If counter is even add an O
      if (counter % 2 === 0) {
        // Push the move into the OMoves array
        OMoves.push(parseInt($box.attr("data-num")));
        // Set the value and class of the element clicked
        $box.html("O").attr("class","O");
        // Set the text of the turn element
        $turnText.html("It is X's turn");
        // increment the counter so the turn alternate
        counter++;
        // After each click check for a win condition
        checkForWin(OMoves, "O");
      }
      else {
        XMoves.push(parseInt($box.attr("data-num")));
        $box.html("X").attr("class","X");
        $turnText.innerHTML = "It is O's turn";
        counter++;
        checkForWin(XMoves, "X");
      }

    // If the counter is equal to 10 it means the board is full
    if (counter >= 10){
      $turnText.html("Game Over!");
      var conf = confirm("It's a draw, do you want to play again?");
      if(conf){
        resetBoard();
      }
    }
   }
  }

  // Add reset button listener to call the rest board function
  function addResetListener(){
    $("#reset").click(resetBoard);
  }

  // Lets check to see if there is a winning combination in out moves array
  function checkForWin(movesArray, name){
    $winningCombinations.each(function(index, combination){
      // win counter
      winCounter = 0;
      $(combination).each(function(index, winningBox){
        // If moves array contains winning box add 1 to winCounter
        if(movesArray.indexOf(winningBox) !== -1){
          // Add one
          winCounter++;
        }
        // If counter gets to we have a winning combination
        if(winCounter === 3){
          alert("Game over, " + name + " wins!");
          resetBoard();
        }
      })
    })
  }

  // Reset our board to its original state
  function resetBoard(){
    $boxes.html("").attr("class", "clear")
    $turnText.html("It is X's turn");
    OMoves = [];
    XMoves = [];
    winCounter = 0;
    counter = 1;
  }

  start();
})
