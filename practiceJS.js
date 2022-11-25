'use strict';
/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/



// Код возьмите из предыдущего домашнего задания
// variabels declaration area
let  numberOfFilms;


// function declaration area 
function start() {
    numberOfFilms = +prompt("How many films did you watch?", '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("How many films did you watch?", '');
    }
}
//function calling area 
start();

function showMyDB(hiden) {
    if (!hiden) {
        console.log(personalMoveDB);
    }
}

function writeYourGenres() {
    for ( let i = 1; i <= 3; i++) {
            personalMoveDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`, '');
    }
}

function rememberMyFilms() {
    for(let i = 0; i < 2; i++) {
        const a = prompt("Your last watched film is ?", ''),
            b = prompt("was it interesting?", '10');
            if (a != null && b != null && a != '' && b != '' && a.length < 50) {
                personalMoveDB.movies[a] = b;
            } else {
                i--;
            }    
    }
}

function detectPersonalLvl() {
    if(personalMoveDB.count < 10) {
        console.log('Просмотрено мало фильмов');
    } else if (personalMoveDB.count >=10 && personalMoveDB.count < 30) {
        console.log('Вы класический зритель');
    } else if ( personalMoveDB.count >= 30) {
        console.log('вы киноман');
    } else {
        console.log ('Произошла ошибка');
    }
}

// main Data Base
let personalMoveDB = {
    count: numberOfFilms,
    movies : {},
    actors : {},
    genres : [],
    privat : false,

};

// script body 
    


//function calling area 
rememberMyFilms();
writeYourGenres();
showMyDB(personalMoveDB.privat);
detectPersonalLvl();

  
