//***  1. Array */

const fruits=["apple","orange","banana"];


// create array item in index of 3

fruits[3]="coconut";

// change array item - replace apple into grape

fruits[0]="grape"       

// add item at the end

fruits.push("berries");

//remove item at the end

fruits.pop();

//add item at beginning

fruits.unshift("pinapple");

//remove item at the beginning

fruits.shift();


console.log(fruits);    //['apple', 'orange', 'banana']
console.log(fruits[0]); // apple
console.log(fruits[1]); //orange
console.log(fruits[2]); //banana
console.log(fruits[3]); // undefined - bcz no item available on index of 3
console.log(fruits);    // ['apple', 'orange', 'banana', 'coconut']
                        // ['grape', 'orange', 'banana', 'coconut']
                        // ['grape', 'orange', 'banana', 'coconut', 'berries']
                        // ['grape', 'orange', 'banana', 'coconut']
                        // ['pinapple', 'grape', 'orange', 'banana', 'coconut']
                        // ['grape', 'orange', 'banana', 'coconut'] - 4 left
console.log(fruits.length);  //4


let index=fruits.indexOf("grape");
let index2=fruits.indexOf("banana");
let index3=fruits.indexOf("mango");


console.log(index);   //0
console.log(index2);  //2
console.log(index3);  //-1 **** bcz array item not available in array list


//Loop through array list to display array element

for(i=0;i<fruits.length;i++){
    console.log(fruits[i]);   //--> use counter to display element
}

// for(i=0;i<fruits.length;i+=2){
//     console.log(fruits[i]);   //--> grape,banana
// }

// for(i=1;i<fruits.length;i+=2){
//     console.log(fruits[i]);      //--> orange,coconut
// }


// For order reverse

// for(i=fruits.length-1;i>=0;i--){
//     console.log(fruits[i]);
// }

//Enhanced For loop

for(let fruity of fruits){  //--> variable created -fruity
    console.log(fruity);
}

//order alphabetically

console.log(fruits.sort());  // ['banana', 'coconut', 'grape', 'orange']

// reverse order alphabetically

console.log(fruits.sort().reverse());  // ['orange', 'grape', 'coconut', 'banana']



// *** 2. 2D Array - multidimentional array that store date in matrix form.


let matrix=[[1,2,3],
            [4,5,6],
            [7,8,9],
            ["*",0,"#"]];


for(let row of matrix){
    const rowString=row.join(" ")
    console.log(rowString);
}            


// *** 3. Spread operator - unpacks the elements

let number=[1,2,3,4,5];

// let maximum=Math.max(number); //Nan
let maximum=Math.max(...number);  //5
let minimum=Math.min(...number);  //1

console.log(maximum);
console.log(minimum);


let userName="kavipriya";
let letters=[...userName].join("/");

console.log(letters);

//By using spread operator, can combine array.

let fruits2=["apple","grape","dragon"];
let veggies=["potata","tomato","onion"];


// let foods=[...fruits2];
let foods=[...fruits2,...veggies,"eggs","milk"];

console.log(foods); //['apple', 'grape', 'dragon']- identical array
//['apple', 'grape', 'dragon', 'potata', 'tomato', 'onion', 'eggs', 'milk']


// *** 4. Rest parameter  ...*

//Bundle separate element into an array


function openFrige(...foods){   // ... => accept any arguments
    console.log(...foods);  //pitza pasta sushi hamburger hotdog
}

// function getFood(...foods){
//     return foods;
// }

const food1="pitza";
const food2="pasta";
const food3="sushi";
const food4="hamburger";
const food5="hotdog";

console.log(openFrige());  // undefined []- array created
console.log(openFrige(food1,food2,food3,food4,food5));
console.log(openFrige(food1,food2,food3,food4,food5,"ramen"));

// const foods2=getFood(food1,food2,food3,food4,food5,"ramen");

// console.log(foods2);



//example 2

function sum(... nos){
    let result=0;

    for (let number of nos){
        result+=number; 
    }

    return result;

}

const total=sum(1,2,40,4); //1    0+1=1,  1+2=3, 3+40=43  4+43=47

console.log(`The total is: ${total}.`);

//Calculate average

function getAverage(... numbers){
    let result=0;

    for (let number of numbers){
        result+=number;  //228
    }

    return result/numbers.length;

}
const num=getAverage(78,75,40,35);
console.log(num);


