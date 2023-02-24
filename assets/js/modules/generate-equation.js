export { generateEquation };

function generateEquation(){

    const operators = ["+", "-", "*", "/"];

    let mathEquation = `${parseInt(Math.random() * 10)} ${operators[parseInt(Math.random() * operators.length)]} ${parseInt(Math.random() * 10)}`;
    return mathEquation;

}
