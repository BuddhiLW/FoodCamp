let selectedDrink = document.getElementsByClassName("drink");
let buyImagesDrink = document.getElementsByClassName("buyDrink");
let showDrink = document.getElementsByClassName("showDrink");

for (var j=0; j < selectedDrink.length; j++){
// Variable responsible to count selected items in one of the rolls
    selectedDrink[j].addEventListener("click", function(){
	if (buyImagesDrink.length > 0){
	    buyImagesDrink[0].classList.remove("buyDrink");
	    showDrink[0].classList.remove("showDrink"); //<--
	}
	this.classList.add("buyDrink");
	this.getElementsByClassName("animation-hidden")[0].classList.add("showDrink"); //<--
    });
};
