
// // var student ="huusain";
// // var num =48;

// // console.log(student); //shift + alt + up key ; copy the line 
// // console.log(student);
// // console.log(student);

// // var flag ="true";

// // console.log(flag,num);
// // console.log(`${num} + ${num}`);
// // console.log(`hi ${student} , how are you today `);
// // console.log(typeof(student));
// // console.log(typeof(flag));
// // console.log(typeof(num));

// var Age=46;

// // if (age<18){
// //     console.log("the person can not apply for driving license");
// //     document.write("the person can not apply for driving license");
// // }
// // else{
// //     console.log("yes , the person can get driving license");
// //     document.write("yes , the person can get driving license");
// // }


// // if(age<18)
// // {
// //     console.log("the person can not apply for driving license");
// // }
// // else if (age >=18 && age <=21)
// // {
// //     console.log("can owr car");

// // }
// // else if (age >=22 &&age<=25)
// // {
// //     console.log("can owr house");

// // }
// // else{

// // }

// // Write a program that outputs results based on users’ age. This exercise draws on if/else statements, Boolean logic, and comparison operators. See the conditions below:
// // - If you are under 16, you cannot do much outside of going to school
// // - If you are 16 or older, you can drive
// // - If you 18 or older, you can vote
// // - If you are 21 or older, you can drink alcohol
// // - If you are 25 or older, you can rent a car
// // - If you are 35 or older, you can run for president
// // - If you are 62 or older, you collect social security benefits
// // Have the program print out only the most recent thing that they’ve become eligible to do, i.e. if they are 46, only print “You can run for president.” (This will at least force them to use else if instead of just if).

// if(Age<16){
//     console.log("you cannot do much outside of going to school");
// }

// else if(18>=Age && Age>=16){
//     console.log("you can drive");
// }

// else if(21>=Age && Age>=18){
//     console.log("you can vote");
// }
// else if(25>=Age && Age>=21){
//     console.log("you can drink alcohol");
// }
// else if(35>=Age && Age>=25){
//     console.log("you can rent a car");
// }
// else if(62>=Age && Age>=35){
//     console.log("you can run for president");
// }
// else if(Age>=62){
//     console.log("you collect social security benefits");
// }

// 5%2=1;
var num =8448544;

function checkEvenOrOdd(num){

    if(num % 2 == 0){
        console.log("num is even");
        return true;
    }
    else{
        console.log("num is odd");
        return false;
    }
    
}

var isEven=checkEvenOrOdd(15);

if(isEven){
    console.log("num is even");
}
else{
    console.log("num is odd");
}
