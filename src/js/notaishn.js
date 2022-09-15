///////


const obj = {
    name: 'maxim',
    age: 15,
    growth: '172cm',
    eyesColor: 'blue'
};

console.log(obj);
console.log(obj.name);

////////

const arr = [1, 2, 3, 4];
const arrObj = {
    0: 1,
    1: 2,
    2: 3,
    3: 4
};

console.log(arr[2]);
console.log(arrObj[0]);

arrObj.b = '123';

console.log(arrObj.b);

const obje = {
    alice: 500,
    mike: 1000
};

//////////

/* const result = confirm('are you ok?');
console.log(result); */

/* const answer = +prompt('were are you going?');
console.log(answer + 5); */

const arrs = [];

/* arrs[0] = prompt('як тебе звати?', '');
arrs[1] = prompt('яка твоя фамілія?', '');
arrs[2] = prompt('скільки тобі років', ''); */

console.log(typeof(arrs));

//////////


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


///////////