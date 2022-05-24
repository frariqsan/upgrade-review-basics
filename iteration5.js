function rollDice(numFaces){
    let result = Math.ceil(Math.random()*numFaces);
    return result;
}
console.log("rollDice 12", rollDice(12));
