var x = true;
var o =false;
var valid = false;

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
  if($("td").hasClass("")){
    valid = true;
  }else{
    valid = false;
  }
}

//onclick add X or O via addClass
$("td").click(addMove);

function addMove(){
  if(x === true){
    getValid(this);
    debugger
    if(valid){
      $(this).removeClass("clear").addClass("X");
      $(this).html("X");
      $(".playerTurn").html("It is O's turn");
      console.log("X finished turn");
      changeTurn();
    }else{
      alert("Invalid move, please try again.")
    }
  }else if(o === true){
    getValid(this);
    debugger
    if(valid){
      $(this).removeClass("clear").addClass("O");
      $(this).html("O");
      $(".playerTurn").html("It is X's turn");
      console.log("O finished turn");
      changeTurn();
    }else{
      alert("Invalid move, please try again.")
    }
  }
}

//win conditions
