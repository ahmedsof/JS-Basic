function solve(input){
    let budget = Number(input[0]);
    let statists = Number(input[1]);
    let priceForClothOneStatist = Number(input[2]);

    const decor = budget * 0.10;
    let clothes = statists * priceForClothOneStatist;

    if (statists >= 150) {
        //•	При повече от 150 статиста,  има отстъпка за облеклото на стойност 10%.
        clothes -=  clothes * 0.10;
    }
   let price = decor + clothes;


// •	Ако парите за декора и дрехите са по малко или равни на бюджета:
// o	"Action!" 
// o	"Wingard starts filming with {останалите пари} leva left."
// Резултатът трябва да е форматиран до втория знак след десетичната запетая.


   if (price > budget) {
       let diferent = price - budget;
       console.log("Not enough money!");
       console.log(`Wingard needs ${diferent.toFixed(2)} leva more.`);
       
   }
   else{
    let left = budget - price;
    console.log("Action!");
    console.log(`Wingard starts filming with ${left.toFixed(2)} leva left.`);
   }
    
}

solve(["9587.88",
"222",
"55.68"])


