// Starting array
//Given an array of numbers, console.log true if any two numbers in the array add to zero, otherwise log false.
//For example:
//[1, 4, 11, 2, 37, -4] should log true because 4 and -4 add to 0.
//[0, 21, 33, 6, 0, -9] should log true because 0 and 0 add to 0.
//[0, 1, 2, 3, 4, 5] should log false because no two numbers add to 0.



let array = [28, 43, -12, 30, 4, 0, 12]

// Write your solution below:


function totalSum(array) {
    for(let i= 0; i < array.length; i ++) {
        for(let x = i + 1; x < array.length; x++) {
            if (array[i] + array[x] === 0) {
                return true
            }
        }
    }
    return false
}
console.log(totalSum(array))

//Defining a function totalSum that takes an array as a parameter. It performs the same logic as in the example, iterating over each pair of elements and checking if their sum is equal to zero. If such a pair is found, the function immediately returns true. If no pair is found, it returns false after checking all possible pairs.
//we then declare the array variable with the provided array and pass it to the totalSum function. The result is then logged to the console.
//Running this code will output true because the pair [-12, 12] adds up to zero in the given array.