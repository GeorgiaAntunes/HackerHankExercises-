function diagonalDifference( arr){
    let leftDiagonal = 0;
    let rightDiagonal = 0;
    for(let index = 0; index < arr.length; index+=1){
        leftDiagonal += arr[index][index];
        rightDiagonal += arr[index][arr.length - 1 - index];
    }
    return Math.abs(leftDiagonal - rightDiagonal);
}

console.log(diagonalDifference(
    [[1,2,3],
    [4,5,6],
    [9,8,9]]));

// Given a square matrix, calculate the absolute difference between the sums of its diagonals.
//arr = [[1,2,3],[1,2,3],[1,2,3]];    

//The left-to-right diagonal  1 + 5 + 9 = 15. The right to left diagonal 3 + 5 + 9 = 17. 
//Their absolute difference is |15 - 17| = 2 
