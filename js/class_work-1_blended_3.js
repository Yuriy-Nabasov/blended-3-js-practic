`use strict`; // Код у суворому режимі
//! 09-11-2024
//? Функція для визначення типу змінної:
//? Написати функцію для визначення типу змінної.
//? Функція отримує будь-яке значення в якості аргументу
//? і визначає тип цієї змінної. Виводить в консоль
//? повідомлення `Тип змінної: type`

// function checkType(value) {
//   return `Тип змінної: ${typeof value}`;
// }

// console.log(checkType(`njp`));

//? Написати функція для обчислення довжини рядка.
//? Функція отримує рядок в якості аргументу і
//? виводить в консоль повідомлення "Довжина рядка length"

//? Дано рядок, що складається із символів, наприклад, 'abcde'.
//? Перевір, що другим символом цього рядка є літера 'b'.
//? Якщо так - виведи 'Так' у консоль, в противному випадку виведи 'Ні'.

// function checkString(string) {
//   if (string[1] === `b`) {
//     return `Так`;
//   } else {
//     return `Ні`;
//   }
// }

// console.log(checkString(`abdfe`));

//? Напишіть функцію, яка приймає аргумент і визначає його тип даних.
//? Якщо тип - строка, функція повертає "string", якщо число - "number",
//? в іншому випадку - "unknown".

// function checkType(value) {
//   if (typeof value === `string`) {
//     return `string`;
//   } else if (typeof value === `number`) {
//     return `number`;
//   } else {
//     return `unknown`;
//   }
// }

// console.log(checkType(165464));
// console.log(checkType(`165464`));
// console.log(checkType(true));

//? Оголоси функцію hasDiscount(age, isStudent, isPensioner),
//? яка перевіряє, чи покупець має право на знижку.
//? І повертає true - якщо має право на знижку і false, якщо - ні.
//? Покупець має право на знижку, якщо він є студентом
//? або пенсіонером, або вік його між 12 і 18 роками(включно).
//? Значення параметрів будуть задаватися під час виклику функції:
//? age - вік покупця;
//? isStudent - буль (вказує чи є покупець студентом);
//? isPensioner - буль  (вказує чи є покупець пенсіонером);

// function hasDiscount(age, isStudent, isPensioner) {
//   return (12 <= age && age <= 18) || isStudent || isPensioner;
// }

// console.log(hasDiscount(8, false, false));
// console.log(hasDiscount(18, false, false));
// console.log(hasDiscount(8, true, false));
// console.log(hasDiscount(8, false, true));

//? Оголоси функцію isEvenNumber(number), яка перевіряє
//? (за допомогою тернарного оператору) чи отримане значення
//? є парним числом і виводить відповідне повідомлення
//? "Число парне" або "Число непарне"
//? Якщо функція отримує не число вивести повідомлення
//? "Невалідне значення"

// function isEvenNumber(number) {
//   return number % 2 === 0
//     ? `Число парне`
//     : typeof number === `number`
//     ? `Число непарне`
//     : `Невалідне значення`;
// }

// console.log(isEvenNumber(8));
// console.log(isEvenNumber(7));
// console.log(isEvenNumber(`укп`));

//? Оголоси функцію calculateSquare(value).
//? Функція має перевіряти чи є отримане значення - число
//? або за можливості перетворити рядок на число
//? Якщо це число функція возводить число у квадрат і виводить рядок
//? `The square of ${numberValue} is ${squaredNumber}`
//? numberValue - отримане число або перетворене з рядка число.
//? squaredNumber - numberValue у квадраті.
//? Якщо значення не є числом, функція повертає рядок 'Invalid input!'.

// function calculateSquare(value) {
//     const numberValue = parseFloat(value);
//     if (typeof value )
// }

//? Оголоси функцію checkString(value), яка перевіряє
//? чи отримане значення є рядком і не містить символ $.
//? Якщо це так, виведіть кількість символів у рядку.
//? Якщо значення не є рядком, виведіть повідомлення про невірний ввід.

// function checkString(value) {
//   if (typeof value === `string` && !value.includes(`$`)) {
//     return value.length;
//   } else {
//     return `невірний ввід`;
//   }
// }

