function solve(input){
    let first = Number(input[0]);
    let second = Number(input[1]);
    let sum = 0;
    let numString = '';

    for (let i = first; i <= second; i++) {

        if (i % 9 == 0) {
            sum += i;
            numString += i + '\n';
        }
        
    
    }
    console.log(`The sum: ${sum}`);
    console.log(numString);
}
    
solve(["100", "200"]);