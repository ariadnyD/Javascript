function gerar(){
	div = document.getElementsByClassName('pa')
	for(i=0; i<div.length; i++){
		red_aleatorio = Math.floor(Math.random() * 256)
	    green_aleatorio = Math.floor(Math.random() * 256)
	    blue_aleatorio = Math.floor(Math.random() * 256)

	    cor = "rgb(" + red_aleatorio +", " + green_aleatorio + ", " + blue_aleatorio + ")";
	    console.log(cor)

		div[i].style.backgroundColor = cor
	}	
}
function fundo(){
	
}