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

// ! 06-01-2025 module-10-lesson-2
// ? ----- 01-timeout-interval -----

/*
 * Синхронний vs Асинхронний JS
 *
 * Стек виклику функцій (http://latentflip.com/loupe/)
 * window.setTimeout(callback, delay);
 * window.setInterval(callback, delay);
 * Очищення інтервалів та таймутів clearInterval(intervalID), clearTimeout(timeoutID)
 */

// console.log('Start');

// const timeoutId = setTimeout(function () {
//   console.log('From setTimeout 1000');
// }, 1000);

// console.log(timeoutId);

// clearTimeout(timeoutId);

// const intervalId = setInterval(function () {
//   console.log('Hello from setInterval');
// }, 1000);

// console.log(intervalId);

// clearInterval(intervalId);

// console.log('End');

// ? ------ 02-date -----

//* Створення нової дати
// const date = new Date();

// console.dir(date.getTime());

// console.dir(Date.now());

//? Створіть об'єкт date для дати: 01 січня 2025 року, 12 годин 10 хвилин.

// const date1 = new Date('2025-01-01T12:10:00');

// console.log(date1);

// const date2 = new Date(2025, 0, 1, 12, 10);

// console.log(date2);

/*
? Створіть функцію getWeekDay(date), яка показує день тижня у короткому форматі:
? 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'НД'.
*/

// const getWeekDay = date => {
//   const daysArr = ['НД', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];

//   return daysArr[date.getDay()];
// };

// const dateNow = new Date('2025-01-05T12:00:00');

// console.log(getWeekDay(dateNow));

/*
? Створіть функуію getLastDayOfMonth(year, month), яка повертає останнє число місяця. Інколи це 30, 31 або навіть 28/29 у лютому.
? Параметри:
? year – рік з чотирьох цифр, наприклад, 2012.
? month – місяць від 0 до 11.
? Наприклад, getLastDayOfMonth(2012, 1) = 29 (високосний рік, лютий).
*/
// const getLastDayOfMonth = (year, month) => {
//   const date = new Date(year, month + 1, 0);

//   return date.getDate();
// };

// console.log(getLastDayOfMonth(2013, 3));

//? Створіть функцію getSecondsToTomorrow(), яка повертає кількість секунд до завтрашнього дня.
// const getSecondsToTomorrow = () => {
//   const dateNow = new Date();
//   const dateTomorrow = new Date(
//     dateNow.getFullYear(),
//     dateNow.getMonth(),
//     dateNow.getDate() + 1
//   );

//   const diff = dateTomorrow.getTime() - dateNow.getTime();

//   return Math.floor(diff / 1000);
// };

// console.log(getSecondsToTomorrow());

// ? ------ 03-timer -----

// const timer = {
//   deadline: new Date("2025-01-06T21:30:00"),
//   intervalId: null,
//   elements: {
//     days: document.querySelector(".js-timer__days"),
//     hours: document.querySelector(".js-timer__hours"),
//     minutes: document.querySelector(".js-timer__minutes"),
//     seconds: document.querySelector(".js-timer__seconds"),
//   },

//   start() {
//     this.intervalId = setInterval(() => {
//       const diff = this.deadline - Date.now();

//       if (diff <= 0) {
//         this.stop();

//         return;
//       }

//       const timeComponents = this.getTimeComponents(diff);

//       this.elements.days.textContent = this.pad(timeComponents.days);
//       this.elements.hours.textContent = this.pad(timeComponents.hours);
//       this.elements.minutes.textContent = this.pad(timeComponents.minutes);
//       this.elements.seconds.textContent = this.pad(timeComponents.seconds);
//     }, 1000);
//   },

//   stop() {
//     clearInterval(this.intervalId);
//   },

//   getTimeComponents(diff) {
//     const days = Math.floor(diff / 1000 / 60 / 60 / 24);
//     const hours = Math.floor(diff / 1000 / 60 / 60) % 24;
//     const minutes = Math.floor(diff / 1000 / 60) % 60;
//     const seconds = Math.floor(diff / 1000) % 60;

//     return {
//       days,
//       hours,
//       minutes,
//       seconds,
//     };
//   },

//   pad(value) {
//     return String(value).padStart(2, "0");
//   },
// };

// timer.start();

// ! module-02-lesson-1

// ! module-02-lesson-2

// ! module-03-lesson-1

// ! module-03-lesson-2

// ! module-04-lesson-1

// ! module-04-lesson-2

// ! module-05-lesson-1

// ! module-05-lesson-2

// ! module-06-lesson-1
// ? ----- 01-this -----
/*
 * Контекст виконання функції
 *
 * - Ключове слово this
 * - Глобальний контекст
 * - Контекст методу об'єкта
 */

//* Розглянемо як this поводиться в методах
// const user = {
//   name: "Luis",
//   age: 30,

//   showThis: function () {
//     // let this = user;

//     console.log("This --->", this);
//   },

//   showName: function () {
//     // let this = user;

//     console.log(this.name);
//   },
// };

// user.showThis();
// user.showName();

//* Розглянемо як this поводиться у звичайних функціях.
//? Function expression
// const showThis = function () {
//   console.log('This --->', this);
// };

// showThis();

//? Function declaration
// function showThis() {
//   console.log('This --->', this);
// }

// showThis();

//* Присвоєння функції як методу об'єкта
// const showThis = function () {
//   console.log('This --->', this);
// };

// showThis();

// const showName = function () {
//   console.log(`Hello ${this.name}`);
// };

// const user = {
//   name: 'Luis',
//   age: 30,

//   // showUserThis: showThis,
//   showUserName: showName,
// };

// user.showUserThis();
// user.showUserName();

//* Виклик методу об'єкта без контексту
// const user = {
//   name: 'Luis',
//   age: 30,

//   showUserThis: function () {
//     console.log('This --->', this);
//   },

//   showUserName: function () {
//     console.log(this.name);
//   },
// };

// const showThis = user.showUserThis;

// user.showUserThis();

// showThis();

//* This в callback функціях
// const user = {
//   name: 'Luis',
//   age: 30,

//   showThis: function () {
//     console.log('This --->', this);
//   },

//   showName: function () {
//     console.log(this.name);
//   },
// };

// const someFunction = callback => {
//   callback();
// };

// someFunction(user.showThis);

