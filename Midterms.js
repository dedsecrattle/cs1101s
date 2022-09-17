function has(t,c){
    return is_pair(t)
    ? has(head(t),c) || has(tail(t),c)
    : c===t
    ? true
    : false;
}

function apply(p,t){
    
    const x = head(p);
    return is_null(p)
    ? t
    : is_null(tail(p))
    ? x(t)
    : apply(tail(p),x(t));
    
}


function find8_t(t){
    if (is_number(t)){
        return t === 8
        ? null
        : false;
    }
    else{
        return ;                                                                                                                                                                                                                                                                                                                                                                                                                           ?   
    }
}
const t3  = pair(pair(1, 2), pair(3, pair(5, 8)));
find8_t(t3);