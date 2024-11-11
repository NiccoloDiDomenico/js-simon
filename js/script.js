// ELEMENTS
const startBtnElement = document.getElementById("start-btn")
const cpuNumContainerElement = document.getElementById("cpu-num-container")
const userFormElement = document.getElementById("user-form")
const userNumContainerElement = document.getElementById("user-num-container")
const counterElement = document.getElementById("counter")
const checkBtnElement = document.getElementById("check-btn")

console.log(startBtnElement, cpuNumContainerElement, userFormElement, userNumContainerElement, counterElement, checkBtnElement);


// INPUTS
const cpuNumInput = document.querySelectorAll(".cpu-num")
const userNumInput = document.querySelectorAll(".user-num")

console.log(cpuNumInput, userNumInput);


// ESECUZIONE LOGICA
// Start Game
startBtnElement.addEventListener("click", function () {

    // Cpu number
    startBtnElement.classList.add("d-none")
    counterElement.classList.remove("d-none")
    cpuNumContainerElement.classList.remove("d-none")

    // Genera 5 numeri casuali
    let cpuNumbersValues = [];
    for (let i = 0; i < 5; i++) {
        const randomNumbers = Math.floor(Math.random() * 100) + 1;
        // console.log(randomNumbers);
        cpuNumbersValues.push(randomNumbers);
    }
    
    // Assegna i numeri casuali agli input prelevati
    for (let i = 0; i < cpuNumInput.length; i++) {
        if (cpuNumInput[i]) {
            cpuNumInput[i].value = cpuNumbersValues[i]
        }
        
    }
    console.log(`Numeri casuali generati:`, cpuNumbersValues);
    
    // Setto il timer
    let timer = 2;
    console.log(timer);
    
    const intervalID = setInterval(function() {
        counterElement.innerHTML = timer;
        timer--;

        if (timer < 0) {
            // console.log("debug");
            clearInterval(intervalID)

            // User numb
            counterElement.classList.add("d-none")
            cpuNumContainerElement.classList.add("d-none")
            userNumContainerElement.classList.remove("d-none")

            // User form
            userFormElement.addEventListener("click", function() {
                let userNumValues = [];

                for (let i = 0; i < userNumInput.length; i++) {
                    let currentValue = userNumInput[i].value;
                    console.log(currentValue);
                    
                    userNumValues.push(currentValue)
                }
                console.log(userNumValues);
                
            })

        }

    }, 1000);

})