//By using rest parameter to combine strings together

 function combineString(...strings){
    return strings.join(" ")
 }

const fullName=combineString("This is","kavipriya","from","tvm");

console.log(fullName);


// *** 5. callbacks - A function passed as an aurgument to the another function.



goodbye(leave);

function hello(){
    console.log("Hello");   
}

function goodbye(callback){
    console.log("Goodbye");
    callback();
}

function wait(){
    console.log("wait");
}

function leave(){
    console.log("leave");
}

//example 2

// sum(1,2,displayConsole);

// function sum(callback,x,y){
//     let result = x + y;
//     callback(result);
// }

// function displayConsole(result){
//  console.log(result);
// }


//*** 6. ForEach() */

//array.forEach(callback)

const myArray=[1,2,3,4,5,6];

function display(element){
    console.log(element);   
}

function double(element,index,array){
    array[index]=element*2;
    console.log(array[index]);
}
function triple(element,index,array){
    array[index]=element*3;
    console.log(array[index]);
}
function sqr(element,index,array){
    array[index]=Math.pow(element,2);
    console.log(array[index]);
}
function cube(element,index,array){
    array[index]=Math.pow(element,3);
    console.log(array[index]);
}
            
// myArray.forEach(display);
// myArray.forEach(double);
// myArray.forEach(triple);
// myArray.forEach(sqr);
myArray.forEach(cube);

//more example

const veggy=["carrot","beetroot","onion","potato"];

veggy.forEach(firstLetterUpperCase);
veggy.forEach(myfn);

function myfn(element){
    console.log(element);
}

function upperCase(element,index,array){
    array[index] = element.toUpperCase();
}

function lowerCase(element,index,array){
    array[index] = element.toLowerCase();
}

function firstLetterUpperCase(element,index,array){
    array[index] = element.charAt(0).toUpperCase()+element.slice(1);
}


// *** 7. Map() */

const myNumbers=[1,2,3,4,5,6];
const squredvalue=myNumbers.map(square);
const cubeValue=myNumbers.map(cube);

console.log(squredvalue); //[1, 4, 9, 16, 25, 36]
console.log(cubeValue);  // [1, 8, 27, 64, 125, 216]

function square(element){
 return Math.pow(element,2);
}

function cube(element){
    return Math.pow(element,3);
}

 //another example -2

 const student=["kavipriya","Priya","rekka","Siva"];
 const namesValue=student.map(names);
 const nameslow=student.map(nameslower);
 const conc=student.map(concate);


 console.log(namesValue);
 console.log(nameslow);
 console.log(conc);
 


 function names(element){
    return element.toUpperCase();
 }
 function nameslower(element){
    return element.toLowerCase();
 }
 function concate(element){
//    return element.charAt(0).toUpperCase();
    return element.charAt(0).toUpperCase()+element.slice(1);
 }


 //another example -3


 const dates=["2026-03-10","2025-01-15","2002-08-21"];
 const format=dates.map(formateddate);


 console.log(format);
 
 function formateddate(element){
    const parts=element.split("-");
    return `${parts[2]}/${parts[1]}/${parts[0]}`;
 }

 
//** filter() */

const myArray2=[1,2,3,4,5,6,7];
const EvenNum=myArray2.filter(iseven);
const OddNum=myArray2.filter(isOdd);


console.log(EvenNum); //2,4,6
console.log(OddNum);  //[1, 3, 5, 7]


function iseven(element){
    return element%2===0;  //true
}

function isOdd(element){
    return element%2!==0;
}

//example 2

const age=[16,17,18,18,22,60,20];
const adultAges=age.filter(isAdult);
const children=age.filter(ischild);

console.log(adultAges); //  [18, 18, 22, 60, 20]
console.log(children);  //  [16, 17]


function isAdult(element){
    return element>=18;
}

function ischild(element){
    return element<18;
}

//example 3

const word=["apple","orange","guava","pomeogranet","coconut"];
const longWord=word.filter(longW);
const shortWord=word.filter(shortW);

console.log(longWord); // ['orange', 'pomeogranet', 'coconut']
console.log(shortWord); //  ['apple', 'guava']


function longW(element){
    return element.length>=6;
}
function shortW(element){
    return element.length<6;
}


//*** 9. reduce() */

const price=[5,75,30,10,15,25,4];
const totalVal=price.reduce(numbervalidate);

