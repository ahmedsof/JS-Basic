function solwe(input){
    let text =input[0];

    if (text == "square")
    {
        let a = Number(input[1]);
        let area = a * a;
        console.log(area.toFixed(3))
    }
    if (text == "rectangle"){
        let a = Number(input[1]);
        let b = Number(input[2]);
        let area = a * b;
        console.log(area.toFixed(3))
    }
    if (text == "circle"){
        let a = Number(input[1]);
        let area = Math.PI * a * a;
        console.log(area.toFixed(3))
    }
    if (text == "triangle"){
        let a = Number(input[1]);
        let b = Number(input[2]);
        let area = (a / 2) * b;
        console.log(area.toFixed(3))
    }
}
solwe(["triangle",
"4.5",
"20"])


