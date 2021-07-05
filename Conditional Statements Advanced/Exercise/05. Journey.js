function solve(input) {
    let budget = Number(input[0]);
    let season = input[1];

    let destination;
    let campOrHotel;

    if (budget <= 100) {
        destination = 'Bulgaria';
        if (season == 'summer') {
            campOrHotel = 'Camp';
            budget = budget * 0.3;
        }
        else if (season == 'winter') {
            campOrHotel = 'Hotel';
            budget = budget * 0.7;
        }
    }
    else if (budget > 100 & budget <= 1000) {
        destination = 'Balkans';
        if (season == 'summer') {
            campOrHotel = 'Camp';
            budget = budget * 0.4;
        }
        else if (season == 'winter') {
            campOrHotel = 'Hotel';
            budget = budget * 0.8;
        }
    }
    else if (budget > 1000) {
        destination = 'Europe';
        campOrHotel = 'Hotel'
        budget = budget * 0.9;
        }
    
    console.log(`Somewhere in ${destination}`);
    console.log(`${campOrHotel} - ${budget.toFixed(2)}`);

    
}
solve(["1500", "summer"])