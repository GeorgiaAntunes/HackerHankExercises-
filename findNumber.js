function findNumber(arr, k) {
    let answer = 'NO'
    for(let i=1; i< arr.length; i+=1){
        if(arr[i] == k){
            answer = 'YES'
        }
    }
    console.log(answer);
}

findNumber([5,1,2,3,4,5], 6);