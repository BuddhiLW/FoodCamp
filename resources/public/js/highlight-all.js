// for (var m=0; m < selectedDessert.length; m++){
//     selected"click", function(){
//     if (buyImagesDish.length + buyImagesDrink.length + buyImagesDessert.length == 3){
// 	footerStyle.classList.add("order");
//     }}}
 // else if (buyImagesDish.length + buyImagesDrink.length + buyImagesDessert.length == 3){
 // 	    footerStyle.classList.add("order");
 // 	}

// else if (buyImages.length + buyImagesDrink.length + buyImagesDessert.length == 3){
// 	    footerStyle.classList.add("order");
// 	}
let footerStyle = document.getElementsByClassName("foot");
let footerStyleSpan = document.querySelector(".foot span");


// Listen to, for all selectable options, and if all selectables are selected then, then change footer color 

for (var m=0; m < selectedDessert.length; m++){
    selectedDessert[m].addEventListener("click", function(){
	if (buyImages.length + buyImagesDrink.length + buyImagesDessert.length === 3){
	    footerStyle[0].classList.add("order");
	    footerStyleSpan.innerHTML = "Fechar pedido";
	    // footerStyle.span[0].innerHTML = "Fechar pedido";
	    // footerStyle[0].src = 
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

// const caixa = document.querySelector(".sele");
// caixa.classList.remove("escondigo");
