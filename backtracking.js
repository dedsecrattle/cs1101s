// TASK 1

function max(arr,x,y){
    const len = array_length(arr);
    let max = 0;
    let pos = 0;
    for(let i = x; i < y + 1; i =i +1){
        if(max < arr[i]){
            max = arr[i];
            pos = i;
        }
    }
    return pair(pos,max);
}

function max_flies_to_eat(tile_flies) {
    const len = array_length(tile_flies);
    const len2 = array_length(tile_flies[0]);
    const first = max(tile_flies[0],0,len2-1);
    function helper(m,x,result){
        if(m > len - 1){
            return result;
        }
        else{
           if(x-1 < 0){
               const a = helper(m+1,x,result+tile_flies[m][x]);
               const b = helper(m+1,x+1,result + tile_flies[m][x+1]);
               return a > b
               ? a
               : b;
           }
           else if(x+1 > len2-1){
               const a = helper(m+1,x-1,result+tile_flies[m][x-1]);
               const b = helper(m+1,x,result+tile_flies[m][x]);
               return a > b
               ? a
               : b;
           }
           else{
               const b = helper(m+1,x,result+tile_flies[m][x]);
               const a = helper(m+1,x-1,result+tile_flies[m][x-1]);
               const c = helper(m+1,x+1,result + tile_flies[m][x+1]);
               if(a > b){
                   return a > c
                   ? a
                   : c;
               }
               else{
                   return b > c
                   ? b
                   : c;
               }
           }
        }
        
}
return helper(1,head(first),tail(first));
}

// TEST:
const tile_flies = [[100, 1, 7, 4, 2],
                    [2, 1, 3, 1, 1],
                    [1, 2, 2, 1, 100],
                    [2, 2, 1, 5, 3],
                    [2, 1, 4, 4, 4],
                    [5, 7, 2, 5, 1]];

max_flies_to_eat(tile_flies); 