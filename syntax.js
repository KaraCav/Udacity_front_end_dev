// 1. Programming Quiz: Writing a For...of Loop (1-4)
const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
for (let day of days) {
    console.log(day.charAt(0).toUpperCase() + day.slice(1));
} 

// 2. Instructions: Use the spread operator to combine the `fruits` and `vegetables` arrays into the `produce` array.
const fruits = ["apples", "bananas", "pears"];
const vegetables = ["corn", "potatoes", "carrots"];

const produce = [...fruits, ...vegetables];
console.log(produce);

// 3. Use the rest parameter to create an average() function that calculates the average of an unlimited amount of numbers.
function average(...nums) {
    let total = 0;
    for(const num of nums) {
        total += num;
    }
    if(total === 0) {
        return 0;
    }
    else {
        return total/ nums.length;
    }
}
console.log(average(2, 6));
console.log(average(2, 3, 3, 5, 7, 10));
