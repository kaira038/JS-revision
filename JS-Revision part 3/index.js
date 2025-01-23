// *** 1. Nested objects 

//example 1

const person = {
    fullName: "spongebob squarepants",
    age: 30,
    isStudent: true,
    habbits: ["cricket", "cooking ", "books reading"],
    address: {
        street: "nehry street",
        city: "new york",
        country: "England"
    }
}

console.log(person.fullName);
console.log(person.isStudent);
console.log(person.habbits);
console.log(person.habbits[1]);
console.log(person.address);
console.log(person.address.city); //property accessor twice .. -> nested

//loop through nested object

for (const propertyValue in person.address) {
    console.log(person.address[propertyValue]);
}

//example 2


class Person {
    constructor(name, age, ...address) {
        this.name = name;
        this.age = age;
        this.address = new Address(...address);  //parent
    }
}

class Address {
    constructor(street, city, country) {      //child
        this.city = city;
        this.street = street;
        this.country = country;
    }
}


const myObj = new Person("spongebob", 30,
    " 124 watertank",
    "newyouk",
    "england");
const myObj2 = new Person("sqaurpants", 37,
    " 126 watertank",
    "newyouk",
    "england");
const myObj3 = new Person("spongebob", 40,
    "128 watertank",
    "newyouk",
    "england");

console.log(myObj2.name);
console.log(myObj2.age);
console.log(myObj2.address);
console.log(myObj2.address.city);



// *** 2. Array of object


const myArrayOfFruit = [{ name: "apple", color: "red", calori: 95 },
{ name: "orange", color: "orange", calori: 45 },
{ name: "grape", color: "purple", calori: 65 },
{ name: "avacado", color: "green", calori: 195 },
{ name: "banana", color: "yellow", calori: 105 }];



console.log(myArrayOfFruit[0].name); //apple
console.log(myArrayOfFruit[2].calori); //65
console.log(myArrayOfFruit.push({ name: "pinapple", color: "yellow", calori: 56 }));
myArrayOfFruit.pop();
myArrayOfFruit.shift();
myArrayOfFruit.unshift({ name: "pinapple", color: "yellow", calori: 56 });
myArrayOfFruit.splice(0, 1);

// console.log(myArrayOfFruit);

myArrayOfFruit.forEach(fruit => console.log(fruit.color));

myArrayOfFruit.forEach(fruit => console.log(fruit.calori));


// --map--

const fruitName = myArrayOfFruit.map(fruit => fruit.name);
const fruitcolor = myArrayOfFruit.map(fruit => fruit.color);
const fruitcalori = myArrayOfFruit.map(fruit => fruit.calori);

console.log(fruitName);
console.log(fruitcolor);
console.log(fruitcalori);

// --- filter ---

const yellowFruit = myArrayOfFruit.filter(fruit => fruit.color === "yellow");
const lowCalFruit = myArrayOfFruit.filter(fruit => fruit.calori < 70);
const highCalFruit = myArrayOfFruit.filter(fruit => fruit.calori > 70);

console.log(yellowFruit);
console.log(lowCalFruit);
console.log(highCalFruit);


// --- reduce --

const maxFruit = myArrayOfFruit.reduce((max, fruit) =>
    fruit.calori > max.calori ?
        fruit : max);

const minFruit = myArrayOfFruit.reduce((min, fruit) =>
    fruit.calori < min.calori ?
        fruit : min);

console.log(maxFruit);
console.log(minFruit.calori);



// *** 3.  Sorting Technique



const myArray2 = ["Apple", "Pinnaple", "Grape", "Coconut", "Berries", "Kiwi"];

myArray2.sort();  // ['Apple', 'Berries', 'Coconut', 'Grape', 'Kiwi', 'Pinnaple']

console.log(myArray2);


const numbers = [1, 10, 2, 9, 3, 8, 4, 7, 5, 6];
numbers.sort((a, b) => a - b);

console.log(numbers);


//another example


const people = [{ name: "spongebob", age: 37, gpa: 1.5 },
{ name: "patrick", age: 47, gpa: 2.5 },
{ name: "sandy", age: 32, gpa: 0.5 },
{ name: "brooms", age: 27, gpa: 1.5 }];


