"use strict";

// 1. Написать функцию, преобразующую число в объект. Передавая на вход число от 0 до 999, 
// надо получить на выходе объект, в котором в соответствующих свойствах описаны единицы, 
// десятки и сотни. Например, для числа 245 надо получить следующий объект: 
// {‘единицы’: 5, ‘десятки’: 4, ‘сотни’: 2}. Если число превышает 999, необходимо выдать 
// соответствующее сообщение с помощью console.log и вернуть пустой объект.

function numToObject(number) {
    let obj = {};
    if (number > 999) {
        console.log('Количество разрядов числа больше 3-х.');
        return obj;
    }
    let digit1 = number % 10;
    let digit2 = Math.floor(number / 10) % 10;
    let digit3 = Math.floor(number / 100);
    obj = {
        'единицы': digit1,
        'десятки': digit2,
        'сотни': digit3
    }
    // alert(obj);
    // for (let item in obj) {
    //     alert(item, obj[item]);
    // }
    return obj;
}

let num = 247;
alert(num);
alert(Object.entries(numToObject(num)))
alert(Object.values(numToObject(num)))
alert(Object.keys(numToObject(num)))

alert(numToObject(num)['единицы']);
alert(numToObject(num)['десятки']);
alert(numToObject(num)['сотни']);
