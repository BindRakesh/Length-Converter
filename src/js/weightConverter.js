var inputKilograms = document.getElementById("inputKilograms");
var inputGrams = document.getElementById("inputGrams");
var inputPounds = document.getElementById("inputPounds");
var inputOunces = document.getElementById("inputOunces");
var inputStones = document.getElementById("inputStones");

// inputStones.addEventListner("input",stonesFun);
// inputOunces.addEventListner("input",ouncesFun);
// inputPounds.addEventListner("input",poundsFun);
// inputGrams.addEventListner("input",gramsFun);
inputKilograms.addEventListener("input",kilogramsFun);

function gramsFun(){
	var intVal = inputGrams.value;
	
}

function kilogramsFun(){
	var intVal = inputKilograms.value;
	inputGrams.value = intVal*1000;
	inputStones.value = intVal*0.1574;
	inputOunces.value = intVal*35.274;
	inputPounds.value = intVal*2.2046;
}
