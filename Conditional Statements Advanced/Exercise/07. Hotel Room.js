function solve(input) {
    let month = input[0];
    let nights = Number(input[1]);

    let studio = 0;
    let appartment = 0;

    if (month == 'May' | month == 'October') {
        studio = 50;
        appartment = 65;

        if (nights > 7 & nights <= 14) {
            studio = studio * 0.95;
        }
        if (nights > 14) {
            studio = studio * 0.7;
            appartment = appartment * 0.9;
        }
    }
    else if (month == 'June' | month == 'September') {
        studio = 75.2;
        appartment = 68.7;

        if (nights > 14) {
            studio = studio * 0.8;
            appartment = appartment * 0.9;
        }
    }
    else if (month == 'July' | month == 'August') {
        studio = 76;
        appartment = 77;
        if (nights > 14) {
            
            appartment = appartment * 0.9;
        }
    }

    console.log(`Apartment: ${(appartment * nights).toFixed(2)} lv.`);
    console.log(`Studio: ${(studio * nights).toFixed(2)} lv.`);
}
solve(["June",
"14"])


