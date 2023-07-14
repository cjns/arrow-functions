// Vanilla JavaScript Function
function addTwoNumbers1(x, y) {
  // Code block.
  return x + y;
}

let sum1 = addTwoNumbers1(1, 0);
console.log(sum1);

// Arrow Function With Parameters
const addTwoNumbers2 = (a, b) => {
  // Code block.
  return a + b;
}
let sum2 = addTwoNumbers2(1, 1);
console.log(sum2);

// Single Line Arrow Function With Parameters
// const addTwoNumbers3 = (a, b) => (a + b);  // Also valid.
const addTwoNumbers4 = (a, b) => a + b;
sum3 = addTwoNumbers4(1, 2);
console.log(sum3);

// Implicit Returns
const saySomething = message => console.log(message);
saySomething("Hello!");

const sayHello = () => console.log("Hi");
sayHello();

// Returning Multiple Lines
/*
* if you want to return something that spans multiple lines, like a multi-line string or an object literal, you run into a problem because JavaScript automatically * inserts semicolons at the end of lines, which can cause syntax errors or unexpected behavior.
*
* To get around this, you can wrap the multi-line string or object literal in parentheses. This tells JavaScript to treat the whole thing as a single expression,
* allowing it to be returned implicitly from the arrow function. 
*
* the parentheses are used to return a multi-line template literal string from the arrow function. The backticks (`) are used to define the template literal, and
* the whole string is wrapped in parentheses to allow it to be returned implicitly.
*/
const returnMultipleLines = () => (
  `<p>
      This is a multi-line string!
    </p>`
)
console.log(returnMultipleLines());