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

	    // animation_Drink[0].classList.remove("show");
	    // buyImagesDrink[0].classList.add("hidde-tag");
	    // let animation_Drink_hide = document.querySelector(".hidde-tag .tag1 img");
	    // animation_Drink_hide.classList.remove("show");
	    // tagAnimation.classList.add("animation");
	

// for (var j=0; j < selectedDrink.length; j++){
// // Variable responsible to count selected items in one of the rolls
//     selectedDrink[j].addEventListener("click", function(){
// 	if (buyImagesDrink.length > 0){
// 	    buyImagesDrink[0].classList.remove("buyDrink", "show-tag");
// 	}
// 	this.classList.add("buyDrink", "show-tag");
// 	let animation_Drink = document.querySelector(".show-tag .tag1 img");
// 	animation_Drink.classList.toggle("show");	
// 	// tagAnimationDrink.classList.remove("animation");
//     });
// };