console.log(`$${totalVal.toFixed(2)}`);  //164


function numbervalidate(accumulator, element){  //pevious + next element
 return accumulator+element;
}


//another example

const scores = [75, 50, 90, 80, 65, 95];
const maximumVal=scores.reduce(getMax);
const minimumVal=scores.reduce(getMin);


console.log(maximumVal); //95
console.log(minimumVal); //50


function getMax(accumulator,element){
 return Math.max(accumulator,element);
}

function getMin(accumulator,element){
    return Math.min(accumulator,element);
}


//*** 10.  Function Expression */

// function helloo(){
//     console.log("Hello");
// }

// helloo(); //Hello   


//function assigned to variable

const helloo=function(){
    console.log("hello");
}

helloo();

// Assign entire fn as a value

// setTimeout(function(){
//     console.log("hello world");   
// },3000);

//Example

const myarray=[1,2,3,4,5,6,7];

const squre=myarray.map(function (element){
    return element*2;
});

const cube2=myarray.map(function(element){
 return element*3;
});

const even=myarray.filter(function(element){
  return element%2===0;
}); 

const odd=myarray.filter(function(element){
   return element%2!==0;
});

const totalValue=myarray.reduce(function(accumulator,element){
  return accumulator+element;
})

// function square(element){
//     return element*2;
// }

console.log(squre); // [2, 4, 6, 8, 10, 12, 14]
console.log(cube2); //[3, 6, 9, 12, 15, 18, 21]
console.log(even);  //[2, 4, 6]
console.log(odd);   //[1, 3, 5, 7]
console.log(totalValue);  //28


// *** 11. Arrow Function

//Differance

// function user(){
//     console.log(" Username: Kavipriya");
// }

//Function Expression -->

// let user=function(){
//     console.log(" Username: Kavipriya");
// }

//Arrow Function--> 

let user=()=>console.log("UserName:Kavipriya");


user();

// example 1

// setTimeout(callback,3000);

setTimeout(()=>console.log("Hello guys"),3000);

// pass parameter

const employee=(name,age)=>{console.log(`the emp name is ${name}`)
                     console.log(`the emp age is ${age}`)};


employee("kavipriya",22);


//example 2

const sample = [1, 2, 3, 4, 5, 6];

const sqr2=sample.map((element)=>element*2);
const cube3=sample.map((element)=>element*3);
const odd2=sample.filter((element)=>element%2!==0);
const even2=sample.filter((element)=>element%2===0);
const total2=sample.reduce((accumulator,element)=>accumulator+element);


console.log(sqr2);
console.log(cube3);
console.log(odd2);
console.log(even2);
console.log(total2);



//** 12. Object  */


const person1 = {
    firstName: "Spongebob",
    lastName: "Squarepants",
    age: 30,
    isEmployed: true,
    sayHello: function(){console.log("Hi! I am Spongebob!")},
    eat: function(){console.log("I am eating a Krabby Patty")},
}

const person2 = {
    firstName: "Patrick",
    lastName: "Star",
    age: 42,
    isEmployed: false,
    sayHello: () => console.log("Hey, I'm Patrick..."),
    eat: () => console.log("I am eating roast beef, chicken, and pizza"),
}

console.log(person1.firstName);
console.log(person2.firstName);

person1.sayHello();
person1.eat();
person2.sayHello();
person2.eat();



//** 13.this keyword */

const myObj1={
    name:"kavipriya",
    age:22,
    detail:function(){console.log(`hi this is ${this.name} from TVM`);
    }
}
const myObj2={
    name:"sivaprakash",
    age:25,
    food:"Biriyani",
    detail:function(){console.log(`hi this is ${this.name}  and his age is :${this.age}`)
    },
    favfood:()=>{console.log(`His favorite food is ${this.food}`)
    }
} 

console.log(myObj1.age);
console.log(myObj1.detail());
console.log(myObj2.detail());
console.log(myObj2.favfood()); //undefined- bcz arrow fn used

console.log(myObj1);
console.log(myObj2);


//** 14. Constructor */

// function Car(make, model, year, color){
//     this.make=make;
//     this.model=model;
//     this.year=year;
//     this.color=color;
//     this.drive=function(){console.log(`hello! this car model: ${model} is special`);
//     }
// }

function Car(a, b, c, d){
    this.make=a;
    this.model=b;
    this.year=c;
    this.color=d;
    this.drive=function(){console.log(`hello! this car model: ${b} is special`);
    }
}

