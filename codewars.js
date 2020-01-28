// /**
//  * Свертка списка в диапазоны.
//  *
//  * Дан список целых чисел, повторяющихся элементов в списке нет.
//  * Нужно преобразовать это множество в строку, сворачивая соседние числа в диапазоны.
//  */

// compress([1, 4, 5, 2, 3, 9, 8, 11, 0]) // 0-5,8-9,11
// compress([1, 4, 3, 2]) // 1-4
// compress([1, 4]) // 1,4

// function compress(list) {

//     const sorted = list.sort((a, b) => a - b);
//     const groups = [[sorted[0], sorted[0]]];
//     sorted.forEach((current, i) => {
//         if (sorted[i - 1] === undefined) {
//             return;
//         }

//         if (current - sorted[i - 1] === 1) {
//             groups.forEach((gr, j) => {
//                 if (current - 1 === gr[1]) {
//                     groups[j] = [gr[0], current];
//                 }
//             });
//         } else {
//             groups.push([current, current]);
//         }
//     });
// console.log("groups = ", groups);
//     return groups;
// }

/**
 * Банкомат.
 *
 * В банкомате есть купюры - 50, 100, 500, 1000, 5000 руб.
 * Есть ограничение на количество каждой из купюр (limits), его нужно держать в актуальном состоянии
 * Нужно вернуть купюры и их количество, которыми можно выдать запрашиваемую сумму,
 * в виде строки указанного формата. Начинать с самой крупной.
 * Если выдать запрашиваемую сумму не получается, вернуть ошибку.
*/
// const limits = {
//     50: 10,
//     100: 10,
//     500: 10,
//     1000: 10,
//     5000: 10
// };

// atm(1250, limits) // '1x1000 2x100 1x50'
// atm(100000, limits) // 'Error'
// atm(2400, limits) // '2x1000 4x100'
// atm(6512, limits) // 'Error'

// function atm(sum, limits) {
//     const kup = {
//         50: 0,
//         100: 0,
//         500: 0,
//         1000: 0,
//         5000: 0
//     };

//     for (let i = 4; i >= 0; i--) {
//         const nominal = Object.keys(kup)[i];
//         const partSum = Math.floor(sum / nominal);
//         if (partSum > 0) {
//             kup[nominal] = partSum > limits[nominal] ? limits[nominal] : partSum;
//         }
//         sum = sum - (kup[nominal] * nominal);

//         if (i === 0 && sum > 0) {
//             console.error('sum error ' + sum);
//             return;
//         }
//     }

//     console.log(kup);
// }
