//functions
function sum(a, b) {
  //function body
  console.log(a + b);
  //stops execution & returns a value
  console.log("Working");
  return a + b;
  console.log("Working");
}
//call/involve the function to make it do the sum
sum(2, 2);

const output = sum(1, 9);
console.log(output);

//callback functions
function greeting(morning) {
  morning("9 am");
  morning("10 am");
}

greeting(function (time) {
  console.log(`Good Morning, it is ${time}`);
});
