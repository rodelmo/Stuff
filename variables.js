$(document).ready(function() {
	var number = 190;
	var text = "perrito";
	var condition = false;
	var array = [1, 2, "hola", false, 87];
	var object = {a: 5, b: 7};
	
	if(condition){
		alert("the condition is true");
		
	}
	
	$('#number').html(number);
	$('#text').html(text);
	for(var i=0; i < array.length; i++){
		var elemento = array[i];
		$('#array').append(elemento);
	}
	
});