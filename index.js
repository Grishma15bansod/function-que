//Create one function with zero parameter having a console statement;

function add() {
    let a = 10
   console.log(a);
}
add()

//Create one function which takes two values as a parameter
// and print the sum of them as "Sum of 3, 4 is 7"
 function sum(A ,B) {
       
    console.log(A+B);
     
 } 
 sum (3,4)


//  Create one arrow function
// "Print output: 
// var x = 21;
// var girl = function () {
//     console.log(x);
//     var x = 20;
// };
// girl ();

var x = 21;
 //var girl = () =>{
     console.log(x);
     var x= 20

 //}
 //girl() //--- undifined 


//  "Print output: 
// var x = 21;
// girl ();
// console.log(x)
// function girl() {
//     console.log(x);
//     var x = 20;
// };
// "

// var x = 21;
// girl ();
// console.log(x);  
// let girl = ()=>{
//     console.log(x); 
//     var x = 20
// }           //error   Cannot access 'girl' before initialization

//girl ();



// "Print output

var x = 21;
a();
b();
console.log(a);
function a() {
    
   x = 20;
  console.log(x);
};
 function b() {
    
    x = 40;
   console.log(x);
};



// Write a function that accepts parameter n and returns factorial of n
function name(firstName, lastName, rollNo) {
  console.log(firstName ,lastName, rollNo);
}
name("grishma", "bansod", 1)