const mymovies = [
    {
        title: 'The Shawshank Redemption',
        year: 1994,
        director: 'Frank Darabont',
        duration: '2h 22min',
        genre: ['Crime', 'Drama'],
        score: 9
    },
    {
        title: 'The Godfather',
        year: 1972,
        director: 'Francis Ford Coppola',
        duration: '2h 55min',
        genre: ['Crime', 'Drama'],
        score: 8
    },
    {
        title: 'The Godfather: Part II',
        year: 1974,
        director: 'Francis Ford Coppola',
        duration: '3h 22min',
        genre: ['Crime'],
        score: 9.2
    }
];


// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    let directors;
    directors = moviesArray.map(
        function (movie) {
            return movie.director;
        }
    )
    return directors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    let stevenMovies;

    stevenMovies = moviesArray.filter(
        function (movie) {
            // condicion 1: director tiene que ser Steven Spielberg
            if (movie.director === 'Steven Spielberg') {
                //cond 2: el genre tiene que contener el tipo Drama 
                // ['Biography', 'Drama', 'History'].indexOf('Drama') = 
                if (movie.genre.indexOf('Drama') !== -1) {
                    return movie;
                }
            }
        }
    )
    return stevenMovies.length;
}



// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {

    if (moviesArray.length === 0) return 0;

    let sumatoria = moviesArray.reduce(function (previousMovie, currentMovie) {
        return {
            score: previousMovie.score + currentMovie.score
        };
    });

    let promedio = sumatoria.score / moviesArray.length;

    return Math.round(promedio * 100) / 100;
}


// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    let dramaMovies;

    dramaMovies = moviesArray.filter(
        function (movie) {
            //cond: el genre tiene que contener el tipo Drama 
            if (movie.genre.indexOf('Drama') !== -1) {
                return movie;
            }
        }
    );

    if(dramaMovies.length === 0) return 0;

    let sumatoria = dramaMovies.reduce(function (previousMovie, currentMovie) {
        return {
            score: previousMovie.score + currentMovie.score
        };
    });

    let promedio = sumatoria.score / dramaMovies.length;

    return Math.round(promedio * 100) / 100;
}


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    let orderedMovies = moviesArray.slice().sort(
        function (previousMovie, currentMovie) {
            return previousMovie.year - currentMovie.year;
        });
    return orderedMovies;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {

    // Devuelve las peliculas ordenadas alfabeticamente por title
    let orderedMovies = moviesArray.sort(
        function (a, b) {
            if (a.title > b.title) return 1; //  1 here (instead of -1 for ASC)
            if (a.title < b.title) return -1; // -1 here (instead of  1 for ASC)
            if (a.title === b.title) return 0;
        });

    //Devuelve un nuevo array con los primeros 20 titles de las peliculas
    let movieTitles = orderedMovies.slice(0, 20).map(function (movie) {
        return movie.title;
    })
    return movieTitles;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) { }

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) { }
