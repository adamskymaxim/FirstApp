'use strict';

const numberOfFilms = +prompt('скільки фільмів ти вже подивився?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const oneOfLastFilmWathed = prompt('Один з послідніх просмотрених фільмів?', '');
const rating = prompt('На скільки оціниш його?', '');
const oneOfLastFilmWathed1 = prompt('Один з послідніх просмотрених фільмів?', '');
const rating1 = prompt('На скільки оціниш його?', '');

personalMovieDB.movies[oneOfLastFilmWathed] = rating;
personalMovieDB.movies[oneOfLastFilmWathed1] = rating1;

console.log(personalMovieDB);

