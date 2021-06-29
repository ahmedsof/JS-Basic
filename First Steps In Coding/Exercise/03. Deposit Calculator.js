function action(input){
    let deposit = Number(input[0]);
    let timeForDeposit = Number(input[1]);
    let percent = Number(input[2]);
    
    let interestSum = (deposit * percent) / 100;
    let sumofInterest = interestSum / 12;
    let total = deposit + timeForDeposit * sumofInterest;
    
    console.log(total.toFixed(2));
        
    }