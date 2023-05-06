//order complexoty O(2**n/2)
function fibonachi(index){

    if(index == 1 || index == 2){
        return 1;
    }
    else {
        return fibonachi(index - 1) + fibonachi(index-2)
    }

}
//order complexity O(n)
function fibonachi2(index){

    let a = 1;
    let b = 1;
    let c = 1;

    for(let i = 0 ; i < index - 2 ; i++){

        c = a + b ;
        b = a;
        a = c;
    }

    console.log(c);
}