// people.sort((a,b)=>a.age-b.age);
// people.sort((a,b)=>b.age-a.age);
// people.sort((a,b)=>a.gpa-b.gpa);
// people.sort((a,b)=>a.name-b.name); //not working
people.sort((a, b) => a.name.localeCompare(b.name));


console.log(people);


//*** 4.  Date Object */

const currentDate = new Date();
//years, months, days,hours,minutes,seconds, miliseconds
const dateArgument = new Date(2025, 0, 1, 2, 3, 4, 5);
const stringFormate = new Date("2024-01-02T12:00:00Z");
const year = currentDate.getFullYear();
const months = currentDate.getMonth();
const dates = currentDate.getDate();
const hours = currentDate.getHours();
const minutes = currentDate.getMinutes();
const seconds = currentDate.getSeconds();
const miliseconds = currentDate.getMilliseconds();
const days = currentDate.getDay();

//set date

const date = new Date();

date.setFullYear(2024);
date.setMonth(3);
date.setDate(22);
date.setHours(20);
date.setMinutes(45);
date.setSeconds(3);

//compare date and time

console.log(currentDate);
console.log(dateArgument);
console.log(stringFormate);
console.log(year);
console.log(months);
console.log(dates);
console.log(hours);
console.log(minutes);
console.log(seconds);
console.log(miliseconds);
console.log(days);

console.log(date);


//*** closure */

//example 1

function outer() {

    let message = "hello world";

    function inner() {
        console.log(message);
    }

    inner();

}

// message="hello baiya";  // wont change - bcz private variable  


outer();


//example 2

//state maintained but not private variable - anybody can access

// let count=0;

// function increment(){
//     // count=0;
//     count++;
//     console.log(`count incremented into ${count}`);

// }

// increment();
// increment();
// increment();

function createCounter() {

    let count = 0;

    function increment() {
        count++;
        console.log(`count incremented into ${count}`);
    }
    function getCount() {
        return count;
    }

    return { increment, getCount };
}

const myObject = createCounter();

myObject.increment();
myObject.increment();
myObject.increment();

console.log(`the current count is ${myObject.getCount()}`);


//example 3


function myfunction() {
    let score = 0;

    function increaseScore(points) {
        score += points;
        console.log(`+ ${points}`);
    }
    function decreaseScore(points) {
        score -= points;
        console.log(`-${points}`);
    }

    function getScore() {
        return score;
    }

    return { increaseScore, decreaseScore, getScore };
}

const myObject2 = myfunction();

// score=1000  - public access should be avoided as well as follows state maintanance 

myObject2.increaseScore(2);
myObject2.increaseScore(5);
myObject2.decreaseScore(3);

console.log(`Total score is ${myObject2.getScore()}`);



//***   6. SetTimeOut()  */


// function myfn(){
//     window.alert("hello");
// }

// setTimeout(myfn,3000);


//Anonymous function
// setTimeout(function(){window.alert("hello world")},3000);


//arrow function
// setTimeout(()=>window.alert("hello guys"),3000);



//example

let timeoutId;

function startTimer() {
    timeoutId = setTimeout(() => window.alert("Hello World"), 3000);
    console.log("started result");
}


function endTimer() {
    clearTimeout(timeoutId);
    console.log(" result cleared");

}



//***  7. Time() */

// console.time("test");


// for (i=0;i<1000000;i++){
//     //some code
// }

// console.timeEnd("test"); 


// //example

// function timeload() {
//     console.time("test");


//     for (i = 0; i < 1000000; i++) {
//         //some code
//     }

//     console.timeEnd("test");
// }

// timeload();  


//***  8. Format currency */

let number = 123456789;

// number=number.toLocaleString("en-US");        //123,456,789
// number=number.toLocaleString("hi-IN");        //12,34,56,789
// number=number.toLocaleString("tn-IN");        //12,34,56,789
// number=number.toLocaleString("de-DE");        //123.456.789
// number=number.toLocaleString(undefined);      //12,34,56,789


// .toLocaleString("locale", {options});

number = number.toLocaleString("en-US", { style: "currency", currency: "USD" });

number = number.toLocaleString("tn-IN", { style: "currency", currency: "INR" })

number = number.toLocaleString("de-DE", { style: "currency", currency: "EUR" })


