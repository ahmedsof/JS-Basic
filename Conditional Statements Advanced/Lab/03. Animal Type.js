function solve(input){
    let anunal = input[0];

    switch (anunal) {
        case 'dog':
            console.log('mammal');
            break;
        case 'crocodile':
        case 'tortoise':
        case 'snake':
                console.log('reptile');
            break;
        default:
            console.log('unknown');
            break;
    }
}
solve(["cat"])