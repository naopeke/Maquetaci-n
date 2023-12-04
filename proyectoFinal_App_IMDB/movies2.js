// let arrMovie = [];

class Movie {
    constructor(title, releaseYear, actors, nationality,
        director, writer, language, platform, isMCU,
        mainCharacterName, producer, distributor, genre, photo) {
        this.title = title;
        this.releaseYear = releaseYear;
        this.actors = actors;
        this.nationality = nationality;
        this.director = director;
        this.writer = writer;
        this.language = language;
        this.platform = platform;
        this.isMCU = isMCU;
        this.mainCharacterName = mainCharacterName;
        this.producer = producer;
        this.distributor = distributor;
        this.genre = genre;
        this.photo = photo;
    }
}


// let movie1 = new Movie('Indiana Jones and the Last Crusade', 1989,
//     ['Harrison Ford', 'Sean Connery'], 'USA', 'Steven Spielberg', 'George Lucas', 'English',
//     'Prime Video', 'false', 'Indiana Jones', 'Robert Watts', 'Paramount Pictures',
//     'Adventure', 'indiana.png');


// let movie2 = new Movie('E.T. the Extra-Terrestrial', 1982,
//     ['E.T.', 'Drew Barrymore'], 'USA', 'Steven Spielberg', 'Melissa Mathison', 'English',
//     'Prime Video', 'false', 'E.T.', 'Kathleen Kennedy', 'Universal Pictures',
//     'Family', 'et.png');

// let movie3 = new Movie('Iron Man', 2008, ['Robert Downey Jr.', 'Gwyneth Paltrow'], 'USA',
//     'Jon Favreau', 'Mark Fergus', 'English', 'Prime Video', 'true',
//     'Tony Stark', 'Avi Arad', 'Paramount Pictures', 'Action', 'iron.png');

// let movie4 = new Movie('Pirates of the Caribbean: The Curse of the Black Pearl',
//     2003, ['Johnny Depp', 'Keira Knightley'], 'USA', 'Gore Verbinski', 'Stuart Beattie', 'English',
//     'Prime Video', 'false', 'Jack Sparrow', 'Jerry Bruckheimer', 'Walt Disney Pictures',
//     'Adventure', 'pirate.png');

// let movie5 = new Movie('Guardians of the Galaxy', 2014, ['Chris Pratt', 'Zoe Saldana'], 'USA',
//     'James Gunn', 'Nicole Perlman', 'English', 'Disney+', 'true', 'Peter Quill', 'Avi Arad',
//     'Walt Disney Studios Motion Pictures', 'Comedy', 'galaxy.png');

// let movie6 = new Movie('Dungeons & Dragons: Honor Among Thieves', 2023, ['Chris Pine', 'Michelle Rodriguez'], 'USA',
//     'John Francis Daley', 'Jonathan Goldstein', 'English', 'Prime Video', 'false', 'Edgin',
//     'Jeremy Latcham', 'Paramount Pictures', 'Adventure', 'dd.png');


// arrMovie.push(movie1);
// arrMovie.push(movie2);
// arrMovie.push(movie3);
// arrMovie.push(movie4);
// arrMovie.push(movie5);
// arrMovie.push(movie6);


// function showMoviesResults() {
//     const searchInput = document.getElementById('searchInput').value.toLowerCase();
//     const resultSection = document.getElementById('result');
//     resultSection.innerHTML = '';

//     for (const movie of arrMovie) {
//         if (movie.title.toLowerCase().includes(searchInput)) {
//             resultSection.innerHTML += `Title: ${movie.title}, Release year: ${movie.releaseYear}, Actors: ${movie.actors.join(', ')}<br>`;
//         }
//     }
// }

// function addNewCards(movie) {
//     let cardsContainer = document.querySelector('.new-cards-pair');
//     let newCard = document.createElement('div');
//     newCard.classList.add('newcard');
//     newCard.innerHTML = `
//         <div class="layout">
//             <img class="image" src="${movie.photo}" alt="${movie.title}">
//             <p class="title">${movie.title}</p>
//             <p class="actor">${movie.actors.join(', ')}</p>
//             <p class="year">${movie.releaseYear}</p>
//         </div>`
//         ;
//     cardsContainer.appendChild(newCard);
// }


// // submit ---> search

// // submit
// $('#submit').click(function (event) {
//     let newMovie = new Movie(
//         $('#photo').value,
//         $('#title').value,
//         $('#actor').value,
//         $('#year').value,
//     );
//     addNewCards(newMovie);
//     $('form')[0].reset();
// })
// // document.getElementById('submit').addEventListener('click', (event) => {
// //     event.preventDefault();
// //     const form = document.getElementById('movieForm');
// //     const newMovie = new Movie(
// //         form.querySelector('#photo').value,
// //         form.querySelector('#title').value,
// //         form.querySelector('#actor').value,
// //         form.querySelector('#year').value,
// //     );
// //     addNewCards(newMovie);
// //     form.reset();
// // });


// //search
// $('#search').click(function () {
//     showMoviesResults();
// })
// // document.getElementById('search').addEventListener('click', () => {
// //     showMoviesResults();
// // });

// --------------------------------------------------------------------------------------------



