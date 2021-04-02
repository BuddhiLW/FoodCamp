let selectedDessert = document.getElementsByClassName("dessert");
let buyImagesDessert = document.getElementsByClassName("buyDessert");
let showDessert = document.getElementsByClassName("showDessert");

for (var k=0; k < selectedDessert.length; k++){
    // Variable responsible to count selected items in one of the rolls
    selectedDessert[k].addEventListener("click", function(){
	if (buyImagesDessert.length > 0){
	    buyImagesDessert[0].classList.remove("buyDessert");
	    showDessert[0].classList.remove("showDessert");
	}
	this.classList.add("buyDessert");
	this.getElementsByClassName("animation-hidden")[0].classList.add("showDessert");
    });
};

