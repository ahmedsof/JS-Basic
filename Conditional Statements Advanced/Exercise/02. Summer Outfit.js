function solve(input){
    let grade = Number(input[0]);
    let time = input[1];

    let outfit ;
    let shoes ;

    switch (time) {
        case 'Morning':
            if (grade >= 10  & grade <= 18) {
                outfit = 'Sweatshirt';
                shoes = 'Sneakers';
            }
            else if (grade > 18  & grade <= 24) {
                outfit = 'Shirt'
                shoes = 'Moccasins'

            }
            else if (grade >= 25) {
                outfit = 'T-Shirt'
                shoes = 'Sandals'

            }
            break;
        case 'Afternoon':
            if (grade >= 10  & grade <= 18) {
                outfit = 'Shirt';
                shoes = 'Moccasins';
            }
            else if (grade > 18  & grade <= 24) {
                outfit = 'T-Shirt'
                shoes = 'Sandals'

            }
            else if (grade >= 25) {
                outfit = 'Swim Suit'
                shoes = 'Barefoot'

            }
            
            break;
        case 'Evening':
            if (grade >= 10  & grade <= 18) {
                outfit = 'Shirt';
                shoes = 'Moccasins';
            }
            else if (grade > 18  & grade <= 24) {
                outfit = 'Shirt'
                shoes = 'Moccasins'

            }
            else if (grade >= 25) {
                outfit = 'Shirt'
                shoes = 'Moccasins'

            }
            
            break;
    }
    
    console.log(`It's ${grade} degrees, get your ${outfit} and ${shoes}.`);
}
solve(["28",
"Evening"])


