function reverseArray(A) {
    for (let i = 0; i < Math.floor(A.length / 2); i++) {
        let temp = A[i];
        A[i] = A[A.length - i - 1];
        A[A.length - i - 1] = temp;
    }
    return A;
}

console.log(reverseArray([1,2,3,4,5,6,7,8,9,10]));