console.log(number);



//***   9. Es6 --- Modules */

import { PI, getCircumference, getArea, getVolumn } from './MathUtil.js';

console.log(PI);


const circumference = getCircumference(10);

console.log(circumference);
console.log(getVolumn(10));
console.log(` ${getArea(2).toFixed(2)} cm`);
console.log(` ${circumference.toFixed(2)} cm^³`);



// *** 10. Asynchronous

// Synchronous - Executes line by line consecutively

// console.log("task 1");
// console.log("task 2");
// console.log("task 3");

// Asynchronous - Allows multiple operations to be performed concurrently without waiting.

// setTimeout(()=>console.log("Task 4"),3000);

// console.log("Task 5");
// console.log("Task 6");
// console.log("Task 7");



// callback


// function func1(callback) {
//     setTimeout(() => (console.log("task 4"),
//         callback()), 3000);
// }


// function func2() {
//     console.log("task 5");
//     console.log("task 6");
//     console.log("task 7");
// }


// func1(func2);



// *** 11. Error handling 


// example 1
// console.log(x);


// try {
//     // console.log(x);
//     console.log("hello");
// }
// catch (error) {
//     console.error(error);
// }
// finally {
//     console.log("you have reached the end");

// }


// example 2


// try {
//     const dividend = Number(window.prompt("Enter the dividend: "));
//     const divisor = Number(window.prompt("Enter the divisor: "));

//     if(divisor==0){
//         throw new Error("you cant't divided by zero");
//     }
//     if(isNaN(dividend)||isNaN(divisor)){
//         throw new Error("values must be Number")
//     }

//     const result = dividend / divisor;
//     console.log(result);
// }

// catch (error) {
//     console.error(error);
// }

// console.log("you have reached the end part");




//***   DOM  */

// console.log(document);

// console.dir(document);

// document.title="my webcite";

// document.body.style.backgroundColor="lightgrey";


const myheader = "(Dom manipulation)";


// document.getElementById("sample-dom").textContent=myheader;

//add on into it

document.getElementById("sample-dom").textContent += myheader;

//Element selector


// 1. ID access
const fruities = document.getElementById("Food"); //Foods-null

fruities.style.backgroundColor = "yellow";
fruities.style.textAlign = "center";

console.log(fruities);

//2. class access

const fruits = document.getElementsByClassName("fruit");

fruits[0].style.backgroundColor = "red";
// fruits[0].style.width="100px";

fruits[2].style.color = "purple";

// HTML elements are iterable - by enhanced for loop/ 2. dont have forEach method


//1. for(let fruit of fruits){
//     fruit.style.backgroundColor="yellow";
// }

// fruits.forEach();  //fruits.forEach is not a function

//2. possible - typecast the html collection as an array.

// Array.from(fruits);  // return new array

Array.from(fruits).forEach(fruit => {
    fruit.style.backgroundColor = "skyblue";
});


console.log(fruits); // html collection->text content.values 

//3. 


const h4Elements = document.getElementsByTagName("h4");
// const listTags=document.getElementsByTagName("ul");

// h4Elements[1].style.backgroundColor="lightgreen";

// for(let h4Element of h4Elements){
//     h4Element.style.backgroundColor="lightgreen";
// }

// for(let listTag of listTags){
//     listTag.style.backgroundColor="pink";
// }


Array.from(h4Elements).forEach(h4Element => {
    h4Element.style.color = "blue";
})

// Array.from(listTags).forEach(listTag=>{
//     listTag.style.color="green";
// })


// console.log(h4Element);  // return HTML Collection

//4. 1st matched element


// const forstMatchedElement=document.querySelector("h4");
// const forstMatchedElement=document.querySelector("li");
// const forstMatchedElement=document.querySelector("ul");
// const forstMatchedElement=document.querySelector("ol");  //null
const forstMatchedElement = document.querySelector(".fruit");

forstMatchedElement.style.fontStyle = "italic";
forstMatchedElement.style.backgroundColor = "pink";


console.log(forstMatchedElement);


// 5. 

// const fructos=document.querySelectorAll("li");

// fructos[3].style.backgroundColor="tomato";


// Node list  has buildIn for Each - no need to typecast by array

