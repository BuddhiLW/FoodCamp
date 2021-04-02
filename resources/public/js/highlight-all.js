let footerStyle = document.getElementsByClassName("foot");
let footerStyleSpan = document.querySelector(".foot span");
let link = document.querySelector(".footer a");
// Listen to, for all selectable options, and if all selectables are selected then, then change footer color 

for (var m=0; m < selectedDessert.length; m++){
    selectedDessert[m].addEventListener("click", function(){
	if (buyImages.length + buyImagesDrink.length + buyImagesDessert.length === 3){
	    footerStyle[0].classList.add("order");
	    footerStyleSpan.innerHTML = "Fechar pedido";
	    
	}});
    selected[m].addEventListener("click", function(){
	if (buyImages.length + buyImagesDrink.length + buyImagesDessert.length === 3){
	    footerStyle[0].classList.add("order");
	    footerStyleSpan.innerHTML = "Fechar pedido";
	}});
    selectedDrink[m].addEventListener("click", function(){
	if (buyImages.length + buyImagesDrink.length + buyImagesDessert.length === 3){
	    footerStyle[0].classList.add("order");
	    footerStyleSpan.innerHTML = "Fechar pedido";
	    
	}});
};