//create instance of object

const car1 = new Car("Ford", "Mustang", 2024, "red");
const car2 = new Car("Chevrolet", "Camaro", 2025, "blue");
const car3 = new Car("Dodge", "Charger", 2026, "silver");


console.log(car2.color);
console.log(car3.year);
car1.drive();
car2.drive();

//*** 15. Classes */

class Product{
    constructor(productName,rate){
        this.productName=productName;
        this.rate=rate;
    }

    displayProducts(){  //fn inside the class,no need fn keyword
        console.log(`The Product Name: ${this.productName}`);
        console.log(`The Price: ${this.rate.toFixed(2)}`);   
    }

    //create method
    calculatewithTax(salesTax){
        return this.rate+(this.rate*salesTax);
    }

}
const salesTax=0.05;

const myObject=new Product("shirt",30);
const myObject2=new Product("pants",50);

myObject.displayProducts();
myObject2.displayProducts();

const Total =myObject.calculatewithTax(salesTax);
const Total2=myObject2.calculatewithTax(0.07);

console.log(`The Total price with Tax :$ ${Total.toFixed(2)}`);
console.log(`The Total price with Tax :$ ${Total2.toFixed(2)}`);

//*** 16. static

//Static members (methods and properties) are accessed on the class itself, not instances.

class MathUtil{
    static PI=3.14;  //static properties

    static getDiameter(radius){
        return radius*2;
    }
    static getcircumferance(radius){
        return 2*this.PI*radius;
    }
    static getArea(radius){
        return this.PI*radius*radius;
    }

}

console.log(MathUtil.PI); //3.14
console.log(MathUtil.getDiameter(10));
console.log(MathUtil.getcircumferance(10));
console.log(MathUtil.getArea(10));



// Example 2   --> mixed of regular property method and static property method.

class User{
    //static property
    static userCount=0;

    constructor(addedUserNames){
        this.addedUserNames=addedUserNames;
        User.userCount++;
    }

    //method
    sayHello(){
        return `hi the userName is ${this.addedUserNames}`;
    }
    //static method
    static getUsercount(){
        return `The Total users added to the class are : ${User.userCount}`;
    }
}

const user1=new User("Hey ,kavipriya");
const user2=new User("hay, dharshini");
const user3=new User("hello, siva");


console.log(user1.addedUserNames); //Hey ,kavipriya
console.log(User.userCount); //1-> 2 ->3

console.log(user1.sayHello());
console.log(user2.sayHello());
// console.log(user3.sayHello());


console.log(User.getUsercount());


//** 17. Inheritance

class Animal{
    isAlive=true;

    eat(){
        console.log(`The ${this.name} is already eat`);
    }

    sleep(){
        console.log(`The ${this.name} is already sleep`);  
    }
}

class Rabbit extends Animal{
    name="rabit";

    run(){
        console.log(`the ${this.name} will run`);
    }
}
class Fish extends Animal{
    name ="fish";
    swim(){
        console.log(`the ${this.name} will swim fast`);
    }
}
class Hawk extends Animal{
    name="hawk";
    fly(){
        console.log(`the ${this.name} will fly`);
    }
}

const rabit=new Rabbit();
const fish=new Fish();
const hawk=new Hawk();


// console.log(rabit.isAlive);
// rabit.eat();
// rabit.sleep();

console.log(fish.isAlive);
fish.eat();
fish.sleep();
rabit.run();
// fish.run();
fish.swim();
hawk.fly();

//*** 18. Super keyword */

class Aqarium{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    //extends move method from parent
    behave(behaveior){
        console.log(`the ${this.name} has good feature of  ${behaveior}`);
    }
}
class Crab extends Aqarium{
    constructor(name,age,crabQuality){
        super(name,age);    //calling parent class constructor - use 1
        this.crabQuality=crabQuality;
    }

    walk(){
        console.log(`${this.name} can walk in all direction and can crush their foods `);
        super.behave(this.crabQuality);
    }

}
class Octopus extends Aqarium{
    constructor(name,age,octopusQuality){
        super(name,age);
        this.octopusQuality=octopusQuality;
    }
    move(){
        console.log(`${this.name} has eight arms can perform separate tasks simultaneously thanks to a large nerve cluster, like a minibrain, at the base of each controlling its movement`);
        super.behave(this.octopusQuality);
    }
}
class Shark extends Aqarium{
    constructor(name,age,sharkQuality){
        super(name,age);
        this.sharkQuality=sharkQuality;
    }

