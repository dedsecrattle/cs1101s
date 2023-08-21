//Operator Combinations
(3 - (1 + 1/2))/(3 * (2 + 1)*(3 - 1));

//Naming Abstraction
const a = 3 - (1 + 1/2)
const b = 3 * (2 + 1)*(3 - 1)
const num = a/b

//Functional Abstraction
function c_to_f(x){
    return 1.8 * x + 32;
}

//Predicates and Conditional Expressions
function f(x,y){
    return x > y ? x * x : y * y;
}

function f2(x,y,z){
    return x > y 
    ? (x > z ? x * x : z * z)
    : y > z
    ? y * y
    : z * z;
}



