	var degreTemp = document.getElementById('DegreInput');
	var farendTemp = document.getElementById('FahrenheitInput');



function welcome(){
	var welcomingMessage = document.getElementById('message');
	const name =prompt("What is your name ?");
	alert("Hello " +name + "!"); 
	welcomingMessage.innerHTML = "Welcome " + name;
}

function convertion(){

	if (degreTemp.value && !farendTemp.value) {
		integerCheck(degreTemp.value);
		farendTemp.value = (degreTemp.value - 32) / 1.8;
		console.log(farendTemp.value);
		degreTemp.value ="";
	}

	else if (farendTemp.value && !degreTemp.value) {
		integerCheck(farendTemp.value);
		degreTemp.value = (farendTemp.value - 32) * 5/9;
		console.log(degreTemp.value);
		farendTemp.value ="";
	}

	else 
		alert("Veuillez vérifier que les champs sont vides avant de démarrer une nouvelle conversion");
}

function clearInput(){
	 degreTemp.value = '';
	 farendTemp.value='';
}

function integerCheck(value){
	let check = false;
	for (i=0; i<value.length; i++) {
		if (value<"0" || value>"9" || value==" " ||  value==".")
			check = true;
	}

	if (check)
		alert("Les caractères entrés sont incorectes");
}
