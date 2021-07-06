function solve(input){
    let text = input[0];
    let sum = 0;

    for (let i = 0; i <= text.length -1; i++) {
        let result = Number(text[i]);
        sum += result
    
    }
    console.log(`The sum of the digits is:${sum}`);
}
solve(["564891"]);