    swim(){   //
        console.log(`${this.name} has good eyesight to hunt their foods`);
        super.behave(this.sharkQuality);     
    }
}

const crab=new Crab("crab",20,"crush their foods");
const octopus=new Octopus("octopus",60,"Do seperate Tasks by their arms");
const shark=new Shark("shark",22,"strong Eyesight")

// console.log(crab.name);
// console.log(octopus.name);
// console.log(shark.name);
// console.log(crab.age);
// console.log(shark.age);
// console.log(octopus.age);
// console.log(crab.crabspeed);

// crab.walk();
// octopus.move();
shark.swim();


//*** 19. getter and setter method */

class Rectangle{
    constructor(width,height){
        this.width=width;
        this.height=height;
    }

    set width(newWidth){
        if(newWidth>0){
            this._width=newWidth; //newwidth is assigned to private property of width
        }
        else{
            console.error("width should be positive integer")
        }
    }
    set height(newHeight){
        if(newHeight>0){
            this._height=newHeight;
        }
        else{
            console.error("height should be positive integer")
        }
    }

    get width(){
        return this._width.toFixed(1);
    }

    get height(){
        return this._height.toFixed(1);
    }
    get area(){
        return (this._width*this._height).toFixed(1);
    }
}

// const rectangle=new Rectangle(-10000,"pitza");
const rectangle=new Rectangle(3,4);  //still undefined - no get method

rectangle.width=5;
rectangle.height=10;
//negative and string value doesn't makev any sense, so we need to do some validation.


console.log(rectangle.width);
console.log(rectangle.height);
console.log(rectangle.area);


//Example 2


class Employee{
    constructor(empFirstName,empLastName,age){
        this.empFirstName=empFirstName;
        this.empLastName=empLastName;
        this.age=age;
    }
    //validation

    set empFirstName(newFirstName){
        if(typeof newFirstName==="string"   && newFirstName.length>0){
            this._empFirstName=newFirstName;
        }
        else{
            console.error("first name must be non empty string");
        }
    }
    set empLastName(newLastName){
        if(typeof newLastName==="string" &&   newLastName.length>0){
            this._empLastName=newLastName;
        }
        else{
            console.error("last name must be non empty string");
        }
    }
    set age(newAge){
        if(typeof newAge==="number" && newAge>=0){
            this._age=newAge;
        }
        else{
            console.error("age must be the number")
        }
    }

    get empFirstName(){
        return this._empFirstName;  
    }
    get empLastName(){
        return this._empLastName; 
    }
    get age(){
        return this._age;
    }

}

// const emp=new Employee(250,5,"priya");
const emp=new Employee("kavi","priya",22);



console.log(emp.empFirstName);
console.log(emp.empLastName);
console.log(emp.age);


// *** Destructuring

//swap the values on variable

let a=3;
let b=6;

[a,b]=[b,a];

console.log(b); //3
console.log(a); //6

//example -swap 2 elements in an array

const color=["white","red","blue","green","black"];

[color[0],color[4]]=[color[4],color[0]];

console.log(color);

//Assign array element to variable

const[firstColor,secondColor,thirdColor,...extraColor]=color;

console.log(firstColor);  //black
console.log(secondColor); //red
console.log(thirdColor);  //blue
console.log(extraColor);  //['green', 'white']


//Extract values from objects
//value extraction can have even default values

const person3={
    firstName:"kavi",
    lastName:"priya",
    age2:22,
    job:"frycook"
}

const person4={
    firstName:"siva",
    lastName:"prakash",
    age2:25,    
}

// const {firstName,lastName,age2,job="software"}=person4;
const {firstName,lastName,age2,job="software"}=person3;

console.log(job); //undefined
console.log(age2);
console.log(firstName);

//Destructure in function parameter

function mufn({firstName,lastName,age2,job="unemployeed"}){
    console.log(`name: ${firstName} ${lastName}`);
    console.log(`age:${age2}`);
    console.log(`job:${job}`);
}


const person5={
    firstName:"kavi",
    lastName:"priya",
    age2:22,
    job:"frycook"
}

const person6={
    firstName:"siva",
    lastName:"prakash",
    age2:25,    
}

mufn(person6);











