first_player_turn = true;	  	
disable_game = false;
DEBUG = true;

function log(text) {
  if (DEBUG) {
    console.log(text)
  }
}

function check_win(plr_text) {
  log("Checking win for "+plr_text);
  //format the 'plr_text' properly just in case
  plr_text = plr_text.toUpperCase().trim();
  //the only cell combinations possible for a win
  let winning_cells = [
    [1,2,3],
    [1,5,9],
    [1,4,7],

    [2,5,8],

    [3,5,7],
    [3,6,9],

    [3,5,6],

    [7,8,9],
  ]
  //loop through the winning cell combinations
  //if a winning combination is found then return 'true'
  for (var i = 0; i < winning_cells.length; i++)	  	   	       	  	  	       	  	
  {	  	
    let cells = winning_cells[i];  
    log("Cells: " + cells.toString()) 
    let won = false;	       	  	  	       	  	
    for(let i = 0; i < cells.length; i++) {
      let cell_num = cells[i];
      let cell_text = document.getElementById("cell" + cell_num).innerHTML;
      if (cell_text != plr_text) { 
        log("Cell " + cell_num + " has "+ cell_text );
        won = false; break;
      } 
      else {won = true;}
    }

    if (won) {return won;}
  }	 
}
	  	   	       	  	  	       	  	
function click()	  	   	       	  	  	       	  	
{	  	   	       	 
  if(disable_game){return;} 	  	       	  	
  var cell_num = this.id.charAt(this.id.length - 1);	  	   	       	  	  	       	  	
  if (this.innerHTML == "X" || this.innerHTML == "O") {	  	   	       	  	  	       	  	
    return;	  	   	       	  	  	       	  	
  }	  	   	       	  	  	       	  	
	  	   	       	  	  	       	  	
  if(first_player_turn) {	  	   	       	  	  	       	  	
    this.innerHTML = "X";	  
    if (check_win("X")) {
      document.getElementById("turn-status-text").innerText = "Player 1 has won!";
      disable_game = true;
    } else {
      document.getElementById("turn-status-text").innerText = "Player 2's turn";   	       	  	  	       	  	
    }
  } else {	  	   	       	  	  	       	  	
    this.innerHTML = "O";
    if (check_win("O")) {
      document.getElementById("turn-status-text").innerText = "Player 2 has won!";
      disable_game = true;
    } else {
      document.getElementById("turn-status-text").innerText = "Player 1's turn";   	       	  	  	       	  	
    }	  	  	       	  	
  }	  	   	       	  	  	       	  	
	  	   	       	  	  	       	  	
  first_player_turn = !first_player_turn;	  	   	       	  	  	       	  	
}	  	   	       	  	  	       	  	
	  	   	       	  	  	       	  	
	  	   	       	  	  	       	  	
for (var i = 1; i < 10; i++)	  	   	       	  	  	       	  	
{	  	   	       	  	  	       	  	
  document.getElementById("cell" + i).onclick = click;	  	   	       	  	  	       	  	
}	  	   	       	  	  	       	  	
	  	   	       	  	  	       	  	