let arrMovie = [
    new Movie('Indiana Jones and the Last Crusade', 1989,
        ['Harrison Ford', 'Sean Connery'], 'USA', 'Steven Spielberg', 'George Lucas', 'English',
        'Prime Video', 'false', 'Indiana Jones', 'Robert Watts', 'Paramount Pictures',
        'Adventure', 'indiana.png'),

    new Movie('E.T. the Extra-Terrestrial', 1982,
        ['E.T.', 'Drew Barrymore'], 'USA', 'Steven Spielberg', 'Melissa Mathison', 'English',
        'Prime Video', 'false', 'E.T.', 'Kathleen Kennedy', 'Universal Pictures',
        'Family', 'et.png'),

    new Movie('Iron Man', 2008, ['Robert Downey Jr.', 'Gwyneth Paltrow'], 'USA',
        'Jon Favreau', 'Mark Fergus', 'English', 'Prime Video', 'true',
        'Tony Stark', 'Avi Arad', 'Paramount Pictures', 'Action', 'iron.png'),

    new Movie('Pirates of the Caribbean: The Curse of the Black Pearl',
        2003, ['Johnny Depp', 'Keira Knightley'], 'USA', 'Gore Verbinski', 'Stuart Beattie', 'English',
        'Prime Video', 'false', 'Jack Sparrow', 'Jerry Bruckheimer', 'Walt Disney Pictures',
        'Adventure', 'pirate.png'),

    new Movie('Guardians of the Galaxy', 2014, ['Chris Pratt', 'Zoe Saldana'], 'USA',
        'James Gunn', 'Nicole Perlman', 'English', 'Disney+', 'true', 'Peter Quill', 'Avi Arad',
        'Walt Disney Studios Motion Pictures', 'Comedy', 'galaxy.png'),

    new Movie('Dungeons & Dragons: Honor Among Thieves', 2023, ['Chris Pine', 'Michelle Rodriguez'], 'USA',
        'John Francis Daley', 'Jonathan Goldstein', 'English', 'Prime Video', 'false', 'Edgin',
        'Jeremy Latcham', 'Paramount Pictures', 'Adventure', 'dd.png')];


class imdbApp {
    constructor() {
        this.movies = movies;
    }

    showMoviesResults() {
        let searchInput = $('#searchInput').value.toLowerCase();
        // let searchInput = document.getElementById('searchInput').value.toLowerCase();
        let resultSection = $('#result')
        // let resultSection = document.getElementById('result')
        resultSection.innerHTML = '';
        for (let movie of this.movies) {
            if (movie.title.toLowerCase().includes(searchInput))
                resultSection.innerHTML += `<p>Title: ${movie.title}, Relase year: ${movie.releaseYear}, Actors: ${movie.actors}</p>`;
        }
    }

    addNewCards(movie) {
        let newMovie = new Movie(
            $('#photo').value,
            // document.getElementById('photo').value
            $('#title').value,
            // document.getElementById('title').value,
            $('#actors').value.split(', '),
            // document.getElementById('actors').value.split(', '),
            $('#releaseYear').value,
            // document.getElementById('releaseYear').value,
        );

        this.movies.push(newMovie)

        let cardsContainer = document.querySelector('.new-cards-pair');
        let newCard = document.createElement('div');
        newCard.classList.add('newcard')
        newCard.innerHTML =
            `<div class="layout">
                                <img class="image" src="${movie.photo}" alt="${movie.title}">
                                <p class="title">${movie.title}</p>
                                <p class="actor">${movie.actors.join(', ')}</p>
                                <p class="year">${movie.releaseYear}</p>
                            </div>
                        </div>`;
        cardsContainer.appendChild(newCard)
    }
};


// this.movies.forEach(movie => {
//     console.log(`Title: ${this.title}`);
//     console.log(`Relase year: ${this.releaseYear}`);
//     console.log(`Actors: ${this.actors}`);
//     console.log(`Nationality: ${this.nationality}`);
//     console.log(`Director: ${this.director}`);
//     console.log(`Writer: ${this.writer}`);
//     console.log(`Language: ${this.language}`);
//     console.log(`Platform: ${this.platform}`);
//     console.log(`is MCU: ${this.isMCU}`);
//     console.log(`Main character name: ${this.mainCharacterName}`);
//     console.log(`Producer: ${this.producer}`);
//     console.log(`Distributor: ${this.distributor}`);
//     console.log(`Genre: ${this.genre}`);
//     console.log(`Photo: ${this.photo}`);
// })



// // search
// let app = new imdbApp();
// let searchButton = document.getElementById('search');
// searchButton.addEventListener('click', () => {
//     app.showMoviesResults(); 
// });


// // new card
// let submit_btn = document.getElementById('submit');
// submit_btn.addEventListener('click', event => {
//     event.preventDefault();
//     let form = event.target.parentElement;
//     let newMovie = new Movie(
//         form.querySelector('#photo').value,
//         form.querySelector('#title').value,
//         form.querySelector('#actor').value,
//         form.querySelector('#year').value,
//     );

//     app.addMovie(newMovie);
//     app.addNewCards(newMovie);
//     $('.form')[0].reset();

// });



