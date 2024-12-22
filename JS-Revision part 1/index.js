// console.log("hello");
// console.log("i like pitzza");

// window.alert("heeloo");
// window.alert("i like pitza");

// document.getElementById("myh1").textContent="helooo";
// document.getElementById("myp").textContent="I like pitza";

////   *** 1. variable ***

// let x; //var declaration

// x=10;  //var assignment

// let y=20;

//Number datatype
let age = 25;
let price = 22.62;
let gpa = 2.1;

//string datatype
let firstName = "Kavipriya";
let favFood = "biriyani";

//boolean
let online = true;
let enrolled = true;
let student = false;

//// ** 2. Arithmetic operators

let students = 30;

// students=students+1;
// students=students-1;
// students=students*2;
// students=students/2;
// students=students**2;
// students=students**3;
// students=students%2; //  reminder 0

//augmented arithmetic operator

// students+=2;
// students-=1;
// students*=2;
// students/=2;
// students**=2;
// students%=2;

// students++;
students--;

/* operator precedance
      
      1. paranthesis()
      2. exponential
      3. multiplicatoin,division,modulo
      4. addition,subtraction */

let result = 1 + 2 * 3 + 4 ** 2;
let result2 = 12 % 5 + 8 / 2;

//// ***3. User input

let userename;
// userename=window.prompt("update username");   //method 1

document.getElementById("click").onclick = function () {  //method 2
      userename = document.getElementById("textbox").value;
      document.getElementById("demo6").textContent = `hello ${userename}`;
      console.log(userename);
}

// *** 4. Type conversion
// age=window.prompt("how old are you?");  //221 -string
// age=Number(age);  //23
// age=age+1;

let x = true;  //try -- 10, "hi", true, "", not assign values
let y = true;
let z = true;


x = Number(x);
y = String(y);
z = Boolean(z);


// *** 5. Constants

//circumferance of the circle?

// let pi=3.14159;
const PI = 3.14159
let radius;
let circumferance;

// radius=window.prompt("Enter the radius value of circle");
// radius=Number(radius);

// circumferance=2*PI*radius;

// console.log(circumferance);

// PI=4.253253; ---> throws error

document.getElementById("mysubmit").onclick = function () {
      radius = document.getElementById("mytext").value;
      radius = Number(radius);
      circumferance = 2 * PI * radius;
      document.getElementById("myh3").textContent = circumferance + "cm";
}

// *** Math object
let x1 = 3;
let x2 = 81;
let y1 = 2
let y2 = -3.21;
let y3 = 0;
let maximumValue = Math.max(x1, x2, y1, y2, y3);
let minimumValue = Math.min(x1, x2, y1, y2, y3);

// let z1=Math.round(x1);
z1 = Math.floor(x1);   //3
z1 = Math.ceil(x1);    //4
z1 = Math.trunc(x1);  //3

z1 = Math.pow(x1, y1); //9
z1 = Math.pow(y1, x1); //8
z1 = Math.pow(y1, 4);  //16

z1 = Math.sqrt(x2);  //9
z1 = Math.log(x2);  //4.394449154672439
z1 = Math.abs(y2);  //3.21

z1 = Math.sign(y2);  //-1
z1 = Math.sign(x1);  //1
z1 = Math.sign(y3);  //0



//***If statements

//example 1
let UserAge = 19;  //what if 16 ? - else state

if (UserAge >= 18) {
      console.log("you can vote for this election");
}
else {
      console.log("the user is not capable for voting");
}

//example 2

let time = 9;  //what if 14 ? - else state

if (time <= 12) {
      console.log("good morning");
}
else {
      console.log("good afternoon");

}
//condition also work on boolean variable

let isStudent = false;

if (isStudent) {
      console.log("yes, he is student");
}
else {
      console.log("No, he is not a student");
}


//nested if statement

let candidateAge = 25;
let hadLicense = false;

if (candidateAge > 18) {
      console.log("capable to drive");
      if (hadLicense) {
            console.log("have license");
      }
      else {
            console.log("dont have license");
      }
}
else {
      console.log("you must be 18+ to drive");

}

//else if statement

//need more coditions applied before go to else - else if
// top to down check if 1st true others are avoided even if they are true.

let User2Age = 0;  //what if 16 ? - else state

if (User2Age >= 100) {
      console.log("you can vote for this election");
}
else if (User2Age >= 18) {
      console.log("you can vote for this election");
}
else if (User2Age == 0) {
      console.log("you are not capable , you were just born baby");
}
else {
      console.log("the user is not capable for voting");
}

