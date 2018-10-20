function loop(){
var vraag = prompt("Hoeveel tafels wilt u berekenen");
	if(vraag < 1 || vraag > 10){
		loop();
	}

	for(var y = 1; y <= vraag; y++){
		document.write("Tafel van " + y + ":<br>" );
		for(var u = 1; u < 11; u++){
			document.write(y + " * " + u + " = " + y*u + "<br>");
		}
		document.write("<br>");
	}
}
loop();