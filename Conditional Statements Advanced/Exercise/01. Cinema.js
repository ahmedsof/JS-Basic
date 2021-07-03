function solve(input){
    let type = input[0];
    let r = Number(input[1]);
    let c = Number(input[2]);

    let price = 0;

    switch (type) {
        case 'Premiere':
            price = 12;
            break;
        case 'Normal':
            price = 7.5;
            break;
        case 'Discount':
            price = 5;
            break;
    }
    let total = r * c * price
    console.log(`${total.toFixed(2)} leva`);
}
solve(["Discount",
"12",
"30"])


