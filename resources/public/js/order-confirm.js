let linkFooter = document.querySelector(".footer a");
let backgroundDiv = document.querySelector(".white-container");
let backgroundGreaterDiv = document.querySelector(".container-fc");
let confirmation = document.querySelector(".confirmation");
let confirmationAccept = document.querySelector(".confirmation .confirmation-footer");
let confirmationCancel = document.querySelector(".confirmation .cancel-footer");

linkFooter.addEventListener("click", function(){
    if (footerStyle[0].classList.contains("order")){
	backgroundGreaterDiv.style.backgroundColor = "#fff";
	backgroundDiv.classList.add("white-out");
	confirmation.classList.add("confirmationShow");
    }
});

confirmationAccept.addEventListener("click", function(){
    redirect();
    backgroundGreaterDiv.style.backgroundColor = "#E5E5E5";
    backgroundDiv.classList.remove("white-out");
    confirmation.classList.remove("confirmationShow");  
});

confirmationCancel.addEventListener("click", function(){
 	backgroundGreaterDiv.style.backgroundColor = "#E5E5E5";
	backgroundDiv.classList.remove("white-out");
	confirmation.classList.remove("confirmationShow");   
});
confirmationCancel.addEventListener("click", function(){
 	backgroundGreaterDiv.style.backgroundColor = "#E5E5E5";
	backgroundDiv.classList.remove("white-out");
	confirmation.classList.remove("confirmationShow");   
});

function redirect() {
    var name = prompt("What's your name?");
    var adress = prompt("Ok, now, what is your adress?");
    var total = (27.70).toFixed(2);
    var text =
	"Olá, gostaria de fazer o pedido: \n\
        - Prato: Frango Yin Yang \n\
	- Bebida: Coquinha Gelada \n\
	- Sobremesa: Pudim \n\
        Total: R$ " + total + '\n\ \n\ Nome: '
	+ name + "\n\ Endereço: " + adress;
    var encode = encodeURIComponent(text);
    var wpp = "https://wa.me/5516993401215" + "/?text=" + encode; 
    return location.href = wpp;
}
