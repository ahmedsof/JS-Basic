function solve(input){
    let city = input[0];
    let num = Number(input[1]);

    let commission = 0

    switch (city) {
        case 'Sofia':
            if (num >= 0 & num <= 500) {
                commission = num * 0.05;
            }
            else if (num > 500 & num <= 1000) {
                commission = num * 0.07;
            }
            else if (num > 1000 & num <= 10000) {
                commission = num * 0.08;
            }
            else if (num > 10000) {
                commission = num * 0.12;
            }
            break;
            case 'Varna':
                if (num >= 0 & num <= 500) {
                    commission = num * 0.045;
                }
                else if (num > 500 & num <= 1000) {
                    commission = num * 0.075;
                }
                else if (num > 1000 & num <= 10000) {
                    commission = num * 0.1;
                }
                else if (num > 10000) {
                    commission = num * 0.13;
                }
            
            break;
            case 'Plovdiv':
                if (num >= 0 & num <= 500) {
                    commission = num * 0.055;
                }
                else if (num > 500 & num <= 1000) {
                    commission = num * 0.08;
                }
                else if (num > 1000 & num <= 10000) {
                    commission = num * 0.12;
                }
                else if (num > 10000) {
                    commission = num * 0.145;
                }
            
            break;
    }
    if (num < 0 || city != 'Sofia' & city != 'Plovdiv' & city != 'Varna') {
        console.log('error');
    }
    else {
        console.log(commission.toFixed(2));
    }
}
solve(["Varna",
"1000"])