/*
 * This у стрілочних функціях. Стрілочні функції не мають свого this,
 * this в стрілках завжди посилається на батьківський this.
 */
// const user = {
//   name: 'Luis',
//   age: 30,

//   showName: () => {
//     console.log(this.name);
//   },
// };

// user.showName();

// ? ----- 02-tasks -----
//? Що буде виведено в консоль
// const foo = function () {
//   console.log(this); // undefined
// };

// foo();

//? Що буде виведено в консоль
// const book = {
//   title: 'React for beginners',

//   showThis() {
//     console.log('showThis -> this', this); // undefined
//   },

//   showTitle() {
//     console.log('showTitle -> this.title', this.title); // Error
//   },
// };

// const outerShowThis = book.showThis;

// outerShowThis();

// const outerShowTitle = book.showTitle;

// outerShowTitle();

/*
? Тут функція makeUser повертає об'єкт.
? Яким буде результат при зверненні до об'єкта ref? Чому?
*/
// const makeUser = function () {
//   // let this = undefined;

//   return {
//     name: 'Джон',
//     ref: this,
//   };
// };

// const user = makeUser();

// console.log(user.ref.name); // Error

//? Що буде виведено в консоль
// const makeUser = function () {
//   return {
//     name: 'Джон',

//     ref() {
//       return this;
//     },
//   };
// };

// const user = makeUser();

// console.log(user.ref().name); // Джон

/*
? Напишіть метод calcTotalPrice(stoneName), який приймає назву каменю і
? розраховує та повертає загальну вартість каменів з таким ім'ям, ціною та
? кількістю з властивості stones.
 */
// const chopShop = {
//   stones: [
//     { name: 'Emerald', price: 1300, quantity: 4 },
//     { name: 'Diamond', price: 2700, quantity: 3 },
//     { name: 'Sapphire', price: 1400, quantity: 7 },
//     { name: 'Ruby', price: 800, quantity: 2 },
//   ],

//   calcTotalPrice(stoneName) {
//     const stone = this.stones.find(el => el.name.toLowerCase() === stoneName.toLowerCase());

//     if (stone === undefined) {
//       return `${stoneName} не знайдено!`;
//     }

//     return stone.price * stone.quantity;
//   },
// };

// console.log(chopShop.stones);

// console.log(chopShop.calcTotalPrice('Emerald')); // 5200
// console.log(chopShop.calcTotalPrice('Diamond')); // 8100
// console.log(chopShop.calcTotalPrice('Sapphire')); // 9800
// console.log(chopShop.calcTotalPrice('Ruby')); // 1600
// console.log(chopShop.calcTotalPrice('Aconit')); // Aconit не знайдено!

// ? ----- 03-methods -----
/*
 * Контекст виконання функції
 *
 * - Метод call
 * - Метод apply
 * - Метод bind
 */

//* Функції це об'єкти зі своїми властивостями та методами
// const fn = function () {};

// fn.test = 10;

// console.dir(fn);

// console.log(fn.test);

//? Викличте функцію showFullName у контексті об'єкта user
// const showFullName = function (message, num) {
//   // let this = user;

//   console.log(`${message} ${this.firstName} ${this.lastName}`);

//   console.log(num);
// };

// const user = {
//   firstName: 'Ernest',
//   lastName: 'Vasquez',
//   age: 30,
// };

// showFullName.call(user, 'Hello', 100);
// showFullName.apply(user, ['Hello', 100]);

// const anotherUser = {
//   firstName: 'Sophie',
//   lastName: 'Castro',
//   age: 32,
// };

// showFullName.call(anotherUser, 'Welcome');

//? Викличте функцію changeColor в контексті різних обʼєктів
// const changeColor = function (color) {
//   this.color = color;
// };

// const hat = {
//   color: 'black',
// };

// console.log(hat);

// changeColor.call(hat, 'yellow');

// console.log(hat);

// const sweater = {
//   color: 'green',
// };

// console.log(sweater);

// changeColor.apply(sweater, ['blue']);

// console.log(sweater);

//? Створіть копію функції changeColor з привʼязаним контекстом
// const changeColor = function (color) {
//   this.color = color;
// };

// const hat = {
//   color: 'black',
// };

// console.log(hat);

/*
function (color) {
  let this = hat;

  this.color = color;
};
*/

// const changeHatColor = changeColor.bind(hat);

// changeHatColor('yellow');

// console.log(hat);

// const sweater = {
//   color: 'green',
// };

// console.log(sweater);

//? Передайте метод обʼєкта в якості callback функції
// const user = {
//   name: 'Luis',
//   age: 30,

//   showThis() {
//     console.log('This --->', this);
//   },

//   showName() {
//     console.log(this.name);
//   },
// };

// const someFunction = callback => {
//   // let callback = function () {
//   // let this = user;

//   // console.log(this.name);
//   // }

//   callback();
// };

// someFunction(user.showName.bind(user));

//
// const sum = function () {
//   return [].reduce.call(arguments, (acc, el) => acc + el, 0);
// };

// console.log(sum(1, 2, 3, 4));
// console.log(sum(10, 20));

// ! module-06-lesson-2
// ? ----- 01-prototype -----
/*
 * Прототип об'єкта
 *
 * - Object.create()
 * - Власні і невласні властивості
 * - Перебір власних властивостей з hasOwnProperty()
 * - Ланцюжки прототипів
 */

// const userMethods = {
//   getFullName() {
//     return `${this.firstName} ${this.lastName}`;
//   },
// };

// const user = Object.create(userMethods);

// user.firstName = 'Nell';
// user.lastName = 'Fitzgerald';
// user.age = 30;

// console.log(user);
// console.log(user.getFullName());

// const anotherUser = Object.create(userMethods);

// anotherUser.firstName = 'Marguerite';
// anotherUser.lastName = 'Jones';
// anotherUser.age = 25;

// console.log(anotherUser);
// console.log(anotherUser.getFullName());

/*
 * Перебір власних властивостей з hasOwnProperty()
 */
// const objC = {
//   c: 'Object c',
// };

// const objB = Object.create(objC);

// objB.b = 'Object b';

// const objA = Object.create(objB);

// objA.a = 'Object a';

// console.log(objA);

// for (const key in objA) {
//   if (objA.hasOwnProperty(key)) {
//     console.log(key);
//   }
// }

// console.log(objA.hasOwnProperty);

