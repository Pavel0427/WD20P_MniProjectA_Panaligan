var hamButton = document.getElementById("ham-btn");
var heroTag = document.getElementById("hero-tag");

// This code hides/unhides the hero tagline
hamButton.addEventListener("click", function ()
{
    if (heroTag.classList.contains('visually-hidden')  ) {
        heroTag.classList.remove('visually-hidden');
    }
    else {
        heroTag.classList.add('visually-hidden');
    }

});

var chosenPet, pricePet;

//adioptables
var petOne = document.getElementById("name1");
var petTwo = document.getElementById("name2");
var petThree = document.getElementById("name3");
var petOnePrice = document.getElementById("price1");
var petTwoPrice = document.getElementById("price2");
var petThreePrice = document.getElementById("price3");
var nameHere = document.getElementById("namehere");
var priceHere = document.getElementById("pricehere");



var buttonOne = document.getElementById("button1");
var buttonTwo = document.getElementById("button2");
var buttonThree = document.getElementById("button3");

buttonOne.addEventListener("click", function ()
{
    nameHere.textContent = petOne;
    PriceHere.textContent = petOneprice;
});

nameHere.addEventListener("click", function ()
{
    alert('click');
});

buttonTwo.addEventListener("click", function ()
{
    nameHere.textContent = petTwo;
    PriceHere.textContent = petTwoprice;
});
buttonThree.addEventListener("click", function ()
{
    nameHere.textContent = petThree;
    PriceHere.textContent = petThreeprice;
});
 

