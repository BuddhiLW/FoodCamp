let footerStyle = document.getElementsByClassName("foot");
let footerStyleSpan = document.querySelector(".foot span");
let link = document.querySelector(".footer a");
let combinedVar = buyImages.length + buyImagesDrink.length + buyImagesDessert.length;

// foot style changer function.
function styleChange() {
    if (combinedVar === 3){
	footerStyle[0].classList.add("order");
	footerStyleSpan.innerHTML = "Fechar pedido";
    }
};
//add event listener in all elements, so to make style change be independent of order of layout selection.
for (var m=0; m < selectedDessert.length; m++){
    selectedDessert[m].addEventListener("click", styleChange);
    selected[m].addEventListener("click", styleChange);
    selectedDrink[m].addEventListener("click", styleChange);
};


// Ideas of funtional implementation
// var funcOrder = function(selectVar) {
//     let selectedVar = selectVar;
//     [selectVar][i].addEventListener("click", styleChange());
// };

// var pSelectedDessert = funcOrder(selectedDessert);
// var pSelectedDrink = funcOrder(selectedDrink);
// var pSelected = funcOrder(selected);

// for (var i = 0; i < selected.length; i++) {
//     pSelectedDessert();
//     pSelectedDrink();
//     pSelected();
// }
