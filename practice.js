function tribonacci(n){
    return n === 0
    ? 0
    : n === 1
    ? 1
    : n === 2
    ? 1
    : tribonacci(n-1)+tribonacci(n-2)+tribonacci(n-3);
}

function trib_iter(n){
    function iter(a,b,c,count){
        return count === 0
        ? a
        : iter(b,c,a+b+c,count-1);
    }
    return iter(0,1,1,n);
}

function trib_list(n){
    function iter(xs,a,b,c,count){
        return count === 0
        ? pair(a,xs)
        : iter(pair(a,xs),b,c,a+b+c,count-1);
    }
    return reverse(iter(null,0,1,1,n));
}
trib_list(4);

function trib_list_skip(n){
    const xs = filter(x=>x%2===0,enum_list(0,n));
    return map(x=>trib_iter(x),xs);
}

function trib_mem(n){
    const mem = [];
    mem[0] = 0;
    mem[1] = 1;
    mem[2] = 1;
    function helper(n){
        if(!is_undefined(mem[n])){
            return mem[n];
        }
        else{
            const result = helper(n-1)+helper(n-2)+helper(n-3);
            mem[n] = result;
            return result;
        }
    }
    return helper(n);
}



