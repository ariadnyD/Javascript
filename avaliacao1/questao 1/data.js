function escrever(){
	var data = document.getElementById('dt').value
	console.log(data)
	var ret = data.split("-")
	console.log(ret)
	var mes 
	if (ret[1] == "01") {
		mes = "de janeiro de"
	}
	if (ret[1] == "02") {
		mes = "de fevereiro de"
	}
	if (ret[1] == "03") {
		mes = "de março de"
	}
	if (ret[1] == "04") {
		mes = "de abril de"
	}
	if (ret[1] == "05") {
		mes = "de maio de"
	}
	if (ret[1] == "06") {
		mes = "de junho de"
	}
	if (ret[1] == "07") {
		mes = "de julho de"
	}
	if (ret[1] == "08") {
		mes = "de agosto de"
	}
	if (ret[1] == "09") {
		mes = "de setembro de"
	}
	if (ret[1] == "10") {
		mes = "de outubro de"
	}
	if (ret[1] == "11") {
		mes = "de novembro de"
	}
	if (ret[1] == "12") {
		mes = "de dezembro de"
	}
	var esc = ret[2]+" "+mes+" "+ret[0]
	alert(esc)
}