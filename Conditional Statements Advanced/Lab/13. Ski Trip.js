function solve(input){
    const days = Number(input[0]);
    let type = input[1];
    let feedback = input[2];

    let priceRoom = 18 * (days - 1);
    let priceAppartament = 25 * (days - 1);
    let pricePresident = 35 * (days- 1);

    switch (type) {
        case 'apartment':
        if (days <= 10) {
            priceAppartament = priceAppartament * 0.7;
            
        }
        else if (days > 10 & days <= 15){
            priceAppartament = priceAppartament * 0.65;
        }
        else if (days > 15) {
            priceAppartament = priceAppartament * 0.5;
            
        }
            
            break;
        case 'president apartment':
        if (days <= 10) {
            pricePresident = pricePresident * 0.9;
            
        }
        else if (days > 10 & days <= 15){
            pricePresident = pricePresident * 0.85;
        }
        else if (days > 15) {
            pricePresident = pricePresident * 0.8;
            
        }
            break;

    }
    switch (feedback) {
        case 'positive':
        priceRoom += priceRoom * 0.25;
        priceAppartament += priceAppartament * 0.25;
        pricePresident += pricePresident * 0.25;
            
            break;
        case 'negative':
        priceRoom = priceRoom * 0.9;
        priceAppartament = priceAppartament * 0.9;
        pricePresident = pricePresident * 0.9;

            break;
    
       
    }

    if (type == "room for one person") {
        console.log(priceRoom.toFixed(2));
        
    }
    else if (type == "apartment") {
        console.log(priceAppartament.toFixed(2));
    }
    else if (type == "president apartment") {
        console.log(pricePresident.toFixed(2));
        
    }
    
}

solve(["2",
"apartment",
"positive"])





