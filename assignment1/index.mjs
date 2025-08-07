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
    let radius = Number(prompt("Enter the radius of the circle: "));
    let area = Math.PI * (radius ** 2);
    let circumference = 2 * Math.PI * radius;
    console.log(`Area of the circle: ${area.toFixed(2)}`);
    console.log(`Circumference of the circle: ${circumference.toFixed(2)}`);
    return area, circumference;
}
calculateAreaAndCircumference();


/**Question 3
Discounted Selling price is to be calculated if original selling price and discount percentage
is given. Write a program to calculate and print discounted selling price of the user given two
inputs (1) original selling price and (2) discounted selling price */
let originalPrice = Number(prompt("Enter the original selling price:"));
let discountPercent = Number(prompt("Enter the discount percentage:"));
let discountAmount = (originalPrice * discountPercent) / 100;
let discountedPrice = originalPrice - discountAmount;
console.log("Discounted Selling Price is: " + discountedPrice.toFixed(2));


/*Question 4
Write a program to calculate and print the original selling price if the discounted selling price
and discount percentage is entered by the user. */
let discountedPrice1 = Number(prompt("Enter the discounted selling price:"));
let discountPercent1 = Number(prompt("Enter the discount percentage:"));
let originalPrice1 = discountedPrice1 / (1 - (discountPercent1 / 100));
console.log("Original Selling Price is: " + originalPrice1.toFixed(2));


/*Question 5
Watts is the measure of power consumption of electrical appliances. Which can be
calculated by using voltmeter and ammeter to read the voltage and ampere. Write a program
that prints the Watts against the user given volt and ampere reading.  */
let volts = Number(prompt("Enter the voltage (in volts):"));
let amps = Number(prompt("Enter the current (in amperes):"));
let watts = volts * amps;
console.log("Power (Watts): " + watts.toFixed(2) + " W");


/*Question 6
A quadrilateral with at least one pair of parallel
sides is called a trapezoid or trapezium. The area K
of a trapezoid is given by K = h * (a + b)/2, where a
and b are the lengths of the parallel sides, h is the
height (the perpendicular distance between these
sides). Write a program that takes input lengths of
two parallel sides and the perpendicular distance
between these two parallels lines, and prints the
area of this trapezoid. */
let a = Number(prompt("Enter the length of base a (first parallel side):"));
let b = Number(prompt("Enter the length of base b (second parallel side):"));
let h = Number(prompt("Enter the height (perpendicular distance):"));
let area = ((a + b) / 2) * h;
console.log("The area of the trapezoid is: " + area.toFixed(2) + " square units");


