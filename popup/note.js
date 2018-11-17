function save() {
	x = document.getElementById("inputText");	
	toWrite = x.value;
	inKey = document.URL;
	
	localStorage.setItem(inKey,toWrite);
}

function readV () {
	x = document.getElementById("inputText")
	temp = localStorage.getItem(document.URL)
	x.value = temp  
}


