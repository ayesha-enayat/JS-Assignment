/*Question 1
Write a program that prints the percentage marks of high school graduates by taking input of
sum of their obtained marks and Maximum marks.*/

import promptSync from 'prompt-sync';
const prompt = promptSync();
function calculatePercentage(obtainedMarks, maxMarks){
    let percentage = (obtainedMarks / maxMarks) * 100;
    return percentage;
}
let obtainedMarks = parseFloat(prompt("Enter the obtained marks:"));
let maxMarks = parseFloat(prompt("Enter the maximum marks:"));
let percentage = calculatePercentage(obtainedMarks, maxMarks);
console.log(`The percentage marks are: ${percentage.toFixed(2)}%`);
