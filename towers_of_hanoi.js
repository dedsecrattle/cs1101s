function tower_of_hanoi(n,start,end){
    function pm(x,y){
        return display(stringify(x) + '->'+ stringify(y));
    }
    
    
    if (n===1){
        return pm(start,end);
    }
    else{
        const middle = 6 - (start+end);
        return tower_of_hanoi(n-1,start,middle)
        +','+pm(start,end)+','+tower_of_hanoi(n-1,middle,end);
    }
}

tower_of_hanoi(3,1,3);