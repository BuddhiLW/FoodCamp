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

for (var i=0; i < selectedDrink.length; i++){
    selectedDrink[i].addEventListener("click", function (){
        if (combinedVar === 3){
	    footerStyle[0].classList.add("order");
	    footerStyleSpan.innerHTML = "Fechar pedido";
        }
    });
};

for (var j=0; j < selectedDessert.length; j++){
    selectedDessert[j].addEventListener("click", function (){
        if (combinedVar === 3){
	    footerStyle[0].classList.add("order");
	    footerStyleSpan.innerHTML = "Fechar pedido";
        }
    });
};

