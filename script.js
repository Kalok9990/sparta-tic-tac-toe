var x = true;
var o =false;

//reset onClick
$("#reset").click(reset());

function reset(){
  $("td").addClass("clear");
  $(".playerTurn").html("It is X's turn")
  x = true;
  o = false;
}

//playerturn
function changeTurn(){
  x = !x;
  o = !o;
}

//onclick add X or O via addClass
$("td").click(addClass);

function addClass(){
  if(x === true){
    $("td").each(function(index, td){
      $(this).removeClass("clear").addClass("X");
      $(this).html("X");
      $(".playerTurn").html("It is O's turn");
    })
    console.log("X finished turn");
    changeTurn();
  }else if(o === true){
    $("td").each(function(index, td){
      $(this).removeClass("clear").addClass("O");
      $(this).html("O");
      $(".playerTurn").html("It is X's turn");
    })
    console.log("O finished turn");
    changeTurn();
  }
}

//win conditions
