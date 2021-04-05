let footerStyle = document.getElementsByClassName("foot");
let footerStyleSpan = document.querySelector(".foot span");
let link = document.querySelector(".footer a");
let combinedVar = buyImages.length + buyImagesDrink.length + buyImagesDessert.length;
let selectable = [selected, selectedDessert, selectedDrink];

// foot style changer function.
function styleChange() {
    if (combinedVar === 3){
	footerStyle[0].classList.add("order");
	footerStyleSpan.innerHTML = "Fechar pedido";
    }
};
//add event listener in all elements, so to make style change be independent of order of layout selection.
for (var i = 0; i < selectable.length; i++) {
    for (var j=0; j < selectable[i].length; j++){
        selectable[i][j].addEventListener("click", styleChange);
    };   
}
