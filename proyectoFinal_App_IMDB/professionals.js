class Professional {
    constructor(name, age, weight, height, isRetired,
        nationality, oscarsNumber, profession, photo) {
        this.name = name;
        this.age = age;
        this.weight = weight;
        this.height = height;
        this.isRetired = isRetired;
        this.nationality = nationality;
        this.oscarsNumber = oscarsNumber;
        this.profession = profession;
        this.photo = photo;

    }
}

let arrProfessionals = [
    new Professional('Harrison Ford', 81, 80, 185, 'false', 'USA', 0, 'Actor', 'ford.png'),
    new Professional('Steven Spielberg', 76, 70, 172, 'false', 'USA', 3, 'Director', 'spielberg.png'),
    new Professional('George Lucas', 79, 68, 168, 'false', 'USA', 0, 'Writer', 'lucas.png'),
    new Professional('Kathleen Kennedy', 70, 65, 161, 'false', 'USA', 25, 'Writer', 'kennedy.png'),
    new Professional('Drew Barrymore', 48, 50, 163, 'false', 'USA', 0, 'Actor', 'barrymore.png'),
    new Professional('Robert Downey Jr.', 58, 72, 174, 'false', 'USA', 2, 'Actor', 'downey.png'),
    new Professional('Jon Favreau', 57, 85, 185, 'false', 'USA', 0, 'Director', 'favreau.png'),
    new Professional('Mark Fergus', 51, 65, 172, 'false', 'USA', 0, 'Writer', 'fergus.png'),
    new Professional('Avi Arad', 75, 73, 175, 'false', 'Israel', 0, 'Producer', 'arad.png'),
    new Professional('Johnny Depp', 60, 76, 178, 'false', 'USA', 3, 'Actor', 'depp.png'),
    new Professional('Gore Verbinski', 59, 85, 185, 'false', 'USA', 1, 'Director', 'verbinski.png'),
    new Professional('Stuart Beattie', 51, 70, 173, 'false', 'Australia', 0, 'Writer', 'beattie.png'),
    new Professional('Jerry Bruckheimer', 80, 73, 173, 'false', 'USA', 0, 'Producer', 'bruckheimer.png'),
    new Professional('Chris Pratt', 44, 80, 188, 'false', 'USA', 0, 'Actor', 'pratt.png'),
    new Professional('James Gunn', 57, 78, 182, 'false', 'USA', 0, 'Director', 'gunn.png'),
    new Professional('Nicole Perlman', 41, 62, 162, 'false', 'USA', 0, 'Writer', 'perlman.png'),
    new Professional('Chris Pine', 43, 80, 184, 'false', 'USA', 0, 'Actor', 'pine.png'),
    new Professional('John Francis Daley', 38, 76, 183, 'false', 'USA', 0, 'Director', 'daley.png'),
    new Professional('Jonathan Goldstein', 58, 75, 183, 'false', 'USA', 0, 'Writer', 'goldstein.png'),
    new Professional('Jeremy Latcham', 53, 70, 175, 'false', 'USA', 0, 'Producer', 'latcham.png')
]

class imdbApp {
    constructor(professionals) {
        this.professionals = arrProfessionals;
    }

    showProfessionalsResults() {
        let searchInput = $('#searchInput').val().toLowerCase();
        // let searchInput = document.getElementById('searchInput').value.toLowerCase();
        let resultSection = $('#result')
        // let resultSection = document.getElementById('result')
        resultSection.html('');
        // resultSection.innerHTML = '';
        for (let professional of this.professionals) {
            if (professional.name.toLowerCase().includes(searchInput))
                resultSection.html(resultSection.html() + `<p>Name: ${professional.name}, Age: ${professional.age}, Profession: ${professional.profession}</p>`);
            // resultSection.innerHTML += `<p>Title: ${movie.title}, Relase year: ${movie.releaseYear}, Actors: ${movie.actors}</p>`;
        }
    }


}

$(document).ready(function () {
    let app = new imdbApp();
    $('#search').on('click', function () {
        app.showProfessionalsResults();
    });
})