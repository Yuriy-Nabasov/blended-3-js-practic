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

//! 07-12-2024
//? Напишіть функцію sayHi(), яка приймає в якості параметра масив імен,
//? перебирає масив і додає до кожного ім'я привітання.
//? Функція повертає новий масив  ["Ivan привіт!", "Maria привіт!", "Anna привіт!"]

// const names = ["Ivan", "Maria", "Anna"];

// const sayHi = (names) => names.map((name) => `${name} привіт!`);

// console.log(names);
// console.log(sayHi(names));

//? Напиши функцію, котра приймає масив користувачів і id.
//? У масиві користувачів потрібно знайти людину з заданим id
//? і повернути його ім'я. Якщо користувача не було знайдено
//? функція повертає повідомлення
//? "Користувача з таким id не знайдено"

// const users = [
//   { id: 1, name: "John" },
//   { id: 2, name: "Pete" },
//   { id: 3, name: "Mary" },
// ];

// const fn = (arr, id) => {
//   const result = arr.find((user) => user.id === id);
//   return result
//     ? `Ім'я користувача з id=${id} - ${result.name}`
//     : `Користувача з таким id=${id} не знайдено`;
// };

// console.log(fn(users, 1));
// console.log(fn(users, 2));
// console.log(fn(users, 3));
// console.log(fn(users, 4));

//? Виконати фільтрацію, залишивши в allTopics тільки унікальні елементи.

// const courses = [
//   {
//     name: "Basic HTML+CSS",
//     topics: ["VSCode", "HTML", "CSS", "GitHub", "GitHub Desctop"],
//   },
//   {
//     name: "Intermediate HTML+CSS",
//     topics: ["VSCode", "HTML", "CSS", "GitHub", "Git", "Terminal"],
//   },
//   {
//     name: "Basic JavaScript",
//     topics: [
//       "VSCode",
//       "Type system",
//       "Loops",
//       "Function",
//       "Git",
//       "Conditions",
//       "Classes",
//       "GitHub",
//       "DOM",
//     ],
//   },
//   {
//     name: "Intermediate JavaScript",
//     topics: [
//       "VSCode",
//       "NPM",
//       "Bundlers",
//       "Transpiling",
//       "Git",
//       "Promises",
//       "AJAX",
//       "GitHub",
//     ],
//   },
// ];

// const allTopics = courses
//   .flatMap((item) => item.topics)
//   .filter((item, index, array) => array.indexOf(item) === index);
// console.table(allTopics);

//? Напишіть функцію getGirlsPassports() яка поверне масив номерів паспортів дівчат.
// const friends = [
//   {
//     passport: "03005988",
//     name: "Joseph Francis Tribbiani Jr",
//     age: 32,
//     sex: "m",
//   },
//   { passport: "03005989", name: "Chandler Muriel Bing", age: 33, sex: "m" },
//   { passport: "03005990", name: "Ross Eustace Geller", age: 33, sex: "m" },
//   { passport: "03005991", name: "Rachel Karen Green", age: 31, sex: "f" },
//   { passport: "03005992", name: "Monica Geller", age: 31, sex: "f" },
//   { passport: "03005993", name: "Phoebe Buffay", age: 34, sex: "f" },
// ];

// const getGirlsPassports = function (friends) {
//   return friends.filter((el) => el.sex === `f`).map((el) => el.passport);
// };

// console.log(getGirlsPassports(friends));

//? Mаємо масив об'єктів, який представляє список товарів і їх цін:
//? Завдання: Знайдіть суму вартості всіх товарів, які коштують більше 10 гривень.

// const products = [
//   { name: "Milk", price: 20 },
//   { name: "Bread", price: 10 },
//   { name: "Eggs", price: 15 },
// ];

// const result = products
//   .filter((product) => product.price > 10)
//   .reduce((acum, product) => product.price + acum, 0);
// console.log(result);

