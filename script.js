var x = true;
var o =false;

//reset onClick
$("#reset").click(reset());

function reset(){
  $("td").removeClass("X");
  $("td").removeClass("O");
  $(".playerTurn").html("It is X's turn")
  x = true;
  o = false;
}

changeTurn();
//playerturn
function changeTurn(){
  x = !x;
  o = !o;
  debugger
}
//onclick add X or O via addClass
$("td").click(addClass());

function addClass(){
  if(x === true){
    $("td").each(function(index, td){
      $(td[index]).addClass("X");
    })
    x = false;
    o = true;
  }else if(o === true){
    $("td").each(function(index, td){
      $(td[index]).addClass("O");
    })
    o = false;
    x = true;
  }
}

//win conditions
