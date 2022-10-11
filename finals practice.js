function map_arraytree(fun,arr){
    const len = array_length(arr);
    let result = [];
    let n = 0;
    for(let x = 0; x < len; x = x + 1){
        if(!is_array(arr[x])){
            result[n] = fun(arr[x]);
            n = n + 1;
        }
        else{
            result[n] = map_arraytree(fun,arr[x]);
            n = n + 1;
        }
    }
    return result;
}

function accumulate_array(f,init,A){
    const len = array_length(A);
    let result = init;
    for(let x = len - 1; x > -1 ; x = x - 1){
        result = f(A[x],result);
    }
    return result;
}

function circular_shirt(A,n){
    const len = array_length(A);
    const loop = len/2;
    const pos = len - 1;
    for(let x = 0; x < loop; x=x+1){
            const temp = A[x+n];
            A[x+n] = A[x];
            if(x+n+n > pos){
                A[x+n+n-pos]=temp;
            }
            else{
                A[x+2*n] = temp; 
            }
    }
}
const X = [1, 2, 3, 4, 5, 6, 7, 8];
circular_shirt(X, 3);
X;