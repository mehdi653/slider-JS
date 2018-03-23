function getRandomInteger(min, max)
{
	return Math.floor(Math.random() * (max - min + 1)) + min;
}
//var random = Math.floor();


function installEventHandler(selecteur,type,funct)
{
	 a  = document.querySelector(selecteur);
	 a.addEventListener(type, funct)
	   
	
}
// installEventHandler('#effetRotation','click',effetCss);