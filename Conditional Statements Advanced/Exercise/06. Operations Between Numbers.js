function solve(input) {
    let N1 = Number(input[0]);
    let N2 = Number(input[1]);
    let operator = input[2];

    let result = 0;
    let condition;

    //•	Оператор – един символ измежду: "+", "-", "*", "/", "%"
    if (operator == '+') {
        result = N1 + N2;
        if (result % 2 == 0) {
            condition = 'even'
        }
        else{
            condition = 'odd'
        }
       console.log(`${N1} ${operator} ${N2} = ${result} - ${condition}`); 
    }
    else if (operator == '-') {
        result = N1 - N2;
        if (result % 2 == 0) {
            condition = 'even'
        }
        else{
            condition = 'odd'
        }
       console.log(`${N1} ${operator} ${N2} = ${result} - ${condition}`); 
    }
    else if (operator == '*') {
        result = N1 * N2;
        if (result % 2 == 0) {
            condition = 'even'
        }
        else{
            condition = 'odd'
        }
       console.log(`${N1} ${operator} ${N2} = ${result} - ${condition}`); 
    }
    else if (operator == '/') {
        if (N2 == 0) {
            console.log(`Cannot divide ${N1} by zero`);
        }
        else{
        result = N1 / N2;
        console.log(`${N1} / ${N2} = ${result.toFixed(2)}`);
        }
    }
    else if (operator == '%') {
        if (N2 == 0) {
            console.log(`Cannot divide ${N1} by zero`);
        }
        else{
        result = N1 % N2;
        console.log(`${N1} % ${N2} = ${result}`);
        }
    }
}
solve(["10",
"0",
"%"])




