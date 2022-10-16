function bubblesort_list(L){
    function helper(i,xs){
        if(i > length(L)-1){
            return xs;
        }
        else if(is_null(tail(xs))){
            return helper(i+1,L);
        }
        else if(head(xs)>head(tail(xs))){
            const x = head(xs);
            set_head(xs,head(tail(xs)));
            set_head(tail(xs),x);
            return helper(i,tail(xs));
        }
        else{
            return helper(i,tail(xs));
        }
    }
    return helper(0,L);
}
const LL = list(4,2,7,5,3,6,1);
bubblesort_list(LL);
LL; // should show [1, [2, [3, [4, [5, null]]]]]