// console.log(checkString(`v$alue`));
// console.log(checkString(5458));

//? Написати функцію getCountryInfo(country), котра буде
//? отримувати назву країни і виводити інформацію про неї
//? China => "Китай - найбільша країна за населенням у світі."
//? Australia => "Австралія - найбільший острів та країна в Океанії."
//? France => "Франція відома своєю гастрономією та мистецтвом."
//? Germany => "Німеччина - найбільша економіка в Європі."
//? Canada => "Канада - друга за площею країна у світі, відома своєю природою."
//? Якщо країни немає, вивести повідомлення "Інформація про цю країну відсутня."

// function getCountryInfo(country) {
//   switch (country) {
//     case `China`:
//       return `Китай - найбільша країна за населенням у світі.`;
//     case `Australia`:
//       return `Австралія - найбільший острів та країна в Океанії.`;
//     case `France`:
//       return `Франція відома своєю гастрономією та мистецтвом.`;

//     case `Germany`:
//       return `Німеччина - найбільша економіка в Європі.`;

//     case `Canada`:
//       return `Канада - друга за площею країна у світі, відома своєю природою.`;

//     default:
//       return `Інформація про цю країну відсутня.`;
//   }
// }

// console.log(getCountryInfo(`China`));
// console.log(getCountryInfo(`Australia`));
// console.log(getCountryInfo(`France`));
// console.log(getCountryInfo(`Germany`));
// console.log(getCountryInfo(`Canada`));
// console.log(getCountryInfo(`USA`));

//? Напишіть цикл (for), який виведе в консоль усі парні числа від max до min включно по зменшенню
//? const max = 50;
//? const min = 23;

// for (let i = max; i >= min; --i) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }

//? За допомогою циклу for знайдіть суму усіх парних чисел у проміжку від min до max включно
// const max = 50;
// const min = 0;
// let sum = min;

// for (let i = min; i <= max; i++) {
//   if (i % 2 === 0) {
//     sum = sum + i;
//   }
// }
// console.log(sum);

//? Напишіть програму, яка обчислить суму всіх чисел (за допомогою циклу for)
//? від 1 до 100, які діляться на 3 або на 5. І виведи в консоль рядок :
//? `Сума чисел, які діляться на 3 або на 5 від 1 до 100: ${sum}`

// let sum = 0;
// for (let i = 1; i <= 100; i++) {
//   if (i % 3 === 0 || i % 5 === 0) {
//     sum += i;
//   }
// }
// console.log(`Сума чисел, які діляться на 3 або на 5 від 1 до 100: ${sum}`);

//? Потрібно підрахувати кількість парних чисел у заданому діапазоні
//? "Кількість парних чисел Count"

// const start = 1;
// const end = 20;

// let sum = 0;
// for (let i = start; i <= end; i++) {
//   if (i % 2 === 0) {
//     sum += 1;
//   }
// }
// console.log(`ількість парних чисел: ${sum}`);

//? Напишіть функцію formatMinutesToTime(minutes), котра
//? отримає від користувача число(кількість хвилин) і виведе
//? в консоль рядок у форматі годин і хвилин, тобто, якщо користувач
//? вказав число 70, в консолі отримаємо "01:10"

// function formatMinutesToTime(minutes) {
//   const hours = Math.floor(minutes / 60);
//   const modHours = String(hours).padStart(2, `0`);
//   const modMinutes = String(minutes % 60).padStart(2, `0`);
//   console.log(`${modHours}:${modMinutes}`);
// }

// formatMinutesToTime(59);
// formatMinutesToTime(404);
// formatMinutesToTime(180);

//? Функція checkStorage(storage, item) приймає два параметри:
//? storage - масив рядків, що описує доступні товари на складі
//? item - рядок з назвою товара, наявність якого потрібно перевірити
//? Доповни код функції таким чином, щоб вона перевіряла, чи присутній такий товар в масиві storage і повертала:
//? рядок "<item> is available to order!", де item - це назва товара, якщо товар було знайдено
//? рядок "Sorry! We are out of stock!", якщо такого товара немає в масиві
//? Зроби так, щоб пошук за ім'ям товару був незалежний від регістру, тобто наприклад "plum" і "pLuM" мають бути знайдені у масиві ["apple", "plum", "pear"].

