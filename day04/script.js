console.log("Day 04");

let catchingBus = true;

if(catchingBus){
    console.log("I am catching the bus");
}else{
    console.log("I am not catching the bus");
}

let age = 8;

if(age>=18){
    console.log("You are eligible to drive");
}else{
    console.log("You are not eligible to drive");
}

// Grading System
let score;
score = 85;

if(score>=90){
    console.log("Grade A");
}else if(score>=80){
    console.log("Grade B")
}else if(score>=70){
    console.log("Grade C")
}else if(score>=60){
    console.log("Grade D");
}else{
    console.log("Fail")
}

// Switch Case
let condition = 13;
switch(condition){
    case 1:
        console.log("Condition 1");
        break;
    case 2:
        console.log("Condition 2");
        break;
    case 3:
        console.log("Condition 3");
        break;
    case 4:
        console.log("Condition 4");
        break;
    default:
        console.log("Default case");
}

let day = 1;
switch(day){
    case 1:
        console.log("Today is Monday");
        break;
    case 2:
        console.log("Today is Tuesday");
        break;
    case 3:
        console.log("Today is Wednesday");
        break;
    case 4  :
        console.log("Today is Thursday");
        break;
    case 5:
        console.log("Today is Friday");
        break;
    case 6:
        console.log("Today is Saturday");
        break;
    case 7:
        console.log("Today is Sunday");
        break;                                          
    default:
        console.log("Invalid day");
}

// ternary operator
let isRaining = true;
isRaining ? console.log("Take an umbrella") : console.log("No need for an umbrella");