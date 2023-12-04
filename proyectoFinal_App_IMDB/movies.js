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
    constructor(movies) {
        this.movies = arrMovie;
    }

    showMoviesResults() {
        let searchInput = $('#searchInput').val().toLowerCase();
        // let searchInput = document.getElementById('searchInput').value.toLowerCase();
        let resultSection = $('#result')
        // let resultSection = document.getElementById('result')
        resultSection.html('');
        // resultSection.innerHTML = '';
        for (let movie of this.movies) {
            if (movie.title.toLowerCase().includes(searchInput))
                resultSection.html(resultSection.html() + `<p>Title: ${movie.title}, Relase year: ${movie.releaseYear}, Actors: ${movie.actors}</p>`);
            // resultSection.innerHTML += `<p>Title: ${movie.title}, Relase year: ${movie.releaseYear}, Actors: ${movie.actors}</p>`;

        }
    }

    addNewCards() {
        let newMovie = new Movie(
            $('#title').val(),
            // document.getElementById('title').value,
            $('#releaseYear').val(),
            // document.getElementById('releaseYear').value,
            $('#actors').val().split(', '),
            // document.getElementById('actors').value.split(', '),
            $('#nationality').val(),
            // document.getElementById('nationality').value,
            $('#director').val(),
            // document.getElementById('director').value,
            $('#writer').val(),
            // document.getElementById('writer').value,
            $('#language').val(),
            // document.getElementById('language').value,
            $('#platform').val(),
            // document.getElementById('platform').value,
            $('#isMCU').val(),
            // document.getElementById('isMCU').value,
            $('#mainCharacterName').val(),
            // document.getElementById('mainCharacterName').value,
            $('#producer').val(),
            // document.getElementById('producer').value,
            $('#distributor').val(),
            // document.getElementById('distributor').value,
            $('#genre').val(),
            // document.getElementById('genre').value,
            $('#photo').val()
            // document.getElementById('photo').value.split(', '),
        );

        this.movies.push(newMovie);

        let cardsContainer = document.querySelector('.new-cards-pair');
        let newCard = document.createElement('div');
        newCard.classList.add('newcard');
        newCard.innerHTML =
            `<div class="layout">
                                <img class="image" src="${newMovie.photo}" alt="${newMovie.title}-img">
                                <p class="title">${newMovie.title}</p>
                                <p class="actor">${newMovie.actors.join(', ')}</p>
                                <p class="year">${newMovie.releaseYear}</p>
                            </div>
                        </div>`;
        cardsContainer.appendChild(newCard);
    }
};


$(document).ready(function () {
    let app = new imdbApp();
    $('#search').on('click', function () {
        app.showMoviesResults();
    });

    $('#submit').on('click', function (event) {
        event.preventDefault();
        app.addNewCards();
    })

})

// $(document).ready(function () {
//     /** DOMツリー読み込み後の処理 */
// })

