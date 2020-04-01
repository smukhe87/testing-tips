/* Check for common element in two distinct arrays*/

const array1 = ['a', 'b', 23, 'x', '#', 'n'];
const array2 = ['x', 'l', 'n', 'm', '2n'];

//Simple Brute Force Solution - nested for loops
// function containsCommonElement(arr1, arr2){
//     for (let i=0; i<arr1.length; i++){
//         for(let j=0; j<arr2.length; j++){
//             if(arr1[i] === arr2[j]){
//                 return true
//             }
//         }
//     }
//     return false
// }
// console.log('Solution by brute force: ',containsCommonElement(array1, array2));

// why is this approach wrong? ^ because its of time complexity O(n^2) - NESTED for loops

// Efficient Approach - use a hash table

function anotherContainsCommon(arr1, arr2){
    //Create an object which contains each element as an object property and the value set to true or false from first array
    // loop through first array and then compare with the second array
    // second array just does a 'look up' which is of complexity O(n) and therefore better

    let map = {}
    for (let i=0; i<arr1.length; i++){
        if(!map[arr1[i]]){
            const prop = arr1[i];
            map[prop] = true;
        }
    }
    console.log('map object: ', map)
    let common = []
    let state = false
    for (let i=0; i<arr2.length; i++){
        // loop through properties (NOT values) of map and check if they exist as arr2[i]
        if (map[arr2[i]]){
            common.push(arr2[i])
            state = true
        }
    }
    console.log('common elements: ', common)
    return state
}

console.log('Solution by Mapping: ')
console.log(anotherContainsCommon(array1, array2));

// Better solution ^ -- two for loops but NOT nested so complexity will be O(n+m) ~ O(n) for large arrays

//Extending questions:
// Error checks: null, [], integer
// Improve Performance Points - only booleans, strings, integers can be used correctly. object properties won't work for non-literal values like javascript expressions
// Google specific methods on arrays to make it more readable and reduce space complexity - language knowledge
// Since we are creating an object and another array we are increasing space complexity in the above case
// modularise your code i.e. breakup the loops into multiple functions for reusability


function returnCommonFast(arr1, arr2){
    return arr1.some(item => arr2.includes(item))
}
console.log('quick result: ', returnCommonFast(array1, array2))

/*Take away points:
  1. start with brute force method, write it down and explaing why this is simple but may have high complexity
  2. move onto a more modular approach demonstrate you're thinking like an engineer
  3. finally see if you can use existing functions for a language to increase readability and performance
  4. go through all three levels to show you think like an engineer
 */