let mytextbox = document.getElementById("mytextbox");
let mybtn = document.getElementById("mybtn");
let results = document.getElementById("result");
let actualAge;

mybtn.onclick = function () {

      actualAge = mytextbox.value;
      actualAge = Number(actualAge);
      if (actualAge >= 100) {
            results.textContent = `you are old enough to vote for this election`;
      }
      else if (actualAge >= 18) {
            results.textContent = `you can vote for this election, you are above 18`;
      }
      else if (actualAge == 0) {
            results.textContent = `you are not capable , you were just born baby`;
      }
      else {
            results.textContent = `the user is not capable for voting`;
      }
}



// *** Payment Method


const subscribe = document.getElementById("subscribe");
const visa = document.getElementById("visa");
const mastercard = document.getElementById("mastercard");
const paypal = document.getElementById("paypal");
const clickbtn = document.getElementById("clickbtn");
const subresult = document.getElementById("subresult");
const paymentresult = document.getElementById("paymentresult");

//.checked - this property determines the checked state of an html checkbox or radio button element.


clickbtn.onclick = function () {
      if (subscribe.checked) {
            subresult.textContent = `you are subscribed.`;
      }
      else {
            subresult.textContent = `you are NOT subscribed yet, please update.`;
      }
      if (visa.checked) {
            paymentresult.textContent = `you have seclected Visa method.`;
      }
      else if (mastercard.checked) {
            paymentresult.textContent = `you have seclected Mastercard method.`;
      }
      else if (paypal.checked) {
            paymentresult.textContent = `you have seclected Paypal method.`;
      }
      else {
            paymentresult.textContent = `you are NOT selected payment Method`;
      }
}


//** Ternary operator */

let ageofTheUser = 21;
let mesage = age < 18 ? "You are minor!" : "you are major!";
console.log(mesage);

let checkNoon = 14;
let mesage2 = checkNoon > 12 ? "Good afternoon!" : "good day";
console.log(mesage2);

let isplayer = true;
let mesage3 = isplayer ? "yes, he is player" : "No, he is NOT player";
console.log(mesage3);

let purchaseAmount = 125;
let discount = purchaseAmount >= 100 ? 10 : 0;
console.log(`your total is $${purchaseAmount - purchaseAmount * discount / 100}`);


//** Switches */ 

//sample 1
let day = 2;

switch (day) {
      case 1:
            console.log("the day is Sunday");
            break;
      case 2:
            console.log("the day is Monday");
            break;
      case 3:
            console.log("the day is Tuesday");
            break;
      case 4:
            console.log("the day is Wednesday");
            break;
      case 5:
            console.log("the day is Thursday");
            break;
      case 6:
            console.log("the day is Friday");
            break;
      case 7:
            console.log("the day is Saturday");
            break;
      default:
            console.log(`${day} is Not applicable`);

}

// sample 2

let mark = 67;
let grade;

switch (true) {
      case mark>=90:
            grade="A";
            break;
      case  mark>=80:
            grade="B";
            break;
      case  mark>=70:
            grade="C";
            break;
      case  mark>=60:
            grade="D";
            break;
      default:
            grade="F"
            
}
console.log(grade);



//** string Method */


let userName=" Kavipriya ";

let checkStatus=userName.startsWith(" ");

if(checkStatus){
      console.log("string cannot start with whitespace");
}
else{
      console.log(userName);
      
}

let checkStatus2=userName.endsWith(" ")

if(checkStatus2){
      console.log("string cannot end with whitespace");
}
else{
      console.log(userName);
      
}

let checkStatus3=userName.includes(" ")

if(checkStatus3){
      console.log("whitespace included in a string");
}
else{
      console.log(userName);
      
}

let userName2="Sivaprakash";
let PhoneNumber="123-456-7890";


console.log(userName.charAt(0));  //K
console.log(userName.indexOf("v"));  //2
console.log(userName.lastIndexOf("v"));  //2
console.log(userName.length);  // 9 char
console.log(userName.trim());
console.log(userName.toUpperCase());
console.log(userName.toLowerCase());
console.log(userName.repeat(3));
console.log(checkStatus);  //false/true
console.log(userName2.includes("p")); //true
console.log(userName2.includes(" "));  //false
console.log(PhoneNumber.replaceAll("-",""));
console.log(PhoneNumber.replaceAll("-","/"));
console.log(PhoneNumber.padStart(20,"0")); //00000000123-456-7890
console.log(PhoneNumber.padEnd(20,"0"));  //123-456-789000000000


