const setA = [ -1, 2, 3, 9]
const setB = [4, 5, 6, 10]

const sum = 8

//Find pair of numbers in each set which add up to the 'sum'
//what type of numbers? repeating numbers? are both sets of equal length? are they ordered?



//Simple Brute Force Method
// nested loops over each set, check the total adds up to the sum

function simpleNestedPair(arr1, add){
    for (let i=0; i<arr1.length-1; i++){
        for(let j=i+1; j<arr1.length; j++){
            if(arr1[i] + arr1[j] === add){
                return true
            }
        }
    }
    return false
}
console.log('brute force method sol: ',simpleNestedPair(setA, sum))


//Better Solution
// use a set() to create an array of all unique - non repeating integers
// check if new set already has the sum, otherwise add the difference to the set in each iteration
// eventually the set will have the two numbers which add up to the sum - one time it will add number 'x' and another time 'sum -x'
// ^ IF both 'x' and 'sum-x' exist in the array


// function anotherPairSol(arr1, add){
//     const newset = new Set();
//     for (let i=0; i<arr1.length; i++){
//         if(newset.has(arr1[i])){
//             return true
//         }
//         newset.add(add - arr1[i]);
//     }
//     return false
// }
//
// console.log('better method sol: ',anotherPairSol(setA, sum))