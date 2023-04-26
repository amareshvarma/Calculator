


class Calculator {
    constructor(previousOperand,currentOperand){
        this.previousOperandText = previousOperand
        this.currentOperandtext = currentOperand
        this.clear()
    }

    clear(){
        this.currentOperand='';
        this.previousOperand='';
        this.operation=undefined
    }
    
    delete(){
     this.currentOperand = this.currentOperand.toString().slice(0,-1);
    }

    appendNumber(number){
        if(number === "." && this.currentOperand.includes(".")) return
        this.currentOperand = this.currentOperand.toString() + number.toString()
    }

    chooseOperation(operation){
       if(!this.currentOperand) return;
       if(this.previousOperand!==''){
        this.compute();
       }
        this.previousOperand = this.currentOperand;
        this.currentOperand = '';
        this.operation=operation;
       
       
    }

    compute(){
let computation
const prev = parseFloat(this.previousOperand);
const current= parseFloat(this.currentOperand);
if(isNaN(prev) || isNaN(current)) return

switch (this.operation) {
  case "+":
    computation = prev + current;
    break;
  case "-":
    computation = prev - current;
    break;
  case "*":
    computation = prev*current;
    break;
  case '/':
    computation = prev/current;
    break;
    default:
        return
}
    this.currentOperand = computation
    this.operation=undefined;
    this.previousOperand = ''

}

    updateDisplay(){

        this.currentOperandtext.innerText = this.currentOperand
        if(this.operation !=null){
          this.previousOperandText.innerText = `${this.previousOperand}${this.operation}`;
        }
        else{
            this.previousOperandText.innerText=''
        }
        

    }
}


const numberButtons = document.querySelectorAll("[data-number]");
const operationsButtons = document.querySelectorAll("[data-operation]");
const equalsButton = document.querySelector("[data-equals]");
const deleteButton = document.querySelector("[data-delete]");
const allClearButton = document.querySelector("[data-all-clear]");
const previousOperand = document.querySelector("[data-previous-operand]");
const currentOperand = document.querySelector("[data-current-operand]");

const calculator = new Calculator(previousOperand,currentOperand);

numberButtons.forEach(button => {
    button.addEventListener('click',()=>{
        console.log("clicked")
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay()
    })
})

operationsButtons.forEach(button => {
    button.addEventListener('click',()=>{
        calculator.chooseOperation(button.innerText);
        calculator.updateDisplay();
    })
})

equalsButton.addEventListener('click',()=>{
calculator.compute();
calculator.updateDisplay();
})

allClearButton.addEventListener('click',()=>{
    calculator.clear();
    calculator.updateDisplay();
})

deleteButton.addEventListener('click',()=>{
    calculator.delete();
    calculator.updateDisplay();
})