// fructos.forEach(fructo => {
//     fructo.style.backgroundColor="lightgreen";
//     fructo.style.color="purple";
// });



// console.log(fructos);  //node list of 6 li


//  ***  14. Dom navigation   * 

// .firstElementChild
// .lastElementChild
// .nextElementSibling
// .previousElementSibling
// .parentElement
// .children


//1. firstElementChild

const element = document.getElementById("fruits");
const firstchild = element.firstElementChild;

firstchild.style.backgroundColor = "yellow";  //apple


console.log(firstchild);


const element2 = document.querySelectorAll("ol");


element2.forEach(ulelement => {
    const firstchild2 = ulelement.firstElementChild;
    firstchild2.style.backgroundColor = "yellow";
});

console.log(element2);  //nodelist


// 2.lastElementChild      ||| ly firstelementchild

const element3 = document.getElementById("vegetables")
const lastElement = element3.lastElementChild;

lastElement.style.backgroundColor = "skyblue";


const element4 = document.querySelectorAll("ol");

element4.forEach(olElement => {
    const lastelement = olElement.lastElementChild;
    lastelement.style.backgroundColor = "skyblue";
});


// 3 .nextElementSibling


const element5 = document.getElementById("cakes");
const nextSibling = element5.nextElementSibling;
nextSibling.style.backgroundColor = "pink";

const element6 = document.getElementById("vegetables");
const nextSibling2 = element6.nextElementSibling;
nextSibling2.style.fontWeight = "bolder";

console.log(element5);

// 4 .previousElementSibling

const element7 = document.getElementById("banana");
const previousSibling = element7.previousElementSibling;
previousSibling.style.backgroundColor = "lightgreen";

const element8 = document.getElementById("vegetables");
const previousSibling2 = element8.previousElementSibling;
previousSibling2.style.fontWeight = "bolder";


// 5 .parentElement

const element9 = document.getElementById("tomato");
const parent = element9.parentElement;
parent.style.color = "white";
parent.style.backgroundColor = "brown";


// 6 .children

// const element10=document.getElementById("fruits");
const element10 = document.getElementById("desserts");
const children = element10.children;


children[2].style.color = "blue";

Array.from(children).forEach(child => {
    child.style.fontStyle = "italic";
});


console.log(children); //return html collection


//***   15. ADD/CHANGE html */

// STEP 1 CREATE THE ELEMENT
// STEP 2 ADD ATTRIBUTES/PROPERTIES
// STEP 3 APPEND ELEMENT TO DOM



// STEP 1 CREATE THE ELEMENT
const newh1 = document.createElement("h1");

// STEP 2 ADD ATTRIBUTES/PROPERTIES
newh1.textContent = "Adding and changing the HTML element!";
newh1.style.color = "tomato";
newh1.id = "myh1element";
newh1.className = "myheadtag";
newh1.style.textAlign = "center";



// STEP 3 APPEND ELEMENT TO DOM

// document.body.append(newh1);
// document.body.prepend(newh1);
document.getElementById("box-2").append(newh1);
// document.getElementById("box-2").prepend(newh1);

//sandwich between the boxes

// const sandwich=document.getElementById("box-3");
// document.body.insertBefore(newh1,sandwich);

// const boxes=document.querySelectorAll(".box");
// document.body.insertBefore(newh1,boxes[2]);


// remove the HTML Element 

//  boxes[2].previousElementSibling.remove();

// document.getElementById("box-2").removeChild(newh1);



//Another example

const newlistItem = document.createElement("li");

newlistItem.textContent = "Blueberry";
newlistItem.style.color = "blue";
newlistItem.style.backgroundColor = "pink";
newlistItem.style.width = "100px"

// document.body.append(newlistItem);
// document.getElementById("berries").append(newlistItem);
// document.getElementById("berries").prepend(newlistItem);
const berry = document.querySelectorAll(".berry");

document.getElementById("berries").insertBefore(newlistItem, berry[1]);


//  berry[1].previousElementSibling.remove();
// document.getElementById("berries").removeChild(newlistItem);


//*** 16. Mouse Events */

// .addEventListener(event, callback); (or)
// .addEventListener(event, anonymous function); (or)
// .addEventListener(event, Arrow function); 

const myBox = document.getElementById("myBox");
const select = document.getElementById("select");


