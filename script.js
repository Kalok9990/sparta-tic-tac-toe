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
  xchosen = [];
  ochosen = [];
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
      placePatt(this, "X", "O", xchosen);
    }else{
      alert("Invalid move, please try again.");
    }
  }else if(o === true){
    getValid(this);
    if(valid){
      placePatt(this, "O", "X", ochosen);
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
  $(winCombo).each(function(index, value){
    if(jQuery.inArray(value[0],chosen) !== -1){
      if(jQuery.inArray(value[1],chosen) !== -1){
        if(jQuery.inArray(value[2],chosen) !== -1){
          alert(player + " has won!");
          reset();
        }
      }
    }
  })
}

function placePatt(td, pattern1, pattern2, array){
  debugger
  $(td).addClass(pattern1);
  $(td).html(pattern1);
  $(".playerTurn").html("It is "+pattern2+"'s turn");
  array.push(parseFloat($(td).attr("data-num")));
  changeTurn();
  winningCheck(array, pattern1);
}
