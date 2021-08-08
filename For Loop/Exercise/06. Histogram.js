function solve(input) {
  let n = Number(input[0]);
  let end = input.length;

  let p1 = 0;
  let p2 = 0;
  let p3 = 0;
  let p4 = 0;
  let p5 = 0;

  for (let i = 1; i < end; i++) {
    let current = input[i];
    if (current < 200) {
      p1++;
    } else if (current >= 200 && current <= 399) {
      p2++;
    } else if (current >= 400 && current <= 599) {
      p3++;
    } else if (current >= 600 && current <= 799) {
      p4++;
    } else if (current >= 800) {
      p5++;
    }
  }

  console.log(((p1 / n) * 100).toFixed(2) + "%");
  console.log(((p2 / n) * 100).toFixed(2) + "%");
  console.log(((p3 / n) * 100).toFixed(2) + "%");
  console.log(((p4 / n) * 100).toFixed(2) + "%");
  console.log(((p5 / n) * 100).toFixed(2) + "%");
}
solve(["7", "800", "801", "250", "199", "399", "599", "799"]);