//String Slicing

let fullName="Kavi priya";
let firstName1=fullName.slice(0,4);  //last index is exclusive
let lastName1=fullName.slice(5,10);
let firstChar=fullName.slice(0,1); //K
let lastChar=fullName.slice(-1); //a
let lastSecondChar=fullName.slice(-2); //ya
let lastSecondChar2=fullName.slice(-2,-1); //y

let email="kavi3191@gmail.com";

//more dynamic  - get first and last name based on space

let firstWord=fullName.slice(0,fullName.indexOf(" ")); //Kavi
let lastWord=fullName.slice(fullName.indexOf(" ")+1);  //priya

let result3=email.slice(0,email.indexOf("@"));
let result4=email.slice(email.indexOf("@")+1);



console.log(firstName1);
console.log(lastName1);
console.log(firstChar);
console.log(lastChar);
console.log(lastSecondChar);
console.log(lastSecondChar2);
console.log(firstWord);
console.log(lastWord);
console.log(result3);
console.log(result4);

// ***  Method Chaining *

// let getName=window.prompt("Enter your Id name:");


//without chaining
// getName=getName.trim();
// let letter=getName.charAt(0);
// letter=letter.toUpperCase();

// let extras=getName.slice(1);
// extras=extras.toLowerCase();


// getName=letter+extras;
// console.log(getName);

//with chaining

//getName=getName.trim().charAt(0).toUpperCase()+getName.trim().slice(1).toLowerCase();

// console.log(getName);  



//***Logical Operator *

let temp=25; //&&
let temp1=125;  // ||

// if(temp<30){
//       console.log("whether is good");  
// }
// else if(temp>0){
//       console.log("whether is good");  
// }
// else{
//       console.log("whether is bad");
// }


//Both condition must be true  - &&

if(temp<30 && temp>0){    
      console.log("whether is good");  
}
else{
      console.log("whether is bad");
}

// Any 1 condition must be true  - ||

if(temp1<30 || temp1>0){   
      console.log("whether is good");  
}
else{
      console.log("whether is bad");
}

let isSunny=false;

if(!isSunny){
      console.log("whether is clody");    
}
else{
      console.log("whether is sunny"); 
}


//*** Strict Equality */

let Pi= 3.14;

// if (Pi=="3.14"){
// if (Pi==="3.14"){
// if (Pi!="3.14"){
// if (Pi!=="3.14"){
// if (Pi="3.14"){
if (Pi==="3.14"){
      console.log("this is Pi");   
}
else{
      console.log("this is NOT Pi");   
}


//*** while Loop */

// let userName3="";
let userName3;

// if(userName3===""){
//       console.log("you did not enter the username");
// }
// else{
//       console.log(`here the username, hello ${userName3}`);  
// }


// **** while loop

// while(userName3===""|| userName3===null){
//       userName3=window.prompt("Enter your name,please");
// }
//       console.log(`here the username, hello ***${userName3}***`);  



//  **** Do while - execute statement atleast once before checking the condition

// do{
//       userName3=window.prompt("Enter your name,please");
// }
// while(userName3===""|| userName3===null)

// console.log(`here the username, hello ***${userName3}***`);  


//Another example
let loggedIn=true;
let userName4;
let password;

// 1.standerd while loop
// while(!loggedIn){
//       userName4=window.prompt("Enter your username:");
//       password=window.prompt("Enter your password:");

//       if(userName4==="kavipriya"&&password==="kavi@3191"){
//             loggedIn=true;
//             console.log("logged In sucessfully");
//       }
//       else{
//             console.log("wrong credential, try again");
//       }
// }

// 1.Do while loop // while loop skipped here- true
// do{
//       userName4=window.prompt("Enter your username:");
//       password=window.prompt("Enter your password:");

//       if(userName4==="kavipriya"&&password==="kavi@3191"){
//             loggedIn=true;
//             console.log("logged In sucessfully");
//       }
//       else{
//             console.log("wrong credential, try again");
//       }
// }while(!loggedIn)


// **** For loop 

for(let i=0;i<=2;i++){
      // console.log("Hello");
      console.log(`values are ${i}`);   
}

for(let i=1;i<10;i+=2){  //count upto 9  i=i+2  -->i+=2
      console.log(`value is ${i}`);   
}


