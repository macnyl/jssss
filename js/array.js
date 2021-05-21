'use strick'; 
//0 Создать числовой массив и проинициализировать его (*случайными числами).
const arr = {
    0: 11,
    1: 22,
    2: 33,
    3: 44,
    4: 55,
}

//1 Удалить последний элемент из массива, добавить по элементу в начало и конец.
// const people = ["Vasya", "Petya", "Masha", "Constata"];
//     alert(people.pop()); 
//     alert(people);

//     alert(people.shift());
//     alert(people);

//     alert(people.unshift('Albert'));
//     alert(people);

//     alert(people.push('Glasha'));
//     alert(people);
    
//2 Вывести размер массива.
const size = [1, 2, 3, 4, 5];
console.log('size :>> ', size.length);

//3 Вывести элементы с четными индексами.
const even = [];
const add = [];
const arry = [0,1,2,3,4,5,6,7,8,9];
for(let i = 0; i < arry.length; i++){
     arry[i] % 2 ? even.push(arry[i]) : add.push(arry[i])
}
console.log(add);
console.log(even);

//4 Вывести только четные элементы (четные числа делятся на 2 без остатка).
const amount = [];
for(let i= 2; i <= 20; i++){
    if(i % 2 === 0){
        console.log(i);
    }
}

//5 Вывести индексы нулевых элементов (элемент равен нулю).
const myArr = [1, 0, 555, -1, 2, null, 10, false, 777, -5];
const myArray = myArr.filter(function(number){
    return number <= 0;
});
console.log(myArray);

//6 Подсчитать количество нулевых элементов.
const myArr2 = [1, 0, 555, -1, 2, null, 10, false, 777, -5];
let sum = 0;
for(let i = 0; i < myArr2.length; i++){
    sum += myArr2[i % 0];
}

//7 Получить новый массив из заданного, который будет содержать только положительные числа (-1, 5, 0, 9, -10 => 5, 9)
const item = [-1, 5, 0, 9, -10];
item.splice(0, 1);
item.splice(1, 1);
item.splice(2, 2);
const rmItem = Math.min(item.filter(n => n > 0));
console.log(item);

//8 Получить новый массив их заданного, который будет содержать все элементы исходного, возведенные в квадрат (-1, 5, 0, 9, -10 => 1, 25, 0, 81, 100).
const item2 = [-1, 5, 0, 9, -10];
const itemX = item2.map(x);
console.log('item2.map(x) :>> ', item2.map(x));
function x(element){
    return element ** 2;
}

//9 Проверить, являются ли все елементы массива положительными числами (* или в принципе числами).
const item3 = [1, 5, 0, 9, 10];
const poditive = item3.some(v => v > 0);
console.log('poditive :>> ',poditive );

//10 Проверить, есть ли в массиве хоть один отрицательный элемент.
const item4 = [1, 4, 6, -10, -83];
const negative = item4.some(v => v < 0);
console.log('negative :>> ',negative );

//11 Вывести элементы массива, возведенные в куб.
const item5 = [1, 5, 0, 9, 10];
console.log('item5(xx) :>> ', item5.map(xx));
function xx(element){
    return element **3;
}





