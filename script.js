


const calculatorDisplay = document.querySelector('[data-current-result]');
const numberKey = document.querySelectorAll('[data-key]');
const deleteKey = document.querySelector('[data-delete]');
const operationKey = document.querySelectorAll('[data-operation]');
const equalKey = document.querySelector('[data-equal]');
const clearKey = document.querySelector('[data-all-clear]');
let previousValue;
let currentValue = '';
let number;
let operation;

function updateDisplay() {
    calculatorDisplay.textContent = currentValue;
}

function clearAll() {
    // clear the display
    previousValue = '';
    currentValue = '';
    operation = '';

}

function chooseNumber(e) {
    number = e.target.dataset.key;
    if (number === '.' && currentValue.includes('.')) return currentValue
    else {
        currentValue = currentValue.toString() + number.toString();
    }
    
}

function calculate() {
   
    prevNumber = parseFloat(previousValue);
    currNumber = parseFloat(currentValue);
    console.log(operation, prevNumber, currNumber);
    switch (operation) {
        case '+':
            currentValue = prevNumber + currNumber;
            return currentValue
        case '-':
            currentValue = prevNumber - currNumber;
            return currentValue
        case '*':
            currentValue = prevNumber * currNumber;
            return currentValue
        case '/':
            currentValue = prevNumber / currNumber;
            return currentValue
    }    
}


function chooseOperation(e) {
    operation = e.target.dataset.operation;
    console.log(operation);
    previousValue = currentValue;
    currentValue = '';
}

function deleteNumber(){
    if (currentValue.length > 0) {
        currentValue = currentValue.slice(0, -1);
    }
}

numberKey.forEach(key => {
    key.addEventListener('click', function(e) {
        chooseNumber(e);
        updateDisplay();
    });
})

clearKey.addEventListener('click', () => {
        clearAll();
        updateDisplay();
    }
)


operationKey.forEach(key => {
    key.addEventListener('click', function(e) {
        chooseOperation(e);
        updateDisplay();
    });
})

equalKey.addEventListener('click', () => {
    calculate();
    updateDisplay();

})

deleteKey.addEventListener('click', () => {
    deleteNumber();
    updateDisplay();
})
// updateDisplay();
// clearAll();
// updateDisplay();
// chooseNumber('333.')
// updateDisplay();
// chooseNumber('.')
// updateDisplay();
// chooseNumber('444')
// updateDisplay();


// [...calculatorButtons].forEach(element => {
//     element.addEventListener('click', function(e) {
//         let userSelection = e.target.innerHTML;
//         let lastElement = userInput.slice(-1)[0];

//         // add selection to the list if it's not c or =
//         if (userSelection === '='){
//             console.log('result');

//         } else if (userSelection === 'c') {
//             calculatorDisplay[0].innerHTML = '';
//             userInput = [];

//         } else if (!(operatorList.includes(userSelection) && userSelection === lastElement)){    
//             // add selection to the list if the last element in the input list is not the operator
//                 userInput.push(userSelection);
//                 calculatorDisplay[0].innerHTML = userInput.join('');

//                 if (userInput.length > 0) {
//                     calculatedValue = userInput.join('').split(reg);
//                     for (let i=0; i < calculatedValue.length; i++) {
//                         currentValue = calculatedValue[i] 
//                     }
//                     console.log(calculatedValue)
//                 }
                
//         } 
//     })
// });
