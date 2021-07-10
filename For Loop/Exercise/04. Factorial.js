function solve(input){
    let n = Number(input[0]);
    let result = 1;

    for (let i = 1; i <= n; i++){
        result *= i
       
    }
    console.log(result);
}
solve(["8"]);