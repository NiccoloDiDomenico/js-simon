//  ELEMENTS
const startGameSectionElement = document.getElementById("start-game-section")
const startBtnElement = document.getElementById("start-btn");
const timerElement = document.getElementById("timer");
const cpuNumbersElement = document.getElementById("cpu-numbers");
const userNumbersElement = document.getElementById("user-numbers");
const resultMessageElement = document.getElementById("result-message")

console.log(startGameSectionElement, startBtnElement, timerElement, cpuNumbersElement, userNumbersElement, resultMessageElement);


// INPUTS
const inputsList = document.querySelectorAll("input");

console.log(inputsList);


// GLOBAL VAR
let cpuNumbersArrey = [];


// FUNCTIONS
// getRandomInt() =>
const getRandomInt = (min, max) =>
    Math.floor(Math.random() * (max - min + 1) + min);

// getRandomNumbersInArray() =>
const getRandomNumbersInArray = (min, max, length) => {
    const numsArray = [];
    for (let i = 0; i < length; i++) {
        const randomNum = getRandomInt(min, max);
        numsArray.push(randomNum);
    }
    return numsArray;
};

// printNumbers() =>
const printNumbers = (numbersToShow) => {
    // Mostro i numeri random
    for (let i = 0; i < numbersToShow.length; i++) {
        const curNumber = numbersToShow[i];
        cpuNumbersElement.innerHTML += `<li>${curNumber}</li>`;
    }
};

// startTimer() =>
const startTimer = (start, end) => {
    let counter = start;
    const intervalId = setInterval(() => {
        if (counter >= end) {
            timerElement.innerHTML = counter--;
        } else {
            clearInterval(intervalId);
            showForm();
        }
    }, 1000);
};

// showForm() =>
const showForm = () => {
    cpuNumbersElement.classList.add("d-none")
    timerElement.classList.add("d-none");
    userNumbersElement.classList.remove("d-none");
}

// startGame() =>
const startGame = () => {
    startGameSectionElement.classList.add("d-none")
    cpuNumbersArrey = getRandomNumbersInArray(1, 100, 5)
    console.log(`cpuNumbersArrey:`, cpuNumbersArrey);
    printNumbers(cpuNumbersArrey);
    timerElement.classList.remove("d-none")
    startTimer(4, 0);
};


// GAME LOGIC
startBtnElement.addEventListener("click", startGame);

userNumbersElement.addEventListener("submit", function (event) {
    event.preventDefault();

    const insertedNumbers = [];
    for (let i = 0; i < inputsList.length; i++) {
        const curInput = inputsList[i];
        insertedNumbers.push(parseInt(curInput.value));
    }
    console.log(`userNumberArrey:`, insertedNumbers);

    const correctNumbers = [];
    for (let i = 0; i < insertedNumbers.length; i++) {
        const curNumber = insertedNumbers[i];
        if (cpuNumbersArrey.includes(curNumber)) {
            correctNumbers.push(curNumber);
        }
    }
    console.log(`Numbers guessed:`, correctNumbers);

    // result
    userNumbersElement.classList.add("d-none")
    resultMessageElement.innerHTML = `Hai indovinato ${correctNumbers.length}  numeri: ${correctNumbers.join(", ")}`

})
