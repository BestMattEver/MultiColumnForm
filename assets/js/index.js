var scriptOut1 =document.querySelector("#scriptOut1");
var scriptOut2 =document.querySelector("#scriptOut2");
//scriptOut1.textContent =" it is Garbage sized.";

//I found this window width discovery solution on http://ryanve.com/lab/dimensions/
//what it seems to be doing is asking the document(ie: your code)'s documentElement(its output on the screen) its width. this is what i think. I could use some clarification here.
var width = document.documentElement.clientWidth;//this DEF gets the screen width...

//console.log(width);
width.addListener(sizeChange);//makes a listener that constantly calls sizeChange to do something. this is good for up to the milisecond page changes, like re-sizing.

function sizeChange()
{alert("inside sizechange");
  if(width<= 320)
  {
    scriptOut2.textContent ="HOLY COW! We're in moble-land!"
  }
  else if(width <= 1024)
  {
    scriptOut1.textContent ="We're in Tablet Territory now!";
  }
  else {
    {
      //do nothing. we good.
    }
  }
}




//----------------BELOW SEEMS TO BE ABLE TO PRINT TO THE SCREEN BASED ON WINDOW SIZE-----------------------
//the problem is you seem to need different listeners for going up to a certain size and down from a certain size. so in total, it would be 4 listeners, 4 media querys, and 4 functions. I think I can do it more elegantly.
/*
//this is adapted from code examples found on sitepoint.com
var mediaQuery = window.matchMedia( "(max-width: 1024px)" );
var mediaQuery2 = window.matchMedia( "(min-width: 1024px)" );
//sooo, it seems that max-width in the above mediaquery statment detects size scaliong DOWN
// and min-width detects size scaling UP.
mediaQuery.addListener(downToTab);

function downToTab()
{if(mediaQuery.matches) //if the mediaquery matches (returns true) the css condition link condition I sent above.
  {scriptOut2.textContent="WE ARE NOW TABLET SIZED!";} //if it does, write something to the screen.
  else {}  //if not do nothing.
}//end goTab
//----------------------------------------------------------------------------------------------------------
*/
