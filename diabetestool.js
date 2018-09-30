window.onload = function() {
//this function iterates through elements name and gets values
function getScore(name) {
		var elements = document.getElementsByName(name);
		for (var i = 0; i < elements.length; i++) {
			if (elements[i].checked) {
				return elements[i].value;
			}
		}
	}	
	
	function getAge() {
		return parseInt(getScore('age'));
	}

	function getBmi() {
		return parseInt(getScore('bmi'));
	}

	function getDiabetes() {
		return parseInt(getScore('diabetes'));
	}

	function getDiet() {
		return parseInt(getScore('diet'));
	}

	function getTotalScore() {
		return getAge() + getBmi() + getDiabetes() + getDiet();
	}

	
	//this function displays/hides message according to risk level
	function showResult(riskId) {
		var riskLevel = document.getElementsByClassName('riskLevel');
		for (var i = 0; i < riskLevel.length; i++) {

			if (riskLevel[i].id == riskId) {
				riskLevel[i].style.display = 'block';
			} else {
				riskLevel[i].style.display = 'none';
			}
		}
	}
	//This function inserts names of values hegher than 10.
	function getHighestRisks() {
		var risks = [];
		if (getAge() >= 10) risks.push('your age');
		if (getBmi() >= 10) risks.push('your high BMI');
		if (getDiabetes() >= 10) risks.push('your genes');
		if (getDiet() >= 10) risks.push('your diet');

		if (risks.length > 0) {
			return '[Your main risk factors are your ' + risks.join(', ') + '.] ';
		} else {
			return '';
		}
	}
	//This is event listner for the tool onsubmit acton.
	var calculatorForm = document.getElementById('form1');
	calculatorForm.onsubmit = function() {
		var riskScore = getTotalScore();
		if (riskScore < 16) {
			showResult('lowRisk');
		} else if (riskScore <= 25) {
			showResult('midRisk');
		} else {
			showResult('hiRisk');
			document.getElementById('mainRisks').innerHTML = getHighestRisks();
		}

		return false;
	};
}
