const textInput = document.querySelector('.custom-text');
const defaultText = "Then came the night of the first falling star."
const fontSize = document.querySelector('.font-size-control');
const refreshButton = document.querySelector('#refresh-button');


function customText(){
    const cardText = document.querySelectorAll('.font-text');
    cardText.forEach( cardNode => {
        if(textInput.value == ""){cardNode.innerHTML = defaultText;}
        else{cardNode.innerHTML = textInput.value;}
    });
    
}

function createCards(){
    const fontArray = ["Lora", "Tangerine", "Inconsolata", "Roboto", "Raleway", "Krona One", "Dosis", "Lobster", "Abel", "Caveat"];
      
    const cards = fontArray.map((card) => {
        console.log(card.family);
        
        return `
        <span class="column">
            <span class="font-card">
                <span style="font-size:16px; font-family:Roboto">${card}</span>
                <a href = "#">
                    <img class="add-button" src="/img/add_circle_outline-black-18dp.svg">
                </a>
                <p style="font-family:${card}" class="font-text">${defaultText}</p>
            </span>
            
        </span>
        `
    }).join('');
    
    loadCards.innerHTML = cards; 
    
}

function changeFontSize(){
    if(this.value == "20px"){
       changeFontTo("20px");
    }
    else if(this.value == "24px"){
        changeFontTo("24px");
     }    
    else if(this.value == "32px"){
        changeFontTo("32px");
     }
    else if(this.value == "40px"){
        changeFontTo("40px");
     }
    else {
        console.log("Error: Not an available font size.")
    }
}

function changeFontTo(fontSize){
    const fontText = document.querySelectorAll('.font-text');
    
    fontText.forEach(fontCard => {
        fontCard.style["font-size"] = fontSize;
    }) 
}

function refreshPage(){
    const fontText = document.querySelectorAll('.font-text');
    
    fontText.forEach(fontCard => {
        fontCard.style["font-size"] = "20px";
        fontCard.innerHTML = defaultText;
    })
    
    //TODO: clear text box on reset
    //document.getElementById('custom-text')
   
}

const loadCards = document.querySelector('.font-card-container');
window.onload = createCards();
fontSize.addEventListener('change', changeFontSize);
textInput.addEventListener('change', customText);
textInput.addEventListener('keyup', customText);
refreshButton.addEventListener('click', refreshPage);