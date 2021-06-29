function action(input) {


    let length = Number(input[0]);
    let width = Number(input[1]);
    let height = Number(input[2]);
    let percent = Number(input[3]);

    let volume = length * width * height;
    let totalLiters = volume * 0.001;

    let totalPercent = percent * 0.01;

    let result = totalLiters *(1 - totalPercent);
    console.log(result);

}