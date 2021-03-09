var inputKilograms = document.getElementById("inputKilograms");
var inputGrams = document.getElementById("inputGrams");
var inputPounds = document.getElementById("inputPounds");
var inputOunces = document.getElementById("inputOunces");
var inputStones = document.getElementById("inputStones");

inputStones.addEventListener("input",stonesFun);
inputOunces.addEventListener("input",ouncesFun);
inputPounds.addEventListener("input",poundsFun);
inputGrams.addEventListener("input",gramsFun);
inputKilograms.addEventListener("input",kilogramsFun);

function stonesFun(){
	var intVal = inputStones.value;
	inputPounds.value = intVal*14;	
	inputKilograms.value = intVal/0.15747;	
	inputOunces.value = intVal*224;
	inputGrams.value = intVal/0.00015747;

}

function ouncesFun(){
	var intVal = inputOunces.value;
	inputPounds.value = (intVal*0.0625).toFixed(3);
	inputKilograms.value = (intVal/35.274).toFixed(3);
	inputGrams.value = (intVal/0.035274).toFixed(3);
	inputStones.value = (intVal*0.0044643).toFixed(3);

}

function poundsFun(){
	var intVal = inputPounds.value;
	inputKilograms.value = (intVal/2.2046).toFixed(3);
	inputOunces.value = intVal*16;
	inputGrams.value = (intVal/0.0022046).toFixed(3);	
	inputStones.value = (intVal*0.071429).toFixed(3);
}

function gramsFun(){
	var intVal = inputGrams.value;
	inputPounds.value = (intVal*0.0022046).toFixed(3);
	inputKilograms.value = intVal/1000;
	inputStones.value = (intVal*0.00015747).toFixed(3);
	inputOunces.value = (intVal*0.035274).toFixed(3);	
}

function kilogramsFun(){
	var intVal = inputKilograms.value;
	inputGrams.value = intVal*1000;
	inputStones.value = (intVal*0.1574).toFixed(3);
	inputOunces.value = (intVal*35.274).toFixed(3);
	inputPounds.value = (intVal*2.2046).toFixed(3);
}