//? Є два об'єкти, які описують деякі характеристики телефонів.
//? Потрібно викликати метод showInfo, щоб він логував інформацію про кожний телефон,
//? передаючи аргументом країну-виробник телефону.
//? "HUAWEI" - "China", "SAMSUNG" - "South Korea".

// const tel = {
//   regNumber: "AE8345FEDAS",
//   brand: "HUAWEI",
//   showInfo(country) {
//     console.log(`${country} ${this.regNumber} ${this.brand}`);
//   },
// };

// const tel_2 = {
//   regNumber: "AO8518FEGHT",
//   brand: "SAMSUNG",
// };

// tel.showInfo(`China`);
// tel.showInfo.call(tel_2, `South Korea`);
// tel.showInfo.apply(tel_2, [`South Korea`]);

// const telInfo = tel.showInfo.bind(tel_2, `South Korea`);

// telInfo();

//? Напиши клас Rectangle який створює об'єкт
//? з ​​властивостями height, width
//? і методом calculateArea() для підрахунку площі прямокутника.

// class Rectangle {
//   constructor(height, width) {
//     this.height = height;
//     this.width = width;
//   }
//   calculateArea() {
//     return this.height * this.width;
//   }
// }

// const rectangle = new Rectangle(5, 10);

// console.log(rectangle.calculateArea());

//? Створіть клас Car, який має конструктор для зберігання марки та
//? року виробництва автомобіля.
//? 1. Додайте метод, який обчислює вік автомобіля на основі поточного року
//? та року виробництва і виведе в кнсоль рядок `Вік автомобіля: age років`
//? 2. Додайте перевірку, якщо вік автомобіля більше ніж 5 років, виводимо
//? повідомлення "Автомобіль потребує технічного обслуговування."
//? в іншому випадку - "Автомобіль не потребує технічного обслуговування зараз."
//? 3. Додайте перевірку, якщо рік виробництва перевищює поточний рік,
//? вивести повідомлення "Помилка: Рік виробництва не може бути пізнішим за поточний рік."

// class Car {
//   constructor(brand, year) {
//     this.brand = brand;
//     this.year = year;
//   }
//   calcYears() {
//     const curentYear = new Date().getFullYear();
//     if (this.year > curentYear) {
//       console.log(
//         `Помилка: Рік виробництва не може бути пізнішим за поточний рік.`
//       );
//       return;
//     }

//     const age = curentYear - this.year;
//     console.log(`Вік автомобіля: ${age} років`);
//     age > 5
//       ? console.log(`Автомобіль потребує технічного обслуговування.`)
//       : console.log(`Автомобіль не потребує технічного обслуговування зараз.`);
//   }
// }
// const test1Car = new Car(`BMV`, 2030);
// console.log(test1Car);
// test1Car.calcYears();

// const test2Car = new Car(`Audi`, 2017);
// console.log(test2Car);
// test2Car.calcYears();

// const test3Car = new Car(`Skoda`, 2020);
// console.log(test3Car);
// test3Car.calcYears();

// const test4Car = new Car(`Nissan`, 2023);
// console.log(test4Car);
// test4Car.calcYears();

//? Напиши клас Client який створює об'єкт
//? з ​​властивостями login, email
//? Оголоси приватні властивості #login #email,
//? доступ до яких зроби через геттер та сеттер login email

// class Client {
//   #login;
//   #email;
//   constructor(login, email) {
//     this.#login = login;
//     this.#email = email;
//   }
//   get login() {
//     return this.#login;
//   }
//   get email() {
//     return this.#email;
//   }

//   set login(newLogin) {
//     this.#login = newLogin;
//   }
//   set email(newEmail) {
//     this.#email = newEmail;
//   }
// }

// const clientIvan = new Client(`Ivan`, `ivan@gmail.com`);

// console.log(clientIvan.login);
// console.log(clientIvan.email);

// clientIvan.login = `newIvan`;
// console.log(clientIvan.login);

// clientIvan.email = `newivan@gmail.com`;
// console.log(clientIvan.email);

