function solve(input){
    let houers = Number(input[0]);
    let minutes = Number(input[1]);
   
    minutes += 15;

    if (minutes >= 60) {
        minutes -= 60
        houers ++;
    }
    if (houers >= 24) {
        houers = 0;
    }

    if (minutes < 10) {
        console.log(`${houers}:0${minutes}`);
    }
    else{
        console.log(`${houers}:${minutes}`);
    }

}
solve(["12", "49"])