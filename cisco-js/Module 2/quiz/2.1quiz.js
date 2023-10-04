/* Question 1 */

let b1 = true;
let b2 = Boolean(true);
let n1 = 100;
let n2 = Number(100);
let bi1 = 10n;
let bi2 = BigInt(10);
let s1 = "String";
let s2 = String("String");
let u1 = undefined;


/* Question 2*/

console.log(`${b1} [${typeof b1}]`);
console.log(`${b2} [${typeof b2}]`);
console.log(`${n1} [${typeof n1}]`);
console.log(`${n2} [${typeof n2}]`);
console.log(`${bi1} [${typeof bi1}]`);
console.log(`${bi2} [${typeof bi2}]`);
console.log(`${s1} [${typeof s1}]`);
console.log(`${s2} [${typeof s2}]`);
console.log(`${u1} [${typeof u1}]`);


/* Question 3 */
{
    let newString = "1234";
    let newNumber = Number(newString);
    let newBigInt = BigInt(newNumber);
    let newBool = Boolean(newBigInt);

    console.log(`${newString} [${typeof newString}]`);
    console.log(`${newNumber} [${typeof newNumber}]`);
    console.log(`${newBigInt} [${typeof newBigInt}]`);
    console.log(`${newBool} [${typeof newBool}]`);
}

/* Question 4 */

{
    let b = true + false;
    let n = 100 + 100;
    let bi = 100n + 100n;
    let s = "He" + "y";
    let u = undefined + undefined;

    console.log(`${b} [${typeof b}]`);
    console.log(`${n} [${typeof n}]`);
    console.log(`${bi} [${typeof bi}]`);
    console.log(`${s} [${typeof s}]`);
    console.log(`${u} [${typeof u}]`);
}

/* Question 5 */

{
    let b = true + 100;
    let n = 100 + undefined;
    let bi = 100n + true;
    let s = "He" + 100;
    let u = undefined + true;

    console.log(`${b} [${typeof b}]`);
    console.log(`${n} [${typeof n}]`);
    console.log(`${bi} [${typeof bi}]`);
    console.log(`${s} [${typeof s}]`);
    console.log(`${u} [${typeof u}]`);
}

/*Question 6 */

{
    const str1 = 42 + +"1";
    /*const str1 = 44 - "1";*/
    
    console.log(str1);
}