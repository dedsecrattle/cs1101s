//Sum of first 'n' Natural Numbers


//Recursive Version of the code
function sum(n){
    if (n === 1 ){
        return 1;
    }
    
    else {
        return n + sum(n - 1);
    }
}



//Iterative Version of the Code
function sum_iter(n){
    function helper(m, result){
        return m > n 
                ? result
                    : helper(m + 1, result + m);
}
    return helper(1,0);
}

//Recursive Version of the Code
function factorial(n){
    if (n===1){
        return 1;
    }
    else {
        return n * factorial(n - 1);
    }
}

//Iterative Version of the Code
function factorial_iter(n){
    function helper(m, result){
        return m > n
                ? result
                    : helper(m + 1, result * m);
    }
    return helper(1, 1); 
}


//Lambda Expression 

//Normal Function declarations
function plus4(x) { 
    return x + 4; 
}


//Lambda Expression for the equivalent
const plus_4 = x => x + 4;







