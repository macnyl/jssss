'use strick';


// function Car(brand, model){
//     if (!new.target){
//         return new Car(brand);
//     }
//     console.log('new.target :>> ', new.target);
//     this.brand = brand;
//     this.model = model;
// }

// const car1 = new Car('BMW', 540);


// function myArray(){
//     if(!new.target){
//         return new MyArray();
//     }
//     this.lenght = 0;
   
// }

// const myArrayProto = new MyArray();

// myArrayProto.pop = function(){
//     if(this.length === 0){
//         return;
//     }
//     const lastItem = this[this.length -1]
//     delete this[--this.length];
//     return lastItem;
// };

// myArrayProto.push = push = function(item){
//         this[this.length] = item;
//         return ++this.length;
//     };

// myArrayProto.shift = function(){
//     if (this.length === 0){
//         return;
//     }
//     const firstItem = this[0];
//     for(let i = 0; i < this.length - 1; i++){
//         this[i] = this[i+1];
//     }
//     delete this[--this.length];
//     return firstItem
// };

// MyArray.prototype = myArrayProto;

// const myArr1 = new MyArray();
// const myArr2 = new MyArray();


//

// function Car(brand, model){
//     this.brand = brand;
//     this.model = model;
// }

// const carProto = new Car();

// carProto.showInfo = function(){
//     console.log(`Brand: ${this.brand} ; Model: ${this.model}, `);
// }

// Car.prototype = carProto;

// const car1 = new Car('BMW', 5);

// car1.showInfo()

//


// const parrot = {
//     name: 'Kesha',
//     color: 'multicolor',
//     speak(phrase){
//         console.log(`${this.name} say ${phrase}`);
//     }
// }

// const parrotWavy = Object.create(parrot);
// parrotWavy.name = 'Kesha J';
// parrotChild.wavy = true;

//
// const car = {
//     brand: 'BMW',
//     model: 5,
//     seats: 5,
//     carry: 6,
//     features(passanger){
//         console.log(`Brand: ${this.brand}; Model: ${this.model}; Passenger seat: ${this.seats}; Vehicle can carry: ${this.carry}`);
//     }
// }

// const carCarry = Object.create(car);
// carCarry.brand = 'Mercedes-benz';
// carCarry.model = 'Vito';
// carCarry.seats = 10;
// carCarry.carry = 12;
// carCarry.add = function(addPass){
//     this.carry = this.carry + addPass;
// }


//
// function sayHello(callback, phrase){
//     if(typeof callback === 'function'){
//         callback(phrase);
//     }
// }

// sayHello(console.log, 'Hello, Jack!');
// sayHello(alert, 'Hello, Jack!');

// function myCar(model, brand){
//     model(brand);
// }

// sayHello(console.log, '5, BMW');
// sayHello(alert, '5, BMW');


//
// const arr4 = [1, 2, 3, 4, 5];

// arr4.forEach(showItem);

// function showItem (currentItem, index, array){
//     console.log(`arr4[${index}] = ${currentItem}`);
// };

// const arr5 = [{}, {}, {}, {}];

// arr5.forEach(f);

// function f(currentItem, index, array){
//     currentItem.property = 'qwerty';
//     currentItem.property1 = 'qwerty1';
// }

// const arr6 = [1, 5, 7, 8, 1, 5, 4, 3];

// console.log('arr6.some(isEven) :>> ', arr6.some(isEven));
// // arr6.some(isEven);

// function isEven(item, index, arr){
//     console.log('index :>> ', index);
//     return item % 2 === 0;
// }

// function isOdd(element){
//     return element % 2 !== 0;
// }
// console.log('arr6.every(isEven) :>> ', arr6.every(isEven));


// const arrEvenItem = arr6.filter(isEven);
// const arrOddItem = arr6.filter(isOdd);


//
function User(name, surname, age, isMale, email, isSubscribed){
    this.firstName = name;
    this.lastName = surname;
    this.age = age;
    this.isMale = isMale;
    this.email = email;
    this.isSubscribed = isSubscribed;
}

const users = [];

for(let i = 0; i < 100; i++){
    const user = new User(
        `Username${i}`,
        `Userurname${i}`,
        Math.floor(Math.random() * 90),
        Math.random() > 0.5,
        `useremail${i}@gmail.com`,
        Math.random() > 0.5,
    );
    users.push(user);
}

//Получить только женщин
const womanUsers = users.filter(isWoman);
 
function isWoman(user){
    return !user.isMale; 
}
console.table(womanUsers);

//Получить совершеннолетних неподписаных мужчин
const subMen = users.filter(isMen);

function isMen(user){
    return user.isMale && !user.isSubscribed && user.age >= 18;
}
console.table(subMen);

//Получить массив имейлов пользователей
const userEmails = users.map(getEmail);

function getEmail(user){
    return user.email;
}

console.table(userEmails);

//Получить имейл только женщин
const womanEmails = users.filter(isWoman).map(getEmail);
console.table(womanEmails);



// function User(name, surname, age, isMale, email, isSubscribed){
//     this.firstName = name;
//     this.lastName = surname;
//     this.age = age;
//     this.isMale = isMale;
//     this.email = email;
//     this.isSubscribed = isSubscribed;
// }

// const users = [];
// for(let i =0; i , 100; i++){
//     const user = new User(
//         `USername${i}`,
//         `Usersurname${i}`,
//         Math.floor(Math.random() * 90),
//         Math.random() > 0.5,
//         `useremail${i}@gmail.com`,
//         Math.random() > 0.5,
//     );
//     users.push(user);
// }































