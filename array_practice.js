function duplicates(arr){
    let len = array_length(arr);
    let accum = [];
    let n = 0;
    for(let p = 0; p < len; p= p + 1){
        for(let q = 0; q < len; q = q +1){
            if(arr[p] === arr[q] &&  p < q ){
                accum[n] = arr[p];
                n = n + 1;
                break;
            }
        }
    }
    return accum;
}

