function action(input) {
    let torte = 45;
    let gofrete = 5.8;
    let pancacke = 3.2;
  
    let days = Number(input[0]);
    let coocks = Number(input[1]);
  
    let torteCount = Number(input[2]);
    let gofreteCount = Number(input[3]);
    let pancackeCount = Number(input[4]);
  
    let torteOneDay = torteCount * torte;
    let gofreteOneDay = gofreteCount * gofrete;
    let pancackeOneDay = pancackeCount * pancacke;
  
    let totalSumForOneDay =
      (torteOneDay + gofreteOneDay + pancackeOneDay) * coocks;
  
    let totalSum = totalSumForOneDay * days;
    let expense = totalSum / 8;
  
    let result = totalSum - expense;
  
    console.log(result);
  }