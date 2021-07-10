function solve(input){
    let text = input[0];
    text = text.split(' ')
    //console.log(text.length);
    
    if (text.length > 10) {
        console.log(`The message is too long to be send! Has ${text.length} words.`);
        
    }else{
        console.log(`The message was sent successfully!`);
    }
}
solve(["This message has exactly eleven words. One more as it's allowed!"])