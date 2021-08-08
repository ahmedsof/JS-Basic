function solve(input) {
  let N1 = Number(input[0]);
  let N2 = Number(input[1]);

  for (let i = N1; i <= N2; i += 4) {
    console.log(i);
  }
}
solve(["1584", "1597"]);
