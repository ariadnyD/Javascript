function criar(){
	/*var table = document.getElementById("table")
	//pegando os valores indicados pelo usuario no html
	var num = document.getElementById('num').value
	var star = document.getElementById('star').value
	var end = document.getElementById('end').value
	for (var i = star; i <= end; i++) {
		var resul = i*num
		table.innerHTML += "<tr> <td> " + num +" </td>"+ "<td>"+ i +" </td>"+"<td> " +resul+"</td> </tr>";
		console.log(table)
	}
	*/

	//tentando fazer com create elemente
	//pegando os valores indicados pelo usuario no html
	var num = document.getElementById('num').value
	var star = document.getElementById('star').value
	var end = document.getElementById('end').value

	var tabela = document.getElementById("table")
	for(i=star; i<=end; i++){
		var linha = document.createElement("tr")
		var coluna = document.createElement("td")
		var coluna2 = document.createElement("td")
		var coluna3 = document.createElement("td")

		var textlinha = document.createTextNode("")
        linha.appendChild(textlinha)
		tabela.insertBefore(linha, tabela.children[end])

		var textcolu1 = document.createTextNode(num)
		coluna.appendChild(textcolu1)
		linha.insertBefore(coluna, linha.children[0])

		var textcolu2 = document.createTextNode(i)
		coluna2.appendChild(textcolu2)
		linha.insertBefore(coluna2, linha.children[1])

		var conta = i*num
		var textcolu3 = document.createTextNode(conta)
		coluna3.appendChild(textcolu3)
		linha.insertBefore(coluna3, linha.children[2])
	}
}