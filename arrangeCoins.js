
var arrangeCoins = function(coinsArray) {
    let result = [];
    
    for (let j = 1; j < coinsArray.length; j++) {
        let currentValue = coinsArray[j];
        let sum = 0;
        
        for (let i = 1; i <= currentValue; i++) {
            sum += i;
            if (sum === currentValue) {
                result.push(i);
                break;
            }
            if (sum > currentValue) {
                result.push(i - 1);
                break;
            }
        }
    }
    
    return result;
};

console.log(arrangeCoins([4,2,5,8,3]));

