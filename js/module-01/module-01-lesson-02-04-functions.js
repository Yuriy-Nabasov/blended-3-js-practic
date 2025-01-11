/*
 * Функції
 *
 * - Оголошення та виклик функції
 * - Параметри та аргументи
 * - Повернення значення
 * - Порядок виконання коду
 */

// function greet(firstName, lastName) {
//   console.log(`Hello ${firstName} ${lastName}`);
// }

// greet('Oleksii', 'Repin');

// function sum(numA, numB) {
//   const result = numA + numB;

//   return result;
// }

// console.log(sum(10, 20));

/*
? Напишіть функцію getRectArea(sideA, sideB) для обчислення площі прямокутника.
? Сторони прямокутника будуть переденні до параметрів sideA та sideB.
*/
// function getRectArea(sideA, sideB) {
//   const rectArea = sideA * sideB;

//   return rectArea;
// }

// console.log(getRectArea(8, 11)); // 88
// console.log(getRectArea(18, 11)); // 198
// console.log(getRectArea(8, 21)); // 168

/*
 ? Напиши функцію calcBMI(weight, height) яка розраховує та повертає індекс
 ? маси тіла людини. Для цього необхідно розділити вагу на квадрат висоти.
 ?
 ? Вага та висота будуть спеціально передані як рядки.
 ?
 ? Індекс маси тіла необхідно округлити до однієї цифри після коми.
 */
// function calcBMI(weight, height) {
//   weight = Number(weight);
//   height = Number(height);

//   const resultBmi = weight / height ** 2;

//   return resultBmi.toFixed(1);
// }

// const bmi = calcBMI('88.3', '1.75');

// console.log(bmi); // 28.8
