import promptSync from 'prompt-sync';
const prompt = promptSync();

/*Question 1
Write a program that prints the percentage marks of high school graduates by taking input of
sum of their obtained marks and Maximum marks.*/

function calculatePercentage() {
    const obtainedMarks = Number(prompt("Enter obtained marks: "));
    const maxMarks = Number(prompt("Enter maximum marks: "));
    
    if (isNaN(obtainedMarks) || isNaN(maxMarks)) {
        console.log("Please enter valid numbers");
        return NaN;
    }
    
    if (maxMarks === 0) {
        console.log("Maximum marks cannot be zero");
        return NaN;
    }
    
    if (obtainedMarks < 0 || maxMarks < 0) {
        console.log("Marks cannot be negative");
        return NaN;
    }
    
    if (obtainedMarks > maxMarks) {
        console.log("Obtained marks cannot exceed maximum marks");
        return NaN;
    }
    
    const percentage = (obtainedMarks / maxMarks) * 100;
    console.log(`Percentage: ${percentage.toFixed(2)}%`);
    return percentage;
}

calculatePercentage();


/*
Question 2
Write a program that takes input of radius of a circle and prints the area and circumference of the circle .*/
function calculateAreaAndCircumference() {
    const radius = Number(prompt("Enter the radius of the circle: "));
    const area = Math.PI * (radius ** 2);
    const circumference = 2 * Math.PI * radius;
    console.log(`Area of the circle: ${area.toFixed(2)}`);
    console.log(`Circumference of the circle: ${circumference.toFixed(2)}`);
    return area, circumference;
}
calculateAreaAndCircumference();