//! 21-12-2024
//? При натисканні на кнопку "Приховати" потрібно введені користувачем
//? символи в інпут відображати у вигляді крапок замість звичайного
//? тексту, а також змінити назву кнопки на "Показати", при повторному
//? натисканні знову будемо відображати символи, а назва кнопки зміниться
//? на "Приховати".

// // 1й етап - Вставляемо розмітку в html

// const markapHtmlTemplate = document.getElementById(`body_container`);
// markapHtmlTemplate.innerHTML = `
//     <input id="passwordInput" type="text" />
//     <button id="passwordButton">Приховати</button>`;

// // 2й етап - реалізуємо завдання

// const inputEl = document.querySelector(`#passwordInput`);
// console.dir(inputEl);
// const butEl = document.querySelector(`#passwordButton`);
// console.dir(butEl);
// butEl.addEventListener(`click`, (event) => {
//   if (inputEl.type === `text`) {
//     inputEl.type = `password`;
//     event.target.textContent = `Показати`;
//   } else {
//     inputEl.type = `text`;
//     event.target.textContent = `Приховати`;
//   }
// });

//? При кліку на кнопку "Подвоїти" збільшувати значення в кожному
//? елементі списку в два рази.

// // 1й етап - Вставляемо розмітку в html

// const markapHtmlTemplate = document.getElementById(`body_container`);
// markapHtmlTemplate.innerHTML = `
//     <ul class="list">
//       <li class="listItem">1</li>
//       <li class="listItem">4</li>
//       <li class="listItem">8</li>
//       <li class="listItem">16</li>
//       <li class="listItem">20</li>
//       <li class="listItem">30</li>
//     </ul>
//     <button id="double">Подвоїти</button>`;

// // 2й етап - реалізуємо завдання

// const butEl = document.querySelector(`#double`);
// console.dir(butEl);

// const liItems = document.querySelectorAll(`.listItem`);
// console.log(liItems);

// butEl.addEventListener(`click`, () => {
//   liItems.forEach((el) => (el.textContent = el.textContent * 2));
// });

//? При кліку на кнопку "Filter" потрібно видалити з списку позначені елементи.

// // 1й етап - Вставляемо розмітку в html
// const markapHtmlTemplate = document.getElementById(`body_container`);
// markapHtmlTemplate.innerHTML = `
//   <form class="checkboxForm">
//       <div class="checkboxList">
//         <div class="checkboxWrapper">
//           <label for="checkbox1">Item 1</label>
//           <input type="checkbox" id="checkbox1" />
//         </div>

//         <div class="checkboxWrapper">
//           <label for="checkbox2">Item 2</label>
//           <input type="checkbox" id="checkbox2" />
//         </div>
//         <div class="checkboxWrapper">
//           <label for="checkbox3">Item 3</label>
//           <input type="checkbox" id="checkbox3" />
//         </div>
//         <div class="checkboxWrapper">
//           <label for="checkbox4">Item 4</label>
//           <input type="checkbox" id="checkbox4" />
//         </div>
//         <div class="checkboxWrapper">
//           <label for="checkbox5">Item 5</label>
//           <input type="checkbox" id="checkbox5" />
//         </div>
//         <div class="checkboxWrapper">
//           <label for="checkbox6">Item 6</label>
//           <input type="checkbox" id="checkbox6" />
//         </div>
//         <div class="checkboxWrapper">
//           <label for="checkbox7">Item 7</label>
//           <input type="checkbox" id="checkbox7" />
//         </div>
//       </div>
//       <button type="submit">Filter</button>
//     </form>
//     `;

// // 2й етап - реалізуємо завдання
// const formEl = document.querySelector(`.checkboxForm`);
// console.dir(formEl);
// const list = document.querySelectorAll(`.checkboxWrapper`);
// console.log(list);
// formEl.addEventListener(`submit`, (event) => {
//   event.preventDefault();
//   const filterList = [...list].filter((el) => el.lastElementChild.checked);
//   filterList.forEach((el) => el.remove());
// });

