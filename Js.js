"use strict";

// const numberOfFilms = +prompt("How many films did you watch?", '');
// // console.log(numberOfFilms)


// let personalMoveDB = {
//     count : numberOfFilms,
//     movies : {},
//     actors : {},
//     genres : [],
//     privat : false,

// };

//     const lastWatchedFilm = prompt("Your last watched film is ?", ''),
//           filmGrade = +prompt("was it interesting?", '10');

//     personalMoveDB.movies[lastWatchedFilm] = filmGrade;

//     console.log(personalMoveDB);

// for (let i = 2; i <= 16; i++) {
//     if (i % 2 === 0) {
//         continue;
//     } else {
//         console.log(i);
//     }
// }
// let i = 2; 
// while (i < 16) {
//     i++;
//     if(!(i%2)) continue;
//     console.log(i);
// }

// Заполните новый массив (result) числами из старого (arr)
// . Количество элементов в массиве можно получить как arr.length,
//  а к элементам обращаемся все так же: arr[0], arr[1] и тд.
// Должен получиться точно такой же массив

// function firstTask() {
//     // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
//     const arr = [3, 5, 8, 16, 20, 23, 50];
//     const result = [];

//     // Пишем решение вот тут
//     for(let i = 0; i < arr.length; i++) {
//         result.push(arr[i]);
//     }
    
//     // Не трогаем
//     return result;
// }

// console.log(firstTask());

// Измените данный массив так, чтобы все числа были увеличены в 2 раза, а если попадается строка строка - 
// то к ней было добавлено 
// " - done".
// Для определения типа данных используйте typeof();
// Должно получиться: [ 10, 20, 'Shopping - done', 40, 'Homework - done' ]

// function secondTask() {
//     // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
//     const data = [5, 10, 'Shopping', 20, 'Homework'];
//     // Пишем решение вот тут
//     for(let i = 0; i < data.length; i++) {
//          data[i] = typeof data[i] === 'number' ? data[i] *2 : data[i] + ' - ' + 'done';
//     }
//     // Не трогаем
//    return data;
// }

// console.log(secondTask());

// Разверните массив data наоборот при помощи цикла и запишите данные в массив result.
// Должно получиться: [ 'Homework', 20, 'Shopping', 10, 5 ]

// Через определенное количество уроков вы убедитесь, что эти задачи можно решить чуть проще, без использования циклов. 
// Но пока мы должны понять, как это все работает внутри, на базовом уровне. Прежде, чем использовать готовые команды.

// Ответ с кодом этих задач можно найти тут: ссылка

// Если у вас получилось немного по другому, но решение засчитывается - то все в порядке. 
// Помните, что вариантов решения всегда несколько. Например, <11 и <=10 в условиях цикла дадут одинаковый результат.

// Но постарайтесь решить самостоятельно 🙂

// function thirdTask() {
//     // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
//     const data = [5, 10, 'Shopping', 20, 'Homework'];
//     const result = [];

//     // Пишем решение вот тут
//     for(let i = 4; i >= 0; i--) {
//         console.log(result[i]= data[i] );
//     }
    
//     // Не трогаем
//     return result;
// }

// const lines = 5;
// let result = '';

// for (let i = 0; i <= lines; i++) {
//     for (let j = 0; j < lines - i; j++) {
//         result += " ";
//     }
//     for (let j = 0; j < 2 * i + 1; j++) {
//         result += "*";
//     }
//     result += "\n";
// }

// console.log(result);


// // for(let i = 0; i < 16; i++) {
// //     if( !(i%2) ) continue;
// // }

// // let i = 1
// // while (i < 16) {
// //     i++;
// //     if(!(i%2)) continue;
    
// // console.log(i);
// // }


const numberOfFilms = +prompt("How many films did you watch?", '');


let personalMoveDB = {
    count: numberOfFilms,
    movies : {},
    actors : {},
    genres : [],
    privat : false,

};

    for(let i = 0; i < 2; i++) {
            const a = prompt("Your last watched film is ?", ''),
                b = prompt("was it interesting?", '10');
                if (a != null && b != null && a != '' && b != '' && a.length < 50) {
                    personalMoveDB.movies[a] = b;
                } else {
                    i--;
                }
                
    }
   
    if(personalMoveDB.count < 10) {
        console.log('Просмотрено мало фильмов');
    } else if (personalMoveDB.count >=10 && personalMoveDB.count < 30) {
        console.log('Вы класический зритель');
    } else if ( personalMoveDB.count >= 30) {
        console.log('вы киноман');
    } else {
        console.log ('Произошла ошибка');
    }

    console.log(personalMoveDB);