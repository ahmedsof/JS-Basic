function solve(input) {
  let n = Number(input[0]);
  let number = Number(input[1]);

  for (let i = 1; i <= n; i++) {
    let current = Number(input[i]);

    if (current < number) {
      number = current;
    }
    current = 0;
  }

  console.log(number);
}
solve(["2", "100", "99"]);
