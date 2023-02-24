import { generateEquation } from "./generate-equation.js";
export { checkUserResult };

function checkUserResult(){

    const checkResultButton = document.querySelector("#check-result");
    const userResult = document.querySelector("#user-result");
    const equationElement = document.querySelector("#equation");
    let generatedEquation;

    function equationGenerator(){

        generatedEquation = generateEquation();
        userResult.value = "";
        equationElement.innerText = `${ generatedEquation } =`;

    }

    equationGenerator();

    checkResultButton.addEventListener("click", () => {

        const equationResult = eval(generatedEquation);

        if(userResult.value == equationResult || userResult.value == "infinity"){

            alert(true);

        } else {

            alert(`False. the true answer is ${ equationResult }`);

        }

        equationGenerator();
        
    });

}