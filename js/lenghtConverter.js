
  var inputFeet = document.getElementById("inputFeet");
  var inputMeters = document.getElementById("inputMeters");
  var inputInches = document.getElementById("inputInches");
  var inputcm = document.getElementById("inputcm");
  var inputYards = document.getElementById("inputYards");
  var inputKilometers = document.getElementById("inputKilometers");
  var inputMiles = document.getElementById("inputMiles");
  var inputMM = document.getElementById("inputMM");

inputMeters.addEventListener("input",metersFun);
inputMiles.addEventListener("input",milesFun);
inputKilometers.addEventListener("input",kilometersFun);
inputYards.addEventListener("input",yardsFun);
inputcm.addEventListener("input",cmFun);
inputInches.addEventListener("input",inchesFun);
inputFeet.addEventListener("input",feetFun);
inputMM.addEventListener("input",mmFun);

function mmFun(){
  var valNum = document.getElementById("inputMM").value;
    inputFeet.value=(valNum/305).toFixed(3);
    inputcm.value=(valNum/10).toFixed(3);
    inputMeters.value=(valNum/100).toFixed(3);
    inputInches.value=(valNum/25.4).toFixed(2);
    inputYards.value=(valNum/914).toFixed(3);    
    inputKilometers.value=(valNum/1000000).toFixed(6);
    inputMiles.value=(valNum*0.00000062137).toFixed(6);
}


function metersFun(){
  var valNum = document.getElementById("inputMeters").value;
    inputFeet.value=(valNum*3.2808).toFixed(2);
    inputInches.value=(valNum*39.370).toFixed(2);
    inputcm.value=(valNum/0.01).toFixed();
    inputYards.value=(valNum*1.0936).toFixed(2);
    inputKilometers.value=(valNum/1000).toFixed(5);    
    inputMiles.value=(valNum*0.00062137).toFixed(5);
    inputMM.value=(valNum*1000).toFixed(1);
}

function milesFun(){
  var valNum = document.getElementById("inputMiles").value;
    inputFeet.value=(valNum*5280).toFixed();
    inputMeters.value=(valNum/0.00062137).toFixed();
    inputInches.value=(valNum*63360).toFixed();
    inputcm.value=(valNum/0.0000062137).toFixed();
    inputYards.value=(valNum*1760).toFixed();
    inputKilometers.value=(valNum/0.62137).toFixed(2);
    inputMM.value=(valNum*1.609e+6)
}

function kilometersFun(){
  var valNum = document.getElementById("inputKilometers").value;
    inputFeet.value=(valNum*3280.8).toFixed();
    inputMeters.value=(valNum*1000).toFixed();
    inputInches.value=(valNum*39370).toFixed();
    inputcm.value=(valNum*100000).toFixed();
    inputYards.value=(valNum*1093.6).toFixed();
    inputMiles.value=(valNum*0.62137).toFixed(2);   
    inputMM.value=(valNum*1e+6);    
}

function yardsFun(){
  var valNum = document.getElementById("inputYards").value;
    inputFeet.value=(valNum*3).toFixed();
    inputMeters.value=(valNum/1.0936).toFixed(2);
    inputInches.value=(valNum*36).toFixed();
    inputcm.value=(valNum/0.010936).toFixed();
    inputKilometers.value=(valNum/1093.6).toFixed(5);
    inputMiles.value=(valNum*0.00056818).toFixed(5);
    inputMM.value=(valNum*914);
}

function cmFun(){
  var valNum = document.getElementById("inputcm").value;
    inputFeet.value=(valNum*0.032808).toFixed(3);
    inputMeters.value=(valNum/100).toFixed(3);
    inputInches.value=(valNum*0.39370).toFixed(2);
    inputYards.value=(valNum*0.010936).toFixed(3);    
    inputKilometers.value=(valNum/100000).toFixed(6);
    inputMiles.value=(valNum*0.0000062137).toFixed(6);
    inputMM.value=(valNum*10);
}

function inchesFun(){
  var valNum = document.getElementById("inputInches").value;
    inputFeet.value=(valNum*0.083333).toFixed(3);
    inputMeters.value=(valNum/39.370).toFixed(3);
    inputcm.value=(valNum/0.39370).toFixed(2);
    inputYards.value=(valNum*0.027778).toFixed(3);    
    inputKilometers.value=(valNum/39370).toFixed(6);
    inputMiles.value=(valNum*0.000015783).toFixed(6);
    inputMM.value=(valNum*25.4).toFixed(3);   
}

function feetFun(){
  var valNum = document.getElementById("inputFeet").value;
    inputMeters.value=(valNum/3.2808).toFixed(2);
    inputInches.value=(valNum*12).toFixed(2);
    inputcm.value=(valNum/0.032808).toFixed();
    inputYards.value=(valNum*0.33333).toFixed(2);
    inputKilometers.value=(valNum/3280.8).toFixed(5);    
    inputMiles.value=(valNum*0.00018939).toFixed(5); 
    inputMM.value=(valNum*305);
}
