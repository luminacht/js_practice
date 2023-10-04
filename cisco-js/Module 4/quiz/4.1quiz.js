/* Question 1*/
{

for (let i = 0; i <= 100; i += 10) {
    console.log(100 - i);
}

}

/* Question 2 */
{

let upperVal = (prompt("Enter upper value: "));
let lowerVal = (prompt("Enter lower value: "));

if (!isNaN(upperVal) && !isNaN(lowerVal) && lowerVal < upperVal) {
    
    for (upperVal; upperVal >= lowerVal; upperVal -= 10)
    {
        console.log(upperVal);
    }
}

}


/* Question 3 */
{

let numbers = [21, 45, 100, 12, 11, 78, 61, 4, 39, 22];

for (let i = 0; i <= numbers.length - 1; i++)
{
    console.log(numbers[i]);
}

console.log("--------------");

for (i = 0; i <= numbers.length - 1; i++)
{
    if (numbers[i]%2 === 0) {
        console.log(numbers[i]);
    }
}

console.log("--------------");

for (i = 0; i <= numbers.length - 1; i++)
{
    if (numbers[i] >= 10 && numbers[i] <= 60) {
        console.log(numbers[i]);
    }
}

}
