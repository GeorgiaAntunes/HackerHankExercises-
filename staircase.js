function staircase(n){ 
    let symbol = '#';
    let inputLine = '';
    let inputPosition = n-1;

    for(let lineIndex = 0; lineIndex < n; lineIndex+=1){
        for( let columnIndex = 0; columnIndex < n; columnIndex+=1){
            if( columnIndex < inputPosition){
                inputLine += ' ';
            }
            else{
                inputLine += symbol;
            }
        }
        console.log(inputLine);
        inputLine= ''; //zera o inputLine antes de o for ir pra prox linha
        inputPosition -=1;
    }
}

staircase(5);

// Link hackerrank: https://www.hackerrank.com/challenges/staircase/problem?isFullScreen=true
