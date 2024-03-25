// function reverseArray( ar ) {
//     let newAr = [];
//     let aux = 0;
//     for(let index = ar.length; index > ar.length; index-=1 ){
//         newAr[aux] = index;
//         aux+1;
//     }
//     return newAr;
// }

// const array = [1,2,3,4];
// console.log(array.reverse());
// console.log(reverseArray([1,2,3,4]));

function reverseArray(A) {
    for (let i = 0; i < Math.floor(A.length / 2); i++) {
        let temp = A[i];
        A[i] = A[A.length - i - 1];
        A[A.length - i - 1] = temp;
    }
    return A;
}

console.log(reverseArray([1,2,3,4,5,6,7,8,9,10]));