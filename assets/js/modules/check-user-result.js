import { generateEquation } from "./generate-equation.js";
export { checkUserResult };

function checkUserResult(){

    const checkResultButton = document.querySelector("#check-result");
    const userResult = document.querySelector("#user-result");
    const equationElement = document.querySelector("#equation");
    let generatedEquation;

    function fullEquationGenerator(){

        generatedEquation = generateEquation();
        userResult.value = "";
        equationElement.innerText = `${ generatedEquation } =`;

    }

    fullEquationGenerator();

    checkResultButton.addEventListener("click", () => {

        const equationResult = Math.floor(eval(generatedEquation));

        if(userResult.value == equationResult || userResult.value == "infinity"){

            alert(true);

        } else {

            alert(`False. the true answer is ${ equationResult }`);

        }

        fullEquationGenerator();
        
    });

}