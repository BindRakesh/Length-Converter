var color = document.getElementById('sel1');
color.addEventListener("change",showColor)
function showColor(){
	var selectedColor= color.value;
	switch(selectedColor){
		case "colorWhite":                        
			$(".color").hide();
			$("#colorWhite").show();
			break;
		case "colorTan":
			$(".color").hide();
			$("#colorTan").show();
			break;
		case "colorYellow":
			$(".color").hide();
			$("#colorYellow").show();
			break;
		case "colorOrange":
			$(".color").hide();
			$("#colorOrange").show();
			break;
		case "colorRed":
			$(".color").hide();
			$("#colorRed").show();
			break;
		case "colorPink":
			$(".color").hide();
			$("#colorPink").show();
			break;
		case "colorPurple":
			$(".color").hide();
			$("#colorPurple").show();
			break;
		case "colorBlue":
			$(".color").hide();
			$("#colorBlue").show();
			break;
		case "colorGreen":
			$(".color").hide();
			$("#colorGreen").show();
			break;
		case "colorBrown":
			$(".color").hide();
			$("#colorBrown").show();
			break;
		case "colorGrey":
			$(".color").hide();
			$("#colorGrey").show();
			break;
		case "colorBlack":
			$(".color").hide();
			$("#colorBlack").show();
			break;
		default:
		// alert("defalut selected"+ selectedColor);

	} 
}