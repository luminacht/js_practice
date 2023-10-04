JavaScript is a typical interpreted languagem the interpreter will be the JavaScript engine built into the browser.
Node.js is an interpreter but as an environment in the computer's OS.

Just In Time Compilation (JIT Compilation) compiling code fragments during the execution of the program
(more than a single instruction) to increase performance.

Netscape, Brendan Eich developed LiveScript on 1995, was changed to JavaScript. Its main task was to
add dynamics to websites, which allowed for more complex interaction with the user.

JavaScript on website, is called client-sided programming - The code to be executed is loaded with the page on the
user's side, where the interpreter of the web browser allows for its execution.

JavaScript is also present on other areas such as server-side parts of complex web application, also known as back-end.
Programs that are executed on servers, processing data from database, which after will be available on the client side.

JavaScript disadvantages:
- browsers run script codes in a sandbox environment (does not allow access to local files and resources)
- code is not compiled, everyone can see our solution in an easy-to-read form and use it without our permission.
- limitations are due to the concept of the language, and others due to the platform used.
- no point in using it for advanced mathematical calculations or very high performance.

JavaScript advantage:
- very active community
- a huge number of ready-to-use frameworks and libraries
- dynamic typing characteristic (advantage and a disadvantage)
- static typing introduced TypeScript




Section 1

<script src=""></script>
<script></script>

console.log("");

Minimal HTML is requried to run a JS script, does not require CSS.




Section 2


let vs var

let does not allow declaration of a variable with the same name
while var allows declaration of a variable with the same name.

const does not change once declared, and can never be changed.

Older JavaScript allowed declaration without let or var, however
modern practice uses "strict mode"; in order to avoid this as it
may possibly result in unwanted problems.


Scope

Scope of declaring a variable depends on where it is declared. This
includes global declaration, functions, and program blocks.

If let or const variables are declared outside code blocks, they
are GLOBAL variables.

If it is declared inside a block, it will be a local variable or
constant, where it is only visible inside in this block and the
blocks nested within it.

Variables declared with var will always ignore blocks, even
if it is declared inside a block. It will only become a local
variable if declared inside a function.

Variable shadowing is when a declared global variable is declared
inside of a program block once more. The value of the variable inside
the block will not reflect outside of the block, and will only follow
the value from the declared global variable. While you can do this,
it is not ideal to do such practice.

Hoisting refers to declaring a variable even at a later line, even if the
said variable has been called prior to declaring it. 

Example:

var height = 180;
console.log(height); // -> 180
console.log(weight); // -> undefined
var weight = 70;
console.log(weight); // -> 70


lenght - lenght of array
IndexOf - locate the index of a given value of an array
Push - push an element to the end of an array.
Unshift - inserts an element to the start of an array.
Pop - removes the last element of the array. 
Shift - removes the first element of the array.
Reverse - reverses the order of elements in the array.
Slice - allows to create a new array from selected elements of an existing array.
Concat - creates new array by combining elements given as arguments from one array, to another array.