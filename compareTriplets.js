function compareTriplets(a, b) {
    let pointsA = 0;
    let pointsB = 0;
    for(let i = 0; i < a.length; i+=1){
        if(a[i] > b[i]){
            pointsA+=1;
        } else if(a[i] < b[i]){
            pointsB+=1;
        }
    }
    return [pointsA, pointsB];
}

console.log(compareTriplets([17,28,30],[99,16,8]));


//https://www.hackerrank.com/challenges/compare-the-triplets/problem?isFullScreen=true