$(document).ready(function() {
	$("#function1").click(function() {
		dissappearDivs();
	});
	
	$("#function2").click(function() {
		dissappearClass("c1");
	});
	
	$("#function3").click(function() {
		dissappearId("id3");
	});
	
	$("#function4").click(function() {
		appearDivs();
	});
	
	$("#function5").click(function() {
		appearClass("c1");
	});
	
	$("#function6").click(function() {
		appearId("id3");
	});
	
	
});



function dissappearDivs(){
	$("div").fadeOut("slow");
}
function dissappearClass(theClass){
	$(".c1").fadeOut("slow");
}
function dissappearId(theId){
	$("#i3").fadeOut("slow");
}

function appearDivs(){
	$("div").fadeIn("slow");
}
function appearClass(theClass){
	$(".c1").fadeIn("slow");
}
function appearId(theId){
	$("#i3").fadeIn("slow");
}

var x = 1;
var x2 = "perrito";
var x3 = true;
var x4 = false;
var x5 = [4, 9, 14, 2];
var x6 = function() {
	alert("I am x6");
};
var x7 = {a: 1, b:"hola", sayHello: x6 };