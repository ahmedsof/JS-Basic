function solwe(input){
    let firstSeconds = Number(input[0]);
    let secondSeconds = Number(input[1]);
    let thirdSeconds = Number(input[2]);

    let totalSeconds = firstSeconds + secondSeconds + thirdSeconds;

    let minutes = Math.floor(totalSeconds / 60);
    let seconds = totalSeconds % 60;

    if (seconds < 10){
        console.log(`${minutes}:0${seconds}`);
        
    }
    else{
    console.log(`${minutes}:${seconds}`);
    }
}
solwe(["22", "7", 
"34"])