// 1.
//  function changeContent(event){
//     console.log(event);
//     event.target.style.backgroundColor="tomato";
//     event.target.textContent=" ohh ouch!  🤕 ";
//  }


//  myBox.addEventListener("click",changeContent);

//2. 3.

// myBox.addEventListener("mouseover",function(event){
//     event.target.style.backgroundColor="yellow";
//     event.target.textContent=" Dont do it 😯 ";
// });
// myBox.addEventListener("click",event=>{
//     event.target.style.backgroundColor="tomato";
//     event.target.textContent=" ohh ouch!  🤕 ";
// });
// myBox.addEventListener("mouseout",event=>{
//     event.target.style.backgroundColor="lightgreen";
//     event.target.textContent=" Click me 😊 ";
// });

select.addEventListener("mouseover", function (event) {
    myBox.style.backgroundColor = "yellow";
    myBox.textContent = " Dont do it 😯 ";
});
select.addEventListener("click", event => {
    myBox.style.backgroundColor = "tomato";
    myBox.textContent = " ohh ouch!  🤕 ";
});
select.addEventListener("mouseout", event => {
    myBox.style.backgroundColor = "lightgreen";
    myBox.textContent = " Click me 😊 ";
});


// events: keydown, keyup

// document.addEventListener("keydown", event => {
//     console.log(`the keydown=${event.key}`);
// });
// document.addEventListener("keyup", event => {
//     console.log(`the key up:${event.key}`);
// });

// const myBox3 = document.getElementById("myBox3");
// const moveAmount = 10;
// let x = 0;
// let y = 0;

// document.addEventListener("keydown", event => {
//     myBox3.textContent = "😯";
//     myBox3.style.backgroundColor = "tomato";
// });

// document.addEventListener("keyup", event => {
//     myBox3.textContent = "🤗";
//     myBox3.style.backgroundColor = "skyblue";
// });


// document.addEventListener("keydown", event => {

//     if (event.key.startsWith("Arrow")) {

//         event.preventDefault();

//         switch (event.key) {
//             case "ArrowUp":
//                 y -= moveAmount;
//                 break;
//             case "ArrowDown":
//                 y += moveAmount;
//                 break;
//             case "ArrowLeft":
//                 x -= moveAmount;
//                 break;
//             case "ArrowRight":
//                 x += moveAmount;
//                 break;
//         }
//         myBox3.style.top = `${y}px`;
//         myBox3.style.left = `${x}px`;
//     }


// });

// *** 18. Hide /Show an HTML elements

const carImage = document.getElementById("car-image");
const mybtn = document.getElementById("mybtn");


// mybtn.addEventListener("click",event=>{
//     carImage.style.display="none";
//     mybtn.textContent="show"
// });

// toggle between hide and show element

mybtn.addEventListener("click", event => {

    if (carImage.style.visibility === "hidden") {
        carImage.style.visibility = "visible";
        mybtn.textContent = "Hide";
    }
    else {
        carImage.style.visibility = "hidden";
        mybtn.textContent = "show";
    }
});


// want to reserve space use visbilitity instead display property.


//*** 19.NodeLists */


let buttons = document.querySelectorAll(".myButtons");

// buttons.forEach(button=>{
//     button.textContent +="😊";
//     button.style.backgroundColor="green";
// });

// 1. click Event

// buttons.forEach(button=>{
//     button.addEventListener("click",event=>{
//         event.target.style.backgroundColor="tomato";
//     })
// });

// 2. Mouse over and Mouse Out

// buttons.forEach(button=>{
//     button.addEventListener("mouseover",event=>{
//         event.target.style.backgroundColor="hsla(209, 80.40%, 30.00%, 0.91)";
//     });
// });
// buttons.forEach(button=>{
//     button.addEventListener("mouseout",event=>{
//         event.target.style.backgroundColor="hsla(209, 82%, 57%, 0.918)";
//     });
// });

// 3. Add on element

// let createBtn=document.createElement("button"); //step 1
// createBtn.textContent="Button 5";//step2
// createBtn.classList="myButtons";
// document.body.appendChild(createBtn); //step 3

// // console.log(buttons);  //still node list shows 4 buttons

// //manually need to add

