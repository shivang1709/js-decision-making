// Q5. Find Grades
// Your school has the following grading system based upon the marks(M) obtained by a student:

// If  M ≤ 10 , the grade will be  E .
// If 11 ≥ M ≤ 20 , the grade will be D.
// If 21 ≥ M ≤ 30 , the grade will be C.
// If 31 ≥ M ≤ 40 , the grade will be B.
// If 41 ≥ M ≤ 50 , the grade will be A.
// Your friend will enter his marks out of 50, and your task is to print his grades using a switch statement.

// Note: You have to complete findGrades function. No need to take any input.

// Input Format
// The first and the only line of the input contains an integer M, representing the marks that your friend will enter in the grading system.

// Output Format
// Return the grade obtained by your friend.

// Constraints 0 ≤ M ≤ 50

// Time Limit
// 1 second

// Example
// Sample Input
// 1

// Sample Output
// E

// Ans:

// const findGrades = (M) => {
//     switch (true){
//       case (M <= 10):
//         return "E";
//       case (M >= 11 && M <= 20):
//         return "D";
//       case (M >= 21 && M <= 30):
//         return "C";
//       case (M >= 31 && M <= 40):
//         return "B";
//       case (M >= 41 && M <= 50):
//         return "A";
//       default:
//       return "F";
//     }  
//   };  