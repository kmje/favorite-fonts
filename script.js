const textInput = document.querySelector('.custom-text');

function customText(){
    const cardText = document.querySelectorAll('.font-card');
    cardText.forEach( cardNode => cardNode.innerHTML = textInput.value);  
}

function createCards(){
    const tempFontArray = ["font1", "font2", "font3", "font4", "font5", "font6"];
    const cards = tempFontArray.map((card) => {
        return `
        <span class="column">
            <span class="font-card">
                This is some sample text.
            </span>
            
        </span>
        `;
    });
    
    loadCards.innerHTML = cards;
}

const loadCards = document.querySelector('.font-card-container');
window.onload = createCards;

textInput.addEventListener('change', customText);
textInput.addEventListener('keyup', customText);