// ? ----- 02-class -----
/*
 * Класи
 *  - Оголошення класу
 *  - Конструктор класу
 *  - Методи класу
 *  - Прототип екземпляру
 *  - Приватні властивості
 *  - Геттери і сеттери
 *  - Статичні властивості
 */

// class User {
//   #password;
//   #login;

//   static test = 10;

//   constructor(firstName, lastName, login, password) {
//     // let this = {};
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.#login = login;
//     this.#password = password;
//     // return this;
//   }

//   getFullName() {
//     return `${this.firstName} ${this.lastName}`;
//   }

//   getPassword() {
//     return this.#password;
//   }

//   setPassword(newPassword) {
//     this.#password = newPassword;
//   }

//   get login() {
//     return this.#login;
//   }

//   set login(newLogin) {
//     this.#login = newLogin;
//   }
// }

// const user = new User('Josephine', 'Arnold', 'test@gmail.com', 'qwerty123');

// console.log(user);
// console.dir(User);

// console.log(user.getFullName());

// console.log(user.getPassword());
// user.setPassword('newpassword');
// console.log(user.getPassword());

// console.log(user.login);
// user.login = 'newLogin@gmail.com';
// console.log(user.login);

// const anotherUser = new User('Harold', 'McBride', 'test2@gmail.com', 'qwerty123321');

// console.log(anotherUser);
// console.log(anotherUser.getFullName());

// ? ----- 03-bloger -----
/*
? Напиши клас Blogger для створення об'єкта блогера з наступними властивостями:
? - email - пошта, рядок
? - age - вік, число
? - numberOfPosts - кількість постів, число
? - topics - масив тем на яких спеціалізується блогер
?
? Клас чекає 4 параметри - email, age, numberOfPosts, topics.
?
? - Додай метод getInfo(), який, повертає рядок: Blogger ${email} is ${age} years old and has ${numPosts} posts.
? - Додай метод updatePostCount(value), який у параметрі value приймає кількість постів, які потрібно додати користувачеві.
 */

// class Blogger {
//   constructor(email, age, numberOfPosts, topics) {
//     // let this = {};
//     this.email = email;
//     this.age = age;
//     this.numberOfPosts = numberOfPosts;
//     this.topics = topics;
//     // return this;
//   }

//   getInfo() {
//     return `Blogger ${this.email} is ${this.age} years old and has ${this.numberOfPosts} posts.`;
//   }

//   updatePostCount(value) {
//     this.numberOfPosts += value;
//   }
// }

// const mango = new Blogger('mango@mail.com', 24, 20, ['tech', 'cooking']);

// console.log(mango);

// console.log(mango.getInfo()); // Blogger mango@mail.com is 24 years old and has 20 posts
// mango.updatePostCount(5);
// console.log(mango.getInfo()); // Blogger mango@mail.com is 24 years old and has 25 posts

// const poly = new Blogger('poly@mail.com', 19, 17, ['sports', 'gaming']);

// console.log(poly);

// console.log(poly.getInfo()); // Blogger poly@mail.com is 19 years old and has 17 posts
// poly.updatePostCount(4);
// console.log(poly.getInfo()); // Blogger poly@mail.com is 19 years old and has 21 posts

// ? ----- 04-user -----
/*
? Напиши клас User який створює об'єкт із властивостями login та email.
? Оголоси приватні властивості #login та #email, доступ до яких зроби через
? гетер та сетер login та email.
 */

// const mango = new User('Mango', 'mango@dog.woof');

// console.log(mango);

// console.log(mango.login); // Mango
// mango.login = 'Mangodoge';
// console.log(mango.login); // Mangodoge

// console.log(mango.email); // mango@dog.woof
// mango.email = 'gaatke@fucvod.com';
// console.log(mango.email); // gaatke@fucvod.com

// const poly = new User('Poly', 'poly@mail.com');

// console.log(poly);

// console.log(poly.login); // Poly
// poly.login = 'Polycutie';
// console.log(poly.login); // Polycutie

// ! module-07-lesson-1
// ? ----- 01-selectors -----
/*
 * Пошук HTML елементу за допомогою querySelector та querySelectorAll
 * - За назвою тегу
 * - За назвою класу
 * - За ID
 */

// const magicBtnEl = document.querySelector('body button');

// console.dir(magicBtnEl);

// const siteNavListEl = document.querySelector('.js-site-nav');

// console.dir(siteNavListEl);

// const siteNavLinksEl = document.querySelectorAll('.js-site-nav-link');

// console.log(siteNavLinksEl);

/*
 * Властивості «навігації» по DOM-вузлах
 */
// const siteNavListEl = document.querySelector('.js-site-nav');

// console.dir(siteNavListEl);

// ? ----- 02-properties -----
/*
 * Властивості елемента
 * - Зображення
 * - Текст та textContent
 * https://images.pexels.com/photos/1870376/pexels-photo-1870376.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=480
 */

// const imgEl = document.querySelector('.js-hero-image');

// console.dir(imgEl);

// imgEl.alt = 'Cat';
// imgEl.src = 'https://images.pexels.com/photos/1870376/pexels-photo-1870376.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=480';

// console.log(imgEl.src);

// const titleEl = document.querySelector('.js-hero-title');

// console.dir(titleEl);

// titleEl.textContent = 'About cat';

// const inputEl = document.querySelector('.js-input');

// console.dir(inputEl);

// console.log(inputEl.value);

/*
 * Атрибути
 * - get(ім'я-атрибута)
 * - set(ім'я-атрибута, значення-атрибута)
 * - remove(ім'я-атрибута)
 * - has(ім'я-атрибута)
 */
// const imgEl = document.querySelector('.js-hero-image');

// console.dir(imgEl);

// console.log(imgEl.getAttribute('src'));
// console.log(imgEl.src);

// imgEl.setAttribute('alt', 'It`s cat');
// imgEl.alt = 'It`s cat';

// imgEl.removeAttribute('width');

// console.log(imgEl.hasAttribute('width'));

// ? ----- 03-classlist -----
/*
 * Інтерфейс classList
 * - add
 * - remove
 * - toggle
 * - replace
 * - contains
 */

//* Робота з інлайновими стилями
// const navLinkEl = document.querySelector('.js-site-nav-link');

// console.dir(navLinkEl);

// navLinkEl.style.color = 'teal';
// navLinkEl.style.backgroundColor = 'tomato';

