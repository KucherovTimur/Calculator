document.getElementById('plus').onclick=function(){
	var answer = parseInt(document.getElementById('number1').value)+ parseInt(document.getElementById('number2').value);
	document.querySelector('h3').innerHTML=answer;
}
document.getElementById('minus').onclick=function(){
	var answer = parseInt(document.getElementById('number1').value)- parseInt(document.getElementById('number2').value);
	document.querySelector('h3').innerHTML=answer;
}
document.getElementById('multiply').onclick=function(){
	var answer = parseInt(document.getElementById('number1').value)* parseInt(document.getElementById('number2').value);
	document.querySelector('h3').innerHTML=answer;
}
document.getElementById('divide').onclick=function(){
	var answer = parseInt(document.getElementById('number1').value)/ parseInt(document.getElementById('number2').value);
	document.querySelector('h3').innerHTML=answer;
}