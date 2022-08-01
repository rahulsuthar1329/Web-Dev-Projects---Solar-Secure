const display = document.getElementById("display");
const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const multiply = document.getElementById("multiply");
const divide = document.getElementById("divide");
const cancel = document.getElementById("cancel");
const zero = document.getElementById("zero");
const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const four = document.getElementById("four");
const five = document.getElementById("five");
const six = document.getElementById("six");
const seven = document.getElementById("seven");
const eight = document.getElementById("eight");
const nine = document.getElementById("nine");
const equal = document.getElementById("equal");

let string = "";

plus.addEventListener("click", () => {
  string += "+";
  display.textContent = string;
});
multiply.addEventListener("click", () => {
  string += "*";
  display.textContent = string;
});

minus.addEventListener("click", () => {
  string += "-";
  display.textContent = string;
});

divide.addEventListener("click", () => {
  string += "/";
  display.textContent = string;
});

one.addEventListener("click", () => {
  string += "1";
  display.textContent = string;
});

two.addEventListener("click", () => {
  string += "2";
  display.textContent = string;
});

three.addEventListener("click", () => {
  string += "3";
  display.textContent = string;
});

four.addEventListener("click", () => {
  string += "4";
  display.textContent = string;
});

five.addEventListener("click", () => {
  string += "5";
  display.textContent = string;
});

six.addEventListener("click", () => {
  string += "6";
  display.textContent = string;
});

seven.addEventListener("click", () => {
  string += "7";
  display.textContent = string;
});

eight.addEventListener("click", () => {
  string += "8";
  display.textContent = string;
});

nine.addEventListener("click", () => {
  string += "9";
  display.textContent = string;
});

zero.addEventListener("click", () => {
  string += "0";
  display.textContent = string;
});

cancel.addEventListener("click", () => {
  string = "";
  display.textContent = '0';
});

// Performing operation



equal.addEventListener('click', ()=>{
  display.textContent = eval(string) //if you want to execute the below commands then comment this out
  // const operators = []
  // for(i=0;i<string.length;i++){
  //   if(isOperator(string[i])){
  //     operators.push(string[i])
  //   }
  // }
  
  // const regex = /[\+\-\*\/]/
  // const values = string.split(regex);
  //   idx=0;
  //   left=parseInt(values[idx++]);
  //   for(i=0;i<operators.length;i++){
  //       if(operators[i]=='+'){
  //           left+=parseInt(values[idx++]);
  //       }
  //       if(operators[i]=='-'){
  //           left-=parseInt(values[idx++]);
  //       }
  //       if(operators[i]=='*'){
  //           left*=parseInt(values[idx++]);
  //       }
  //       if(operators[i]=='/'){
  //           left/=parseInt(values[idx++]);
  //       }
  //   }
  //   display.textContent = left;
})

function isOperator(character){
    if(character=='+'||character=='-'||character=='*'||character=='/')
    return true;
    else
    return false;
}