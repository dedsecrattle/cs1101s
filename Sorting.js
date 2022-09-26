//Sorting_Algorithm

function smallest(xs){
    return accumulate((x,y)=> x < y ? x : y, head(xs),xs);
}

function selection_sort(xs){
    if (is_null(xs)){
        return null;
    }
    else if(is_null(tail(xs))){
        return list(head(xs));
    }
    else {
        const small = smallest(tail(xs));
        return pair(small,selection_sort(remove(small,xs)));
    }
}

function insert(x,xs){
    return is_null(xs)
    ? list(x)
    : x <= head(xs)
    ? pair(x,xs)
    : pair(head(xs),insert(x,tail(xs)));
}

function insertion_sort(xs){
    if(is_null(xs)){
        return null;
    }
    else{
        return insert(head(xs),insertion_sort(tail(xs)));
    }
}

function take(n,xs){
    return is_null(xs) || n === 0
    ? null
    : pair(head(xs),take(n-1,tail(xs)));
}

function drop(n,xs){
    return n === 0
    ? xs
    : drop(n-1,tail(xs));
}

function merge(xs,ys){
    return is_null(xs)
    ? ys
    : is_null(ys)
    ? xs
    : head(xs) < head(ys)
    ? pair(head(xs),merge(tail(xs),ys))
    : pair(head(ys),merge(xs,tail(ys)));
}

function merge_sort(xs){
    if (is_null(xs) || is_null(tail(xs))){
        return xs;
    }
    else {
        const middle = math_floor(length(xs)/2);
        return merge(merge_sort(take(middle,xs)),
                    merge_sort(drop(middle,xs)));    
    }
}

merge_sort(list(4,2,1,2,4,7,8,9,-2,5,-66,21,6));

