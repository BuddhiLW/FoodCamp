// var id11 = document.getElementById('id11')
// var id12 = document.getElementById('id12')
// var id13 = document.getElementById('id13')
// var id21 = document.getElementById('id21')
// var id22 = document.getElementById('id22')
// var id23 = document.getElementById('id23')
// var id31 = document.getElementById('id31')
// var id32 = document.getElementById('id32')
// var id33 = document.getElementById('id33')


// input.addEventListener('click', change_display())

// function change_display(){
    
//     footer.style.setProperty('--footer-color', input.value)
// }


let selected = document.getElementsByClassName("selection");
// let activeImages = document.getElementsByClassName("active");
let buyImages = document.getElementsByClassName("buy");

for (var i=0; i < selected.length; i++){
// Variable responsible to count selected items in one of the rolls
    selected[i].addEventListener("click", function(){
	if (buyImages.length > 0){
	    buyImages[0].classList.remove("buy");
	    // this.classList.remove("active");
	}
	this.classList.add("buy");
	// selection_index = selection_index + 1;
    });
};

    // selected[i].addEventListener("mouseover", function(){
    // 	if (activeImages.length > 0){
    // 	    activeImages[0].classList.remove("active");	    
	    
    // 	} else if (this.classList.contains("buy")){
    // 	    this.classList.remove("active");
    // 	    this.classList.add("already-active");
    // 	}
    // 	this.classList.add("active");
	
	// document.getElementById("featured").src = this.src
    // })