for(let i=10;i>0;i--){  //count upto 9  i=i+2  -->i+=2
      console.log(`Count ${i}`);   
}
console.log("Happy New year!");


// 13 will be disappear from loop

// for(let i=1;i<=20;i++){ 
//     if(i==13){
//       continue; 
//     }
//     else{
//       console.log(i);
//     }
// }

//break - stop loop once reached the condition 1 - 12

for(let i=1;i<=20;i++){ 
      if(i==13){
        break;
      }
      else{
        console.log(i);
      }
  }


  // **** Function


  function Happybirthday(birthdayBaby,age){
      console.log("happy birthday to you ..");
      console.log("happy birthday to you ....");
      console.log(`happy birthday to dear ${birthdayBaby} ..`);
      console.log(`you have turns ${age} age,congratulations !...`);
  }

  Happybirthday("kavipriya",22);
  Happybirthday("sadhana",18);
  Happybirthday("sunil",16);


  //**return keyword

//   function add(a,b){
//       let updatedValues=a+b;
//       return updatedValues;
//   }

//   console.log(add(100,3));  //103
  
//   console.log(updatedValues); //result5 is not defined- can't use like this
  
  //shortcut

  function add(a,b){
      return a+b;
  }

  console.log(add(100,3));  //103


//Determine input number is even or odd?

function isEven(inputNumber){
/*    
      if(inputNumber %2===0){
            return true +", "+"Its Even number";
      }
      else{
            return false +", "+"Its Odd number";
      }    
*/

      //**ternary operator
      return inputNumber%2===0? true:false;

}

console.log(isEven(23));  //false
console.log(isEven(28));  //true
console.log(isEven(75));  //false

function isValidemail(email){
 /*     if(email.includes("@")){
            return true +" "+"valid email";
      }
      else{
            return false+" "+"NOT a valid email";
      }
 */           
      //** Ternary operator */
      return email.includes("@") ? true +" "+"valid email!":false+" "+"NOT a valid email!";
}

console.log(isValidemail("kavi@fake.com"));
console.log(isValidemail("sivafake.com"));



//***  Variable Scope */

// let m=2;
// let m=1; //'m' has already been declared

//local scope
// function1();

// only access within the function

// function function1(){
//       let x=1;
//       console.log(x); 
// }

// function function2(){
//       let x=2;
//       console.log(x); 
// }



// function1();

// function function1(){
//       let x=1;
//       console.log(y); 
// }

// function function2(){
//       let y=2;
//       console.log(x); 
// }

//** any variable declared outside the function is "global access".

let m=3;
function1();
function2();

function function1(){
     
      console.log(m);  //3
}

function function2(){
      
      console.log(m); //3
}

//looks local inialized value first and then global

let n=3;
function1();
function2();

function function1(){
      let n=1;
      console.log(n);  //1
}

function function2(){
      let n=2;
      console.log(n); //2
}







console.log(age);
console.log(price);
console.log(typeof price);
console.log(`my age is ${age}`);
console.log(`your gpa is ${gpa}`);
console.log(`my name is ${firstName}`);
console.log(`my favorite food ${favFood}`);
console.log(typeof firstName);
console.log(`is he is in online:${online}`);
console.log(typeof online);
console.log(`is she a student here: ${student}`);
console.log(typeof student);
console.log(`that student enrolled for seat: ${enrolled}`);
console.log(students);
console.log(result);
console.log(result2);
// console.log(userename);
console.log(age, typeof age);  //221
console.log(x, typeof x);
console.log(y, typeof y);
console.log(z, typeof z);
console.log(circumferance);
console.log(Math.E);
console.log(Math.PI);
console.log(z1);
console.log(maximumValue);  //81
console.log(minimumValue);  //-3.21
 







document.getElementById("myp").innerText = `value of x:${x}`;
document.getElementById("myp2").innerText = `value of y:${y}`;
document.getElementById("demo1").innerText = `your gpa is:${gpa}`;
document.getElementById("demo2").innerText = `my name is ${firstName}`;
document.getElementById("demo3").innerText = `is he is in online:${online}`;
document.getElementById("demo4").innerText = ` value of students: ${students}`;
document.getElementById("demo5").innerText = `result of operator presidance proplem: ${result2} `;
// document.getElementById("myp").innerText="hi";
// document.getElementById("myp").innerHTML="hi";




// comment - single line

/*this is
multi line
comment*/


