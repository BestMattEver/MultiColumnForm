//var scriptOut1 =document.querySelector("#scriptOut1");
//var scriptOut2 =document.querySelector("#scriptOut2");
//scriptOut1.textContent =" it is Garbage sized.";

var send = document.querySelector("#send")

//these grab all the texbox elements
var first_Name = document.querySelector("#first_Name");
var last_Name = document.querySelector("#last_Name");
var email = document.querySelector("#email");
var bio = document.querySelector("#bio");
var phone = document.querySelector("#phone");
var affiliations = document.querySelector("#affiliations");
var kitty = document.querySelector("#kitty");
var gadget = document.querySelector("#gadget");
var drink = document.querySelector("#drink");
var weapon = document.querySelector("#weapon")
var power = document.querySelector("#power");
var comments = document.querySelector("#comments");

//drop down values grabbed:
var country = document.querySelector("#country");
var occupation = document.querySelector("#occupation");
var talent = document.querySelector("#talent");




send.addEventListener('click', function(){
  //console.log("someone touched me.");
  console.log("First Name: " + first_Name.value);
  console.log("Last Name: " + last_Name.value);
  console.log("E-mail: " + email.value);
  console.log("bio: " + bio.value);
  console.log("Phone Number: " + phone.value);
  console.log("Affiliations: " + affiliations.value);
  console.log("Kitty's Name: " + kitty.value);
  console.log("Favorite Gadget: " + gadget.value);
  console.log("Favorite Drink: " + drink.value);
  console.log("Weapon of Choice: " + weapon.value);
  console.log("Special Power: " + power.value);
  console.log("Comments: " + comments.value);

  console.log("Type of Talent: " + talent.value);
  console.log("Occupation: " + occupation.value);
  console.log("Country: " + country.value); 
});



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



//I found this window width discovery solution on http://ryanve.com/lab/dimensions/
//what it seems to be doing is asking the document(ie: your code)'s documentElement(its output on the screen) its width. this is what i think. I could use some clarification here.
var width = document.documentElement.clientWidth;//this DEF gets the screen width...
//----------------------------------------------------------------------------------------------------------
*/
