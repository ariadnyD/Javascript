function criar(){
	var table = document.getElementById("table")
	//pegando os valores indicados pelo usuario no html
	var num = document.getElementById('num').value
	var star = document.getElementById('star').value
	var end = document.getElementById('end').value
	for (var i = star; i <= end; i++) {
		var resul = i*num
		table.innerHTML += "<tr> <td> " + num +" </td>"+ "<td>"+ i +" </td>"+"<td> " +resul+"</td> </tr>";
		console.log(table)
	}
}