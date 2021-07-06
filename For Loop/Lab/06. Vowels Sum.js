function solve(input){
    let text = input[0];

let total = 0;
    for (let i = 0; i <= text.length -1; i++) {
        let result = text[i];
        let num = 0;

        switch (result) {
            case 'a':
                num = 1
                break;
            case 'e':
                num = 2
                break;
            case 'i':
                num = 3
                break;
            case 'o':
                num = 4
                break;
            case 'u':
                num = 5
                break;
        }
        total += num;
    }
    console.log(total);
}
solve(["bamboo"]);