// function checkStorage(storage, item) {
//   if (storage.includes(item.toLowerCase())) {
//     return `${item.toLowerCase()} is available to order!`;
//   } else {
//     return `Sorry! We are out of stock!`;
//   }
// }

// console.log(checkStorage(["apple", "plum", "pear"], "pLuM"));

//! 23-11-2024

// const a = [24, 18];
// const b = [24, 18];

// const c = {
//   d: 21,
//   e: 34,
// };

// c[a] = "Hellow world";
// c[b] = 21;

// console.log(c);

//? Напишіть функцію, яка створює масив з вказаною довжиною і заповнює його вказанним значення.
//? Наприклад функція fillArray(3, 'a') повертає масив ['a', 'a', 'a'].

// function fillArray(lengthArray, simbol) {
//   const newArray = [];
//   for (let i = 0; i < lengthArray; i++) {
//     newArray.push(simbol);
//   }
//   return newArray;
// }

// console.log(fillArray(8, `b`));

//? Написати функцію clearArray(array), котра створить новий масив
//? в якому не буде значень, які приводяться до false

// const array = [
//   1,
//   0,
//   54,
//   "doc",
//   null,
//   "jpg",
//   undefined,
//   "",
//   "png",
//   "exe",
//   false,
//   "mp4",
//   NaN,
//   "hbs",
// ];

// const clearArray = function (arr) {
//   const resultArr = [];
//   for (const el of arr) {
//     if (el) {
//       resultArr.push(el);
//     }
//   }
//   return resultArr;
// };

// console.log(clearArray(array));

//? Напиши скрипт, який порівняє два масива і виведе у консоль результат:
//? true - якщо всі елементи однакові і false - в іншому випадку

// const arr1 = [1, 4, 6, "color", 324, 232, "list", 11, 9, "dream", 34, 0, -30];
// const arr2 = [6, "dream", -30, 11, 9, 1, 324, 34, "color", 4, 232, 0, "list"];

// const arr3 = [4, 232, 6, -30, "color", 324, "list", 1, 11, 9, "dream", 34, 0];
// const arr4 = ["color", 6, -30, 11, 9, 1, "dream", 324, 34, 4, 232, 0, "list"];

// const arr5 = [1, 4, 6, "color", "list", 11, 9, "dream", 34, 0, -30, "lesson"];
// const arr6 = [6, 324, "dream", -30, 9, 8, 34, "color", 4, 232, 0, "list", 11];

// const arr7 = [1, 4, 6, "color", 324, 232, "list", 11, 9, "dream", 34, 0, -30];
// const arr8 = [6, "dream", -30, 10, 9, 1, 324, 34, "color", 4, 232, 0, "list"];

// const compireArrays = function (firstArr, secondArr) {
//   if (firstArr.length !== secondArr.length) {
//     return false;
//   }
//   for (const el of firstArr) {
//     if (!secondArr.includes(el)) {
//       return false;
//     }
//   }
//   return true;
// };

// console.log(compireArrays(arr1, arr2));
// console.log(compireArrays(arr3, arr4));
// console.log(compireArrays(arr5, arr6));
// console.log(compireArrays(arr7, arr8));

//? Напишіть функцію calculateAverage()
//? яка приймає довільну кількість
//? аргументів і повертає їхнє середнє значення.
//? Додати перевірку, що аргументи це числа.

// const calculateArg = function calculateAverage(...arrgs) {
//   let sum = 0;
//   let total = 0;
//   for (const arrg of arrgs) {
//     if (typeof arrg === `number`) {
//       total += 1;
//       sum += arrg;
//     }
//   }
//   return sum / total;
// };

// console.log(calculateArg(12, 42, `aaaa`, 14));

//? Для об'єкту book, послідовно виконай наступні дії:
//? 1. Додай поле rating зі значенням 4.8.
//? 2. Заміни значення поля genre на "Classic Fiction".
//? 3. Заміни значення поля isBestseller на false.
//? 4. Виведи за допомогою console.log вміст об'єкта book
//?    у форматі ключ:значення,
//?    використовуючи Object.keys() і for...of.

