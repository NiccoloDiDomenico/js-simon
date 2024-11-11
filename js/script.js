// ELEMENTS
const startBtnElement = document.getElementById("start-btn")
const cpuNumContainerElement = document.getElementById("cpu-num-container")
const userNumContainerElement = document.getElementById("user-num-container")
const counterElement = document.getElementById("counter")

console.log(startBtnElement, cpuNumContainerElement, userNumContainerElement, counterElement);


// INPUTS
const cpuNumInput = document.querySelectorAll(".cpu-num")
const userNumInput = document.querySelectorAll(".user-num")

console.log(cpuNumInput, userNumInput);


// ESECUZIONE LOGICA
// Start Game
startBtnElement.addEventListener("click", function () {

    // Game section
    startBtnElement.classList.add("d-none")
    counterElement.classList.remove("d-none")
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
    
    // Setto il timer
    let timer = 9;
    console.log(timer);
    
    const intervalID = setInterval(function() {
        counterElement.innerHTML = timer;
        timer--;

        if (timer < 0) {
            // console.log("debug");
            clearInterval(intervalID)

        }

    }, 1000);

})
