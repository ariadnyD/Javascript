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

	//criando uma variavel para a tag tabela ja criada em meu html
	var tabela = document.getElementById("table")
	tabela.innerHTML = ""
	// dado o "tamanho" da tabela pelo usuario, aqui ira começar a criação de fato da tabela segundo esses parametros
	for(i=star; i<=end; i++){
		var linha = document.createElement("tr")
		//coluna do num que sera repetida em todas as linhas
		var coluna = document.createElement("td")
		//coluna do numero ao qual ele ira ser mult
		var coluna2 = document.createElement("td")
		//coluna que ira armazenar resultado da mult entre as duas colunas
		var coluna3 = document.createElement("td")

		//o texto da linha ficara vazio pois o que sera inserido nela vai ser uma tag e dessa forma não ira da erro no appendChild()
		var textlinha = document.createTextNode("")
        linha.appendChild(textlinha)
        /*com o .insertBefore eu expecifico a localização ao qual eu quero que minha tag fique desse caso toda linha
        criada ficara abaixo da ultima "irma" que estiver em seu pai */
		tabela.insertBefore(linha, tabela.children[end])

		//aqui vai haver a criação de fato das colunas com os seus respectivos valores 
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