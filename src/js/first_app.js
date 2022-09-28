let numberOfFilms;

function start() {
    numberOfFilms = +prompt('скільки фільмів ти вже подивився?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('скільки фільмів ти вже подивився?', '');
    }
}



const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};



function rememberMyFilms() {
    for (let i = 0; i < 1; i++) {
        const oneOfLastFilmWathed = prompt('Один з послідніх просмотрених фільмів?', '');
        const rating = prompt('На скільки оціниш його?', '');
        
        if (oneOfLastFilmWathed != null && rating != null &&
                oneOfLastFilmWathed != '' && rating != '' && oneOfLastFilmWathed.length <= 50 && rating.length <= 50) {
            personalMovieDB.movies[oneOfLastFilmWathed] = rating;
        } else {
            i--;
        }
    }
}



function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log('просмотрено доволі мало фільмів');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
        console.log('ви класичний глядач');
    } else {
        console.log('ви кіноман');
    }
}



function showMyDB() {
    if (personalMovieDB.privat === false) {
        console.log(personalMovieDB);
    }
}



function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        const yourFavorietGenres = prompt(`Ваш любимий жанр під номером ${i}`);
        personalMovieDB.genres.push(yourFavorietGenres);
    }
}

start();

rememberMyFilms();

detectPersonalLevel();

writeYourGenres();

showMyDB();
