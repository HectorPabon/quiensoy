var num='';
confirm("¿¡Estas listo para jugar!?")
var edad = prompt("¿Cuantos años tienes?");
if(edad<13){
	alert("Puedes jugar bajo tu propia responsabilidad");
} 
else {
	alert("¡Vamos Comencemos!")
}

function pregunta1(operacion) {
document.getElementById('preg1').value=num;
var uno = prompt("¿Que animal es?");
if(uno=='zorrillo')
{
	alert("Muy Bien");
} 
else {
	alert("¡Que mal era zorrillo!");
}
}

function pregunta2(operacion) {
document.getElementById('preg2').value=num;
var dos = prompt("¿Que objeto es?");
if(dos=='patineta')
{
	alert("Muy Bien");
} 
else {
	alert("¡Que mal era una patineta!");
}
}
function pregunta3(operacion) {
document.getElementById('preg3').value=num;
var tres = prompt("¿Cual es el resultado de la operacion?");
if(tres==83)
{
	alert("Muy Bien");
} 
else {
	alert("¡Que mal era 83!");
}
}
function pregunta4(operacion) {
document.getElementById('preg4').value=num;
var cuatro = prompt("¿Que animal es?");
if(cuatro=='lemur')
{
	alert("Muy Bien");
} 
else {
	alert("¡Que mal era un Lemur!");
}
}

function pregunta5(operacion) {
document.getElementById('preg5').value=num;
var cinco = prompt("¿Que objeto es?");
if(cinco=='biberon')
{
	alert("Muy Bien");
} 
else {
	alert("¡Que mal era un biberon!");
}
}
function pregunta6(operacion) {
document.getElementById('preg6').value=num;
var seis= prompt("¿Cual es el resultado de la operacion?");
if(seis==6)
{
	alert("Muy Bien");
} 
else {
	alert("¡Que mal era 6!");
}
}

function pregunta7(operacion) {
document.getElementById('preg7').value=num;
var siete= prompt("¿Cual fue tu resultado?");
if(siete==6)
{
	alert("Muy Bien eres un ganador");
} 
else {
	alert("¡Que mal practica mas!");
}
}