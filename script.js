class Calculator{
    constructor(calculatorDisplay) {
        this.calculatorDisplay = calculatorDisplay
        this.clearAll();
    }


    clearAll() {
        this.previousValue = '';
        this.currentValue = '';
        this.operation = '';
    }   

    updateDisplay() {
        
        if (this.previousValue !== '' && this.currentValue === ''){
            this.calculatorDisplay.innerText = parseFloat(this.previousValue).toLocaleString();
        } else if (this.currentValue !== '' && this.currentValue !== '. ') {
            this.calculatorDisplay.innerText = parseFloat(this.currentValue).toLocaleString();
        } else {
            this.calculatorDisplay.innerText = this.currentValue;
        }

    }

    chooseNumber(number) {
        if (number === '.' && this.currentValue.includes('.')) return this.currentValue
        else {

            this.currentValue = this.currentValue.toString() + number.toString();
            console.log(`this current value ${this.currentValue}, number ${number}`)
            console.log(`this previous value ${this.previousValue}, number ${number}`)


        }
    }

    calculate() {
        // what if there is previous value but no current value
        const prevNumber = parseFloat(this.previousValue);
        const currNumber = parseFloat(this.currentValue);

        switch (this.operation) {
            case '+':
                this.currentValue = prevNumber + currNumber;
                break
            case '-':
                this.currentValue = prevNumber - currNumber;
                break
            case '*':
                this.currentValue = prevNumber * currNumber;
                break
            case '/':
                if (currNumber > 0) {
                    this.currentValue = prevNumber / currNumber
                } else {
                    this.currentValue = 'Error'
                };
                break
        }   
        
        this.operation = ''
        this.previousValue = ''
    }


    chooseOperation(operation) {      
        if (this.previousValue !== '' && this.currentValue === '') return
        if (this.previousValue !== '') {
            this.calculate();
        }

        this.operation = operation;
        this.previousValue = this.currentValue;
        this.currentValue = '';
    }

    deleteNumber(){
        if (this.currentValue.length > 0) {
            this.currentValue = this.currentValue.slice(0, -1);
        }
    }


}


const calculatorDisplay = document.querySelector('[data-current-result]');
const numberKey = document.querySelectorAll('[data-key]');
const deleteKey = document.querySelector('[data-delete]');
const operationKey = document.querySelectorAll('[data-operation]');
const equalKey = document.querySelector('[data-equal]');
const clearKey = document.querySelector('[data-all-clear]');
const calculator = new Calculator(calculatorDisplay)


numberKey.forEach(key => {
    key.addEventListener('click', () => {
        calculator.chooseNumber(key.innerText);
        calculator.updateDisplay();
    });
})

clearKey.addEventListener('click', () => {
        calculator.clearAll();
        calculator.updateDisplay();
    }
)


operationKey.forEach(key => {
    key.addEventListener('click', () => {
        calculator.chooseOperation(key.innerText);
        calculator.updateDisplay();
    });
})

equalKey.addEventListener('click', () => {
    calculator.calculate();
    calculator.updateDisplay();

})

deleteKey.addEventListener('click', () => {
    calculator.deleteNumber();
    calculator.updateDisplay();
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
