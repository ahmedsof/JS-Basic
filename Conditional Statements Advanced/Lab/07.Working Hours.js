function solve(input){
    let num = Number(input[0]);
    let day = input[1];

    switch (day) {
        case 'Monday':
        case 'Tuesday':
        case 'Wednesday':
        case 'Thursday':
        case 'Friday':
        case 'Saturday':
            if (num >= 10 & num < 18) {
                console.log('open')
            }
            else{

                console.log('closed');
            }
            break;
        
        case 'Sunday':
            console.log('closed');
            break;
    
    }
}
solve(["11",
"Sunday"])


