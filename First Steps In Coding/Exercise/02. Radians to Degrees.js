function action(input){

    //градус = радиан * 180 / π
    let grade = Math.round(Number(input[0] * 180 / Math.PI))
    console.log(grade);
}