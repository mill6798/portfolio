/*
Nick Miller
Date Made:12/24/19
Last Updated:12/27/2019
*/
function rollDice() {
	return Math.floor(Math.random() * 6) + 1;
}

function start(){
	var bet = Number(document.forms["luckySevens"]["amount"].value);
	
	var money = bet;
	var firstDie;
	var secondDie;
	var diceSum;
	var maxWon = 0;
	var rolls = 0;
	var rollsMax = 0;

	if(money<=0){

		alert("The starting bet must exceed $0, redo the bet if you would like to play");
	}
	else{
		while(money > 0){

			firstDie = rollDice();
			secondDie = rollDice();
			diceSum = firstDie + secondDie;
			rolls++;

		if(diceSum != 7){
				money--;
				console.log("lost");
			}

			else{
				money += 4;

				if(money > maxWon){
					maxWon += (money-maxWon);
					rollsMax = rolls;
				}
				console.log("win");
			}

		}
	}
	document.getElementById("endBet").style.display = "block";
	document.getElementById("subButton").innerText = "Play Again!";
	document.getElementById("initiate").innerText = bet;
	document.getElementById("numRolls").innerText = rolls;
	document.getElementById("max").innerText = maxWon;
	document.getElementById("rollsMax").innerText = rollsMax;
	return false;
}
