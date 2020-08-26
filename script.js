const textInput = document.querySelector('.custom-text');
const cardText = document.querySelector('.card');

function customText(){
    
    cardText.innerHTML = textInput.value;
}
textInput.addEventListener('change', customText);
textInput.addEventListener('keyup', customText);