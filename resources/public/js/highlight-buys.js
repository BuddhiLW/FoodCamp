let selectedDish = document.getElementsByClassName("dish");
// let activeImages = document.getElementsByClassName("active");
let buyImagesDish = document.getElementsByClassName("buyDish");

for (var i=0;  i < selectedDish.length; i++){
// Variable responsible to count selected items in one of the rolls
    selectedDish[i].addEventListener("click", function(){
	if (buyImagesDish.length > 0){
	    buyImagesDish[0].classList.remove("buyDish");
	    // this.classList.remove("active");
	}
	this.classList.add("buyDish");
	// selection_index = selection_index + 1;
    });
};

