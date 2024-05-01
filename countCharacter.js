// A company wishes to encode its data. The data is in the form of a string and is case-sensitive. 
//They wish to encode the data with respect to a specific character. 
//They wish to count the number of times the character reoccurs in the given data so that 
//they can encode the data accordingly. 
//Write an algorithm to find the count of the specific character in the given data.
// Input:
// The first line of the input consists of a string – data representing the data to be encoded.
//The second line consists of a character – code representing the character to be counted in the data.
// Output:
// Print an integer representing the count of the specific character. If the required character is not 
//found then print 0.
// Note:
// The specific character and given string consists of English letters and Special characters only.
// Example:
// Input:
// haveagoodday
// a
// Output:
// 3

function countCharacter(data, character){
    let count = 0;
  
    for(let i = 0; i < data.length; i++){
        if(character === data[i]){
            count+=1;
        }
    }
    return count;

}

console.log(countCharacter('haveagoodday', 'a'));



// const oi = 'Georgia';
// console.log(oi.charAt(4));
// Apenas exemplificando que dentro do laço do problema acima poderiamos usar charAt() também nesse caso desse problema