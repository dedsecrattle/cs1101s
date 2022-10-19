
function table(n){
    let result = [];
    let row = 1;
    let column = 1;
    for(let x = 0; x < n; x = x + 1){
        result[x] = [];
        for(let y = 0; y < 10; y = y +1 ){
            result[x][y] = row * column;
            column = column + 1;
        }
        row = row + 1;
        column = 1;
    }
    return result;
}

table(12);