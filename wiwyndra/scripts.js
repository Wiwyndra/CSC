function hideShow(element_id1, element_id2) {
	var obj1 = document.getElementById(element_id1);
	var obj2 = document.getElementById(element_id2);
	
	obj1.style.display = "none";
	obj2.style.display = "block";
}	

var correctAnswersCount = 0;

function askQuestion(textBoxId, correctAnswer) {		
	var userAnswer = document.getElementById(textBoxId).value.toLowerCase();
	if (userAnswer == correctAnswer) {
		correctAnswersCount++;
	}
}

function playPuzzle() {	
	correctAnswersCount= 0;	
	
	askQuestion("answer1", "троллейбус");
	askQuestion("answer2", "гора");
	askQuestion("answer3", "время");
	
	hideShow('gamePuzzleBox', 'puzzle1');
	document.getElementById('result').innerHTML = 
		"<p>Вы дали " + correctAnswersCount + " правильных ответов!</p>"
}

function guess2() {
	var answer = parseInt(Math.random() * 100);
	var counter = 0;
	var player1 = prompt("Введите имя первого игрока");
	var player2 = prompt("Введите имя второго игрока");
	var playerNum = player1;
	
	while (true) {
		
		var userAnswer = prompt("Игрок " + playerNum + " Введите число от 0 до 100");
		if(userAnswer == null) {
			break;
		}
		userAnswer = parseInt(userAnswer);
		
		if (userAnswer > answer) {
			counter++;
			alert("Загаданное число меньше");			
		}
		else if (userAnswer < answer) {
			counter++;
			alert("Загаданное число больше");
		}
		else if (userAnswer == answer) {
			counter++;
				var remainder = counter / 2;
				if (remainder != 0) {
					alert("Вы угадали c " + Math.ceil(counter/2) + " попытки! Победил игрок " + player2);
				}
				else {
					alert("Вы угадали c " + Math.ceil(counter/2) + " попытки! Победил игрок " + player1);
				}
			break;
		}	
		else {			
			alert("Необходимо ввести число");
			continue;
		}
		
		if (playerNum == player1) {
			playerNum = player2;
		}
		
		else {
			playerNum = player1;
		}
	}
}

function guess() {
	var answer = parseInt(Math.random() * 100);
	var counter = 0;
	
	while (true) {
		
		var userAnswer = prompt(" Введите число от 0 до 100");
		if(userAnswer == null) {
			break;
		}
		userAnswer = parseInt(userAnswer);
		
		if (userAnswer > answer) {
			counter++;
			alert("Загаданное число меньше");			
		}
		else if (userAnswer < answer) {
			counter++;
			alert("Загаданное число больше");
		}
		else if (userAnswer == answer) {
			counter++;
			alert("Вы угадали c " + counter + " попытки!");				
			break;
		}	
		else {			
			alert("Необходимо ввести число");
			continue;
		}	
		
	}
}
			

			