//? Наведено список людей. Зроби можливість фільтрації (пошуку) за ім'ям або за прізвищем.

// 1й етап - Вставляемо розмітку в html
// const markapHtmlTemplate = document.getElementById(`body_container`);
// markapHtmlTemplate.innerHTML = `
//     <input class="contactsFilter" type="text" />
//     <ul class="contacts">
//       <li class="contact">Peter Miller</li>
//       <li class="contact">John Carter</li>
//       <li class="contact">Amanda Diaz</li>
//       <li class="contact">Brad Sanders</li>
//       <li class="contact">Devis Brooks</li>
//       <li class="contact">Robert Morgan</li>
//     </ul>
// `;

// 2й етап - фільтруємо список
// const inputEl = document.querySelector(`.contactsFilter`);
// const ulEl = document.querySelector(`.contacts`);
// const items = [...ulEl.children];
// inputEl.addEventListener(`input`, (event) => {
//   const valueEl = event.target.value.toLowerCase().trim();
//   const filterItems = items.filter((el) =>
//     el.textContent.toLowerCase().includes(valueEl)
//   );
//   ulEl.innerHTML = ``;
//   ulEl.append(...filterItems);
// });

//! 11-01-2025
// Додай функціонал зміни теми при натисканні(подія change) на чекбокс
// #theme-switch-toggle у тулбарі.

// За замовчуванням тема світла.
// При зміні теми необхідно додавати на елемент body клас light-theme або dark-theme.
// Вибрана тема повинна зберігатись між перезавантаженнями сторінки.
// Для зберігання теми використовуй localStorage.
// Якщо при завантаженні сторінки тема темна, не забудь поставити властивість checked
// у чекбоксу #theme -switch-toggle у true, щоб повзунок зрушив у правильне положення.

// Для зручності зберігання списку використовуй такий перелік.

// const Theme = {
//   LIGHT: "light-theme",
//   DARK: "dark-theme",
// };

// const themeSwitchInputEl = document.querySelector(".theme-switch__toggle");

// // console.log(themeSwitchInputEl);

// const bodyEl = document.body;

// // console.log(bodyEl);

// const seveTheme = localStorage.getItem("Theme");

// console.log(seveTheme);

// if (seveTheme) {
//   bodyEl.classList.add(seveTheme);
// } else {
//   bodyEl.classList.add(Theme.LIGHT);
// }

// if (seveTheme === Theme.DARK) {
//   themeSwitchInputEl.checked = true;
// }

// const onInputChangeFn = (event) => {
//   if (themeSwitchInputEl.checked) {
//     bodyEl.classList.add(Theme.DARK);

//     bodyEl.classList.remove(Theme.LIGHT);

//     localStorage.setItem("Theme", Theme.DARK);
//   } else {
//     bodyEl.classList.add(Theme.LIGHT);

//     bodyEl.classList.remove(Theme.DARK);

//     localStorage.setItem("Theme", Theme.LIGHT);
//   }

//   // console.dir(themeSwitchInputEl);
// };

// themeSwitchInputEl.addEventListener("change", onInputChangeFn);

// ?
// * Якщо імейл і пароль користувача збігаються, при сабміті зберігай дані з форми
// * у локальне сховище і змінюй кнопку login на logout і роби поля введення
// * Недоступними для зміни.
// * При перезавантаженні сторінки, якщо користувач залогінений, ми повинні бачити logout-кнопку
// * та недоступні для зміни поля з даними користувача.
// * Клік по кнопці logout повертає все в початковий вигляд і видаляє дані користувача
// * З локального сховища.
// *
// * Якщо введені дані не збігаються з потрібними даними, викликати аlert і
// * повідомляти про помилку.

// const user = {
//   email: `test@gmail.com`,
//   password: `test`,
// };

// const formEl = document.querySelector(`#login-form`);
// // console.dir(formEl);

