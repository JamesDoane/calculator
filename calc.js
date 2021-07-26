const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});



reader.question("What would you like to calculate?", function(input){
	tokens = input.split(' ');
	
	mathSymbol = tokens[0];
	num1 = Number(tokens[1]);
	num2 = Number(tokens[2]);
	if(tokens[0] === '+'){
		let sum = num1 + num2;
		console.log(num1, " + ", num2, " = ", sum);
		reader.close;
	}
	else if(tokens[0] === '-'){
		let sum = num1 - num2;
		console.log(num1, " - ", num2, " = ", sum);
		reader.close;
	}
	else if(tokens[0] === '*'){
		let sum = num1 * num2;
		console.log(num1, " * ", num2, " = ", sum);
		reader.close;
	}
	else if(tokens[0] === '/'){
	let sum = num1 / num2;
	console.log(num1, " / ", num2, " = ", sum);
	reader.close;
	}
	else if(tokens[0] === "sqrt"){
		let sqrt = Math.sqrt(num1);
		console.log("Square root of ", num1, " is " , sqrt);
		reader.close;
	}
	else if(tokens[0] === "^2"){
		let squared = num1*num1;
		console.log(num1, " squared is ", squared);
		reader.close;
	}
	else if(tokens[0] === "^3"){
		let cube = num1 * num1 * num1;
		console.log(num1, " cubed is ");
		reader.close;
	}
	else if(tokens[0] === "^"){
		let power = num2;
		for(let i = 1; i < num2; i++){
			power = power*num2;
		}
		console.log(num1, " to the power of " , num2, " is ", power);
		reader.close;
	}
	else if(tokens[0] === "%"){
		let remain = num1 % num2;
		console.log(num1, " divided by " , num2, " leaves a remainder of " , remain);
		reader.close;
	}
	else{
		console.log("Invalid Entry");
	}



	// This line closes the connection to the command line interface.
	reader.close()

});
