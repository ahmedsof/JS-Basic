function solve(input){
    let recordSecond = Number(input[0]);
    let distance = Number(input[1]);
    let timeForMeter = Number(input[2]);

    let time = distance * timeForMeter;
    let addTime = Math.floor(distance / 15) * 12.5;
    let fullTime = time + addTime;

    if (fullTime < recordSecond) {
        console.log(`Yes, he succeeded! The new world record is ${fullTime.toFixed(2)} seconds.`);
    }
    else{
        let need = fullTime - recordSecond;
        console.log(`No, he failed! He was ${need.toFixed(2)} seconds slower.`);
    }
}

solve(["55555.67",
"3017",
"5.03"])





