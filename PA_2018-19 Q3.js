function count_lower_neighbors(emap, r, c){
    const row = array_length(emap) - 1;
    const column = array_length(emap[0]) -1;
    if(r===0||c===0||is_undefined(emap[r][c])||c===column
            ||r===row){
        return 0;
    }
    else{
        const res = emap[r][c];
        const neightbours = list(emap[r+1][c],emap[r][c+1],
        emap[r-1][c],emap[r][c-1],emap[r+1][c+1],emap[r+1][c-1],
        emap[r-1][c+1],emap[r-1][c-1]);
        const result_list = filter(x=>x<res,neightbours);
        return length(result_list);
    }
}


const emap = [[3, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 2, 3, 1],
[1, 0, 3, 2, 1, 1, 0], [1, 1, 1, 1, 3, 1, 1], [1, 2, 1, 1, 3, 1, 3],
              [1, 1, 1, 1, 4, 1, 1]];
count_lower_neighbors(emap, 1, 7);


function count_peak(emap){
    const row = array_length(emap) - 1;
    const col = array_length(emap[0])-1;
    let result = 0;
    for(let i = 1; i < row; i =i +1 ){
        for(let j = 1; j < col; j = j +1){
            if(count_lower_neighbors(emap,i,j) === 8){
                result = result + 1;
            }
        }
    }
    return result;
}

count_peak(emap);