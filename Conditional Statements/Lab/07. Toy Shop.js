function solwe (input){

    const pusel = 2.60;
    const doll = 3;
    const bear = 4.10;
    const minion = 8.20;
    const truck = 2;

    let priseExcursion = Number(input[0]);

    let puselCount = Number(input[1]);
    let dollCount = Number(input[2]);
    let bearlCount = Number(input[3]);
    let minionlCount = Number(input[4]);
    let truklCount = Number(input[5]);

    let puselPrise = puselCount * pusel;
    let dollPrise = dollCount * doll;
    let bearPrise = bearlCount * bear;
    let minionlPrise = minionlCount * minion;
    let truckPrise = truklCount * truck;
    
    let totalPrise = puselPrise + dollPrise + bearPrise + minionlPrise + truckPrise;
    
    let toysCount = puselCount + dollCount + bearlCount + minionlCount + truklCount;


    if (toysCount >= 50) {
        totalPrise *= 0.75;
    }

    totalPrise *= 0.9;

    if (totalPrise >= priseExcursion) {
        let moneyLeft = totalPrise - priseExcursion;

        console.log(`Yes! ${moneyLeft.toFixed(2)} lv left.`);
    }
    else{
        let moneyNeed = priseExcursion - totalPrise;

        console.log(`Not enough money! ${moneyNeed.toFixed(2)} lv needed.`);
    }
}
solwe(["320", "8", "2", "5", "5", "1"])