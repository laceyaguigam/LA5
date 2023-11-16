// 1. Instantiate a new array and add 5 numeric values to it.

let assignment = [1 , 2 , 3, 4 , 5 ];

// Inside of a console.log(...) statement, output the first value of the array.

console.log(assignment[0]);

// Inside of a console.log(...) statement, output the last value of the array.

console.log(assignment[4]);

// What numbers did you have to pass as indexes? Why?

    // the numbers that were passed were 0 and 4 because that is the location of the given output on in an index
    


// 2. Using a for loop containing a console.log(...) statement, output each of the values in the array.


for ( let i = 0; i < assignment.length; i++ ) {
  console.log( assignment[i]);
  
}


// 3. Use the push() method to add 5 more values to your array. 
assignment.push(6 , 7 , 8, 9 , 10);
console.log(assignment);

// What are the contents of your array now? Where did the new values appear?

    // the array is now the numbers 1-10, the new set of numbers appeared after the last number in the previous list

// Use the pop() statement 3 times on your array. What are the contents of your array now?

assignment.pop(6 , 7 , 8, 9 , 10);
console.log(assignment);

    //the contents are now back the first list of numbers 1-5

// 4. Declare a new string variable “myString” and place a string of your choosing inside.

let myString = "grades";

// Output the length of the string inside of a console.log(...) statement.

console.log(myString.length);