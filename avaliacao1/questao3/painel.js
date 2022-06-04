function cor(){
	var n = Math.floor(Math.random() * 256);
	return n;
}
function gerar(){
	red_aleatorio = cor('')
	green_aleatorio = cor('')
	blue_aleatorio = cor('')

	cor = "rgb(" + red_aleatorio +"," + green_aleatorio + "," + blue_aleatorio + ")";
	div = document.getElementsByClassName('pa')
	for (var i = 6; i >= 1; i--) {
		div[i].style.backgroundColor = cor
	}
	
}