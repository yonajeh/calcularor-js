var firstNumber = 0;
	var operation = "";
	function m(arg) {
		var actualValue=document.getElementById('screen').value;

		document.getElementById('screen').value = actualValue+arg;
	}

	function plus() {
		firstNumber=document.getElementById('screen').value;
		operation="+";
		c();
	}


	function minus() {
		firstNumber=document.getElementById('screen').value;
		operation="-";
		c();
	}


	function multiple() {
		firstNumber=document.getElementById('screen').value;
		operation="*";
		c();
	}


	function division() {
		firstNumber=document.getElementById('screen').value;
		operation="/";
		c();
	}

	function equlas() {
		var secondNumber=document.getElementById('screen').value;
		var result = "error"
		if (operation==="+") {
			result= parseInt(firstNumber)+parseInt(secondNumber);
		}else if (operation==="-") {
			result= parseInt(firstNumber)-parseInt(secondNumber);
		}else if (operation==="*") {
			result= parseInt(firstNumber)*parseInt(secondNumber);
		}else if (operation==="/") {
			result= parseInt(firstNumber)/parseInt(secondNumber);
		}
		document.getElementById('screen').value='= '+result
	}

	function c() {
		document.getElementById('screen').value=''
	}