//* Робота з класами
// const navLinkEl = document.querySelector('.js-site-nav-link');

// console.dir(navLinkEl);

// navLinkEl.classList.add('is-open');
// navLinkEl.classList.remove('is-open');

// console.log(navLinkEl.classList.contains('js-site-nav-link'));
// navLinkEl.classList.replace('js-site-nav-link', 'is-open');

// navLinkEl.classList.toggle('is-open');
// navLinkEl.classList.toggle('is-open');

// if (navLinkEl.classList.contains('is-open')) {
//   navLinkEl.classList.remove('is-open');
// } else {
//   navLinkEl.classList.add('is-open');
// }

// const backdropEl = document.querySelector('.js-backdrop');

// console.log(backdropEl);

// backdropEl.classList.add('is-open');

// ? ----- 04-create -----
/*
 * Створення та додавання елементів
 */

/*
<li class="gallery-item">
  <a href="#">
    <img src="https://picsum.photos/id/237/200/300" alt="Labrador">
  </a>
</li>
*/

// Створення li
// const galleryItemEl = document.createElement('li');

// galleryItemEl.classList.add('gallery-item', 'js-gallery-item');

// Створення a
// const galleryLinkEl = document.createElement('a');

// galleryLinkEl.classList.add('js-gallery-link');
// galleryLinkEl.href = '#';

// galleryItemEl.append(galleryLinkEl);

// Створення img
// const galleryImgEl = document.createElement('img');

// galleryImgEl.src = 'https://picsum.photos/id/237/200/300';
// galleryImgEl.alt = 'Labrador';

// galleryLinkEl.append(galleryImgEl);

// Вставка карточки на сторінку
// const galleryListEl = document.querySelector('.js-gallery');

// galleryListEl.append(galleryItemEl);

// ? ----- 05-collections -----
/*
 * Створюємо та додаємо колекцію
 */
const pictures = [
  {
    width: 700,
    height: 460,
    url: "https://picsum.photos/id/0/700/460",
    alt: "laptop",
  },
  {
    width: 700,
    height: 460,
    url: "https://picsum.photos/id/1/700/460",
    alt: "developer",
  },
  {
    width: 700,
    height: 460,
    url: "https://picsum.photos/id/10/700/460",
    alt: "forest",
  },
  {
    width: 700,
    height: 460,
    url: "https://picsum.photos/id/100/700/460",
    alt: "beach",
  },
  {
    width: 700,
    height: 460,
    url: "https://picsum.photos/id/1000/700/460",
    alt: "mountain",
  },
];

/*
<li class="gallery-item">
  <a href="#">
    <img src="" alt="" width="" height="">
  </a>
</li>
*/

//* Функція для створення карточки createGalleryCard(cardInfo)
// const createGalleryCard = pictureInfo => {
// Створення li
//   const galleryItemEl = document.createElement('li');

//   galleryItemEl.classList.add('gallery-item');

// Створення a
//   const galleryLinkEl = document.createElement('a');

//   galleryLinkEl.href = '#';

//   galleryItemEl.append(galleryLinkEl);

// Створення img
//   const galleryImgEl = document.createElement('img');

//   galleryImgEl.src = pictureInfo.url;
//   galleryImgEl.alt = pictureInfo.alt;
//   galleryImgEl.width = pictureInfo.width;
//   galleryImgEl.height = pictureInfo.height;

//   galleryLinkEl.append(galleryImgEl);

//   return galleryItemEl;
// };

//* Створення масиву елментів
// const galleryCardsArr = pictures.map(picture => createGalleryCard(picture));

// console.log(galleryCardsArr);

// //* Вставка колекції карток на сторінку
// const galleryListEl = document.querySelector('.js-gallery');

// galleryListEl.append(...galleryCardsArr);

// ? ----- 06-templating -----
//* Різниця між властивостями textContent та innerHTML
// const titleEl = document.querySelector('.js-title');

// titleEl.textContent = '<span>My</span> gallery!';
// titleEl.innerHTML = '<span>My</span> gallery!';

// const pictures = [
//   {
//     width: 700,
//     height: 460,
//     url: 'https://picsum.photos/id/0/700/460',
//     alt: 'laptop',
//   },
//   {
//     width: 700,
//     height: 460,
//     url: 'https://picsum.photos/id/1/700/460',
//     alt: 'developer',
//   },
//   {
//     width: 700,
//     height: 460,
//     url: 'https://picsum.photos/id/10/700/460',
//     alt: 'forest',
//   },
//   {
//     width: 700,
//     height: 460,
//     url: 'https://picsum.photos/id/100/700/460',
//     alt: 'beach',
//   },
//   {
//     width: 700,
//     height: 460,
//     url: 'https://picsum.photos/id/1000/700/460',
//     alt: 'mountain',
//   },
// ];

// /*
// <li class="gallery-item">
//   <a href="#">
//     <img src="" alt="" width="" height="">
//   </a>
// </li>
// */

// //* Функція для створення карточки createGalleryCard(cardInfo)
// const createGalleryCard = pictureInfo => {
//   //* Повернення шаблоного рядка з розміткою
//   return `
//     <li class="gallery-item">
//       <a href="#">
//         <img src="${pictureInfo.url}" alt="${pictureInfo.alt}" width="${pictureInfo.width}" height="${pictureInfo.height}">
//       </a>
//     </li>
//   `;
// };

// //* Створення масиву рядків із елементами
// const galleryCardsTemplate = pictures.map(picture => createGalleryCard(picture)).join('');

// //* Вставка елементів на сторінку (innerHTML/insertAdjacentHTML)
// const galleryListEl = document.querySelector('.js-gallery');

// // galleryListEl.innerHTML = galleryCardsTemplate;
// galleryListEl.insertAdjacentHTML('beforeend', galleryCardsTemplate);

// ! module-07-lesson-2
// ? ----- 01-events -----
/*
 * Подія сlick
 *
 * - Іменування колбеків для слухачів
 * - handle*: handleSubjectEvent
 * - *Handler: subjectEventHandler
 * - on*: onSubjectEvent
 */

/*
? Натискаючи на кнопку "Click me" змусь
? червоний квадратик зміщуватись на 50px по діагоналі
*/

// const btnEl = document.querySelector('.js-click');
// const resetBtnEl = document.querySelector('.js-reset');
// const boxEl = document.querySelector('.js-box');

