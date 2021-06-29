function action(input){
    let pages = Number(input[0]);
    let readPagesForhouer = Number(input[1]);
    let days = Number(input[2]);
    
    let timeForBook = pages / readPagesForhouer;
    let result = timeForBook / days;
    
    console.log(result);
        
    }