// buttons=document.querySelectorAll(".myButtons");

// console.log(buttons); // node list of 5 buttons


// 4. Remove an element

buttons.forEach(button => {
    button.addEventListener("click", event => {
        event.target.remove();
        buttons = document.querySelectorAll(".myButtons");
        console.log(buttons);

    })
});

console.log(buttons);


//***  20. Class Lists */

// add()
// remove()
// toggle(Remove if present, Add if not)
// replace(oldClass, newClass)
// contains()


const Mybutton = document.getElementById("myButton");
const myh3Elemenet = document.getElementById("myh3Elemenet");
myh3Elemenet.classList.add("enabled");
Mybutton.classList.add("enabled");

// Mybutton.classList.add("hover");

// Mybutton.addEventListener("mouseover",event=>{
//     event.target.classList.add("hover");
// });
// Mybutton.addEventListener("mouseout",event=>{
//     event.target.classList.remove("hover");
// });

//3. toggle(Remove if present, Add if not)

// Mybutton.addEventListener("mouseover",event=>{
//     event.target.classList.toggle("hover");
// });
// Mybutton.addEventListener("mouseout",event=>{
//     event.target.classList.toggle("hover");
// });

// 4. replace(oldClass, newClass)/5.contains()


Mybutton.addEventListener("click", event => {


    if (event.target.classList.contains("disabled")) {
        event.target.textContent = "🤨again!";
    }
    else {
        event.target.classList.replace("enabled", "disabled");
    }

    // event.target.classList.replace("enabled","disabled");
})

myh3Elemenet.addEventListener("click", event => {


    if (event.target.classList.contains("disabled")) {
        event.target.textContent = "🤨again!";
    }
    else {
        event.target.classList.replace("enabled", "disabled");
    }
})


//another example

let btns = document.querySelectorAll(".btns");

btns.forEach(btn => {
    btn.classList.add("enabled");
});

// btns.forEach(btn=>{
//     btn.addEventListener("mouseover",event=>{
//         event.target.classList.add("hover");
//     })
// })
// btns.forEach(btn=>{
//     btn.addEventListener("mouseout",event=>{
//         event.target.classList.replace("hover","enabled");
//     })
// })

btns.forEach(btn => {
    btn.addEventListener("mouseover", event => {
        event.target.classList.toggle("hover");
    })
})
btns.forEach(btn => {
    btn.addEventListener("mouseout", event => {
        event.target.classList.toggle("hover");
    })
})

btns.forEach(btn => {

    btn.addEventListener("click", event => {

        if (event.target.classList.contains("disabled")) {
            event.target.textContent = "🤨again!"
        }
        else {
            event.target.classList.replace("enabled", "disabled");
        }

        // event.target.classList.replace("enabled","disabled");
    });
})


//*** 21. Callback hell */

//synchronous fns


// function tasks1(){
//     console.log("task 1 complete");
// }
// function tasks2(){
//     console.log("task 2 complete");
// }
// function tasks3(){
//     console.log("task 3 complete");
// }
// function tasks4(){
//     console.log("task 4 complete");
// }

// tasks1();
// tasks2();
// tasks3();
// tasks4();

// console.log("All task completed");


//Asynchronous fns - can use arrow function or anonymous function

// function tasks1(){
//     setTimeout(()=>{
//         console.log("task 1 complete");
//     },2000);   
// }
// function tasks2(){
//     setTimeout(()=>{
//         console.log("task 2 complete");
//     },1000);  
// }
// function tasks3(){
//     setTimeout(()=>{
//         console.log("task 3 complete");
//     },4000);  
// }
// function tasks4(){
//     setTimeout(()=>{
//         console.log("task 4 complete");
//     },1500);  
// }

// console.log("All task completed");


// tasks1();
// tasks2();
// tasks3();
// tasks4();   ---> results not in order



// function tasks1(callback){
//     setTimeout(()=>{
//         console.log("task 1 complete");
//         callback();
//     },2000);   
// }
// function tasks2(callback){
//     setTimeout(()=>{
//         console.log("task 2 complete");
//         callback();
//     },1000);  
// }
// function tasks3(callback){
//     setTimeout(()=>{
//         console.log("task 3 complete");
//         callback();
//     },4000);  
// }
// function tasks4(callback){
//     setTimeout(()=>{
//         console.log("task 4 complete");
//         callback();
//     },1500);  
// }


