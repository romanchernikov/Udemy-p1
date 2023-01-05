const numberOfFilms = prompt("Сколько фильмов вы уже просмотрели?", "");
let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt("Один из последних просмотренных фильмов?"),
    b = prompt('Оцените фильм', ''),
    c = prompt("Один из последних просмотренных фильмов?"),
    d = prompt('Оцените фильм', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);