//Q1-A
function is_nucleobase(string){
    return string === "A"
    ? true
    : string === "G"
    ? true
    : string === "T"
    ? true
    : string === "C"
    ? true
    : false;
}
//Q1-B
function is_dna_strand(xs){
    const filtered = filter(x=>is_nucleobase(x),xs);
    return length(xs) === length(filtered);
}
//Q1-C
function combine(xs){
    return accumulate((x,y)=>append(x,y),null,xs);
}
//Q1-D
function repair(xs){
    return map(x=> x==="8" ? x = "G" :x,xs);
}
//Q1-E
function gene_start(xs){
    if(is_null(xs)){
        return null;
    }
    else if(head(xs) === "A"){
        if(is_null(tail(xs)) || is_null(tail(tail(xs)))){
            return null;
        }
        else{
            return head(tail(xs)) === "T" && head(tail(tail(xs))) === "G"
            ? tail(tail(tail(xs)))
            : gene_start(tail(xs));
        }
    }
    else{
        return gene_start(tail(xs));
    }
}
//Q1-F


function gene_end(xs){
    
let result = null;
function helper(xs){
    return (head(xs) === "G" || head(xs) === "A") && (head(tail(xs)) === "G"
        || head(tail(xs)) === "A");
}
    function helper_2(xs){
    if(is_null(xs)){
        return null;
    }
    else if(head(xs) === "T"){
    if(is_null(tail(xs)) || is_null(tail(tail(xs)))){
       return null;
    }
    else{
         if(head(tail(xs)) === "G" && head(tail(tail(xs))) === "G"){
            result = pair(head(xs),result);
            return helper_2(tail(xs));
        }
        else if(helper(tail(xs))){
            return list(reverse(result));
        }
        else{
            result = pair(head(xs),result);
            return helper_2(tail(xs));
        }
    }
    }

    else{
        result = pair(head(xs),result);
        return helper_2(tail(xs));
    }

}
return helper_2(xs);

}
//Q1-G
function termination(xs){
let result = null;
function helper(xs){
    return (head(xs) === "G" || head(xs) === "A") && (head(tail(xs)) === "G"
        || head(tail(xs)) === "A");
}
    function helper_2(xs){
    if(is_null(xs)){
        return null;
    }
    else if(head(xs) === "T"){
    if(is_null(tail(xs)) || is_null(tail(tail(xs)))){
       return null;
    }
    else{
         if(head(tail(xs)) === "G" && head(tail(tail(xs))) === "G"){
            result = pair(head(xs),result);
            return helper_2(tail(xs));
        }
        else if(helper(tail(xs))){
            return pair(reverse(result),tail(tail(tail(xs))));
        }
        else{
            result = pair(head(xs),result);
            return helper_2(tail(xs));
        }
    }
    }

    else{
        result = pair(head(xs),result);
        return helper_2(tail(xs));
    }

}
return helper_2(xs);
}

function start(xs){

function is_start(xs){
    if(is_null(tail(xs)) || is_null(tail(tail(xs)))){
        return false;
 }
    else{
        
    return head(xs)==="A"&& head(tail(xs))=== "T" &&
        head(tail(tail(xs))) === "G";
}
}
    if(is_null(xs)){
        return null;
    }
    else if(is_start(xs)){
        return tail(tail(tail((xs))));
    }
    else{
        return start(tail(xs));
    }
}
    
function all_genes(xs){
    let result = null;
    function solver(xs){
        const start_list = start(xs);
    const end = termination(start_list);
    if(is_null(end)){
        return reverse(result);
    }
    else{
    result = pair(head(end),result);
    return solver(tail(end));


}
    }
    return solver(xs);
    
}