// let step = 0;

// const handleBtnClick = () => {};

// const btnClickHandler = () => {};

// const onBtnClick = () => {
//   step += 50;

//   boxEl.style.transform = `translate(${step}px, ${step}px)`;

//   if (step === 200) {
//     btnEl.removeEventListener('click', onBtnClick);
//   }
// };

// const onResetBtnClick = () => {
//   step = 0;

//   boxEl.style.transform = `translate(${step}px, ${step}px)`;

//   btnEl.addEventListener('click', onBtnClick);
// };

// btnEl.addEventListener('click', onBtnClick);
// resetBtnEl.addEventListener('click', onResetBtnClick);

// ? ----- 02-input -----
/*
 * - Подія input
 * - Подія blur
 * - Подія change
 */

// const fieldEl = document.querySelector('.js-user-name');
// const checkboxPolicyEl = document.querySelector('.js-policy-checkbox');

/*
? Виводь в консоль все що користувач вводить в input
*/

// fieldEl.addEventListener('input', () => {
//   console.log(fieldEl.value);
// });

/*
? Користувач вводить в input своє ім'я після втрати
? фокусу отримує alert з повідомленням-привітанням
 */

// fieldEl.addEventListener('blur', () => {
//   const fieldValue = fieldEl.value;

//   if (fieldValue === '') {
//     alert('Поле з імʼям має бути заповнено!');

//     return;
//   }

//   alert(`Вітаємо ${fieldValue}`);
// });

// fieldEl.addEventListener('change', () => {
//   const fieldValue = fieldEl.value;

//   if (fieldValue === '') {
//     alert('Поле з імʼям має бути заповнено!');
//     return;
//   }

//   alert(`Вітаємо ${fieldValue}`);
// });

/*
? Після того, як користувач активує чекбокс, виводиться alert
*/

// checkboxPolicyEl.addEventListener('change', () => {
//   if (checkboxPolicyEl.checked) {
//     alert('Done!');
//   }
// });

// ? ----- 03-forms -----
/*
 * - Подія submit
 * - Дії браузера за замовчуванням
 * - Властивість elements
 */

/*
? Оброби форму та збережи відгук користувача в об'єкт
*/
// const formEl = document.querySelector('.js-feedback-form');

// formEl.addEventListener('submit', event => {
//   event.preventDefault();

// const { email: emailEl, password: passwordEl, comment: commentEl } = formEl.elements;

// console.log(emailEl);
// console.log(passwordEl);
// console.log(commentEl);

//   const formData = {
//     [formEl.elements.email.name]: formEl.elements.email.value,
//     [formEl.elements.password.name]: formEl.elements.password.value,
//     [formEl.elements.comment.name]: formEl.elements.comment.value,
//   };

//   console.log(formData);

//   formEl.reset();
// });

// ? ----- 04-keyboard -----
/*
 * Типи подій: keypress, keydown, keyup
 * - Обмеження keypress
 * - Властивості key та code
 */

// document.addEventListener('keyup', event => {
//   console.log(`event.code: ${event.code}, event.key: ${event.key}`);
// });

// document.addEventListener('keydown', event => {
//   if ((event.metaKey || event.ctrlKey) && event.code === 'KeyF') {
//     event.preventDefault();

//     console.log('Done!');
//   }
// });

// ! module-08-lesson-1
// ? ----- 01-bubbling -----
/*
 * Спливання подій
 * event.target - цільовий (вихідний) елемент
 * event.currentTarget - поточний елемент, на слухачі якого спіймали подію
 */

// const parentEl = document.querySelector('.js-parent');
// const childEl = document.querySelector('.js-child');
// const innerChildEl = document.querySelector('.js-inner-child');

// parentEl.addEventListener('click', event => {
//   console.group('Execution parent handler function!');
//   console.log(`event.target: `, event.target);
//   console.log('event.currentTarget', event.currentTarget);
//   console.groupEnd();
// });

// childEl.addEventListener('click', event => {
//   console.group('Execution child handler function!');
//   console.log(`event.target: `, event.target);
//   console.log('event.currentTarget', event.currentTarget);
//   console.groupEnd();
// });

// innerChildEl.addEventListener('click', event => {
//   console.group('Execution inner child handler function!');
//   console.log(`event.target: `, event.target);
//   console.log('event.currentTarget', event.currentTarget);
//   console.groupEnd();
// });

// ? ----- 02-delegation -----
/*
 * Додавання прослуховувача подій на кожен елемент
 */

//? Отримай колір квадрата по якому було здійснено клік

// const boxesElements = document.querySelectorAll('.js-box');

// console.dir(boxesElements[1]);

// boxesElements.forEach(el => {
//   el.addEventListener('click', event => {
//     console.log(event.target.dataset.color);
//   });
// });

/*
 * Дегегування подій
 */

//? Отримай колір квадрата по якому було здійснено клік
// const containerEl = document.querySelector('.js-container');

// containerEl.addEventListener('click', event => {
//   if (event.target === event.currentTarget) {
//     return;
//   }

//   console.log(event.target.dataset.color);
// });

// ? ----- 03-prodcuts -----
/*
 * Створи картки з товарами на основі масиву products
 *
 * Реалізуй делегування подій на колекції карток
 * Після кліку на картку повинно з'являтись модальне вікно
 * з детальною інформацією про продукт.
 *
 * Для реалізації модального вікна використай
 * бібліотеку basicLightbox (https://github.com/electerious/basicLightbox)
 */

//* Product card template
/*
<li class="product-card js-product-card">
  <img src="" alt="" class="product-card-img" />
  <div class="product-card-text-content">
    <h2 class="product-card-title"></h2>
    <p class="product-card-price">Price: uah.</p>
  </div>
</li>
*/

//* Modal card template
/*
<img class="product-modal-img" src="" alt="" />
<div class="product-modal-text-content">
  <h2 class="product-modal-title"></h2>
  <p class="product-modal-price">Price: uah.</p>
  <p class="product-modal-desc"></p>
</div>
*/

