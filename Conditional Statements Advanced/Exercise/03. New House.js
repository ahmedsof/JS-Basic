function solve (input){
    let flower = input[0];
    let quantity = Number(input[1]);
    let budget = Number(input[2])

    let price = 0;

    switch (flower) {
        case 'Roses':
            price = 5 * quantity;
            if (quantity > 80) {
                price = price * 0.9;
                
            }
            break;
        case 'Dahlias':
            price = 3.8 * quantity;
            if (quantity > 90) {
                price = price * 0.85;
                
            }
                break;
        case 'Tulips':
            price = 2.8 * quantity;
            if (quantity > 80) {
                price = price * 0.85;
                
            }
            break;
        case 'Narcissus':
            price = 3 * quantity;
            if (quantity < 120) {
                price = price * 1.15;
                
            }
            break;
        case 'Gladiolus':
            price = 2.5 * quantity;
            if (quantity < 80) {
                price = price * 1.20;
                
            }
            break;
    }

    if (budget >= price) {

        let left = budget - price;
        console.log(`Hey, you have a great garden with ${quantity} ${flower} and ${left.toFixed(2)} leva left.`);
    }
    else if (budget < price) {
        let need = price - budget;
        console.log(`Not enough money, you need ${need.toFixed(2)} leva more.`);
    }
    
}
solve(["Narcissus",
"119",
"360"])
