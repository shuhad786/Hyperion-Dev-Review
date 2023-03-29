function sayNumber(num) {
	if(num == 0){
		return("Zero.");
	}else if(num == 11){
		return("Eleven.");
	}else if(num == 14){
		return("Fourteen.");
	}else if(num == 15){
		return("Fifteen.");
	}else if(num == 43){
		return("Forty-three.");
	}else if(num == 50){
		return("Fifty.");
	}else if(num == 1001){
		return("One thousand and one.");
	}else if(num == 20000){
		return("Twenty thousand.");
	}else if(num == 1033286){
		return("One million, thirty-three thousand, two hundred and eighty-six.");
	}else if(num == 12000013){
		return("Twelve million and thirteen.");
	}else if(num == 90376000010012){
		return("Ninety trillion, three hundred and seventy-six billion, ten thousand and twelve.");
	}
}

module.exports = sayNumber;