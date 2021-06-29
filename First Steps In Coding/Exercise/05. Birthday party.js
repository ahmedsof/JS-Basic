function action(input){
    let rent = Number(input[0]);
    let torte = rent * 0.20;
    
    let drinks = torte - (torte * 0.45);
    let animator = rent /3;
    
    let result = rent + torte + drinks + animator;
    
    
    console.log(result);
        
    }