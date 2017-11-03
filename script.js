var x = true;
var o =false;
var valid = false;
var xchosen = [];
var ochosen = [];

//reset onClick
$("#reset").click(reset);

function reset(){
  $("td").removeClass("X").removeClass("O");
  $("td").html("");
  $(".playerTurn").html("It is X's turn")
  x = true;
  o = false;
}

//playerturn
function changeTurn(){
  x = !x;
  o = !o;
}

//check validation
function getValid(td){
  if(($(td).html().length)>0){
    valid = false;
  }else{
    valid = true;
  }
}

//onclick add X or O via addClass
$("td").click(addMove);

function addMove(){
  if(x === true){
    getValid(this);
    if(valid){
      $(this).addClass("X");
      $(this).html("X");
      $(".playerTurn").html("It is O's turn");
      xchosen.push(parseFloat($(this).attr("data-num")));
      debugger
      console.log("X finished turn");
      winningCheck(xchosen, "X");
      changeTurn();
    }else{
      alert("Invalid move, please try again.")
    }
  }else if(o === true){
    getValid(this);
    debugger
    if(valid){
      $(this).addClass("O");
      $(this).html("O");
      $(".playerTurn").html("It is X's turn");
      ochosen.push(parseFloat($(this).attr("data-num")));
      console.log("O finished turn");
      winningCheck(ochosen, "O");
      changeTurn();
    }else{
      alert("Invalid move, please try again.")
    }
  }
  checkDraw();
}

//draw conditions
function checkDraw(){
  if (!$("td").hasClass("")){
    draw = prompt("It's a draw. Would you like to play again? (y or n)");
    if(draw === "y"){
      reset();
    }
  }
}

function winningCheck(chosen, player){
  var winCombo = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
  debugger
  $(winCombo).each(function(index, value){
    if(jQuery.inArray(value[0],chosen) !== -1){
      if(jQuery.inArray(value[1],chosen) !== -1){
        if(jQuery.inArray(value[2],chosen) !== -1){
          alert(player + " has won!");
        }
      }
    }
  })
}
