    var column = new Array(8);
	var emergencyStop = 0;
	var currentPlayer; 
	var currentColor; 
	var gameField = new Array(8);
	var win = false; 
	var computerTime = 1000; 
	var parameterComputerHor = new Array(3);
	var parameterComputerVer = new Array(3);
	var parameterComputerDiaNr1 = new Array(3);
	var parameterComputerDiaNr2 = new Array(3);
	var parameterComputerWin = new Array(3);
	
	function main(){
	$("#body").hide();
	$("#body").css("visibility","visible");
	$("#body").fadeIn(2000);
		start(); //here we call the function start, which gives us the starting player and makes sure that everything is ready
		
		//in the following lines we give each button an Actionlistener, that will paint the hole with the
		//currentColor 
		//the array column[n] represents the column n and has saved the number of tokens in column n 	
		$("#button1").on("click", function(){ 
			switch(column[1]){
				case 0: $("#hole36").css("background-color",currentColor);
				        gameField[1][6]=currentPlayer;
						break; 
				case 1: $("#hole29").css("background-color",currentColor);
						gameField[1][5]=currentPlayer;
						break;
				case 2: $("#hole22").css("background-color",currentColor);
						gameField[1][4]=currentPlayer;
						break;
				case 3: $("#hole15").css("background-color",currentColor);
						gameField[1][3]=currentPlayer;
						break;
				case 4: $("#hole8").css("background-color",currentColor);
						gameField[1][2]=currentPlayer;
						break;
				case 5: $("#hole1").css("background-color",currentColor);
						gameField[1][1]=currentPlayer;
				        $("#button1").css({"visibility":"hidden"});
						break;
				default:console.log("Error with column variable"); 
						break; 
			}
			column[1]++;
			searchForWinner(); 
			getCurrentPlayerAndColor();
		});
		
		$("#button2").on("click", function(){
			switch(column[2]){
				case 0: $("#hole37").css("background-color",currentColor);
						gameField[2][6]=currentPlayer;
						break; 
				case 1: $("#hole30").css("background-color",currentColor);
						gameField[2][5]=currentPlayer;
						break;
				case 2: $("#hole23").css("background-color",currentColor);
						gameField[2][4]=currentPlayer;
						break;
				case 3: $("#hole16").css("background-color",currentColor);
						gameField[2][3]=currentPlayer;
						break;
				case 4: $("#hole9").css("background-color",currentColor);
						gameField[2][2]=currentPlayer;
						break;
				case 5: $("#hole2").css("background-color",currentColor);
				        $("#button2").css({"visibility":"hidden"});
						gameField[2][1]=currentPlayer;
						break;
				default:console.log("Error with column variable"); 
						break; 
			}
			column[2]++;
			searchForWinner();
			getCurrentPlayerAndColor();
		});
		
		$("#button3").on("click", function(){
			switch(column[3]){
				case 0: $("#hole38").css("background-color",currentColor);
						gameField[3][6]=currentPlayer;
						break; 
				case 1: $("#hole31").css("background-color",currentColor);
						gameField[3][5]=currentPlayer;
						break;
				case 2: $("#hole24").css("background-color",currentColor);
						gameField[3][4]=currentPlayer;
						break;
				case 3: $("#hole17").css("background-color",currentColor);
						gameField[3][3]=currentPlayer;
						break;
				case 4: $("#hole10").css("background-color",currentColor);
						gameField[3][2]=currentPlayer;
						break;
				case 5: $("#hole3").css("background-color",currentColor);
				        $("#button3").css({"visibility":"hidden"});
						gameField[3][1]=currentPlayer;
						break;
				default:console.log("Error with column variable"); 
						break; 
			}
			column[3]++;
			searchForWinner();
			getCurrentPlayerAndColor();
		});
		
		$("#button4").on("click", function(){
			switch(column[4]){
				case 0: $("#hole39").css("background-color",currentColor);
						gameField[4][6]=currentPlayer;
						break; 
				case 1: $("#hole32").css("background-color",currentColor);
						gameField[4][5]=currentPlayer;
						break;
				case 2: $("#hole25").css("background-color",currentColor);
						gameField[4][4]=currentPlayer;
						break;
				case 3: $("#hole18").css("background-color",currentColor);
						gameField[4][3]=currentPlayer;
						break;
				case 4: $("#hole11").css("background-color",currentColor);
						gameField[4][2]=currentPlayer;
						break;
				case 5: $("#hole4").css("background-color",currentColor);
						gameField[4][1]=currentPlayer;
				        $("#button4").css({"visibility":"hidden"});
						break;
				default:console.log("Error with column variable"); 
						break; 
			}
			column[4]++;
			searchForWinner();
			getCurrentPlayerAndColor();
		});
		
		$("#button5").on("click", function(){
			switch(column[5]){
				case 0: $("#hole40").css("background-color",currentColor);
						gameField[5][6]=currentPlayer;
						break; 
				case 1: $("#hole33").css("background-color",currentColor);
						gameField[5][5]=currentPlayer;
						break;
				case 2: $("#hole26").css("background-color",currentColor);
						gameField[5][4]=currentPlayer;
						break;
				case 3: $("#hole19").css("background-color",currentColor);
						gameField[5][3]=currentPlayer;
						break;
				case 4: $("#hole12").css("background-color",currentColor);
						gameField[5][2]=currentPlayer;
						break;
				case 5: $("#hole5").css("background-color",currentColor);
						gameField[5][1]=currentPlayer;
						$("#button5").css({"visibility":"hidden"});
						break;
				default:console.log("Error with column variable"); 
						break; 
			}
			column[5]++;
			searchForWinner();
			getCurrentPlayerAndColor();
		});
		
		$("#button6").on("click", function(){
			switch(column[6]){
				case 0: $("#hole41").css("background-color",currentColor);
						gameField[6][6]=currentPlayer;
						break; 
				case 1: $("#hole34").css("background-color",currentColor);
						gameField[6][5]=currentPlayer;
						break;
				case 2: $("#hole27").css("background-color",currentColor);
						gameField[6][4]=currentPlayer;
						break;
				case 3: $("#hole20").css("background-color",currentColor);
						gameField[6][3]=currentPlayer;
						break;
				case 4: $("#hole13").css("background-color",currentColor);
						gameField[6][2]=currentPlayer;
						break;
				case 5: $("#hole6").css("background-color",currentColor);
						gameField[6][1]=currentPlayer;
						$("#button6").css({"visibility":"hidden"});
						break;
				default:console.log("Error with column variable"); 
						break; 
			}
			column[6]++;
			searchForWinner();
			getCurrentPlayerAndColor();
		});
		
			$("#button7").on("click", function(){
			switch(column[7]){
				case 0: $("#hole42").css("background-color",currentColor);
						gameField[7][6]=currentPlayer;
						break; 
				case 1: $("#hole35").css("background-color",currentColor);
						gameField[7][5]=currentPlayer;
						break;
				case 2: $("#hole28").css("background-color",currentColor);
						gameField[7][4]=currentPlayer;
						break;
				case 3: $("#hole21").css("background-color",currentColor);
						gameField[7][3]=currentPlayer;
						break;
				case 4: $("#hole14").css("background-color",currentColor);
						gameField[7][2]=currentPlayer;
						break;
				case 5: $("#hole7").css("background-color",currentColor);
						gameField[7][1]=currentPlayer;
						$("#button7").css({"visibility":"hidden"});
						break;
				default:console.log("Error with column variable"); 
						break; 
			}
			column[7]++;
			searchForWinner();
			getCurrentPlayerAndColor();
		});
	}

	function start(){
		//this loop says that in every column there are 0 tokens at the beginning
		for(var i = 0; i<column.length; i++){
				column[i]=0; 
		} 
		
	//here we create the gamefield as a 2 dimensional array where e.g. gamefield[2][4] represents the forth field from the bottom of the 2nd column from the left
	//Later on we use this to give this field the value "Computer" or "User" depending on the game token that is inserted in this field. 
		for(var i = 0; i<column.length; i++){
				gameField[i]=new Array(7); 
		}
		
		//here we give each part of parameterComputerHor the value 0 such that we can pass it on later even if we haven't reached the part yet where we gave it values
		for(var i = 0; i<parameterComputerHor.length; i++){
				parameterComputerHor[i]=0; 
		}
		
		
		//here we decide through random, if the user or the Computer will start the game
		var random = Math.round(Math.random());
		if(random==0){
			currentPlayer = "User";
			currentColor = "yellow"; 
			$("#notificationField").text("Du darfst anfangen.")
		}
		else{
			currentPlayer = "Computer";
			currentColor = "red"; 
			setTimeout(computerFirstMove, computerTime);
			$("#notificationField").text("Der Computer darf anfangen.")
		}
	}
	
	function getCurrentPlayerAndColor(){
		if(win==false){
			if(currentPlayer == "User"){
				currentColor = "red"; 
				currentPlayer = "Computer"
				$("#notificationField").text("It's the Computer's turn.")
				$("#button1").prop('disabled','true'); 
				$("#button2").prop('disabled','true'); 
				$("#button3").prop('disabled','true'); 
				$("#button4").prop('disabled','true'); 
				$("#button5").prop('disabled','true'); 
				$("#button6").prop('disabled','true'); 
				$("#button7").prop('disabled','true'); 
				setTimeout(computerMove, computerTime)
			}
			else{
				currentColor = "yellow";
				currentPlayer ="User"; 
				$("#notificationField").text("It's your turn.")
			}
		}
	}
	
	function searchForWinner(){
		checkWinner("Computer");
		checkWinner("User");
	}
	
	function checkWinner(Player){
				
//First we check for a horizontal 4 in a row
		
		for(var i = 1; i<gameField.length; i++){
			for(var j = 1; j<gameField[0].length; j++){
				if(i<= 4 && gameField[i][j]==Player&& gameField[i+1][j]==Player && gameField[i+2][j] == Player && gameField[i+3][j] == Player){
					sbHasWon(Player);
				}
			}
		}
		
		//here we search for a vertical 4 in a row
		
		for(var i = 1; i<gameField.length; i++){
			for(var j = 1; j<gameField[0].length; j++){
				if(j>= 4 && gameField[i][j]==Player&& gameField[i][j-1]==Player && gameField[i][j-2] == Player && gameField[i][j-3] == Player){
					sbHasWon(Player);
				}
			}
		}

		//here we search for a diagonal going north east 4 in a row
		
		for(var i = 1; i<gameField.length; i++){
			for(var j = 1; j<gameField[0].length; j++){
				if(j>= 4 && i<=4 && gameField[i][j]==Player&& gameField[i+1][j-1]==Player && gameField[i+2][j-2] == Player && gameField[i+3][j-3] == Player){
					sbHasWon(Player);
				}
			}
		}
		
		//here we search for a diagonal going north west 4 in a row
		
		for(var i = 1; i<gameField.length; i++){
			for(var j = 1; j<gameField[0].length; j++){
				if(j<=3 && i<=4 && gameField[i][j]==Player&& gameField[i+1][j+1]==Player && gameField[i+2][j+2] == Player && gameField[i+3][j+3] == Player){
					sbHasWon(Player);
				}
			}
		}
		
		//Here we check if nobody has won if all gameFields are taken
		Outside: 
			if(win==false){
				for(var i = 1; i<gameField.length; i++){
					for(var j = 1; j<gameField[0].length; j++){
						if(typeof(gameField[i][j])=="undefined"){
							break Outside;
						}
						else if(i==7&&j==6){
							console.log(gameField[1][1]);
							sbHasWon("Nobody");
						}
					}
				}
			}
	}
	
	function sbHasWon(Winner){
		win = true; 
	    $("#button1").css({"visibility":"hidden"});
        $("#button2").css({"visibility":"hidden"});
		$("#button3").css({"visibility":"hidden"});
		$("#button4").css({"visibility":"hidden"});
		$("#button5").css({"visibility":"hidden"});
		$("#button6").css({"visibility":"hidden"});
		$("#button7").css({"visibility":"hidden"});
		$("#notificationField").css("font-size",80);
		$("#notificationField").text(Winner + " has won!");	
		restart();
	}
	
	function computerMove(){
		var random = Math.round(Math.random());
		var blockHor = blockHorizontal();
		console.log("Hor:"+blockHor[0]);
		var blockVer = blockVertical();
		console.log("Ver:"+blockVer[0]);
		var blockDiaNr1 = blockDiagonalNr1();
		console.log("Dia1:"+blockDiaNr1[0]);
		var blockDiaNr2 = blockDiagonalNr2();
		console.log("Dia2:"+blockDiaNr2[0]);
		var computerWin = computerSmartMove();
		console.log("Winning:"+computerWin[0]);
		
		if(computerWin[0]==2){
			markComputerMove(computerWin[1], computerWin[2]);
			getCurrentPlayerAndColor();
			console.log("Won");
		}
		
		else if(blockHor[0]==2){					
			markComputerMove(blockHor[1], blockHor[2]); 
			getCurrentPlayerAndColor(); 
			console.log("winning hor");
		}
		
		else if(blockVer[0]==2){
			markComputerMove(blockVer[1], blockVer[2]); 
			getCurrentPlayerAndColor();  
			console.log("winning ver");
		}
		
		else if(blockDiaNr1[0]==2){
			markComputerMove(blockDiaNr1[1], blockDiaNr1[2]); 
			getCurrentPlayerAndColor();  
			console.log("winning diaNr.1");
		}
		
		else if(blockDiaNr2[0]==2){
			markComputerMove(blockDiaNr2[1], blockDiaNr2[2]); 
			getCurrentPlayerAndColor();  
			console.log("winning diaNr.2");
		}

		else if(computerWin[0]==1){
			markComputerMove(computerWin[1], computerWin[2]);
			getCurrentPlayerAndColor();
			console.log("Almost winning");	
		}
		
		else if(blockHor[0]==1){
			markComputerMove(blockHor[1], blockHor[2]); 
			getCurrentPlayerAndColor(); 
			console.log("Almost winning next round Hor");
		}

		else if(blockDiaNr1[0]==1){
			markComputerMove(blockDiaNr1[1], blockDiaNr1[2]); 
			getCurrentPlayerAndColor();  
			console.log("Almost winning next round DiaNr1");
		}
		
		else if(blockDiaNr2[0]==1){
			markComputerMove(blockDiaNr2[1], blockDiaNr2[2]); 
			getCurrentPlayerAndColor();  
			console.log("Almost winning next round DiaNr1");
		}
		
				
		else{
				computerRandomMove();
		}
		$("#button1").prop('disabled',null); 
		$("#button2").prop('disabled',null); 
		$("#button3").prop('disabled',null); 
		$("#button4").prop('disabled',null); 
		$("#button5").prop('disabled',null); 
		$("#button6").prop('disabled',null); 
		$("#button7").prop('disabled',null); 
		searchForWinner();
	    
	}
   
    //Now we have 4 functions for the Computer to determine where he has to block
	//for each one of those the following conventions are to be respected :
    //
	//		for the following methods we have a picture for each scenario
	// 		a X is for a token of the User
	// 		a O is for a token of the User
	// 		a ? means that there has to be a token here (below the token above) or there is ground
	// 		a _ is an empty space
	// 		Furthermore we keep the system that we return a 2 for an immediate threat in which the user can win with the next move
	// 		and 1 for an threat which means the user can make the next move in such a manner that he then wins definetly with the move after that
	//		and 0 is for no threat
	//		We also return the j and i value where the Computer should set its token since we need them later for the method markComputerMove
	
	
    function blockHorizontal(){
		
		//here we initial parameterComputerHor
		
		parameterComputerHor[0]=0;
		parameterComputerHor[1]=0;
		parameterComputerHor[2]=0;
		
		for(var i = 1; i<gameField.length; i++){
			for(var j = 1; j<gameField[0].length; j++){
				if(gameField[i][j]=="User"){
				//here we block a diagonal with 
				//_ X X X
				//?
					if(i>=2 && i<=5 && typeof(gameField[i-1][j])=="undefined" && (typeof(gameField[i-1][j+1])!="undefined" || j == 6) && gameField[i+1][j]=="User" && gameField[i+2][j]=="User"){
						parameterComputerHor[0]=2;
						parameterComputerHor[1]=i-1; 
						parameterComputerHor[2]=j;
						return parameterComputerHor;
					}
				
				//here we block a diagonal with 
				//X X X _
				//      ?
					if(i<=4 && gameField[i+1][j]=="User" && gameField[i+2][j]=="User" && typeof(gameField[i+3][j])=="undefined" && (typeof(gameField[i+3][j+1])!="undefined" || j == 6)){
						parameterComputerHor[0]=2;
						parameterComputerHor[1]=i+3; 
						parameterComputerHor[2]=j;
						return parameterComputerHor;
					}
				
				//here we block a diagonal with 
				//X _ X X
				//  ?
					if(i<=4 && typeof(gameField[i+1][j])=="undefined" && (typeof(gameField[i+1][j+1])!="undefined" || j == 6) && gameField[i+2][j]=="User" && gameField[i+3][j]=="User"){
						parameterComputerHor[0]=2;
						parameterComputerHor[1]=i+1; 
						parameterComputerHor[2]=j;
						return parameterComputerHor;
					}
				
				//here we block a diagonal with 
				//X X _ X
				//    ?
					if(i<=4 && gameField[i+1][j]=="User" && typeof(gameField[i+2][j])=="undefined" && (typeof(gameField[i+2][j+1])!="undefined" || j == 6) && gameField[i+3][j]=="User"){
						parameterComputerHor[0]=2;
						parameterComputerHor[1]=i+2; 
						parameterComputerHor[2]=j;
						return parameterComputerHor;
					}
					
				//here we block a diagonal with 
				//_ X _ X _
 				//?   ?   ?
					if(i>=2 && i<=4 && typeof(gameField[i-1][j]) == "undefined" && typeof(gameField[i+1][j]) == "undefined" && gameField[i+2][j]=="User" && typeof(gameField[i+3][j]) == "undefined" && ((typeof(gameField[i-1][j+1])!="undefined" && typeof(gameField[i+1][j+1])!="undefined" && typeof(gameField[i+3][j+1])!="undefined")|| j==6)){
						parameterComputerHor[0]=1;
						parameterComputerHor[1]=i+1; 
						parameterComputerHor[2]=j;
					}
				
				//here we block a diagonal with 
				//_ _ X X _
 				//? ?      ?
					if(i>=3 && i<=5 && typeof(gameField[i-2][j]) == "undefined" && typeof(gameField[i-1][j]) == "undefined" && gameField[i+1][j]=="User" && typeof(gameField[i+2][j]) == "undefined" && ((typeof(gameField[i-2][j+1])!="undefined" && typeof(gameField[i-1][j+1])!="undefined" && typeof(gameField[i+2][j+1])!="undefined")|| j==6)){
						parameterComputerHor[0]=1;
						parameterComputerHor[1]=i-1; 
						parameterComputerHor[2]=j;
					}
				
				//here we block a diagonal with 
				//_ X X _ _
 				//?     ? ?
					if(i>=2 && i<=4 && typeof(gameField[i-1][j]) == "undefined" && gameField[i+1][j]=="User" && typeof(gameField[i+2][j]) == "undefined" && typeof(gameField[i+3][j]) == "undefined" && ((typeof(gameField[i-1][j+1])!="undefined" && typeof(gameField[i+2][j+1])!="undefined" && typeof(gameField[i+3][j+1])!="undefined")|| j==6)){
						parameterComputerHor[0]=1;
						parameterComputerHor[1]=i+2; 
						parameterComputerHor[2]=j;
					}

				//here we block a diagonal with 
				//_ _ _ X X _
 				//? ? ?     ?
					if(i>=4 && i<=5 && typeof(gameField[i-3][j])=="undefined" &&typeof(gameField[i-2][j]) == "undefined" && typeof(gameField[i-1][j]) == "undefined" && gameField[i+1][j]=="User" && typeof(gameField[i+2][j]) == "undefined" && ((typeof(gameField[i-3][j+1])!="undefined" && typeof(gameField[i-2][j+1])!="undefined" && typeof(gameField[i-1][j+1])!="undefined" && typeof(gameField[i+2][j+1])!="undefined")|| j==6)){
						parameterComputerHor[0]=1;
						parameterComputerHor[1]=i-1; 
						parameterComputerHor[2]=j;
					}
				}	
			}
		}
		return parameterComputerHor;
	}
	
	function blockVertical(){
		
		//here we initial parameterComputerVer 
		
		parameterComputerVer[0]=0;
		parameterComputerVer[1]=0;
		parameterComputerVer[2]=0;
				
		
		for(var i = 1; i<gameField.length; i++){
			for(var j = gameField[0].length; j>0; j--){
				if(gameField[i][j]=="User"){
                    //here we block a vertical with
					//_
					//X
					//X
					//X
					if(j>=4 && gameField[i][j-1]=="User"&&gameField[i][j-2]=="User"&&typeof(gameField[i][j-3])=="undefined"){
						parameterComputerVer[0]=2;
						parameterComputerVer[1]=i; 
						parameterComputerVer[2]=j-3;
						return parameterComputerVer;
					}		
				}
			}	
		}
		return parameterComputerVer;
	}
	
	function blockDiagonalNr1(){
		//Diagonal Nr1 is diagonal north east or south west 
		//here we initial parameterComputerDiaNr1
		
		parameterComputerDiaNr1[0]=0;
		parameterComputerDiaNr1[1]=0;
		parameterComputerDiaNr1[2]=0;
		
		
		for(var i = 1; i<gameField.length; i++){
			for(var j = 1; j<gameField[0].length; j++){
				if(gameField[i][j]=="User"){ 
					// here we block a diagonal with 
					//      _
					//    X ?
					//  X
					//X
					if(i<5 && j>3 && gameField[i+1][j-1]=="User"&&gameField[i+2][j-2]=="User"&&typeof(gameField[i+3][j-3])=="undefined"&&typeof(gameField[i+3][j-2])!="undefined"){
						parameterComputerDiaNr1[0]=2;
						parameterComputerDiaNr1[1]=i+3; 
						parameterComputerDiaNr1[2]=j-3;
						return parameterComputerDiaNr1;
					}
					
					// here we block a diagonal with 
					//      X
					//    X
					//  X
					//_
					//?
					if(i>=2 && i<=5 && j<=5 && j>=3 && (typeof(gameField[i-1][j+2])!="undefined" || j==5) && typeof(gameField[i-1][j+1])=="undefined" && gameField[i+1][j-1]=="User" && gameField[i+2][j-2]=="User"){
						parameterComputerDiaNr1[0]=2;
						parameterComputerDiaNr1[1]=i-1; 
						parameterComputerDiaNr1[2]=j+1;
						return parameterComputerDiaNr1;
					}
					
					// here we block a diagonal with 
					//      X
					//    _
					//  X ?
 					//X
					else if(i<=4 && j>=4 && gameField[i+1][j-1]=="User"&&typeof(gameField[i+2][j-2])=="undefined"&&typeof(gameField[i+2][j-1])!="undefined" &&gameField[i+3][j-3]=="User"){
						parameterComputerDiaNr1[0] = 2; 
						parameterComputerDiaNr1[1] = i+2;
						parameterComputerDiaNr1[2] = j-2;
						return parameterComputerDiaNr1; 
					}
					
					//here we block a diagonal with 
					//      X
					//    X
					//  _
					//X ?
					else if(i<=4 && j>=4 && typeof(gameField[i+1][j-1])=="undefined"&&typeof(gameField[i+1][j])!="undefined"&&gameField[i+2][j-2]=="User"&& gameField[i+3][j-3]=="User"){
						parameterComputerDiaNr1[0] = 2; 
						parameterComputerDiaNr1[1] = i+1; 
						parameterComputerDiaNr1[2] = j-1;
						return parameterComputerDiaNr1; 
					}
					
					//here we prevent a diagonal with 
					//        _
					//      X ?
					//    _
					//  X ?
					//_
					//?
					else if(i>=2 && i<=4 && j<=5 && j>=4 && typeof(gameField[i-1][j+1]) == "undefined" && (typeof(gameField[i-1][j+2]) !="undefined" || j==5) && typeof(gameField[i+1][j-1])=="undefined" && (typeof(gameField[i+1][j])!="undefined" )&& gameField[i+2][j-2] == "User" && typeof(gameField[i+3][j-3])=="undefined" && typeof(gameField[i+3][j-2])!="undefined"){
						parameterComputerDiaNr1[0] = 1; 
						parameterComputerDiaNr1[1] = i+1; 
						parameterComputerDiaNr1[2] = j-1;
					}
					
					//here we prevent a diagonal with 
					//        _
					//      _ ?
 					//    X ?
 					//  X
					//_				
					//?
					else if(i>=2 && i<=4 && j>=4 && j<=5 && typeof(gameField[i-1][j+1]) == "undefined" && (typeof(gameField[i-1][j+2])!= "undefined" || j == 5) && gameField[i+1][j-1]=="User" && typeof(gameField[i+2][j-2])=="undefined" && typeof(gameField[i+2][j-1])!="undefined" && typeof(gameField[i+3][j-3])=="undefined" && typeof(gameField[i+3][j-2])!="undefined"){
						parameterComputerDiaNr1[0] = 1 
						parameterComputerDiaNr1[1] = i+2; 
						parameterComputerDiaNr1[2] = j-2;					
					}
					
					//here we prevent a diagonal with 
					//        _
					//      X ?
					//    X 
					//  _					
					//_ ?
					//?
					else if(i>=3 && i<=5 && j>=3 && j<=4 && typeof(gameField[i-2][j+2])=="undefined" && (typeof(gameField[i-2][j+3])!="undefined" || j == 4) && typeof(gameField[i-1][j+1])=="undefined" && typeof(gameField[i-1][j+2])!="undefined" && gameField[i+1][j-1]=="User" && typeof(gameField[i+2][j-2])=="undefined" && typeof(gameField[i+2][j-1])!="undefined"){
						parameterComputerDiaNr1[0] = 1 
						parameterComputerDiaNr1[1] = i-1;
						parameterComputerDiaNr1[2] = j+1; 
					}
			    }	
			}
		}
		return parameterComputerDiaNr1;
	}
	
	function blockDiagonalNr2(){
		//Diagonal Nr.2 is north west or south east
		//here we initial parameterComputerDiaNr2
		
		parameterComputerDiaNr2[0]=0;
		parameterComputerDiaNr2[1]=0;
		parameterComputerDiaNr2[2]=0;
		
		
		for(var i = 1; i<gameField.length; i++){
			for(var j = 1; j<gameField[0].length; j++){
				if(gameField[i][j]=="User"){ 
					
					// here we block a diagonal with 
					//_ 
					//? X
					//	  X
					//      X
					if( i>=2 && i<=5 && j<=4 && j>=2 && gameField[i+1][j+1]=="User" && gameField[i+2][j+2]=="User" && typeof(gameField[i-1][j-1])=="undefined" && typeof(gameField[i-1][j])!= "undefined"){
						parameterComputerDiaNr2[0]=2;
						parameterComputerDiaNr2[1]=i-1;
						parameterComputerDiaNr2[2]=j-1;
						return parameterComputerDiaNr2;
					}
					
					// here we block a diagonal with 
					//X		
					//  X  
					//    X
					//      _
					//      ?
					if(i<=4 && j<=3 && gameField[i+1][j+1]=="User" && gameField[i+2][j+2]=="User" && typeof(gameField[i+3][j+3])=="undefined" && (typeof(gameField[i+3][j+4])!="undefined" || j==3)){
						parameterComputerDiaNr2[0]=2;
						parameterComputerDiaNr2[1]=i+3; 
						parameterComputerDiaNr2[2]=j+3;
						return parameterComputerDiaNr2;
					}
					
					// here we block a diagonal with 
					//X		
					//  _  
					//  ? X
					//      X
					if(i<=4 && j<=3 && typeof(gameField[i+1][j+1])=="undefined" && typeof(gameField[i+1][j+2])!="undefined" && gameField[i+2][j+2]=="User" && gameField[i+3][j+3]=="User"){
						parameterComputerDiaNr2[0]=2;
						parameterComputerDiaNr2[1]=i+1; 
						parameterComputerDiaNr2[2]=j+1;
						return parameterComputerDiaNr2;
					}
					
					// here we block a diagonal with 
					//X		
					//  X  
					//    _
					//    ? X
					if(i<=4 && j<=3 && gameField[i+1][j+1]=="User" && typeof(gameField[i+2][j+2])=="undefined" && typeof(gameField[i+2][j+3])!="undefined" && gameField[i+3][j+3]=="User"){
						parameterComputerDiaNr2[0]=2;
						parameterComputerDiaNr2[1]=i+2; 
						parameterComputerDiaNr2[2]=j+2;
						return parameterComputerDiaNr2;
					}
					
					// here we block a diagonal with 
					//_		
					//? X  
					//    _
					//    ? X
					//        _
					//        ?
					if(i>=2 && i<=4 && j>=2 && j<=3 && typeof(gameField[i-1][j-1])=="undefined" && typeof(gameField[i-1][j])!="undefined" && typeof(gameField[i+1][j+1])=="undefined" && typeof(gameField[i+1][j+2])!="undefined" && gameField[i+2][j+2] == "User" && typeof(gameField[i+3][j+3])=="undefined" && (typeof(gameField[i+3][j+4])!="undefined"|| j==3)){
						parameterComputerDiaNr2[0]=1;
						parameterComputerDiaNr2[1]=i+1;
						parameterComputerDiaNr2[2]=j+1;
					}
					
					// here we block a diagonal with 
					//_		
					//? _  
					//  ? X
					//      X
					//        _
					//        ?
					if(i>=3 && i<=5 && j>=3 && j<=4 && typeof(gameField[i-2][j-2])=="undefined" && typeof(gameField[i-2][j-1])!="undefined" && typeof(gameField[i-1][j-1])=="undefined" && typeof(gameField[i-1][j])!="undefined" && gameField[i+1][j+1] =="User" && typeof(gameField[i+2][j+2])=="undefined" && (typeof(gameField[i+2][j+3])!="undefined"|| j==4)){
						parameterComputerDiaNr2[0]=1;
						parameterComputerDiaNr2[1]=i-1; 
						parameterComputerDiaNr2[2]=j-1;
					}
					
					// here we block a diagonal with 
					//_		
					//? X  
					//    X
					//      _
					//      ? _
					//        ?
					if(i>=3 && i<=5 && j>=3 && j<=4 && typeof(gameField[i-1][j-1])=="undefined" && typeof(gameField[i-1][j])!="undefined" && gameField[i+1][j+1] =="User" && typeof(gameField[i+2][j+2])=="undefined" && typeof(gameField[i+2][j+3])!="undefined" && typeof(gameField[i+3][j+3])=="undefined" && (typeof(gameField[i+3][j+4])!="undefined"|| j==3)){
						parameterComputerDiaNr2[0]=1;
						parameterComputerDiaNr2[1]=i+1; 
						parameterComputerDiaNr2[2]=j+1;
					}
			    }	
			}
		}
		return parameterComputerDiaNr2;
	}
	
	function markComputerMove(i, j){
		EmergencyStop = 0;
		switch(i){
			case 1: switch(j){
						case 1: $("#hole1").css("background-color",currentColor);
								gameField[1][1]=currentPlayer;
				                $("#button1").css({"visibility":"hidden"});
								break;
						case 2: $("#hole8").css("background-color",currentColor);
								gameField[1][2]=currentPlayer;
								column[1]++;
								break;
						case 3: $("#hole15").css("background-color",currentColor);
								gameField[1][3]=currentPlayer;
								column[1]++;
								break;
						case 4: $("#hole22").css("background-color",currentColor);
								gameField[1][4]=currentPlayer;
								column[1]++;
								break;
						case 5: $("#hole29").css("background-color",currentColor);
								gameField[1][5]=currentPlayer;
								column[1]++;
								break;
						case 6: $("#hole36").css("background-color",currentColor);
								gameField[1][6]=currentPlayer;
								column[1]++;
								break;
						default: console.log("Error with j in ComputerMove");
					}
					break;
					
			case 2: switch(j){
						case 1: $("#hole2").css("background-color",currentColor);
								gameField[2][1]=currentPlayer;
								$("#button2").css({"visibility":"hidden"});
								break;
						case 2: $("#hole9").css("background-color",currentColor);
								gameField[2][2]=currentPlayer;
								column[2]++;
								break;
						case 3: $("#hole16").css("background-color",currentColor);
								gameField[2][3]=currentPlayer;
								column[2]++;
								break;
						case 4: $("#hole23").css("background-color",currentColor);
								gameField[2][4]=currentPlayer;
								column[2]++;
								break;
						case 5: $("#hole30").css("background-color",currentColor);
								gameField[2][5]=currentPlayer;
								column[2]++;
								break;
						case 6: $("#hole37").css("background-color",currentColor);
								gameField[2][6]=currentPlayer;
								column[2]++;
								break;
						default: console.log("Error with j in ComputerMove");
					}
					break;
					
			case 3: switch(j){
						case 1: $("#hole3").css("background-color",currentColor);
								gameField[3][1]=currentPlayer;
								$("#button3").css({"visibility":"hidden"});
								break;
						case 2: $("#hole10").css("background-color",currentColor);
								gameField[3][2]=currentPlayer;
								column[3]++;
								break;
						case 3: $("#hole17").css("background-color",currentColor);
								gameField[3][3]=currentPlayer;
								column[3]++;
								break;
						case 4: $("#hole24").css("background-color",currentColor);
								gameField[3][4]=currentPlayer;
								column[3]++;
								break;
						case 5: $("#hole31").css("background-color",currentColor);
								gameField[3][5]=currentPlayer;
								column[3]++;
								break;
						case 6: $("#hole38").css("background-color",currentColor);
								gameField[3][6]=currentPlayer;
								column[3]++;
								break;
						default: console.log("Error with j in ComputerMove");
					}
					break;
					
			case 4: switch(j){
						case 1: $("#hole4").css("background-color",currentColor);
								gameField[4][1]=currentPlayer;
								$("#button4").css({"visibility":"hidden"});
								break;
						case 2: $("#hole11").css("background-color",currentColor);
								gameField[4][2]=currentPlayer;
								column[4]++;
								break;
						case 3: $("#hole18").css("background-color",currentColor);
								gameField[4][3]=currentPlayer;
								column[4]++;
								break;
						case 4: $("#hole25").css("background-color",currentColor);
								gameField[4][4]=currentPlayer;
								column[4]++;
								break;
						case 5: $("#hole32").css("background-color",currentColor);
								gameField[4][5]=currentPlayer;
								column[4]++;
								break;
						case 6: $("#hole39").css("background-color",currentColor);
								gameField[4][6]=currentPlayer;
								column[4]++;
								break;
						default: console.log("Error with j in ComputerMove");
					}
					break;
					
			case 5: switch(j){
						case 1: $("#hole5").css("background-color",currentColor);
								gameField[5][1]=currentPlayer;
								$("#button5").css({"visibility":"hidden"});
								break;
						case 2: $("#hole12").css("background-color",currentColor);
								gameField[5][2]=currentPlayer;
								column[5]++;
								break;
						case 3: $("#hole19").css("background-color",currentColor);
								gameField[5][3]=currentPlayer;
								column[5]++;
								break;
						case 4: $("#hole26").css("background-color",currentColor);
								gameField[5][4]=currentPlayer;
								column[5]++;
								break;
						case 5: $("#hole33").css("background-color",currentColor);
								gameField[5][5]=currentPlayer;
								column[5]++;
								break;
						case 6: $("#hole40").css("background-color",currentColor);
								gameField[5][6]=currentPlayer;
								column[5]++;
								break;
						default: console.log("Error with j in ComputerMove");
					}
					break;
			
			case 6: switch(j){
						case 1: $("#hole6").css("background-color",currentColor);
								gameField[6][1]=currentPlayer;
								$("#button6").css({"visibility":"hidden"});
								break;
						case 2: $("#hole13").css("background-color",currentColor);
								gameField[6][2]=currentPlayer;
								column[6]++;
								break;
						case 3: $("#hole20").css("background-color",currentColor);
								gameField[6][3]=currentPlayer;
								column[6]++;
								break;
						case 4: $("#hole27").css("background-color",currentColor);
								gameField[6][4]=currentPlayer;
								column[6]++;
								break;
						case 5: $("#hole34").css("background-color",currentColor);
								gameField[6][5]=currentPlayer;
								column[6]++;
								break;
						case 6: $("#hole41").css("background-color",currentColor);
								gameField[6][6]=currentPlayer;
								column[6]++;
								break;
						default: console.log("Error with j in ComputerMove");
					}
					break;
					
			case 7: switch(j){
						case 1: $("#hole7").css("background-color",currentColor);
								gameField[7][1]=currentPlayer;
								$("#button7").css({"visibility":"hidden"});
								break;
						case 2: $("#hole14").css("background-color",currentColor);
								gameField[7][2]=currentPlayer;
								column[7]++;
								break;
						case 3: $("#hole21").css("background-color",currentColor);
								gameField[7][3]=currentPlayer;
								column[7]++;
								break;
						case 4: $("#hole28").css("background-color",currentColor);
								gameField[7][4]=currentPlayer;
								column[7]++;
								break;
						case 5: $("#hole35").css("background-color",currentColor);
								gameField[7][5]=currentPlayer;
								column[7]++;
								break;
						case 6: $("#hole42").css("background-color",currentColor);
								gameField[7][6]=currentPlayer;
								column[7]++;
								break;
						default: console.log("Error with j in ComputerMove");
					}
					break;
			
			default: console.log("Error with i in ComputerMove"+ i);
			         break; 
		}
	}
	
	function computerFirstMove(){
		//we split the first move of the Computer to make him choose randomly a column with the probabilities : 2%, 5%, 10%, 66%, 10%, 5%; 2%
		var random = Math.round(Math.random()*100);
		if(random<67){
			$("#hole39").css("background-color",currentColor);
			gameField[4][6]=currentPlayer;
			column[4]++;
		}
		else if(random<77){
			$("#hole38").css("background-color",currentColor);
			gameField[3][6]=currentPlayer;
			column[3]++;
		}
		else if(random<87){
			$("#hole40").css("background-color",currentColor);
			gameField[5][7]=currentPlayer;
			column[5]++;
		}
		else if(random<92){
			$("#hole37").css("background-color",currentColor);
			gameField[2][6]=currentPlayer;
			column[2]++;
		}
		else if(random<97){
			$("#hole41").css("background-color",currentColor);
			gameField[6][6]=currentPlayer;
			column[6]++;
		}
		else if(random<99){
			$("#hole36").css("background-color",currentColor);
			gameField[1][7]=currentPlayer;
			column[1]++;
		}
		else{ //random<101
			$("#hole42").css("background-color",currentColor);
			gameField[7][6]=currentPlayer;
			column[7]++;
		}
		getCurrentPlayerAndColor(); 
	}
	
	function computerRandomMove(){
		emergencyStop++;
		var random2 = Math.round(Math.random()*6)+1;
		var stop = 0; 
		for(var j = 1; j<gameField[0].length; j++){
		    stop++;
			if(stop>=200){
				break; 
			}
			if(gameField[random2][j]!="Computer"&&gameField[random2][j]!="User"&&(j==6||(gameField[random2][j+1]=="Computer"||gameField[random2][j+1]=="User"))){// comp chooses random column and checks if free and 
				var willCauseWin = scanForComputerMoveMakeWinPossible(random2, j);
				if(willCauseWin==1|| EmergencyStop>25){ //here we need the emergencyStop to ensure that if it's the last possible move for the computer
				markComputerMove(random2, j);			//he has to make it even if it will cause the Player to win																							 			  // if the space below is ground or full
				getCurrentPlayerAndColor(); 
				stop = 0;0
				break;
				}
				else{
					computerRandomMove();
					break;
				}
			}
			else if(j==gameField[0].length-1){
				if(random2==7){
					random2=0;
				}
				random2++;
				j=0;
			}	
		}
	}
	
	function computerSmartMove(){
		//here we initial parameterComputerWin
		
		parameterComputerWin[0] = 0; 
		parameterComputerWin[1] = 0; 
		parameterComputerWin[2] = 0;
		
		for(var i = 1; i<gameField.length; i++){
			for(var j = 1; j<gameField[0].length; j++){
				if(gameField[i][j]=="Computer"){
					//here we make the Computer throw in to get 4 horizontal
					//O O O _
					//	    ?
					if(i<=4 && gameField[i+1][j]=="Computer" && gameField[i+2][j]=="Computer" && typeof(gameField[i+3][j])=="undefined" && (typeof(gameField[i+3][j+1]) != "undefined"||j==6)){
						parameterComputerWin[0] = 2;
						parameterComputerWin[1] = i+3;
					    parameterComputerWin[2] = j; 	
						return parameterComputerWin;
					}
					
					//here we make the Computer throw in to get 4 horizontal
					//_ O O O
					//?
					if(i>=2 && i<=5 && typeof(gameField[i-1][j])=="undefined" && (typeof(gameField[i-1][j+1]) != "undefined"||j==6) && gameField[i+1][j]=="Computer" && gameField[i+2][j]=="Computer"){
						parameterComputerWin[0] = 2;
						parameterComputerWin[1] = i-1;
					    parameterComputerWin[2] = j;
						return parameterComputerWin; 
					}
					
					//here we make the Computer throw in to get 4 horizontal 
					//O _ O O
					//  ?
					if(i<=4 && typeof(gameField[i+1][j])=="undefined" && (typeof(gameField[i+1][j+1])!="undefined" || j == 6) && gameField[i+2][j]=="Computer" && gameField[i+3][j]=="Computer"){
						parameterComputerWin[0] = 2;
						parameterComputerWin[1] = i+1;
					    parameterComputerWin[2] = j;
						return parameterComputerWin;
					}
				
					//here we make the Computer throw in to get 4 horizontal 
					//O O _ O
					//    ?
					if(i<=4 && gameField[i+1][j]=="Computer" && typeof(gameField[i+2][j])=="undefined" && (typeof(gameField[i+2][j+1])!="undefined" || j == 6) && gameField[i+3][j]=="Computer"){
						parameterComputerWin[0] = 2;
						parameterComputerWin[1] = i+2;
					    parameterComputerWin[2] = j;
						return parameterComputerWin;
					}
					
					//here we make the Computer throw in to get 4 vertical
					//_
					//O
					//O
					//O
					if(j>=4 && gameField[i][j-1]=="Computer" && gameField[i][j-2]=="Computer" && typeof(gameField[i][j-3])=="undefined"){
						parameterComputerWin[0] = 2;
						parameterComputerWin[1] = i;
					    parameterComputerWin[2] = j-3;
						return parameterComputerWin; 
					}
					
					//here we make the Computer throw in to get 4 diagonal south west
					//      _
					//    O ?
					//  O
					//O
					if(i<5 && j>3 && gameField[i+1][j-1]=="Computer"&&gameField[i+2][j-2]=="Computer"&&typeof(gameField[i+3][j-3])=="undefined"&&typeof(gameField[i+3][j-2])!="undefined"){
						parameterComputerWin[0] = 2;
						parameterComputerWin[1] = i+3;
					    parameterComputerWin[2] = j-3;
						return parameterComputerWin;
					}
					
					//here we make the Computer throw in to get 4 diagonal south west
					//      O
					//    O
					//  O
					//_
					//?
					if(i>=2 && i<=5 && j<=5 && j>=3 && (typeof(gameField[i-1][j+2])!="undefined" || j==5) && typeof(gameField[i-1][j+1])=="undefined" && gameField[i+1][j-1]=="Computer" && gameField[i+2][j-2]=="Computer"){
						parameterComputerWin[0] = 2;
						parameterComputerWin[1] = i-1;
					    parameterComputerWin[2] = j+1;
						return parameterComputerWin;
					}
					
					//here we make the Computer throw in to get 4 diagonal south west
					//      O
					//    _
					//  O ?
 					//O
					else if(i<=4 && j>=4 && gameField[i+1][j-1]=="Computer"&&typeof(gameField[i+2][j-2])=="undefined"&&typeof(gameField[i+2][j-1])!="undefined" &&gameField[i+3][j-3]=="Computer"){
						parameterComputerWin[0] = 2;
						parameterComputerWin[1] = i+2;
					    parameterComputerWin[2] = j-2;
						return parameterComputerWin; 
					}
					
					//here we make the Computer throw in to get 4 diagonal south west
					//      O
					//    O
					//  _
					//O ?
					else if(i<=4 && j>=4 && typeof(gameField[i+1][j-1])=="undefined"&&typeof(gameField[i+1][j])!="undefined"&&gameField[i+2][j-2]=="Computer"&& gameField[i+3][j-3]=="Computer"){
						parameterComputerWin[0] = 2;
						parameterComputerWin[1] = i+1;
					    parameterComputerWin[2] = j-1;
						return parameterComputerWin;
					}
					
					//here we make the Computer throw in to get 4 diagonal north west 
					//_ 
					//? O
					//	  O
					//      O
					if( i>=2 && i<=5 && j<=4 && j>=2 && gameField[i+1][j+1]=="Computer" && gameField[i+2][j+2]=="Computer" && typeof(gameField[i-1][j-1])=="undefined" && typeof(gameField[i-1][j]) != "undefined"){
						parameterComputerWin[0] = 2;
						parameterComputerWin[1] = i-1;
					    parameterComputerWin[2] = j-1;
						return parameterComputerWin;
					}
					
					//here we make the Computer throw in to get 4 diagonal north west 
					//O		
					//  O  
					//    O
					//      _
					//      ?
					if(i<=4 && j<=3 && gameField[i+1][j+1]=="Computer" && gameField[i+2][j+2]=="Computer" && typeof(gameField[i+3][j+3])=="undefined" && (typeof(gameField[i+3][j+4])!="undefined" || j==3)){
						parameterComputerWin[0] = 2;
						parameterComputerWin[1] = i+3;
					    parameterComputerWin[2] = j+3;
						return parameterComputerWin;
					}
					
					//here we make the Computer throw in to get 4 diagonal north west 
					//O		
					//  _  
					//  ? O
					//      O
					if(i<=4 && j<=3 && typeof(gameField[i+1][j+1])=="undefined" && typeof(gameField[i+1][j+2])!="undefined" && gameField[i+2][j+2]=="Computer" && gameField[i+3][j+3]=="Computer"){
						parameterComputerWin[0] = 2;
						parameterComputerWin[1] = i+1;
					    parameterComputerWin[2] = j+1;
						return parameterComputerWin;
					}
					
					//here we make the Computer throw in to get 4 diagonal north west 
					//O		
					//  O  
					//    _
					//    ? O
					if(i<=4 && j<=3 && gameField[i+1][j+1]=="Computer" && typeof(gameField[i+2][j+2])=="undefined" && typeof(gameField[i+2][j+3])!="undefined" && gameField[i+3][j+3]=="Computer"){
						parameterComputerWin[0] = 2;
						parameterComputerWin[1] = i+2;
					    parameterComputerWin[2] = j+2;
						return parameterComputerWin;
					}
					
					
					//here we make the Computer throw 3 in a row vertical
					//_
					//_
					//O
					//O
					if(j>=4 && gameField[i][j-1]=="Computer" && typeof(gameField[i][j-2])=="undefined"){
						parameterComputerWin[0] = 1;
						parameterComputerWin[1] = i;
					    parameterComputerWin[2] = j-2;
					}
					
					//here we make the Computer throw in to get 4 diagonal north west 
					//_		
					//? _  
					//  ? O
					//      O
					if(i>=3 && i<=6 && j>=3 && j<=5 && typeof(gameField[i-2][j-2])=="undefined" && typeof(gameField[i-2][j-1])!="undefined" && typeof(gameField[i-1][j-1])=="undefined" && typeof(gameField[i-1][j])!="undefined" && gameField[i+1][j+1]=="Computer"){
						parameterComputerWin[0] = 1;
						parameterComputerWin[1] = i-1;
					    parameterComputerWin[2] = j-1;
					}
					
					//here we make the Computer throw in to get 4 diagonal north west 
					//O		
					//  O  
					//    _
					//    ? _
					//      ?
					if(i<=4 && j<=3 && gameField[i+1][j+1]=="Computer" && typeof(gameField[i+2][j+2])=="undefined" && typeof(gameField[i+2][j+3])!="undefined" && typeof(gameField[i+3][j+3])=="undefined" && (typeof(gameField[i+3][j+4])!="undefined" || j == 3)){
						parameterComputerWin[0] = 1;
						parameterComputerWin[1] = i+2;
					    parameterComputerWin[2] = j+2;
					}
					
					//here we make the Computer throw in to get 4 diagonal north west 
					//_		
					//? O  
					//    O
					//      _
					//      ?
					if(i>=2 && i<=4 && j>=2 && j<=4 && typeof(gameField[i-1][j-1])=="undefined" && typeof(gameField[i-1][j])!="undefined" && gameField[i+1][j+1]=="Computer" && typeof(gameField[i+2][j+2])=="undefined" && (typeof(gameField[i+2][j+3])!="undefined" || j == 4)){
						parameterComputerWin[0] = 1;
						parameterComputerWin[1] = i-1;
					    parameterComputerWin[2] = j-1;
					}
					
					//here we make the Computer throw in to get 3 diagonal south west
					//      _
					//    _ ?
					//  O ?
					//O 
					else if(i<=4 && j>=4 && gameField[i+1][j-1] == "Computer" && typeof(gameField[i+2][j-2])=="undefined"&&typeof(gameField[i+2][j-1])!="undefined"&& typeof(gameField[i+3][j-3])=="undefined"&&typeof(gameField[i+3][j-2])!="undefined"){
						parameterComputerWin[0] = 1;
						parameterComputerWin[1] = i+2;
					    parameterComputerWin[2] = j-2;
					}
					
					//here we make the Computer throw in to get 3 diagonal south west
					//      O
					//    O 
					//  _ 
					//_ ?
					//?
					else if(i>=3 && i<=6 && j>=2 && j<=4 && typeof(gameField[i-2][j+2])=="undefined"&& (typeof(gameField[i-2][j+3])!="undefined" || j == 4) && typeof(gameField[i-1][j+1])=="undefined"&&typeof(gameField[i-1][j+2])!="undefined" && gameField[i+1][j-1] == "Computer"){
						parameterComputerWin[0] = 1;
 						parameterComputerWin[1] = i-1;
					    parameterComputerWin[2] = j+1;
					}
					
					//here we make the Computer throw in to get 3 diagonal south west
					//      _
					//    O ?
					//  O 
					//_
					//?
					else if(i>=2 && i<=5 && j>=3 && j<=5 && typeof(gameField[i-1][j+1])=="undefined"&& (typeof(gameField[i-1][j+2])!="undefined" || j==5) && gameField[i+1][j-1] == "Computer" && typeof(gameField[i+2][j-2])=="undefined"&& typeof(gameField[i+2][j-1])!="undefined"){
						parameterComputerWin[0] = 1;
 						parameterComputerWin[1] = i+2;
					    parameterComputerWin[2] = j-2;
					}
					
					//here we make the Computer throw 3 in a row horizontal
					//O O _ _
					//    ? ?
					if(i<=4 && gameField[i+1][j]=="Computer" && typeof(gameField[i+2][j]) == "undefined" && typeof(gameField[i+3][j]) == "undefined" && ((typeof(gameField[i+2][j+1])!="undefined" && typeof(gameField[i+3][j+1])!="undefined")|| j==6)){
						parameterComputerWin[0] = 1;
						parameterComputerWin[1] = i+2;
					    parameterComputerWin[2] = j;
					}
					
					//here we make the Computer throw 3 in a row horizontal
					//_ _ O O
					//? ?
					if(i>=3 && i<=6 && typeof(gameField[i-1][j]) == "undefined" && typeof(gameField[i-2][j]) == "undefined" && ((typeof(gameField[i-1][j+1])!="undefined" && typeof(gameField[i-2][j+1])!="undefined")|| j==6) && gameField[i+1][j]=="Computer"){
						parameterComputerWin[0] = 1;
						parameterComputerWin[1] = i-1;
					    parameterComputerWin[2] = j;
					}
					
					//here we make the Computer throw 3 in a row horizontal
					//_ O O _
					//?     ?
 					if(i>=2 && i<=5 && typeof(gameField[i-1][j]) == "undefined" && gameField[i+1][j]=="Computer" && typeof(gameField[i+2][j]) == "undefined" && ((typeof(gameField[i-1][j+1])!="undefined" && typeof(gameField[i+2][j+1])!="undefined")|| j==6)){
						parameterComputerWin[0] = 1;
						parameterComputerWin[1] = i+2;
					    parameterComputerWin[2] = j;
					}
					
					//here we make the Computer throw 3 in a row diagonal north west in such a manner that he will win in the next move
					//_		
					//? O  
					//    _
					//    ? O
					//        _
					//        ?
					if(i>=2 && i<=4 && j>=2 && j<=3 && typeof(gameField[i-1][j-1])=="undefined" && typeof(gameField[i-1][j])!="undefined" && typeof(gameField[i+1][j+1])=="undefined" && typeof(gameField[i+1][j+2])!="undefined" && gameField[i+2][j+2] == "Computer" && typeof(gameField[i+3][j+3])=="undefined" && (typeof(gameField[i+3][j+4])!="undefined"|| j==3)){
						parameterComputerWin[0] = 1;
						parameterComputerWin[1] = i+1;
					    parameterComputerWin[2] = j+1;
					}
					
					//here we make the Computer throw 3 in a row diagonal north west in such a manner that he will win in the next move
					//_		
					//? _  
					//  ? O
					//      O
					//        _
					//        ?
					if(i>=3 && i<=5 && j>=3 && j<=4 && typeof(gameField[i-2][j-2])=="undefined" && typeof(gameField[i-2][j-1])!="undefined" && typeof(gameField[i-1][j-1])=="undefined" && typeof(gameField[i-1][j])!="undefined" && gameField[i+1][j+1] =="Computer" && typeof(gameField[i+2][j+2])=="undefined" && (typeof(gameField[i+2][j+3])!="undefined"|| j==4)){
						parameterComputerWin[0] = 1;
						parameterComputerWin[1] = i-1;
					    parameterComputerWin[2] = j-1;
					}
					
					//here we make the Computer throw 3 in a row diagonal north west in such a manner that he will win in the next move
					//_		
					//? O  
					//    O
					//      _
					//      ? _
					//        ?
					if(i>=2 && i<=4 && j>=2 && j<=3 && typeof(gameField[i-1][j-1])=="undefined" && typeof(gameField[i-1][j])!="undefined" && gameField[i+1][j+1] =="Computer" && typeof(gameField[i+2][j+2])=="undefined" && typeof(gameField[i+2][j+3])!="undefined" && typeof(gameField[i+3][j+3])=="undefined" && (typeof(gameField[i+3][j+4])!="undefined"|| j==3)){
						parameterComputerWin[0] = 1;
						parameterComputerWin[1] = i+1;
					    parameterComputerWin[2] = j+1;
					}
					
					//here we make the Computer throw 3 in a row diagonal south west in such a manner that he will win in the next move
					//        _
					//      O ?
					//    _
					//  O ?
					//_
					//?
					else if(i>=2 && i<=4 && j<=5 && j>=4 && typeof(gameField[i-1][j+1]) == "undefined" && (typeof(gameField[i-1][j+2]) !="undefined" || j==5) && typeof(gameField[i+1][j-1])=="undefined" && (typeof(gameField[i+1][j])!="undefined" )&& gameField[i+2][j-2] == "Computer" && typeof(gameField[i+3][j-3])=="undefined" && typeof(gameField[i+3][j-2])!="undefined"){
						parameterComputerWin[0] = 1;
						parameterComputerWin[1] = i+1;
					    parameterComputerWin[2] = j-1;
					}
					
					//here we make the Computer throw 3 in a row diagonal south west in such a manner that he will win in the next move
					//        _
					//      _ ?
 					//    O ?
 					//  O
					//_				
					//?
					else if(i>=2 && i<=4 && j>=4 && j<=5 && typeof(gameField[i-1][j+1]) == "undefined" && (typeof(gameField[i-1][j+2])!= "undefined" || j == 5) && gameField[i+1][j-1]=="Computer" && typeof(gameField[i+2][j-2])=="undefined" && typeof(gameField[i+2][j-1])!="undefined" && typeof(gameField[i+3][j-3])=="undefined" && typeof(gameField[i+3][j-2])!="undefined"){
						parameterComputerWin[0] = 1;
						parameterComputerWin[1] = i+2;
					    parameterComputerWin[2] = j-2;					
					}
					
					//here we make the Computer throw 3 in a row diagonal south west in such a manner that he will win in the next move
					//        _
					//      O ?
					//    O 
					//  _					
					//_ ?
					//?
					else if(i>=3 && i<=5 && j>=3 && j<=4 && typeof(gameField[i-2][j+2])=="undefined" && (typeof(gameField[i-2][j+3])!="undefined" || j == 4) && typeof(gameField[i-1][j+1])=="undefined" && typeof(gameField[i-1][j+2])!="undefined" && gameField[i+1][j-1]=="Computer" && typeof(gameField[i+2][j-2])=="undefined" && typeof(gameField[i+2][j-1])!="undefined"){
						parameterComputerWin[0] = 1;
						parameterComputerWin[1] = i-1;
					    parameterComputerWin[2] = j+1;
					}
					
					//here we make the Computer throw 3 in a row horizontal in such a manner that he will win in the next move
					//_ O _ O _
					//?   ?   ?
					if(i>=2 && i<=4 && typeof(gameField[i-1][j]) == "undefined" && typeof(gameField[i+1][j]) == "undefined" && gameField[i+2][j]=="Computer" && typeof(gameField[i+3][j]) == "undefined" && ((typeof(gameField[i-1][j+1])!="undefined" && typeof(gameField[i+1][j+1])!="undefined" && typeof(gameField[i+3][j+1])!="undefined")|| j==6)){
						parameterComputerWin[0] = 1;
						parameterComputerWin[1] = i+1;
					    parameterComputerWin[2] = j;
					}
				
					//here we make the Computer throw 3 in a row horizontal in such a manner that he will win in the next move
					//_ _ _ O O _
					//? ? ?     ?
					if(i>=4 && i<=5 && typeof(gameField[i-3][j])=="undefined" &&typeof(gameField[i-2][j]) == "undefined" && typeof(gameField[i-1][j]) == "undefined" && gameField[i+1][j]=="Computer" && typeof(gameField[i+2][j]) == "undefined" && ((typeof(gameField[i-3][j+1])!="undefined" && typeof(gameField[i-2][j+1])!="undefined" && typeof(gameField[i-1][j+1])!="undefined" && typeof(gameField[i+2][j+1])!="undefined")|| j==6)){
						parameterComputerWin[0] = 1;
						parameterComputerWin[1] = i;
					    parameterComputerWin[2] = i-1;
					}	
					
					//here we make the Computer throw 3 in a row horizontal in such a manner that he will win in the next move
					//_ O O _ _
					//?     ? ?
					if(i>=2 && i<=4 && typeof(gameField[i-1][j]) == "undefined" && gameField[i+1][j]=="Computer" && typeof(gameField[i+2][j]) == "undefined" && typeof(gameField[i+3][j]) == "undefined" && ((typeof(gameField[i-1][j+1])!="undefined" && typeof(gameField[i+2][j+1])!="undefined" && typeof(gameField[i+3][j+1])!="undefined")|| j==6)){
						parameterComputerWin[0] = 1;
						parameterComputerWin[1] = i+2;
					    parameterComputerWin[2] = j;
					}

					//here we make the Computer throw 3 in a row horizontal in such a manner that he will win in the next move
					//_ _ O O _
					//? ?     ?
					if(i>=3 && i<=5 && typeof(gameField[i-2][j]) == "undefined" && typeof(gameField[i-1][j]) == "undefined" && gameField[i+1][j]=="Computer" && typeof(gameField[i+2][j]) == "undefined" && ((typeof(gameField[i-2][j+1])!="undefined" && typeof(gameField[i-1][j+1])!="undefined" && typeof(gameField[i+2][j+1])!="undefined")|| j==6)){
						parameterComputerWin[0] = 1;
						parameterComputerWin[1] = i-1;
					    parameterComputerWin[2] = j;
					}					
					
				}
			}
		}
		return parameterComputerWin;
	}
	
	function scanForComputerMoveMakeWinPossible(posX, posY){	
		var gameField1 = new Array(8);
		for(var i = 0; i<column.length; i++){
			gameField1[i]=new Array(7); 
		}
		for(var i = 0; i<gameField1.length; i++){
			for(var j = 0; j<gameField1[0].length; j++){
				gameField1[i][j] = gameField[i][j];				
			}
		}
		gameField1[posX][posY]="Computer";
		var blockHor1 = blockHorizontal1(gameField1);
		var blockDiaNr11 = blockDiagonalNr11(gameField1);
		var blockDiaNr21 = blockDiagonalNr21(gameField1);
		
		if(blockHor1[1] == 2 || blockDiaNr11[1] == 2 || blockDiaNr21[1] == 2){
			return 2;
		} 
		else{
			return 1; 
		}
	}
	
	function blockHorizontal1(gameField1){
		//here we initial parameterComputerHor
		
		parameterComputerHor[0]=0;
		parameterComputerHor[1]=0;
		parameterComputerHor[2]=0;
		
		for(var i = 1; i<gameField1.length; i++){
			for(var j = 1; j<gameField1[0].length; j++){
				if(gameField1[i][j]=="User"){
				//here we block a diagonal with 
				//_ X X X
				//?
					if(i>=2 && i<=5 && typeof(gameField1[i-1][j])=="undefined" && (typeof(gameField1[i-1][j+1])!="undefined" || j == 6) && gameField1[i+1][j]=="User" && gameField1[i+2][j]=="User"){
						parameterComputerHor[0]=2;
						parameterComputerHor[1]=i-1; 
						parameterComputerHor[2]=j;
						return parameterComputerHor;
					}
				
				//here we block a diagonal with 
				//X X X _
				//      ?
					if(i<=4 && gameField1[i+1][j]=="User" && gameField1[i+2][j]=="User" && typeof(gameField1[i+3][j])=="undefined" && (typeof(gameField1[i+3][j+1])!="undefined" || j == 6)){
						parameterComputerHor[0]=2;
						parameterComputerHor[1]=i+3; 
						parameterComputerHor[2]=j;
						return parameterComputerHor;
					}
				
				//here we block a diagonal with 
				//X _ X X
				//  ?
					if(i<=4 && typeof(gameField1[i+1][j])=="undefined" && (typeof(gameField1[i+1][j+1])!="undefined" || j == 6) && gameField1[i+2][j]=="User" && gameField1[i+3][j]=="User"){
						parameterComputerHor[0]=2;
						parameterComputerHor[1]=i+1; 
						parameterComputerHor[2]=j;
						return parameterComputerHor;
					}
				
				//here we block a diagonal with 
				//X X _ X
				//    ?
					if(i<=4 && gameField1[i+1][j]=="User" && typeof(gameField1[i+2][j])=="undefined" && (typeof(gameField1[i+2][j+1])!="undefined" || j == 6) && gameField1[i+3][j]=="User"){
						parameterComputerHor[0]=2;
						parameterComputerHor[1]=i+2; 
						parameterComputerHor[2]=j;
						return parameterComputerHor;
					}
					
				//here we block a diagonal with 
				//_ X _ X _
 				//?   ?   ?
					if(i>=2 && i<=4 && typeof(gameField1[i-1][j]) == "undefined" && typeof(gameField1[i+1][j]) == "undefined" && gameField1[i+2][j]=="User" && typeof(gameField1[i+3][j]) == "undefined" && ((typeof(gameField1[i-1][j+1])!="undefined" && typeof(gameField1[i+1][j+1])!="undefined" && typeof(gameField1[i+3][j+1])!="undefined")|| j==6)){
						parameterComputerHor[0]=1;
						parameterComputerHor[1]=i+1; 
						parameterComputerHor[2]=j;
					}
				
				//here we block a diagonal with 
				//_ _ X X _
 				//? ?      ?
					if(i>=3 && i<=5 && typeof(gameField1[i-2][j]) == "undefined" && typeof(gameField1[i-1][j]) == "undefined" && gameField1[i+1][j]=="User" && typeof(gameField1[i+2][j]) == "undefined" && ((typeof(gameField1[i-2][j+1])!="undefined" && typeof(gameField1[i-1][j+1])!="undefined" && typeof(gameField1[i+2][j+1])!="undefined")|| j==6)){
						parameterComputerHor[0]=1;
						parameterComputerHor[1]=i-1; 
						parameterComputerHor[2]=j;
					}
				
				//here we block a diagonal with 
				//_ X X _ _
 				//?     ? ?
					if(i>=2 && i<=4 && typeof(gameField1[i-1][j]) == "undefined" && gameField1[i+1][j]=="User" && typeof(gameField1[i+2][j]) == "undefined" && typeof(gameField1[i+3][j]) == "undefined" && ((typeof(gameField1[i-1][j+1])!="undefined" && typeof(gameField1[i+2][j+1])!="undefined" && typeof(gameField1[i+3][j+1])!="undefined")|| j==6)){
						parameterComputerHor[0]=1;
						parameterComputerHor[1]=i+2; 
						parameterComputerHor[2]=j;
					}

				//here we block a diagonal with 
				//_ _ _ X X _
 				//? ? ?     ?
					if(i>=4 && i<=5 && typeof(gameField1[i-3][j])=="undefined" &&typeof(gameField1[i-2][j]) == "undefined" && typeof(gameField1[i-1][j]) == "undefined" && gameField1[i+1][j]=="User" && typeof(gameField1[i+2][j]) == "undefined" && ((typeof(gameField1[i-3][j+1])!="undefined" && typeof(gameField1[i-2][j+1])!="undefined" && typeof(gameField1[i-1][j+1])!="undefined" && typeof(gameField1[i+2][j+1])!="undefined")|| j==6)){
						parameterComputerHor[0]=1;
						parameterComputerHor[1]=i-1; 
						parameterComputerHor[2]=j;
					}
				}	
			}
		}
		return parameterComputerHor;
	}
	
	function blockDiagonalNr11(gameField1){
		//Diagonal Nr1 is diagonal north east or south west 
		//here we initial parameterComputerDiaNr1
		
		parameterComputerDiaNr1[0]=0;
		parameterComputerDiaNr1[1]=0;
		parameterComputerDiaNr1[2]=0;
		
		
		for(var i = 1; i<gameField1.length; i++){
			for(var j = 1; j<gameField1[0].length; j++){
				if(gameField1[i][j]=="User"){ 
					// here we block a diagonal with 
					//      _
					//    X ?
					//  X
					//X
					if(i<5 && j>3 && gameField1[i+1][j-1]=="User"&&gameField1[i+2][j-2]=="User"&&typeof(gameField1[i+3][j-3])=="undefined"&&typeof(gameField1[i+3][j-2])!="undefined"){
						parameterComputerDiaNr1[0]=2;
						parameterComputerDiaNr1[1]=i+3; 
						parameterComputerDiaNr1[2]=j-3;
						return parameterComputerDiaNr1;
					}
					
					// here we block a diagonal with 
					//      X
					//    X
					//  X
					//_
					//?
					if(i>=2 && i<=5 && j<=5 && j>=3 && (typeof(gameField1[i-1][j+2])!="undefined" || j==5) && typeof(gameField1[i-1][j+1])=="undefined" && gameField1[i+1][j-1]=="User" && gameField1[i+2][j-2]=="User"){
						parameterComputerDiaNr1[0]=2;
						parameterComputerDiaNr1[1]=i-1; 
						parameterComputerDiaNr1[2]=j+1;
						return parameterComputerDiaNr1;
					}
					
					// here we block a diagonal with 
					//      X
					//    _
					//  X ?
 					//X
					else if(i<=4 && j>=4 && gameField1[i+1][j-1]=="User"&&typeof(gameField1[i+2][j-2])=="undefined"&&typeof(gameField1[i+2][j-1])!="undefined" &&gameField1[i+3][j-3]=="User"){
						parameterComputerDiaNr1[0] = 2; 
						parameterComputerDiaNr1[1] = i+2;
						parameterComputerDiaNr1[2] = j-2;
						return parameterComputerDiaNr1; 
					}
					
					//here we block a diagonal with 
					//      X
					//    X
					//  _
					//X ?
					else if(i<=4 && j>=4 && typeof(gameField1[i+1][j-1])=="undefined"&&typeof(gameField1[i+1][j])!="undefined"&&gameField1[i+2][j-2]=="User"&& gameField1[i+3][j-3]=="User"){
						parameterComputerDiaNr1[0] = 2; 
						parameterComputerDiaNr1[1] = i+1; 
						parameterComputerDiaNr1[2] = j-1;
						return parameterComputerDiaNr1; 
					}
					
					//here we prevent a diagonal with 
					//        _
					//      X ?
					//    _
					//  X ?
					//_
					//?
					else if(i>=2 && i<=4 && j<=5 && j>=4 && typeof(gameField1[i-1][j+1]) == "undefined" && (typeof(gameField1[i-1][j+2]) !="undefined" || j==5) && typeof(gameField1[i+1][j-1])=="undefined" && (typeof(gameField1[i+1][j])!="undefined" )&& gameField1[i+2][j-2] == "User" && typeof(gameField1[i+3][j-3])=="undefined" && typeof(gameField1[i+3][j-2])!="undefined"){
						parameterComputerDiaNr1[0] = 1; 
						parameterComputerDiaNr1[1] = i+1; 
						parameterComputerDiaNr1[2] = j-1;
					}
					
					//here we prevent a diagonal with 
					//        _
					//      _ ?
 					//    X ?
 					//  X
					//_				
					//?
					else if(i>=2 && i<=4 && j>=4 && j<=5 && typeof(gameField1[i-1][j+1]) == "undefined" && (typeof(gameField1[i-1][j+2])!= "undefined" || j == 5) && gameField1[i+1][j-1]=="User" && typeof(gameField1[i+2][j-2])=="undefined" && typeof(gameField1[i+2][j-1])!="undefined" && typeof(gameField1[i+3][j-3])=="undefined" && typeof(gameField1[i+3][j-2])!="undefined"){
						parameterComputerDiaNr1[0] = 1 
						parameterComputerDiaNr1[1] = i+2; 
						parameterComputerDiaNr1[2] = j-2;					
					}
					
					//here we prevent a diagonal with 
					//        _
					//      X ?
					//    X 
					//  _					
					//_ ?
					//?
					else if(i>=3 && i<=5 && j>=3 && j<=4 && typeof(gameField1[i-2][j+2])=="undefined" && (typeof(gameField1[i-2][j+3])!="undefined" || j == 4) && typeof(gameField1[i-1][j+1])=="undefined" && typeof(gameField1[i-1][j+2])!="undefined" && gameField1[i+1][j-1]=="User" && typeof(gameField1[i+2][j-2])=="undefined" && typeof(gameField1[i+2][j-1])!="undefined"){
						parameterComputerDiaNr1[0] = 1 
						parameterComputerDiaNr1[1] = i-1;
						parameterComputerDiaNr1[2] = j+1; 
					}
			    }	
			}
		}
		return parameterComputerDiaNr1;
	}
	
	function blockDiagonalNr21(gameField1){
		//Diagonal Nr.2 is north west or south east
		//here we initial parameterComputerDiaNr2
		
		parameterComputerDiaNr2[0]=0;
		parameterComputerDiaNr2[1]=0;
		parameterComputerDiaNr2[2]=0;
		
		
		for(var i = 1; i<gameField1.length; i++){
			for(var j = 1; j<gameField1[0].length; j++){
				if(gameField1[i][j]=="User"){ 
					
					// here we block a diagonal with 
					//_ 
					//? X
					//	  X
					//      X
					if( i>=2 && i<=5 && j<=4 && j>=2 && gameField1[i+1][j+1]=="User" && gameField1[i+2][j+2]=="User" && typeof(gameField1[i-1][j-1])=="undefined" && typeof(gameField1[i-1][j])!= "undefined"){
						parameterComputerDiaNr2[0]=2;
						parameterComputerDiaNr2[1]=i-1;
						parameterComputerDiaNr2[2]=j-1;
						return parameterComputerDiaNr2;
					}
					
					// here we block a diagonal with 
					//X		
					//  X  
					//    X
					//      _
					//      ?
					if(i<=4 && j<=3 && gameField1[i+1][j+1]=="User" && gameField1[i+2][j+2]=="User" && typeof(gameField1[i+3][j+3])=="undefined" && (typeof(gameField1[i+3][j+4])!="undefined" || j==3)){
						parameterComputerDiaNr2[0]=2;
						parameterComputerDiaNr2[1]=i+3; 
						parameterComputerDiaNr2[2]=j+3;
						return parameterComputerDiaNr2;
					}
					
					// here we block a diagonal with 
					//X		
					//  _  
					//  ? X
					//      X
					if(i<=4 && j<=3 && typeof(gameField1[i+1][j+1])=="undefined" && typeof(gameField1[i+1][j+2])!="undefined" && gameField1[i+2][j+2]=="User" && gameField1[i+3][j+3]=="User"){
						parameterComputerDiaNr2[0]=2;
						parameterComputerDiaNr2[1]=i+1; 
						parameterComputerDiaNr2[2]=j+1;
						return parameterComputerDiaNr2;
					}
					
					// here we block a diagonal with 
					//X		
					//  X  
					//    _
					//    ? X
					if(i<=4 && j<=3 && gameField1[i+1][j+1]=="User" && typeof(gameField1[i+2][j+2])=="undefined" && typeof(gameField1[i+2][j+3])!="undefined" && gameField1[i+3][j+3]=="User"){
						parameterComputerDiaNr2[0]=2;
						parameterComputerDiaNr2[1]=i+2; 
						parameterComputerDiaNr2[2]=j+2;
						return parameterComputerDiaNr2;
					}
					
					// here we block a diagonal with 
					//_		
					//? X  
					//    _
					//    ? X
					//        _
					//        ?
					if(i>=2 && i<=4 && j>=2 && j<=3 && typeof(gameField1[i-1][j-1])=="undefined" && typeof(gameField1[i-1][j])!="undefined" && typeof(gameField1[i+1][j+1])=="undefined" && typeof(gameField1[i+1][j+2])!="undefined" && gameField1[i+2][j+2] == "User" && typeof(gameField1[i+3][j+3])=="undefined" && (typeof(gameField1[i+3][j+4])!="undefined"|| j==3)){
						parameterComputerDiaNr2[0]=1;
						parameterComputerDiaNr2[1]=i+1;
						parameterComputerDiaNr2[2]=j+1;
					}
					
					// here we block a diagonal with 
					//_		
					//? _  
					//  ? X
					//      X
					//        _
					//        ?
					if(i>=3 && i<=5 && j>=3 && j<=4 && typeof(gameField1[i-2][j-2])=="undefined" && typeof(gameField1[i-2][j-1])!="undefined" && typeof(gameField1[i-1][j-1])=="undefined" && typeof(gameField1[i-1][j])!="undefined" && gameField1[i+1][j+1] =="User" && typeof(gameField1[i+2][j+2])=="undefined" && (typeof(gameField1[i+2][j+3])!="undefined"|| j==4)){
						parameterComputerDiaNr2[0]=1;
						parameterComputerDiaNr2[1]=i-1; 
						parameterComputerDiaNr2[2]=j-1;
					}
					
					// here we block a diagonal with 
					//_		
					//? X  
					//    X
					//      _
					//      ? _
					//        ?
					if(i>=3 && i<=5 && j>=3 && j<=4 && typeof(gameField1[i-1][j-1])=="undefined" && typeof(gameField1[i-1][j])!="undefined" && gameField1[i+1][j+1] =="User" && typeof(gameField1[i+2][j+2])=="undefined" && typeof(gameField1[i+2][j+3])!="undefined" && typeof(gameField1[i+3][j+3])=="undefined" && (typeof(gameField1[i+3][j+4])!="undefined"|| j==3)){
						parameterComputerDiaNr2[0]=1;
						parameterComputerDiaNr2[1]=i+1; 
						parameterComputerDiaNr2[2]=j+1;
					}
			    }	
			}
		}
		return parameterComputerDiaNr2;
	}
	
	function restart(){
			$("#restart").css("visibility","visible");
			$("#restart").prop('disabled',null); 
			$("#restart").on("click", function(){ 
				emergencyStop = 0;
				win = false;
				$("#hole1").css("background-color","white");
				$("#hole2").css("background-color","white");
				$("#hole3").css("background-color","white");
				$("#hole4").css("background-color","white");
				$("#hole5").css("background-color","white");
				$("#hole6").css("background-color","white");
				$("#hole7").css("background-color","white");
				$("#hole8").css("background-color","white");
				$("#hole9").css("background-color","white");
				$("#hole10").css("background-color","white");
				$("#hole11").css("background-color","white");
				$("#hole12").css("background-color","white");
				$("#hole13").css("background-color","white");
				$("#hole14").css("background-color","white");
				$("#hole15").css("background-color","white");
				$("#hole16").css("background-color","white");
				$("#hole17").css("background-color","white");
				$("#hole18").css("background-color","white");
				$("#hole19").css("background-color","white");
				$("#hole20").css("background-color","white");
				$("#hole21").css("background-color","white");
				$("#hole22").css("background-color","white");
				$("#hole23").css("background-color","white");
				$("#hole24").css("background-color","white");
				$("#hole25").css("background-color","white");
				$("#hole26").css("background-color","white");
				$("#hole27").css("background-color","white");
				$("#hole28").css("background-color","white");
				$("#hole29").css("background-color","white");
				$("#hole30").css("background-color","white");
				$("#hole31").css("background-color","white");
				$("#hole32").css("background-color","white");
				$("#hole33").css("background-color","white");
				$("#hole34").css("background-color","white");
				$("#hole35").css("background-color","white");
				$("#hole36").css("background-color","white");
				$("#hole37").css("background-color","white");
				$("#hole38").css("background-color","white");
				$("#hole39").css("background-color","white");
				$("#hole40").css("background-color","white");
				$("#hole41").css("background-color","white");
				$("#hole42").css("background-color","white");
				$("#notificationField").text("");
				$("#button1").css({"visibility":"visible"});
				$("#button2").css({"visibility":"visible"});
				$("#button3").css({"visibility":"visible"});
				$("#button4").css({"visibility":"visible"});
				$("#button5").css({"visibility":"visible"});
				$("#button6").css({"visibility":"visible"});
				$("#button7").css({"visibility":"visible"});
				$("#button1").prop('disabled',null); 
				$("#button2").prop('disabled',null); 
				$("#button3").prop('disabled',null); 
				$("#button4").prop('disabled',null); 
				$("#button5").prop('disabled',null); 
				$("#button6").prop('disabled',null); 
				$("#button7").prop('disabled',null); 
				$("#restart").prop('disabled',true);
				start();
				$("#restart").css("visibility","hidden");
			    $("#restart").prop('disabled',true); 
			}) 
	}
	
	$(document).ready(main);
