const stateSelect = document.getElementById('state');
let statesList = ["AC", "AL", "AM", "AP", "BA", "CE", "DF", "ES", "GO", "MA", "MT", "MS", "MG", "PA", "PB", "PR", "PE", "PI", "RJ", "RN", "RO", "RS", "RR", "SC", "SE", "SP", "TO"];

for(let index = 0; index < statesList.length; index +=1){
    let states = document.createElement('option');
    states.innerText = statesList[index];
    states.value = statesList[index];
    stateSelect.appendChild(states);
}