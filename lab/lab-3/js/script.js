function loop(){
	var naam = prompt("Wat is je naam?");
	if(naam != "stop"){
		var leeftijd = prompt("Hoe oud ben je");
		if(leeftijd != "stop"){
			document.write("Hallo " + naam + " uw leeftijd is " + leeftijd + "<br>");
			loop();
		}
	}
}
loop();