// const products = [
//   {
//     id: 1,
//     img: 'https://www.vodafone.ua/shop/media/wysiwyg/novosti/Capture_1_large.JPG',
//     name: 'Monitor',
//     price: 3000,
//     description: '23-inch monitor with Full HD resolution.',
//   },
//   {
//     id: 2,
//     img: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTzWqRMI3HQiDfICHAmbArmaP4uOOIjfz0sDITv0dfkpb0mbbgX',
//     name: 'Laptop',
//     price: 20000,
//     description: 'Lightweight and powerful laptop with a 15-inch display and SSD.',
//   },
//   {
//     id: 3,
//     img: 'https://cdn.27.ua/799/66/39/6841913_1.jpeg',
//     name: 'Smartphone',
//     price: 8000,
//     description: 'Equipped with a triple camera and a multi-core processor.',
//   },
//   {
//     id: 4,
//     img: 'https://cdn.27.ua/799/b6/16/4371990_1.jpeg',
//     name: 'Tablet',
//     price: 12000,
//     description: '10-inch tablet with high performance and a Retina display.',
//   },
// ];

// const createProductCardTemplate = product => {
//   return `
//     <li class="product-card js-product-card" data-id="${product.id}">
//       <img src="${product.img}" alt="${product.name}" class="product-card-img"/>
//       <div class="product-card-text-content">
//         <h2 class="product-card-title">${product.name}</h2>
//         <p class="product-card-price">Price: ${product.price}uah.</p>
//       </div>
//     </li>
//   `;
// };

// const productsCardTemplate = products.map(el => createProductCardTemplate(el)).join('');

// const productsListEl = document.querySelector('.js-products');

// productsListEl.innerHTML = productsCardTemplate;

// productsListEl.addEventListener('click', event => {
//   if (event.target === event.currentTarget) {
//     return;
//   }

//   const productCardEl = event.target.closest('.js-product-card');

//   const productId = Number(productCardEl.dataset.id);

//   const productInfo = products.find(el => el.id === productId);

//   const modalWindowInstance = basicLightbox.create(
//     `
//     <img class="product-modal-img" src="${productInfo.img}" alt="${productInfo.name}" />
//     <div class="product-modal-text-content">
//       <h2 class="product-modal-title">${productInfo.name}</h2>
//       <p class="product-modal-price">Price: ${productInfo.price}uah.</p>
//       <p class="product-modal-desc">${productInfo.description}</p>
//     </div>
//     `,
//     {
//       closable: true,
//       className: 'our-class',

//       onShow() {
//         console.log('Modal show!');
//       },

//       onClose() {
//         console.log('Modal close');
//       },
//     }
//   );

//   modalWindowInstance.show();
// });

// ! module-08-lesson-2
// ? ----- 01-basic -----
/*
 * Деструктуризація об'єкта
 */

/*
? Напишіть деструктуруюче присвоєння, яке:
? властивість firstName присвоє до змінної firstName.
? властивість lastName присвоє до змінної lastName.
? властивість age присвоє до змінної userAge.
? властивість isAdmin присвоє до змінної isAdmin (false, якщо немає такої властивості)
*/

// const user = {
//   firstName: 'John',
//   lastName: 'Reese',
//   age: 30,
//   // isAdmin: true,
// };

// console.log(user);

// const firstName = user.firstName;
// const lastName = user.lastName;

// const { firstName, lastName, age: userAge, isAdmin = false } = user;

// console.log('firstName:', firstName);
// console.log('lastName:', lastName);
// console.log('userAge:', userAge);
// console.log('isAdmin:', isAdmin);

/*
 * Глибока деструктуризація об'єкта
 */

//? Без глибокої деструктуризації

// const user = {
//   username: 'Jacob name',
//   skills: {
//     html: true,
//     css: false,
//     js: true,
//   },
// };

// console.log(user);

// const { username, skills } = user;
// const { html, css, js } = skills;

// console.log('username:', username);
// console.log('skills:', skills);
// console.log('html:', html);
// console.log('css:', css);
// console.log('js:', js);

//? З глибокою деструктуризацією

// const user = {
//   username: 'Jacob name',
//   skills: {
//     html: true,
//     css: false,
//     js: true,
//   },
// };

// console.log(user);

// const {
//   username,
//   skills: { html, css, js },
// } = user;

// console.log('username:', username);
// console.log('html:', html);
// console.log('css:', css);
// console.log('js:', js);

/*
 * Деструктуризація масива
 */

//? ====================
// const fullNames = ['Herbert Todd', 'Belle Soto', 'Roger Marsh', 'Ethan Lindsey'];

// console.log(fullNames);

// const fullName1 = fullNames[0];
// const fullName2 = fullNames[1];

// const [fullName1, , fullName3] = fullNames;

// console.log('fullName1:', fullName1);
// console.log('fullName2:', fullName2);
// console.log('fullName3:', fullName3);

//? ====================
// const getUserCoordinate = () => {
//   const longitude = 50.426857;
//   const latitude = 30.56368;

//   return [longitude, latitude];
// };

// console.log(getUserCoordinate());

// const userCoordinate = getUserCoordinate();

// console.log(userCoordinate[0]);
// console.log(userCoordinate[1]);

// const [lon, lat] = getUserCoordinate();

// console.log('lon:', lon);
// console.log('lat:', lat);

//* Операція rest при деструктуризації

// const user = {
//   firstName: 'John',
//   lastName: 'Reese',
//   age: 30,
//   isAdmin: true,
// };

// console.log(user);

// const { firstName, lastName, ...otherProps } = user;

// console.log('firstName:', firstName);
// console.log('lastName:', lastName);
// console.log('otherProps:', otherProps);

// ? ----- 02-params -----
/*
 * Деструктуризація об'єкта в параметрах функції
 */

// const user = {
//   username: "Jacob",
//   skills: {
//     html: true,
//     css: false,
//     js: true,
//   },
// };

//? Без деструктуризації

// function getUserName(obj) {
//   console.log(
//     `Hello my name is ${obj.username}, I know html - ${obj.skills.html}, css - ${obj.skills.css} and js -${obj.skills.js}`
//   );
// }

// getUserName(user);

//? З деструктуризацією

// function getUserName(obj) {
//   const {
//     username,
//     skills: { html, css, js },
//   } = obj;

//   console.log(`Hello my name is ${username}, I know html - ${html}, css - ${css} and js -${js}`);
// }

// getUserName(user);

//? Деструктуризація в параметрах функції

// const user = {
//   username: 'Jacob',
//   skills: {
//     html: true,
//     css: false,
//     js: true,
//   },
// };

