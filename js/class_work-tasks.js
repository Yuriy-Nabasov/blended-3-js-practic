`use strict`; // Код у суворому режимі

// ЗАДАЧІ ДЛЯ ТРЕНУВАННЯ!
/*
? Напиши скрипт для перебору масиву fruits.
? Для кожного елемента масиву виведи в консоль рядок
? у форматі номер_елемента: значення_елемента.
? Нумерація елементів повинна починатися з 1.
*/

// const fruits = ['🍎', '🍇', '🍑', '🍌', '🍎', '🍋'];

// console.log(fruits);

// for (let i = 0; i < fruits.length; i++) {
//   console.log(`${i + 1}: ${fruits[i]}`);
// }
/*
? Напиши скрипт для обчислення площі прямокутника зі сторонами,
? значення яких зберігаються у змінній values у вигляді рядка.
? Значення гарантовано розділені пробілом.
 */

// const values = '8 11';
// const rectSides = values.split(' ');
// const rectArea = Number(rectSides[0]) * Number(rectSides[1]);

// console.log('values:', values);
// console.log('rectSides:', rectSides);
// console.log('rectArea:', rectArea);

/*
? Напиши скрипт, який підраховує суму всіх парних чисел у масиві.
*/

// const numbers = [1, 5, 8, 9, 12, 4];
// let total = 0;

// console.log('numbers: ', numbers);

// for (const num of numbers) {
//   if (num % 2 === 0) {
//     total += num;
//   }
// }

// console.log('total: ', total);

/*
? Напиши скрипт, який виводить у консоль ім'я та телефонний номер користувача.
? У змінних names та phones зберігаються рядки імен та телефонних номерів,
? розділені комами. Порядковий номер імен та телефонів у рядках вказують на
? відповідність. Кількість імен та телефонів гарантовано однакова.
*/

// const names = 'Jacob,William,Solomon,Artemis';
// const phones = '89001234567,89001112233,890055566377,890055566300';

// console.log('names:', names);
// console.log('phones:', phones);

// const namesArr = names.split(',');
// const phonesArr = phones.split(',');

// console.log('namesArr:', namesArr);
// console.log('phonesArr:', phonesArr);

// for (let i = 0; i < namesArr.length; i++) {
//   console.log(`${namesArr[i]}: ${phonesArr[i]}`);
// }
/*
? Напиши скрипт, який виводить у консоль усі слова рядка крім першого і останнього.
*/

// const string = "Our office is closed so we`re working from home today.";
// const words = string.split(" ");
// for (let i = 1; i < words.length - 1; i++) {
//   console.log(words[i]);
// }

/*
? Напиши скрипт пошуку найменшого числа у масиві. Код повинен працювати
? для будь-якого масиву чисел. Використовуй цикл для розв'язання задачі.
*/

// const values = [17, -10, 94, -30, 1, 23, -40];
// let min = values[0];
// for (let i = 1; i < values.length; i++) {
//   if (min > values[i]) {
//     min = values[i];
//   }
// }
// console.log(min);

/*
? У нас є декілько масивів із зарплатами працівників із різних відділів, потрібно порахувати загальну суму зарплат
*/

// const managerSalaries = [100, 150, 250, 400, 500];
// const developersSalaries = [800, 1500, 4000];
// const totalSalaries = managerSalaries.concat(developersSalaries);
// let total = 0;
// for (let i = 0; i < totalSalaries.length; i++) {
//   total += totalSalaries[i];
// }
// console.log(`Загальна сумa зарплат ${total}`);
