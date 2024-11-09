// Функція для визначення типу змінної:
// Написати функцію для визначення типу змінної.
// Функція отримує будь-яке значення в якості аргументу
// і визначає тип цієї змінної. Виводить в консоль
// повідомлення `Тип змінної: type`

// function checkType(value) {
//   return `Тип змінної: ${typeof value}`;
// }

// console.log(checkType(`njp`));

// Написати функція для обчислення довжини рядка.
// Функція отримує рядок в якості аргументу і
// виводить в консоль повідомлення "Довжина рядка length"

// Дано рядок, що складається із символів, наприклад, 'abcde'.
// Перевір, що другим символом цього рядка є літера 'b'.
// Якщо так - виведи 'Так' у консоль, в противному випадку виведи 'Ні'.

// function checkString(string) {
//   if (string[1] === `b`) {
//     return `Так`;
//   } else {
//     return `Ні`;
//   }
// }

// console.log(checkString(`abdfe`));

// Напишіть функцію, яка приймає аргумент і визначає його тип даних.
// Якщо тип - строка, функція повертає "string", якщо число - "number",
// в іншому випадку - "unknown".

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

// Оголоси функцію hasDiscount(age, isStudent, isPensioner),
// яка перевіряє, чи покупець має право на знижку.
// І повертає true - якщо має право на знижку і false, якщо - ні.
// Покупець має право на знижку, якщо він є студентом
// або пенсіонером, або вік його між 12 і 18 роками(включно).
// Значення параметрів будуть задаватися під час виклику функції:
// age - вік покупця;
// isStudent - буль (вказує чи є покупець студентом);
// isPensioner - буль  (вказує чи є покупець пенсіонером);

// function hasDiscount(age, isStudent, isPensioner) {
//   return (12 <= age && age <= 18) || isStudent || isPensioner;
// }

// console.log(hasDiscount(8, false, false));
// console.log(hasDiscount(18, false, false));
// console.log(hasDiscount(8, true, false));
// console.log(hasDiscount(8, false, true));

// Оголоси функцію isEvenNumber(number), яка перевіряє
// (за допомогою тернарного оператору) чи отримане значення
// є парним числом і виводить відповідне повідомлення
// "Число парне" або "Число непарне"
// Якщо функція отримує не число вивести повідомлення
// "Невалідне значення"

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

// Оголоси функцію calculateSquare(value).
// Функція має перевіряти чи є отримане значення - число
// або за можливості перетворити рядок на число
// Якщо це число функція возводить число у квадрат і виводить рядок
// `The square of ${numberValue} is ${squaredNumber}`
// numberValue - отримане число або перетворене з рядка число.
// squaredNumber - numberValue у квадраті.
// Якщо значення не є числом, функція повертає рядок 'Invalid input!'.

// function calculateSquare(value) {
//     const numberValue = parseFloat(value);
//     if (typeof value )
// }

// Оголоси функцію checkString(value), яка перевіряє
// чи отримане значення є рядком і не містить символ $.
// Якщо це так, виведіть кількість символів у рядку.
// Якщо значення не є рядком, виведіть повідомлення про невірний ввід.

// function checkString(value) {
//   if (typeof value === `string` && !value.includes(`$`)) {
//     return value.length;
//   } else {
//     return `невірний ввід`;
//   }
// }

// console.log(checkString(`v$alue`));
// console.log(checkString(5458));

// Написати функцію getCountryInfo(country), котра буде
// отримувати назву країни і виводити інформацію про неї
// China => "Китай - найбільша країна за населенням у світі."
// Australia => "Австралія - найбільший острів та країна в Океанії."
// France => "Франція відома своєю гастрономією та мистецтвом."
// Germany => "Німеччина - найбільша економіка в Європі."
// Canada => "Канада - друга за площею країна у світі, відома своєю природою."
// Якщо країни немає, вивести повідомлення "Інформація про цю країну відсутня."

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

// Напишіть цикл (for), який виведе в консоль усі парні числа від max до min включно по зменшенню
// const max = 50;
// const min = 23;

// for (let i = max; i >= min; --i) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }

// За допомогою циклу for знайдіть суму усіх парних чисел у проміжку від min до max включно
// const max = 50;
// const min = 0;
// let sum = min;

// for (let i = min; i <= max; i++) {
//   if (i % 2 === 0) {
//     sum = sum + i;
//   }
// }
// console.log(sum);

// Напишіть програму, яка обчислить суму всіх чисел (за допомогою циклу for)
// від 1 до 100, які діляться на 3 або на 5. І виведи в консоль рядок :
// `Сума чисел, які діляться на 3 або на 5 від 1 до 100: ${sum}`

// let sum = 0;
// for (let i = 1; i <= 100; i++) {
//   if (i % 3 === 0 || i % 5 === 0) {
//     sum += i;
//   }
// }
// console.log(`Сума чисел, які діляться на 3 або на 5 від 1 до 100: ${sum}`);

// Потрібно підрахувати кількість парних чисел у заданому діапазоні
// "Кількість парних чисел Count"

// const start = 1;
// const end = 20;

// let sum = 0;
// for (let i = start; i <= end; i++) {
//   if (i % 2 === 0) {
//     sum += 1;
//   }
// }
// console.log(`ількість парних чисел: ${sum}`);

// Напишіть функцію formatMinutesToTime(minutes), котра
// отримає від користувача число(кількість хвилин) і виведе
// в консоль рядок у форматі годин і хвилин, тобто, якщо користувач
// вказав число 70, в консолі отримаємо "01:10"

// function formatMinutesToTime(minutes) {
//   const hours = Math.floor(minutes / 60);
//   const modHours = String(hours).padStart(2, `0`);
//   const modMinutes = String(minutes % 60).padStart(2, `0`);
//   console.log(`${modHours}:${modMinutes}`);
// }

// formatMinutesToTime(59);
// formatMinutesToTime(404);
// formatMinutesToTime(180);

// Функція checkStorage(storage, item) приймає два параметри:

// storage - масив рядків, що описує доступні товари на складі
// item - рядок з назвою товара, наявність якого потрібно перевірити
// Доповни код функції таким чином, щоб вона перевіряла, чи присутній такий товар в масиві storage і повертала:

// рядок "<item> is available to order!", де item - це назва товара, якщо товар було знайдено
// рядок "Sorry! We are out of stock!", якщо такого товара немає в масиві
// Зроби так, щоб пошук за ім'ям товару був незалежний від регістру, тобто наприклад "plum" і "pLuM" мають бути знайдені у масиві ["apple", "plum", "pear"].

// function checkStorage(storage, item) {
//   if (storage.includes(item.toLowerCase())) {
//     return `${item.toLowerCase()} is available to order!`;
//   } else {
//     return `Sorry! We are out of stock!`;
//   }
// }

// console.log(checkStorage(["apple", "plum", "pear"], "pLuM"));
