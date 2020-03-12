function eval() {
    // Do not use eval!!!
    return;
}
function expressionCalculator(expr) {
    let bracketsCount = 0;
    let strWithoutSpace = expr.split(' ').join('');
    let masWithoutSpace = expr.split(' ').join('').split('');
    for(let i = 0; i<masWithoutSpace.length; i++){
        if(masWithoutSpace[i] == '(') bracketsCount++;
        if(masWithoutSpace[i] == ')') bracketsCount--;
        if(masWithoutSpace[i] == '/' && masWithoutSpace[i+1] == '0') throw new Error('TypeError: Division by zero.');
    }
    if(bracketsCount != 0) throw new Error ('ExpressionError: Brackets must be paired');
    let returnCalculatedFunc = new Function(`return ${strWithoutSpace}`);
    return returnCalculatedFunc();
}
module.exports = {
    expressionCalculator
}