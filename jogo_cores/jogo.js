function gerar(){
	var n = Math.floor(Math.random() * 256);
	return n;
}
function formar(){
	var cor =" ("+ gerar() +","+ gerar() +","+ gerar() +")"
	return cor;
}
function mostrar(){
	var visor = document.getElementById('visor')
	visor.innerHTML = formar();
}