function solve(input) {
  let budget = Number(input[0]);
  let season = input[1];
  let fishers = Number(input[2]);

  let priceShip = 0;

  if (season == "Spring") {
    priceShip = 3000;
  } else if (season == "Summer") {
    priceShip = 4200;
  } else if (season == "Autumn") {
    priceShip = 4200;
  } else if (season == "Winter") {
    priceShip = 2600;
  }

  if (fishers <= 6) {
    priceShip = priceShip * 0.9;
  } else if ((fishers > 6) & (fishers <= 11)) {
    priceShip = priceShip * 0.85;
  } else if (fishers > 11) {
    priceShip = priceShip * 0.75;
  }

  if ((fishers % 2 == 0) & (season != "Autumn")) {
    priceShip = priceShip * 0.95;
  }

  if (budget >= priceShip) {
    let left = budget - priceShip;
    console.log(`Yes! You have ${left.toFixed(2)} leva left.`);
  } else {
    let need = priceShip - budget;
    console.log(`Not enough money! You need ${need.toFixed(2)} leva.`);
  }
}
solve(["2000", "Winter", "13"]);
