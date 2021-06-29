function action(input) {
    let stroeberyPrice = Number(input[0]);
    let raspberriesPrice = stroeberyPrice / 2;
    let orangePrice = raspberriesPrice - (raspberriesPrice * 0.40);
    let bananaPrice = raspberriesPrice - (raspberriesPrice * 0.80);
  
    let bananaKg = Number(input[1]);
    let orangeKg = Number(input[2]);
    let raspberriesKg = Number(input[3]);
    let stroeberyKg = Number(input[4]);
  
    let totalStroebery = stroeberyPrice * stroeberyKg;
    let totalOrange = orangePrice * orangeKg;
    let totalRaspberry = raspberriesPrice * raspberriesKg;
    let totalBanana = bananaPrice * bananaKg;
  
    let result = totalStroebery + totalOrange + totalRaspberry + totalBanana;
    console.log(result);
  
  }