//! Очікуваний результат
//* title: To Kill a Mockingbird
//* author: Harper Lee
//* genre: Classic Fiction
//* yearPublished: 1960
//* isBestseller: false
//* rating:

// const book = {
//   title: "To Kill a Mockingbird",
//   author: "Harper Lee",
//   genre: "Southern Gothic",
//   yearPublished: 1960,
//   isBestseller: true,
// };

// book.rating = 4.8;
// book.genre = `Classic Fiction`;
// book.isBestseller = false;

// console.log(book);

// const keys = Object.keys(book);
// for (const item of keys) {
//   console.log(`${item}: ${book[item]}`);
// }

//? Напишіть функцію checkKeyInObject(), яка приймає 2 параметри obj і key.
//? Функція буде перебирати об'єкт.
//? Якщо об'єкт має такий ключ - поверне true, в іншому випадку - false.

// const user = {
//   name: "Igor",
//   car: "Mercedes",
//   carColor: "black",
// };

// const checkKeyInObject = function (obj, key) {
//   for (const obgKey in obj) {
//     if (obgKey === key) {
//       return true;
//     }
//   }
//   return false; //! або   return Object.keys(obj).includes(key);
// };

// console.log(checkKeyInObject(user, `name`));
// console.log(checkKeyInObject(user, `subname`));

//? Є об'єкт, у якому зберігаються обрані товари у кошику.
//? Напишіть код для визначення загальної суму замовлення
//? і збережіть його результат у змінній totalCost.
//? Якщо об'єкт cart порожній, то результат має бути 0.

// const cart = {
//   apple: 50,
//   banana: 30,
//   orange: 40,
// };
// let totalCost = 0;
// for (const item in cart) {
//   totalCost += cart[item];
// } //! abo for (const item of Object.values(cart)) {totalCost += item;}

// console.log(totalCost);

//? Додати метод getinfo в об'єкт user, який повертатиме інформацію
//? про користувача у форматі:
//? `Name: Peter. Surname: Parker. Age: 22. Position: spider-man.`

// const user = {
//   name: "Peter",
//   surname: "Parker",
//   age: 22,
//   position: "spider-man",
// };

// user.getinfo = function () {
//   return `Name: ${this.name}. Surname: ${this.surname}. Age: ${this.age}. Position: ${this.position}.`;
// };

// console.log(user.getinfo());

//? Створіть об'єкт calculator із трьома методами:
//? read(a, b) - приймає два аргументи та зберігає їх як властивості об'єкта
//? sum() - повертає суму збережених значень
//? mult() - перемножує збережені значення та повертає результат

// const calculator = {
//   read(a, b) {
//     this.value1 = a;
//     this.value2 = b;
//   },
//   sum() {
//     return this.value1 + this.value2;
//   },
//   mult() {
//     return this.value1 * this.value2;
//   },
// };

// calculator.read(5, 15);
// console.log(calculator);
// console.log(calculator.sum());
// console.log(calculator.mult());

//? Розрахувати загальну суму всіх замовлень та вивести інформацію у форматі:
//? `Загальна сума всіх замовлень: totalAmount`

// const orders = [
//   { id: 1, product: "Футболка", quantity: 2, price: 15 },
//   { id: 2, product: "Шорти", quantity: 3, price: 20 },
//   { id: 3, product: "Кросівки", quantity: 1, price: 50 },
// ];

// let totalAmount = 0;

// for (const order of orders) {
//   totalAmount += order.quantity * order.price;
// }

// console.log(totalAmount);

//? Знайти студента з найменшим віком та вивести інформацію про нього у форматі:
//? `Студент з найменшим віком: name, Вік: age, Спеціальність: major`

// const students = [
//   { name: "Олександр", age: 20, major: "Інформатика" },
//   { name: "Марія", age: 21, major: "Психологія" },
//   { name: "Іван", age: 19, major: "Економіка" },
// ];

// let yangerStudent = students[0];
// for (const student of students) {
//   if (yangerStudent.age > student.age) {
//     yangerStudent = student;
//   }
// }

// console.log(
//   `Студент з найменшим віком: ${yangerStudent.name}, Вік: ${yangerStudent.age}, Спеціальність: ${yangerStudent.major}`
// );
