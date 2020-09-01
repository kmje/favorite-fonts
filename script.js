const textInput = document.querySelector('.custom-text');

function customText(){
    const cardText = document.querySelectorAll('.font-text');
    cardText.forEach( cardNode => cardNode.innerHTML = textInput.value);  
}

function createCards(){
    const fontArray = ["Lora", "Tangerine", "Inconsolata", "Roboto", "Raleway", "Krona One", "Dosis", "Lobster", "Abel", "Caveat"];
    const cards = fontArray.map((card) => {
        return `
        <span class="column">
            <span class="font-card">
                <h2>${card}</h2>
                <p style="font-family:${card}" class="font-text">This is some sample text.</p>
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