var id11 = document.getElementById('id11')
var id12 = document.getElementById('id12')
var id13 = document.getElementById('id13')
var id21 = document.getElementById('id21')
var id22 = document.getElementById('id22')
var id23 = document.getElementById('id23')
var id31 = document.getElementById('id31')
var id32 = document.getElementById('id32')
var id33 = document.getElementById('id33')


input.addEventListener('click', change_display())

function change_display(){
    
    footer.style.setProperty('--footer-color', input.value)
}


