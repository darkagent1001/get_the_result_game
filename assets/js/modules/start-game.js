export { startGame };
import { checkUserResult } from "./check-user-result.js";

function startGame(){

    let startGameButton = document.querySelector("#start-game");

    startGameButton.addEventListener("click", () => {

        document.body.innerHTML = `
        
            <div class="card w-[350px] my-auto">
                <div class="card-content grid gap-4">
                    <div class="grid items-center grid-cols-5">
                        <span id="equation"></span>
                        <input type="number" id="user-result" class="form-input !text-sm col-span-4 !py-1">
                    </div>
                    <button class="bg-indigo-500 text-white" id="check-result">🤔 Check the result</button>
                </div>
            </div>
        
        `;

        checkUserResult();

    });
    

}