// callback hell

// tasks1(()=>{
//     tasks2(()=>{
//         tasks3(()=>{
//             tasks4(()=>{
//                 console.log("All task completed");
//             });
//         });
//     });
// });

//**  22. Promises */

// DO THESE CHORES IN ORDER

// 1. WALK THE DOG
// 2. CLEAN THE KITCHEN
// 3. TAKE OUT THE TRASH



// ** call back hell

// function walkWithDog(callback){
//     setTimeout(()=>{
//         console.log("walked with dog🐕, task complete.");
//         callback();
//     },2000);
// }
// function cleanKitchen(callback){
//     setTimeout(()=>{
//         console.log("kitchen get cleaned🧹, task complete.");
//         callback();
//     },1000);
// }
// function takeOutTrash(callback){
//     setTimeout(()=>{
//         console.log("take away the trash 🗑️, task complete.");
//         callback();
//     },500);
// }

// walkWithDog(()=>{
//     cleanKitchen(()=>{
//         takeOutTrash(()=>{
//             console.log("all task has been completed");
//         });
//     });
// });

//** To avoid callback hell */

//1.All asynchronous code wraped with promise - we dont need callbacks
//2.we will use method chaining instead callbacks hell- pramid of doom.
//3. note : without catch error- index.html:1 Uncaught (in promise) You Didn't complete the task.


function walkWithDog() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // resolve("walked with dog🐕, task complete."); //completion msg

            // what if its reject

            const walkDog = true;

            if (walkDog) {
                resolve("walked with dog🐕, task complete.");
            }
            else {
                reject("You Didn't complete the task");
            }

        }, 2000);
    });
}
function cleanKitchen() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // resolve("kitchen get cleaned🧹, task complete.");

            const cleaned = true;

            if (cleaned) {
                resolve("kitchen get cleaned🧹, task complete.");
            }
            else {
                reject("You Didn't complete the task");
            }
        }, 1000);
    });
}
function takeOutTrash() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // resolve("take away the trash♻️");
            // const trashTaken = false;
            const trashTaken = true;

            if (trashTaken) {
                resolve("take away the trash♻️");
            }
            else {
                reject("You Didn't complete the task");
            }
        }, 500);
    });
}

//method chaining

// walkWithDog().then(value => { console.log(value); return cleanKitchen() })
//     .then(value => { console.log(value); return takeOutTrash() })
//     .then(value => { console.log(value); console.log(" All task has been completed") })
//     .catch(error=>console.error(error));



//**  23. Async/Await  */

//Allows you write asynchronous code in a synchronous manner
// await depends async

async function dochores() {

    try {
        const walkDog = await walkWithDog();
        console.log(walkDog);

        const cleanedKitchen = await cleanKitchen();
        console.log(cleanedKitchen);

        const takenbin = await takeOutTrash();
        console.log(takenbin);

        console.log("All chores has been completed");
    }
    catch (error) {
        console.error(error);
    }

}

dochores();



// if Uncaught (in promise) You Didn't complete the task - do catch error.


//** 24. JSON */

// 1. JSON.stringify() = converts a JS object/array to a JSON string.

// const names=["kavipriya","divyapriya","logapriya","hemapriya"];
// const personObject={"name1":"kavipriya","age":21,"isEmployeed":true,"hobby":["sports","musics","cooking"]};
// const peopleArray=[{ "name1": "kavipriya","age": 21, "isEmployeed": false},{"name1": "divya","age": 22,"isEmployeed": true},{"name1": "durga","age": 24,"isEmployeed": true},{"name1": "harini","age": 27,"isEmployeed": false}];


// const Jsonnames=`["kavipriya","divyapriya","logapriya","hemapriya"]`;
// const JsonpersonObject=`{"name1":"kavipriya","age":21,"isEmployeed":true,"hobby":["sports","musics","cooking"]}`;
// const JsonpeopleArray=`[{ "name1": "kavipriya","age": 21, "isEmployeed": false},{"name1": "divya","age": 22,"isEmployeed": true},{"name1": "durga","age": 24,"isEmployeed": true},{"name1": "harini","age": 27,"isEmployeed": false}]`;

