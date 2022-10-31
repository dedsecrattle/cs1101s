//PA 2019-2019
//Q1
function make_big_number(number){
    function helper(num){
        if(num===0){
            return null;
        }
        else{
            return pair(num%10,helper(math_floor(num/10)));
        }
    }
    
    
    if(number === 0){
        return list(0);
    }
    else{
       return helper(number);
    }
}
//Q2
function big_int_to_string(bint){
    function helper(bint,count,result){
        if(is_null(bint)){
            return result;
        }
        else{
            return helper(tail(bint),count*10,result+head(bint)*count);
        }
    }
    
    if(head(bint)===0 && length(bint) === 1){
        return 0;
    }
    else{
       return helper(bint,1,0); 
    }
}

//Q3
function helper(xs,carry){
     const sum = head(xs) +carry;
    if(is_null(tail(xs))){
        
        return digits_coverter(sum);
    }
    else{
       
        if(head(xs) + carry >= 10){
     return pair(sum%10,helper(tail(xs),math_floor(sum/10)));
        }
        else{
            return pair(head(xs)+carry,helper(tail(xs),0));
        }
    }
}
function big_int_add(bint1,bint2){
    let x = bint1;
    let y = bint2;
    function helper2(xs,ys,carry){
        if(is_null(xs)){
            return helper(ys,carry);
        }
        else if(is_null(ys)){
            return helper(xs,carry);
        }
        else{
            const sum = head(xs) +head(ys)+carry;
            if(sum>=10){
                 return pair(sum%10,helper2(tail(xs),
                        tail(ys),math_floor(sum/10)));
            }
            else{
                return pair(sum,helper2(tail(xs),tail(ys),0));
            }
            
            
        }
    }
    return helper2(x,y,0);
  
}

//q4

function digits_coverter(x){
    if(x/10 < 1){
        return pair(x,null);
    }
    else{
        return pair(x%10,pair(math_floor(x/10),null));
    }
}

function big_int_mult_by_digit(bint,digit){
   
    function helper(xs,carry){
     const product = head(xs)*digit+carry;
    if(is_null(tail(xs))){
        return digits_coverter(product);
    }
    else{
        if(product >= 10){
            const res = digits_coverter(product);
            return pair(head(res),helper(tail(xs),head(tail(res))));
        }
        else{
            return pair(product,helper(tail(xs),0));
        }
    }
}
    if(digit === 0){
        return list(0);
    }
    else{
    return helper(bint,0);
}

}

//q5
function big_int_mult_by_10_pow_n(bint,n){
    if(n===0){
        return bint;
    }
    else if(head(bint)===0){
        return bint;
    }
    else{
        const first = map(x=>0,enum_list(1,n));
        return append(first,bint);
    }
}
//q6








