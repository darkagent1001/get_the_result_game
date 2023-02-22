const userResult = document.querySelector("#user-result");
const calculateButton = document.querySelector("#calculate");
const mathOperator = document.querySelector("#math-operator");
let currentOperator;

function generateNum(){

    return parseInt(Math.random() * 10);
    
}

function generateOperator(){

    return `${generateNum()}+${generateNum()}`;

}

function generateOperator2(){

    currentOperator = generateOperator();
    mathOperator.innerText = currentOperator + "=";

}

generateOperator2();

calculateButton.addEventListener("click", () => {

    if(userResult.value == eval(currentOperator)){

        alert(true);

    } else {

        alert(false);
        
    }

    generateOperator2();

});