// const data = JSON.parse(localStorage.getItem(`userData`));
// // console.log(data);
// if (data) {
//   formEl.elements.email.disabled = true;
//   formEl.elements.password.disabled = true;
//   formEl.elements.button.textContent = `logout`;
//   formEl.elements.email.value = data.email;
//   formEl.elements.password.value = data.password;
// }

// const formSubmit = (event) => {
//   event.preventDefault();
//   if (JSON.parse(localStorage.getItem(`userData`))) {
//     formEl.elements.email.disabled = false;
//     formEl.elements.password.disabled = false;
//     formEl.elements.button.textContent = `login`;
//     localStorage.removeItem(`userData`);
//     formEl.reset();
//     return;
//   }

//   if (
//     formEl.elements.email.value !== user.email ||
//     formEl.elements.password.value !== user.password
//   ) {
//     alert(`Не корректно введені данні!`);
//     return;
//   }
//   const data = {
//     email: formEl.elements.email.value,
//     password: formEl.elements.password.value,
//   };
//   //   console.log(data);
//   localStorage.setItem(`userData`, JSON.stringify(data));
//   formEl.elements.email.disabled = true;
//   formEl.elements.password.disabled = true;
//   formEl.elements.button.textContent = `logout`;
// };

// formEl.addEventListener(`submit`, formSubmit);

// ?
// За допомогою prompt запропонуйте користувачу ввести значення.
// Створіть функцію checkValue(value), котра повертає Promise
// Якщо введене користувачем значення не є числом, потрібно відхилити проміс і логувати 'error'
// Якщо введене користувачем значення є число і воно парне, розв'язуй проміс і повертай 'even'
// через 1 секунду.
// Якщо введене користувачем значення є число і воно не парне, розв'язуй проміс і повертай 'odd'
// через 2 секунди.

// const value = prompt("Введіть число");

// // console.log(value);

// const checkValue = (value) => {
//   return new Promise((resolve, reject) => {
//     if (!isNaN(value)) {
//       value % 2 === 0
//         ? setTimeout(() => resolve("even"), 1000)
//         : setTimeout(() => resolve("odd"), 2000);
//     } else {
//       reject("error");
//     }
//   });
// };

// checkValue(value)
//   .then((succesValue) => console.log(succesValue))
//   .catch((error) => console.log(error));

// ?
// Потрібно створити функцію sumArray, яка приймає масив чисел.
// Функція повинна повернути проміс, який виконується зі сумою
// всіх чисел у масиві.Проте, якщо масив містить хоча б одне
// нечислове значення, проміс повинен бути відхилений з
// повідомленням про помилку "Масив містить нечислові значення".

// const numbers1 = [1, 2, 3, 4, 5];
// const numbers2 = [1, 2, "three", 4, 5]; // Додано нечислове значення 'three'

// const sumArray = (arr) => {
//   return new Promise((resolve, reject) => {
//     const value = arr.some((elArr) => isNaN(elArr));
//     if (!value) {
//       const sum = arr.reduce((acc, item) => acc + item, 0);
//       resolve(sum);
//     } else {
//       reject("Масив містить нечислові значення");
//     }
//   });
// };

// sumArray(numbers2)
//   .then((sumValue) => {
//     console.log(`Сумма масиву ${sumValue}`);
//   })
//   .catch((errValue) => {
//     console.log(errValue);
//   });

// ! 25-01-2025
// Discovery API (https://developer.ticketmaster.com/products-and-docs/apis/discovery-api/v2/#search-events-v2)
// API_KEY = 'uHSLi07StIOlriMPxJGxUbSYsHDs6AFx';
// Потрібно відрендерити колекцію  івентів і реалізувати пагінацію за допомогою бібліотеки
// tui - pagination(https://www.npmjs.com/package/tui-pagination),
// Запити робимо використовуючи бібліотеку axios (https://www.npmjs.com/package/axios , https://axios-http.com/uk/docs/intro)
// і конструкції async\await; try\catch
