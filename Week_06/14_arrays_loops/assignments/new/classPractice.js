
var carModels=["hyundai","corolla","gmc","bmw","mercedize"];

console.log(carModels[3]);
console.log("length = "+carModels,length);
console.log("index Of gmc = "+carModels.indexOf("gmc"));
carModels.indexOf("gmc");

console.log(carModels.pop());

console.log(carModels);

console.log(carModels.shift());

console.log(carModels);

console.log(carModels.push("tita"));
console.log(carModels);

// console.table(carModels);
console.log(carModels.unshift("kia"));

console.log(carModels);
var em = carModels.splice(1,2);
console.log(em);
console.clear();

var num =[10,20,30,40,50,60,70,80,90,100];

console.log (num.length);
console.table(num);

// var s =num.splice(0,9);
var s =num.splice(0,0,200);

console.table(s);

console.table(num);

num.reverse();

num.join("+");

console.table(num);

var produce = [["kiwi", "pear", "cherry"], ["broccoli", "celery", "carrots"]]; 

console.table(produce);
console.table(produce[0][1]+" "+produce[1][1]);
console.clear();

// var pets=["beagle","bunny","cat","iguana","pony"];


// for (var i=0;i<pets.length;i++){
//     console.log(pets[i]);
// }
var student = [88,77,87,97,69];
var sum = 0;
// for(var i=0;i<student.length;i++){
//     sum +=student[i];
// }
// var avg = sum/student.length;
// console.log(avg);

while(i<student.length){
    sum +=student[i];
    i++
}

console.log(sum);