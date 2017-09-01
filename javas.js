// JavaScript Document
function ttt(x){
	document.getElementById("text").innerHTML = document.getElementById("text").innerHTML + x;
	
}

function del(){
	var b = document.getElementById("text").innerHTML;
	var a = document.getElementById("text").innerHTML.length;
	document.getElementById("text").innerHTML = b.substr(0,a-1);
}

function empty(){
	document.getElementById("text").innerHTML = ' ';
}