// const convertToString1=JSON.stringify(names);
// const convertToString2=JSON.stringify(personObject);
// const convertToString3=JSON.stringify(peopleArray);

// console.log(names);
// console.log(personObject);


// console.log(convertToString1);    //return one gaint string
// console.log(convertToString2);
// console.log(convertToString3);



// 2.  JSON.parse() = converts a JSON string to a JS object/array


// const parsedData1=JSON.parse(Jsonnames);
// const parsedData2=JSON.parse(JsonpersonObject);
// const parsedData3=JSON.parse(JsonpeopleArray);


// console.log(parsedData1);
// console.log(parsedData2);
// console.log(parsedData3);


// fetch("name.json")
//    .then(response=>response.json())
//    .then(value=>console.log(value))

// fetch("person.json")
//    .then(response=>response.json())
//    .then(value=>console.log(value))

fetch("people.json")
    .then(response => response.json())
    .then(values => values.forEach(value => console.log(value.age))
    )


//  **  25.Cookies

// console.log(navigator.cookieEnabled);  //true


//add cookie

document.cookie = "firstName=kavipriya; expires=Sun, 1 January 2030 12:00:00 UTC; path=/";
document.cookie = "lastName=sakthivel; expires=Sun, 1 January 2000 12:00:00 UTC; path=/";


// console.log(document.cookie);  //firstName=kavipriya -->look like string but its object.
//             //can hold more then 1 cookis ,just by access document.cookie


//function to create a cookie
// setcookie("email","kavipriya3891@gmail.com",365);

deleteCookie("firstName1");
deleteCookie("firstName");
deleteCookie("fifirstName1");
deleteCookie("firstName2");
deleteCookie("lastName1");




function setcookie(name, value, daysToLive) {
    const date = new Date();
    date.setTime((date.getTime() + (daysToLive * 24 * 60 * 60 * 1000)));
    let expires = "the expires=" + date.toUTCString();  //convert utc
    // document.cookie=`${name}=${value; ${expires}; }`;
    document.cookie = `${name}=${value}; ${expires}; path=/`

}

function deleteCookie(name) {
    setcookie(name, ' ', -1);
}

deleteCookie("firstName1");
deleteCookie("firstName");
deleteCookie("fifirstName1");
deleteCookie("firstName2");
deleteCookie("lastName1");

console.log(document.cookie);


//***  26.Fetch()  */

// fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
// // .then(response=>console.log(response))
// .then(response=>{
//     if(!response.ok){
//         throw new Error("could not fetch data resourse");
//     }
//     return response.json()   
// }) //convert to json method.
// .then(data=>console.log(data.name))  //--> pikachu
// .catch(error=>console.error(error));


//even name is not invalid ,still fetch is going resolve

// fetch("https://pokeapi.co/api/v2/pokemon/spongebob")  //404 error / ok: false
// // .then(response=>console.log(response))
// .then(response=>console.log(response)) //convert to json method.  
// .then(data=>console.log(data.name))
// .catch(error=>console.error(error));


//async

// fetchData();

// async function fetchData() {
//     try {

//         const pokemonName = document.getElementById("pokemonName").value.toLowerCase();
//         const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);


//         if (!response.ok) {
//             throw new Error("couldn't fetch date from resourse");
//         }
//         const data = await response.json();
//         console.log(data);

//         // const pokemonSprite =data.sprites.front_default;
//         // const imgSprite=document.getElementById("pokemonsprite");

//         // imgSprite.src=pokemonSprite;
//         // imgSprite.style.display="block";

//     }
//     catch (error) {
//         console.error(error);
//     }

// }


window.onload = function () {

    async function fetchData() {
        try {

            const pokemonName = document.getElementById("pokemonName").value.toLowerCase();
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);


            if (!response.ok) {
                throw new Error("couldn't fetch date from resourse");
            }
            const data = await response.json();
            console.log(data);

            const pokemonSprite =data.sprites.front_default;
            const imgSprite=document.getElementById("pokemonsprite");

            imgSprite.src=pokemonSprite;
            imgSprite.style.display="block";

        }
        catch (error) {
            console.error(error);
        }

    }

    window.fetchData=fetchData;
}

