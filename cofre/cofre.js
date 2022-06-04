function validar (){
	var tagsenha = document.getElementById("senha")
	var inputsenha = tagsenha.value;
	if(regra_1(inputsenha) === true){
		if (regra_2(inputsenha) === true){
			if (regra_3(inputsenha) === true) {
				if(regra_4(inputsenha)===true){
				    if (regra_5(inputsenha)===true) {
			            alert("Sua senha foi registrada!")
				    }else{
					    alert("Deve conter no mínimo dois número algébricos")
				    }
			    }else{
			    	alert("Deve conter no mínimo uma letra maiúscula e outra minúscula")
			    }
			}else{
				alert("Deve conter no mínimo dois desses caracteres !,@,#,$")
			}
		}else{
			alert("Deve começar com uma letra(maiúscula ou minúscula)")
		}
	}else{
		alert("Sua senha deve conter entre 8 e 14 caracteres")
	}
}
function regra_1(senha){
	var num = senha.length;
	if(num>=8 && num<=14){
		return true
	}else{
		return false
	}
}
function regra_2(senha){
	var exp = /^[a-z]/ig;
	if(exp.test(senha)){
		return true
	}else{
		return false
	}
}
function regra_3(senha){
	var exp2 = /\!|\@|\#|\$/ig
	var resultado = senha.match(exp2)
	if (resultado === null) {
	    return false
	}else if (resultado.length >= 2){
	    return true
	} else{
	}
}
function regra_4(senha){
	var maius = /[A-Z]/
	var min = /[a-z]/
	if(maius.exec(senha)){
		if(min.exec(senha)){
			return true
		}else{
			return false
		}
	} 
	return false
}
function regra_5(senha){
	var num = /\d{2}/g
	if(num.test(senha) === true){
		return true
	}else{
		return false
	}
}