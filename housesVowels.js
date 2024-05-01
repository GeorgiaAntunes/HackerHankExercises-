// In a town, houses are marked with English alphabets. Committee in d town wants to renovate the houses. They decided to renovate only houses named in vowels. Committee has given the list to members and asks them to identify the houses which are not renovated.
// Write an algorithm to help the committee members to find houses which are not renovated.
// I/p: input to the function contains only one argument.
// House: A string representing the sequence of house markings
// O/p: return a string that represents the houses which were not renovated

function housesNotRenovated(housesNames){
    let result = '';
    let vowels = 'aeiouAEIOU';

    for(let i = 0; i < housesNames.length; i+=1){
        if(!vowels.includes(housesNames[i])){
            result += housesNames[i];
        }
    }
    return result;
}

console.log(housesNotRenovated("MyNameisAnthony"));
console.log(housesNotRenovated("AbcdEeffaoiuHdty"));