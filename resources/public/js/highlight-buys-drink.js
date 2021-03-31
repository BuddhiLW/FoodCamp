let selectedDrink = document.getElementsByClassName("drink");
// let activeImages = document.getElementsByClassName("active");
let buyImagesDrink = document.getElementsByClassName("buyDrink");

for (var j=0; j < selectedDrink.length; j++){
// Variable responsible to count selected items in one of the rolls
    selectedDrink[j].addEventListener("click", function(){
	if (buyImagesDrink.length > 0){
	    buyImagesDrink[0].classList.remove("buyDrink");
	    // this.classList.remove("active");
	}
	this.classList.add("buyDrink");
	// selection_index = selection_index + 1;
    });
};

