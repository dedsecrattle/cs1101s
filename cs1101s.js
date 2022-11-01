function all_different(xs){
        function helper(x,xs){
        if(is_null(xs)){
           return true; 
        }
        else if(x === head(xs)){
            return false;
        }
        else{
            return helper(x,tail(xs));
        }
    }
    function helper_2(xs){
        if(is_null(xs)){
            return true;
        }
        else if(head(xs) === false){
            return false;
        }
        else{
            
            return helper_2(tail(xs));
        }
    }
    
    return helper_2(map(x=>helper(x,remove(x,xs)),xs));
        
    
}

function is_valid_toto_set(nums,n,min,max){
 function helper(xs,count){
    if(is_null(xs)){
        return count;
    }
    else{
        if(head(xs) < min || head(xs) > max){
            return helper(tail(xs),count+1);
        }
        else{
            return helper(tail(xs),count);
        }
    }
}
 if(length(nums) !== n){
        return false;
    }
    else{
    if(!all_different(nums)){
        return false;
    }
    else{
        const counts = helper(nums,0);
        if(counts === 0){
            return true;
        }
        else{
            return false;
        }
    }
}
}

function num_of_matches(xs,ys){
    function helper(x,xs){
        if(is_null(xs)){
           return true; 
        }
        else if(x === head(xs)){
            return false;
        }
        else{
            return helper(x,tail(xs));
        }
    }
    const result = map(x=>helper(x,ys),xs);
    return length(filter(x=>x===false,result));
}

function check_winning_group(xs,ys,n){
    function helper(x,xs){
        if(is_null(xs)){
           return true; 
        }
        else if(x === head(xs) || x === n){
            return false;
        }
        else{
            return helper(x,tail(xs));
        }
    }
    const list = map(x=>helper(x,ys),xs);
    return list;
}


// function evaluate_bae(bae){
//     if(is_number(bae)){
//         return bae;
//     }
//     else{
//         const left = evaluate_bae(head(bae));
//         const right = evaluate_bae(head(tail(tail(bae))));
//         const op = head(tail(bae));
//         return op === "+"
//         ? left + right
//         : op === "-"
//         ? left - right
//         : op === "*"
//         ? left*right
//         : op === "/"
//         ? left/right
//         : display("Error");
//     }
// 


function build_bae_list(xs){
    if(is_number(head(xs))){
        return head(xs);
    }
    else if(head(xs) === "("){
        return pair(map(x=>build_bae_list(x),tail(xs)),null);
    }
    else{
        return head(xs);
    }
}

const bae_list = list("(", "(", 2, "+", 5, ")", "*", 100, ")");
display_list(build_bae_list(bae_list));
