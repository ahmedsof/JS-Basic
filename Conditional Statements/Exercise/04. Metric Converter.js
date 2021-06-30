function solwe(input){
    let numForConvert = Number(input[0]);
    let in_ = input[1];

    let out = input[2];    

    if (in_ == "mm" & out == "m") {
        let result = numForConvert / 1000
        console.log(result.toFixed(3));
    }
    else if (in_ == "m" & out == "cm") {
        let result = numForConvert * 100
        console.log(result.toFixed(3))
    }
    else if (in_ == "cm" & out == "mm") {
        let result = numForConvert * 10
        console.log(result.toFixed(3));
    }
    else if (in_ == "mm" & out == "cm") {
        let result = numForConvert / 10
        console.log(result.toFixed(3));
    }
    else if (in_ == "cm" & out == "m") {
        let result = numForConvert / 100
        console.log(result.toFixed(3))
    }
    else if (in_ == "m" & out == "mm") {
        let result = numForConvert * 1000
        console.log(result.toFixed(3));
    }

}
solwe(["3500"])