// function getUserName({ username, skills: { html, css, js } }, num1, num2) {
//   // let { username, skills: { html, css, js } } = user;
//   // let num1 = 10;
//   // let num2 = 20;

//   console.log(`Hello my name is ${username}, I know html - ${html}, css - ${css} and js -${js}`);
//   console.log(num1);
//   console.log(num2);
// }

// getUserName(user, 10, 20);

// ? ----- 03-loops -----
/*
 * Деструктуризація об'єкта в циклі
 */

// const users = [
//   {
//     username: "Kate",
//   },
//   {
//     username: "Alex",
//   },
//   {
//     username: "Mark",
//   },
// ];

// console.log(users);

/*
 ? Без деструктуризації
 */

// for (const user of users) {
//   console.log(user.username);
// }

/*
 ? З деструктуризацією
 */

// for (const { username } of users) {
//   // 1 Ітерація
//   // const { username } = {username: 'Kate',}

//   // 2 Ітерація
//   // const { username } = {username: 'Alex',}

//   // 3 Ітерація
//   // const { username } = {username: 'Mark',}

//   console.log(username);
// }

// ? Через метод forEach
// users.forEach(({ username }) => {
//   console.log(username);
// });

// ? ----- 04-task1 -----
/*
? Деструктуризуй об'єкт таким чином щоб отримати значення username, firstName, lastName
 */

// const user = {
//   id: 1,
//   username: 'harry_potter',
//   profile: {
//     firstName: 'Harry',
//     lastName: 'Potter',
//     age: 25,
//   },
// };

// console.log(user);

// const {
//   username,
//   profile: { firstName, lastName },
// } = user;

// console.log(`Ім'я користувача (за нікнеймом): ${username}`);
// console.log(`Ім'я користувача: ${firstName}`);
// console.log(`Прізвище користувача: ${lastName}`);

// ? ----- 05-task2 -----
/*
? Допиши функцію таким чином щоб кожна властивість
? об'єкта product була незалежним параметром
 */

// const product = {
//   title: "Smart TV",
//   price: 25000,
//   category: "Electronics",
//   details: {
//     brand: "Samsung",
//     color: "Black",
//     weight: "15.5",
//   },
// };

//? Деструктуризація в тілі функції
// function displayProductInfo(productInfo) {
//   const {
//     title,
//     price,
//     category,
//     details: { brand, color, weight },
//   } = productInfo;

//   console.log(`Назва товару: ${title}`);
//   console.log(`Ціна: ${price} грн`);
//   console.log(`Категорія: ${category}`);
//   console.log('Деталі:');
//   console.log(`- Бренд: ${brand}`);
//   console.log(`- Колір: ${color}`);
//   console.log(`- Вага: ${weight} кг`);
// }

// displayProductInfo(product);

//? Деструктуризація в параметрах функції
// function displayProductInfo({ title, price, category, details: { brand, color, weight } }) {
//   console.log(`Назва товару: ${title}`);
//   console.log(`Ціна: ${price} грн`);
//   console.log(`Категорія: ${category}`);
//   console.log('Деталі:');
//   console.log(`- Бренд: ${brand}`);
//   console.log(`- Колір: ${color}`);
//   console.log(`- Вага: ${weight} кг`);
// }

// displayProductInfo(product);

// ? ----- 06-task3 -----
/*
? Необхідно зрoбити рефакторинг функції calculateHousePerimeter,
? так щоб вона приймала об'єкт з параметрами будинку,
? включаючи довжини сторін будинку.
? Функція повинна розрахувати та повернути периметр будинку.
 */

// function calculateHousePerimeter({ sideA, sideB, sideC, sideD }) {
//   return sideA + sideB + sideC + sideD;
// }

// const houseSides = {
//   sideA: 10,
//   sideB: 15,
//   sideC: 10,
//   sideD: 15,
// };

// const perimeter = calculateHousePerimeter(houseSides);

// console.log(`Периметр будинку: ${perimeter}`);

// ? ----- 07-task4 -----
/*
? Напиши функцію transformUsername(user) так, щоб вона повертала новий об'єкт 
? із властивістю fullName, замість firstName та lastName.
*/

// const transformUsername = ({ firstName, lastName, ...newUser }) => {
//   newUser.fullName = `${firstName} ${lastName}`;

//   return newUser;
// };

// console.log(
//   transformUsername({
//     id: 1,
//     firstName: 'Jacob',
//     lastName: 'Mercer',
//     email: 'j.mercer@mail.com',
//     friendCount: 40,
//   })
// );

// console.log(
//   transformUsername({
//     id: 2,
//     firstName: 'Adrian',
//     lastName: 'Cross',
//     email: 'a.cross@hotmail.com',
//     friendCount: 20,
//   })
// );

// ! 23-12-2024 module-09-lesson-1
// ? ----- 01-json -----

/*
 * Формат JSON
 *
 * - Метод JSON.strigify(value)
 * - Метод JSON.parse(value)
 */

// const users = [
//   {
//     firstName: 'Max',
//     lastName: 'Doyle',
//     age: 30,
//   },
//   {
//     firstName: 'Max',
//     lastName: 'Doyle',
//     age: 30,
//   },
//   {
//     firstName: 'Max',
//     lastName: 'Doyle',
//     age: 30,
//   },
// ];

// console.log(users);

// const userStr = JSON.stringify(users);

// console.log(userStr);

// console.log(JSON.parse(userStr));

/*
 * Конструкція try...catch для обробки помилок
 */

// console.log('Start script!');

// try {
//   const user = '{"firstName": "Oleksii",}';

//   JSON.parse(user);
// } catch (err) {
//   console.log(err);
// }

// console.log('End script!');

// ? ----- 02-localstorage -----

/*
 * LocalStorage
 */

// console.log(window.localStorage);

/*
 * Збереження
 * Чому треба використовувати метод JSON.stringify
 */

// const product = {
//   title: 'Some title',
//   description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, earum.',
//   price: 1000,
// };

// sessionStorage.setItem('test', 'some string');
// sessionStorage.setItem('product-info', JSON.stringify(product));

/*
 * Читання
 * Чому треба використовувати метод JSON.parse
 */

// console.log(sessionStorage.getItem('test'));

// const product = JSON.parse(sessionStorage.getItem('product-info'));

// console.log(product);
/*
 * Видалення
 */

