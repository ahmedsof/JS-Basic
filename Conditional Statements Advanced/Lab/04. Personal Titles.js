function solve(input){
    let years = Number(input[0]);
    let sex = input[1];

    switch (sex) {
        case 'm':
            if(years >= 16){
                console.log('Mr.');
            }
            else if(years < 16 & years > 0){
                console.log('Master');
            }
            break;
        case 'f':
            if(years >= 16){
                console.log('Ms.');
            }
            else if(years < 16 & years > 0){
                console.log('Miss');
            }
            break;
       
    }
}
solve(["25",
"f"])
