"use strict";

const numberOfFilms = +prompt("How many films did you watch?", '');
// console.log(numberOfFilms)


let personalMoveDB = {
    count : numberOfFilms,
    movies : {},
    actors : {},
    genres : [],
    privat : false,

};

    const lastWatchedFilm = prompt("Your last watched film is ?", ''),
          filmGrade = +prompt("was it interesting?", '10');

    personalMoveDB.movies[lastWatchedFilm] = filmGrade;

    console.log(personalMoveDB);