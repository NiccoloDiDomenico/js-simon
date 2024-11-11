// ELEMENTS
const startBtnElement = document.getElementById("start-btn")
const cpuNumContainerElement = document.getElementById("cpu-num-container")
const userNumContainerElement = document.getElementById("user-num-container")

console.log(startBtnElement, cpuNumContainerElement, userNumContainerElement);


// INPUTS
const cpuNumInput = document.querySelectorAll(".cpu-num")
const userNumInput = document.querySelectorAll(".user-num")

console.log(cpuNumInput, userNumInput);


// ESECUZIONE LOGICA
// Start Game
startBtnElement.addEventListener("click", function () {

    // Game section
    cpuNumContainerElement.classList.remove("d-none")

    // Genera 5 numeri casuali
    let cpuRandomNumbers = [];
    for (let i = 0; i < 5; i++) {
        const randomNumbers = Math.floor(Math.random() * 100) + 1;
        // console.log(randomNumbers);
        cpuRandomNumbers.push(randomNumbers);
    }
    
    // Assegna i numeri casuali agli input prelevati
    for (let i = 0; i < cpuNumInput.length; i++) {
        if (cpuNumInput[i]) {
            cpuNumInput[i].value = cpuRandomNumbers[i]
        }
        
    }
    console.log(`Numeri casuali generati:`, cpuRandomNumbers);
    
})
