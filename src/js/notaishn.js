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


/* const num = 40;

if (num <= 9) {
    console.log('corect');
} else if (num === 40) {
    console.log('неправильно');
} else {
    console.log('хуй на тебе');
}

(num == 10) ? console.log('неправильно лошара') : console.log('молодець!'); */

const num = 10;

switch (num) {
    case 11:
        console.log('неправильно');
        break;
    case 100:
        console.log('аш ніяк');
        break;
    case 45:
        console.log('молодець!');
        break;
    default:
        console.log('значить не судьба');
        break;
}


/////////



/* const hamburger = true;
const fries = false;

if (hamburger && fries) {
    console.log('я ситий');
} else {
    console.log('я так нормально й непоїв!');
} */

/* console.log(1 && 2 && 3);
console.log( !1 && 2 || !3 );
console.log( 25 || null && !3 );
console.log( NaN || null || !3 || undefined || 5);
console.log( NaN || null && !3 && undefined || 5);
console.log( 5 === 5 && 3 > 1 || 5);


const hamburger = 3;
const fries = 3;
const cola = 0;
const nuggets = 2;
 
if (hamburger === 3 && cola || fries === 3 && nuggets) {
   console.log('Done!');
}
 */



/* let hamburger;
const fries = NaN;
const cola = 0;
const nuggets = 2;
 
if (hamburger || cola || fries === 3 || nuggets) {
   console.log('Done!');
} */



/* let hamburger;
const fries = NaN;
const cola = 0;
const nuggets = 2;
 
if (hamburger && cola || fries === 3 && nuggets) {
   console.log('Done!')
} */




///////////





/* let num = 50; */

/* while (num <= 55) {
    console.log(num);
    num++;
} */

/* do {
    console.log(num);
    num++;
}
while (num <= 55); */

/* for (let i = 1; i <= 40; i++) {
    if (i === 10) {
        break;
    }

    console.log(num);
    num++;
} */




//////////


/* for (let i = 5; i < 11; i++) {
    console.log(i);
} */

////////

/* for (let i = 20; i > 9; i--) {
    if (i === 13) {
        break;
    }
    console.log(i);
} */

/////////

/* for (let i = 2; i <= 10; i++) {
    if (i % 2 == 0) {
        console.log(i);
    }
} */

///////////

/* for (let i = 2; i <= 16; i++) {
    if (i % 2 === 0) {
        continue;
    } else {
        console.log(i);
    }
} */

/////////

/* let i = 2;
while (i < 16) {
    i++;
    if (i % 2 === 0) {
        continue;
    } else {
        console.log(i);
    }
} */

/////////

/* const arrayOfNumbers = [];
arrayOfNumbers[0] = 5;
arrayOfNumbers[1] = 6;
arrayOfNumbers[2] = 7;
arrayOfNumbers[3] = 8;
arrayOfNumbers[4] = 9;
arrayOfNumbers[5] = 10;
console.log(arrayOfNumbers); */



//////////


/* Заполните новый массив (result) числами из старого (arr).
     Количество элементов в массиве можно получить как arr.length, а к элементам обращаемся все так же:
      arr[0], arr[1] и тд. */



/////////

/* const arr = [3, 5, 8, 16, 20, 23, 50];
const result = [];

result[0] = 3;
result[1] = 5;
result[2] = 8;
result[3] = 16;
result[4] = 20;
result[5] = 23;
result[6] = 50;

console.log(result); */



//////////


/* const data = [5, 10, 'Shopping', 20, 'Homework'];

data[0] *= 2;
data[1] *= 2;
data[2] += ' - done';
data[3] *= 2;
data[4] += ' - done';

console.log(data); */


/////////



/* const data = [5, 10, 'Shopping', 20, 'Homework'];

for (let i = 0; i < data.length; i++) {
    if (typeof(data[i]) === 'number') {
        data[i] *= 2;
    } else if (typeof(data[i]) === 'string') {
        data[i] += ' - done';
    }
} */

/////////

/* 
const data = [5, 10, 'Shopping', 20, 'Homework'];
const result = [];

for (let i = 1; i <= data.length; i++) {
    result[i - 1] = data[data.length - i];
}

console.log(result); */


////////



/* const lines = 5;
let result = '';

for (let i = 0; i <= lines; i++) {
    for (let j = 0; j < lines - i; j++) {
        result += " ";
    }
    for (let j = 0; j < 2 * i + 1; j++) {
        result += "*";
    }
    result += "\n";
}

console.log(result);
 */




////////




let num = 20;

function showFirstMessage(text) {
    console.log(text);
}

showFirstMessage('hellow world');


function calc(a, b) {
    return (a + b);
}

console.log(calc(4, 10));
console.log(calc(27, 10));
console.log(calc(4, 40));



function ret() {
    let num = 50;
    return num;
}

const anotherNum = ret();
console.log(anotherNum); //якщо без return то виведе undefind

const usdCurr = 28,
      eurCurr = 32,
      discount = 0.9;

function convert(amount, curr) {
    return curr * amount;
}

function promotion(result) {
    console.log(result * discount);
}

const res = convert(500, usdCurr);
promotion(res);

function sayHello(name) {
    console.log('привіт' + name);
}

sayHello(' антон');


function returnNeighboringNumbers(num) {
    num--;
    console.log([num++, num++, num]);
}

returnNeighboringNumbers(5);

function getMathResult(base, progres) {
    if (typeof(progres) !== 'number' || progres <=0) {
        return base;
    }

    let str = '';

    for (let i = 1; i <= progres; i++) {
        if (i === progres) {
            str += `${base * i}`;
        } else {
            str += `${base * i}---`;
        }
    }
    return str;
}

console.log(getMathResult(5, 4));

function sayHello(name) {
    console.log('привіт' + name);
}
sayHello(' антон');


function sayHello(name) {
    return `Привет, ${name}!`;
}

console.log(sayHello('Alex'));



function getMathResult(base, progres) {
    if (typeof(progres) !== 'number' || progres <=0) {
        return base;
    }

    let str = '';

    for (let i = 1; i <= progres; i++) {
        if (i === progres) {
            str += `${base * i}`;
        } else {
            str += `${base * i}---`;
        }
    }
    return str;
}

console.log(getMathResult(5, 4));
