let valOne = 2;

if(valOne >= 3){
    console.log("The value is greater or eqaul to 3!");

} else {
    console.log("The value is not greater than or eqaul to 3!")
}

let valTwo = 6;
if(valTwo % 2 === 0){
console.log("This number is even")
} else{
console.log("This number is odd")    
}

let str = "";
if(str === ""){
    console.log("The string is empty");
    } else {
console.log("The string is not empty");
}

let value = 10;
if(value > 5 && value < 15){
console.log("he Value falls betweeen 5 and 15")    
} else {
    console.log("The value does not fall betweeen 5 and 15")
}

let age = 19;
let user = "Ricard";

if(age > 18 || user === "Ricard"){
    console.log("Welcome " + user + ", to the club")
}

let value1 = 10;
 
for(let i = 10; i >= 0; i--){
    console.log(i);
}

let sum = 0;

for(let i= 1; i <= 10; i++){
sum += i;

}
console.log(sum)
 


let nameArray =["Mike","No","Penis","IHateMyself"];
 for(let i = 0; i < nameArray.length; i++){
   let  user = nameArray[i];
   if(user === "Timmy"){
    console.log("Welcome " + user + " to the party");
   }
 }

 let numArray = [200,200,104,500];
 let total = 0;

 for(let i = 0; i < numArray.length; i++){
    total = numArray[i];
console.log(total);    
 }
console.log("The total is " + total);



