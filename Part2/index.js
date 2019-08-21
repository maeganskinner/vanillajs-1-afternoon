idInput = document.getElementById('idInput');
colorInput = document.getElementById('colorInput');

function setCard(){
    card = document.getElementById(idInput.value);
}
card.style.color = colorInput.value;