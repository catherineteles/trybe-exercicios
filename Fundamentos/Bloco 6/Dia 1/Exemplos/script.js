// SELETORES
const INPUT_TEXT = document.querySelector("#input-text");
const INPUT_CHECKBOX = document.querySelector("#input-checkbox");
const HREF_LINK = document.querySelector("#href");

function getUserValue(event){
    event.preventDefault();
}

HREF_LINK.addEventListener('click', getUserValue);
