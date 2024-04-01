function fizzBuzz(n) {
    // let aux = [];
    let content = 0;
    
    for(let i=1; i <= n; i+=1){
        if(( i % 3) === 0 && (i % 5) === 0){
            content = "FizzBuzz";
            // aux.push(content);
            console.log(content);
        }
        else if(( i% 3) === 0 && (i%5) !== 0){
            content = "Fizz";
            // aux.push(content);
            console.log(content);
        }
        else if((i% 3) != 0 && (i%5) ===0){
            content = "Buzz";
            // aux.push(content);
            console.log(content);
        }
        else {
            content = i;
            // aux.push(content);
            console.log(content);
            
        }
    }
}

// console.log(fizzBuzz(15));
fizzBuzz(30);