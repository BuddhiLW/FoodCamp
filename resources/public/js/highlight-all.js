let footerStyle = document.getElementsByClassName("foot");
let footerStyleSpan = document.querySelector(".foot span");
let link = document.querySelector(".footer a");
let combinedVar = buyImages.length + buyImagesDrink.length + buyImagesDessert.length;

//add event listener in all elements, so to make the style-change independent of order of food selection.
for (var m=0; m < selected.length; m++){
    selected[m].addEventListener("click", function (){
        if (combinedVar === 3){
	    footerStyle[0].classList.add("order");
	    footerStyleSpan.innerHTML = "Fechar pedido";
        }
    });
};

for (var m=0; m < selectedDrink.length; m++){
    selectedDrink[m].addEventListener("click", function (){
        if (combinedVar === 3){
	    footerStyle[0].classList.add("order");
	    footerStyleSpan.innerHTML = "Fechar pedido";
        }
    });
};

for (var m=0; m < selectedDessert.length; m++){
    selectedDessert[m].addEventListener("click", function (){
        if (combinedVar === 3){
	    footerStyle[0].classList.add("order");
	    footerStyleSpan.innerHTML = "Fechar pedido";
        }
    });
};