// sessionStorage.removeItem('product-info');
// sessionStorage.clear();

// ? ----- 03-feedback -----

// const feedbackFormEl = document.querySelector(".js-feedback-form");
// let formData = {
//   name: "",
//   email: "",
//   message: "",
// };

// const fillFormFields = () => {
//   try {
//     if (localStorage.length === 0) {
//       return;
//     }

//     const formDataFromLS = JSON.parse(
//       localStorage.getItem("feedback-form-data")
//     );

//     formData = formDataFromLS;

//     for (const key in formDataFromLS) {
//       feedbackFormEl.elements[key].value = formDataFromLS[key];
//     }
//   } catch (err) {
//     console.log(err);
//   }
// };

// fillFormFields();

// const onFormFieldChange = (event) => {
//   const { target: formFieldEl } = event;

//   const fieldValue = formFieldEl.value;
//   const fieldName = formFieldEl.name;

//   formData[fieldName] = fieldValue;

//   localStorage.setItem("feedback-form-data", JSON.stringify(formData));
// };

// const onFeedbackFormSubmit = (event) => {
//   event.preventDefault();

//   const { currentTarget: formEl } = event;

//   formEl.reset();
//   localStorage.removeItem("feedback-form-data");
// };

// feedbackFormEl.addEventListener("change", onFormFieldChange);
// feedbackFormEl.addEventListener("submit", onFeedbackFormSubmit);

// ! 08-01-2025 module-10-lesson-2
//? ----- 01-promises -----
/* Створення та обробка промісу
 * - Клас Promise
 * - resolve
 * - reject
 * - then, catch, finally
 */

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const isDone = Math.random() > 0.5;

//     if (isDone) {
//       resolve("Done!");
//     } else {
//       reject("Error!");
//     }
//   }, 2000);
// });

// promise
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((err) => {
//     console.log(err);
//   })
//   .finally(() => {
//     console.log("Preloader stop");
//   });

// console.log(promise);

/*
 * Ланцюжки промісів
 * - декілька послідовних then
 * - then повертає проміс
 */

// promise
//   .then((result) => {
//     console.log(result);

//     return 10;
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//? Що буде у консолі
// const promise = new Promise((resolve, reject) => {
//   resolve('1');
// });

// promise
//   .then(data => {
//     console.log(data); // '1'
//   })
//   .then(data => {
//     console.log(data); // undefined

//     return '2';
//   })
//   .then(data => {
//     console.log(data); // '2'
//   });

//? Що буде у консолі
// const promise = new Promise((resolve, reject) => {
//   reject('error');
// });

// promise
//   .then(data => {
//     console.log(data);
//   })
//   .then(data => {
//     console.log(data);

//     return '2';
//   })
//   .then(data => {
//     console.log(data);
//   })
//   .catch(error => {
//     console.log(error); // 'error'
//   });

//? ----- 02-promisification -----
//? Запит за користувачем на колбэках
// const fetchUserByName = (name, onSuccess, onError) => {
//   console.log("Робимо запит на сервер...");

//   setTimeout(() => {
//     const isSuccess = Math.random() > 0.5;

//     if (isSuccess) {
//       const user = {
//         firstName: name,
//         lastName: "Francis",
//         age: 30,
//       };

//       onSuccess(user);
//     } else {
//       onError(`Користувача ${name} не знайдено`);
//     }
//   }, 2000);
// };

// const handleSuccessFetch = (data) => {
//   console.log(data);
// };

// const handleErrorFetch = (err) => {
//   console.log(err);
// };

// fetchUserByName("Ida", handleSuccessFetch, handleErrorFetch);

//? Запит за користувачем на промісах
// const fetchUserByName = (name) => {
//   const promise = new Promise((resolve, reject) => {
//     console.log("Робимо запит на сервер...");

//     setTimeout(() => {
//       const isSuccess = Math.random() > 0.5;

//       if (isSuccess) {
//         const user = {
//           firstName: name,
//           lastName: "Francis",
//           age: 30,
//         };

//         resolve(user);
//       } else {
//         reject(`Користувача ${name} не знайдено`);
//       }
//     }, 2000);
//   });

//   return promise;
// };

// fetchUserByName("Ida")
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//? ----- 03-load-scripts -----
// https://cdn.jsdelivr.net/npm/lodash@4.17.21/lodash.min.js
// https://cdn.jsdelivr.net/npm/jquery@3.7.1/dist/jquery.min.js
// https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js

/*
 * Завантаження скриптів
 */
//? Рішення через колбеки
// const loadScript = (scriptUrl, onSuccess, onError) => {
//   const script = document.createElement("script");

//   script.src = scriptUrl;

//   document.head.append(script);

//   script.addEventListener("load", () => {
//     onSuccess(`${scriptUrl} завантажено успішно!`);
//   });

//   script.addEventListener("error", () => {
//     onError(`${scriptUrl} не завантажився!`);
//   });
// };

// loadScript(
//   "https://cdn.jsdelivr.net/npm/lodash@4.17.21/lodash.min.js",
//   (message) => {
//     console.log(message);

//     loadScript(
//       "https://cdn.jsdelivr.net/npm/jquery@3.7.1/dist/jquery.min.js",
//       (message) => {
//         console.log(message);

//         loadScript(
//           "https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js",
//           (message) => {
//             console.log(message);
//           },
//           (err) => {
//             console.log(err);
//           }
//         );
//       },
//       (err) => {
//         console.log(err);
//       }
//     );
//   },
//   (err) => {
//     console.log(err);
//   }
// );

// //? Рішення через проміси
// const loadScript = (scriptUrl) => {
//   const promise = new Promise((resolve, reject) => {
//     const script = document.createElement("script");

//     script.src = scriptUrl;

//     document.head.append(script);

//     script.addEventListener("load", () => {
//       resolve(`${scriptUrl} завантажено успішно!`);
//     });

//     script.addEventListener("error", () => {
//       reject(`${scriptUrl} не завантажився!`);
//     });
//   });

//   return promise;
// };

// loadScript("https://cdn.jsdelivr.net/npm/lodash@4.17.21/lodash.min.js")
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// loadScript("https://cdn.jsdelivr.net/npm/jquery@3.7.1/dist/jquery.min.js")
//   .then((result) => {
//     console.log(result);

//     return loadScript(
//       "https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js"
//     );
//   })
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
