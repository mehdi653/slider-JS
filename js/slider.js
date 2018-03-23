'use strict';   // Mode strict du JavaScript


/*************************************************************************************************/
/* ****************************************** DONNEES ****************************************** */
/*************************************************************************************************/

var btn;
var bar;

var slides = [
        { image: 'images/1.jpg', phrase: 'Street Art'          },
        { image: 'images/2.jpg', phrase: 'Fast Lane'           },
        { image: 'images/3.jpg', phrase: 'Colorful Building'   },
        { image: 'images/4.jpg', phrase: 'Skyscrapers'         },
        { image: 'images/5.jpg', phrase: 'City by night'       },
        { image: 'images/6.jpg', phrase: 'Tour Eiffel la nuit' }
    ];   
var index=0 ;
var index1 = 0 ;
var prevSlider ;
var random = Math.floor();
var play;
var pause ;
var nextSlayer;
var temps ;
var effet;
var effet1;
var effet2;
var dezoom;
var dezoom1;
var dezoom2;
var a ;

/*************************************************************************************************/
	/* ************************************** CODE PRINCIPAL *************************************** */
	/*************************************************************************************************/
	
	 document.addEventListener("keyup", multiFleches);
    document.addEventListener("DOMContentLoaded",main)


/*************************************************************************************************/
/* ***************************************** FONCTIONS ***************************************** */
/*************************************************************************************************/
function main()
{
	refreshSlider();
	installEventHandler('#toggle-toolbar','click',onClickButton);
	installEventHandler('#slider-previous','click',goToPrevious);
    installEventHandler('#slider-random','click',goToRandom);
    installEventHandler('#slider-play','click',goToPlay);
	//multi();
    //multiFleches();
    installEventHandler("#slider-next",'click',goToNext);
    installEventHandler('#Rotation','click',Dezoom);
    installEventHandler('#effetRotation','click',effetCss);
}

function Dezoom ()
{   
	dezoom1 = document.querySelector('img');
	dezoom1.classList.toggle('rotation');
	dezoom2 = document.querySelector('div');
	dezoom2.classList.toggle('rotation');
}
function effetCss()
{
	effet1= document.querySelector('img');
	effet1.classList.toggle('EffetCss');
	effet2= document.querySelector('div');
	effet2.classList.toggle('EffetCss');
}

function multiFleches(e)
{ 
	// e=e parametre undifine utilise window event surtout ancien nav
   	//e=e||window.event;
   	 //which proprité de event //keyCode pour IE
    var key=e.keyCode;       /////?e.which:event.keyCode;
    if (key==32)
    {
    	goToPlay();
    }
    else if (key==39)
    {
    	goToNext();
    }
    else if (key==37)
    {
    	goToPrevious();
    }	
    else if (key==40)
    {
    	goToRandom();
    }
    	
}

/*function multi()
document.onkeypress= function(e)//function e  pour evenement
   { 
    e=e||window.event; //en option pour les nav
    var key=e.which?e.which:event.keyCode;
    if (key==32) goToPlay();
    else if (key==54)goToNext();
    else if (key==52)goToPrevious();
    else if (key==13)goToRandom();
  
	}*/

function goToPlay()
{  
	if(temps)
	{   //arret
	   clearInterval( temps );
       temps=null;
       //valeur undifined
	}
    else {
       temps = setInterval("goToNext()",1000);
       //temps =2.3.4
       
    }
}

function onClickButton()
{
    // La méthode .toggle() va ajouter ou supprimer la classe (tel un interrupteur).
    bar = document.querySelector('ul');
    bar.classList.toggle('hide');
}

function refreshSlider()
{
	var img =document.querySelector("img");
	img.src = slides[index].image;
	var tab2=document.querySelector("p");
	tab2.textContent=slides[index].phrase;	
}

function goToNext()
{
	index++;
	if(index == slides.length)
	{
		index=0;
	}
	refreshSlider();
}

function goToPrevious()
{
	if(index == 0)
	{
		index=slides.length;
	}
	index--;
	refreshSlider();
}



function goToRandom()
{   
	do 
	{
		var rand2 = getRandomInteger(0, slides.length -1); //
	} while(rand2 == index)
		
	index = rand2;
	refreshSlider();
}








