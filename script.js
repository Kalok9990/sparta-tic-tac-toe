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
  if(($("td").html().length)>0){
    valid = false;
  }else{
    valid = true;
  }
}

//onclick add X or O via addClass
$("td").click(addMove);

function addMove(){
  if(x === true){
    debugger
    getValid(this);
    if(valid){
      $(this).addClass("X");
      $(this).html("X");
      $(".playerTurn").html("It is O's turn");
      xchosen.push($(this));
      console.log("X finished turn");
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
      console.log("O finished turn");
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

function winningCheck(){
  var winCombo = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]
      $(winCombo).each(function(index, value){
        if (jQuery.inArray(value[0],xchosen) !==-1){
          if (jQuery.inArray(value[1],xchosen) !==-1){
            if (jQuery.inArray(value[2],xchosen) !==-1){
              alert('PLayer X has won!')
            }
          }
        }else if(jQuery.inArray(value[0], ochosen)!==-1){
          if (jQuery.inArray(value[1], ochosen)!==-1){
            if (jQuery.inArray(value[2], ochosen)!==-1){
              alert('Player O has won!')
            }
          }
        }
      })
    }
