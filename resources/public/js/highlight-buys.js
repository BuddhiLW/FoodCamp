let selected = document.getElementsByClassName("selection");
let buyImages = document.getElementsByClassName("buy");
let show = document.getElementsByClassName("show");

for (var i=0; i < selected.length; i++){
// Variable responsible to count selected items in one of the rolls
    selected[i].addEventListener("click", function(){
	if (buyImages.length > 0){
	    buyImages[0].classList.remove("buy");
	    show[0].classList.remove("show");
	}
	this.classList.add("buy");
	this.getElementsByClassName("animation-hidden")[0].classList.add("show");

    });

};


var productSelection = classFood => (selection =>
    classFood.forEach.addEventListener("click", toggleBuy(selection)));

var toggleProperty = selection => (property =>
    selection.forEach(element =>
        (selection.length > 0 ?
         selection[0].classList.remove(property) :
         element.classList.add(property))));


			 
