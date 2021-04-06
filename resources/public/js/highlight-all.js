let footerStyle = document.getElementsByClassName("foot");
let footerStyleSpan = document.querySelector(".foot span");
let link = document.querySelector(".footer a");
let counter = buyImages.length + buyImagesDrink.length + buyImagesDessert.length;
let selectable = [selected, selectedDessert, selectedDrink];

var footerChange = foot => counter => message =>
    ( counter === 3 ? (function () {
        foot.classList.add("order");
	message.innerHTML = "Fechar pedido";
    }) : "no");



//add event listener in all elements, so to make style change be independent of order of layout selection.
for (var i = 0; i < selectable.length; i++) {
    for (var j=0; j < selectable[i].length; j++){
        selectable[i][j].addEventListener("click", console.log(selectable[i][j]));
    };   
}

var productSelection = classFood => (selection => property =>
    classFood.forEach.addEventListener("click", toggleProperty(selection)(property)));

var alert =  p => console.log(p);
var selectableListeners = s => s.forEach.addEventListener("click", alert);
var printer = s => s.forEach(alert(s));

//			  footerStyle.getElementsByTagName("span")[0];
