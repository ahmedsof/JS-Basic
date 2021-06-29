function yard(input){
    let prisFor12m = 7.61;
    let toGreening = Number(input[0]);
    let result =toGreening * prisFor12m;
    let discount = result * 0.18;
    let finalePrice = result - discount;
    
    console.log(`The final price is: ${finalePrice} lv.`);
    console.log(`The discount is: ${discount} lv.`);
    }