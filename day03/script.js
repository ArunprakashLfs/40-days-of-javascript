console.log("day 03");
// let x = 4 + 5;
// console.log(x)

// Arithematic operators

// Addition(+)
let a = 10;
let b = 20;

let f_name = "Arunprakash";
let l_name = "Murugesan";

console.log(f_name  + l_name);

console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);
console.log(a**b);//10 power 20
let count = 5;
console.log(count++)//5
console.log(count--)//6
console.log(++count);
console.log(--count);


// Assignment Operators
console.log("Assignment Operators");
 
let x = 10;
x+=5;
console.log(x);
x-=5;
console.log(x);
x*=5;
console.log(x);
x/=5;
console.log(x);
x%=5;
console.log(x);
x**=5;
console.log(x);

// Comparision Operators

console.log("Comparision Operators");

console.log(a==b);
console.log(0==false)
console.log(a===b);
console.log(a!=b);
console.log(a>b);
console.log(a<b);
console.log(a>=b);
console.log(a<=b);

let obj1 ={
    name:"Arunprakash"
}
let obj2 ={
    name:"Arunprakash"
}
console.log(obj1.name==obj2.name);
console.log(obj1.name===obj2.name);

// Logical Operators
// && (AND)
console.log(false && false,false && true,true && false,true && true);
console.log("cow"&&"horse")
// || (OR)
console.log(false || true,true || false,true || true,false || false);
console.log("cow"||"horse")
// ! (NOT)
console.log(!(false));
// ?? (Nullish Coalescing)
console.log(null ?? "default value");

// Conditional (Ternary) Operator
let age = 18;
let canVote = age >= 18 ? "Yes" : "No";
console.log(canVote);

// Bitwise Operators
console.log("****Bitwise Operators****");
console.log(15 & 9);
console.log(15 | 9);
console.log(15 ^ 9);
console.log(~15);
console.log(15 << 2);
console.log(15 >> 2);

// Relational Operators
console.log("****Relational Operators****");
console.log(a > b);

// Grouping
console.log("****Grouping****");
let p = 10;
let q = 20;
let r = 30;
console.log((p + q) * r);

// typeof operator
console.log("****typeof operator****");
console.log(typeof a);
console.log(typeof f_name);
console.log(typeof obj1);
console.log(typeof null);
console.log(typeof undefined);
console.log(typeof NaN);