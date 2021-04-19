"use strict";

// 2. Продолжить работу с интернет-магазином:
//      a. В прошлом домашнем задании вы реализовали корзину на базе массивов. Какими объектами можно заменить их элементы?
//      b. Реализуйте такие объекты.
//      c. Перенести функционал подсчёта корзины на объектно-ориентированную базу.

//Функция добавления товара в корзину

function addProductBasket(basketDesc, name, price, quantity) {
    basketDesc.push({
        product: name,
        price: price,
        quantity: quantity,
        total: totalSum
    });
}

function totalSum() {
    return this.price * this.quantity;
}

function countBasketPrice(basketDesc) {
    let sum = 0;
    for (let i = 0; i < basketDesc.length; i++) {
        sum += basketDesc[i].total();
    }
    return sum;
}

function descBasketPrice(basketDesc) {
    let str = '';
    for (let i = 0; i < basketDesc.length; i++) {
        str += (i + 1) + '. ' + basketDesc[i].product + ': ' + basketDesc[i].price + ' * ' + basketDesc[i].quantity + ' = ' + (basketDesc[i].total()) + '\n';
    }
    return str;
}

let basket = [
    {
        product: 'футболка',
        price: 500,
        quantity: 2,
        total: totalSum
    },
    {
        product: 'джинсы',
        price: 2700,
        quantity: 1,
        total: totalSum
    },
    {
        product: 'жилет',
        price: 2100,
        quantity: 1,
        total: totalSum
    },
    {
        product: 'носки',
        price: 250,
        quantity: 5,
        total: totalSum
    },
]

alert('В корзину добавлены следующие товары:\n' + descBasketPrice(basket) + '\nОбщая стоимость составляет: ' + countBasketPrice(basket));