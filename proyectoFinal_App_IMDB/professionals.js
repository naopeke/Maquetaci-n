class Professional{
    constructor(name, age, weight,height, isRetired, 
    nationality, oscarsNumber, profession, photo){
        this.name = name;
        this.weight = weight;
        this.height = height;
        this.isRetired = isRetired;
        this.nationality = nationality;
        this.oscarsNumber = oscarsNumber;
        this.profession = profession;
        this.photo = photo;

    }

    showProfessionals () {
        console.log(`Name: ${this.name}`);
        console.log(`Age: ${this.age}`);
        console.log(`Weight: ${this.weight}`);
        console.log(`Height: ${this.height}`);
        console.log(`is retired: ${this.isRetired}`);
        console.log(`Nationality: ${this.nationality}`);
        console.log(`Oscars number: ${this.oscarsNumber}`);
        console.log(`Profession: ${this.profession}`);
        console.log(`Photo: ${this.photo}`);

        let person1 = new Professional ('Harrison Ford', 81, 80, 185, false, 'USA', 0, 'Actor', 'ford.png');
person1.showValue();
let person2 = new Professional ('Steven Spielberg', 76, 70, 172, false, USA, 3, 'Director', 'spielberg.png');
person2.showValue();
let person3 = new Professional ('George Lucas', 79, 68, 168, false, USA, 0, 'Writer', 'lucas.png');
person3.showValue();
let person4 = new Professional ('Kathleen Kennedy', 70, 65, 161, false, USA, 25, 'Writer', 'kennedy.png');
person4.showValue();
let person5 = new Professional ('Drew Barrymore', 48, 50, 163, 'false', 'USA', 0, 'Actor', 'barrymore.png');
person5.showValue();
let person6 = new Professional ('Robert Downey Jr.', 58, 72, 174, 'false', 'USA', 2, 'Actor', 'downey.png');
person6.showValue();
let person7 = new Professional ('Jon Favreau', 57, 85, 185, false, USA, 0, 'Director', 'favreau.png');
person7.showValue();
let person8 = new Professional ('Mark Fergus', 51, 65, 172, 'false', 'USA', 0, 'Writer', 'fergus.png');
person8.showValue();
let person9 = new Professional ('Avi Arad',75, 73, 175, 'false', 'Israel',0, 'Producer', 'arad.png');
person9.showValue();
let person10 = new Professional ('Johnny Depp', 60, 76, 178, 'false', 'USA', 3, 'Actor', 'depp.png');
person10.showValue();
let person11 = new Professional ('Gore Verbinski', 59, 85, 185, 'false', 'USA', 1,'Director', 'verbinski.png');
person11.showValue();
let person12 = new Professional ('Stuart Beattie', 51, 70, 173, 'false', 'Australia', 0, 'Writer', 'beattie.png');
person12.showValue();
let person13 = new Professional ('Jerry Bruckheimer', 80, 73, 173, 'false', 'USA', 0, 'Producer', 'bruckheimer.png')
person13.showValue();
let person14 = new Professional ('Chris Pratt', 44, 80, 188, 'false', 'USA', 0, 'Actor', 'pratt.png')
person14.showValue();
let person15 = new Professional ('James Gunn', 57, 78, 182, 'false', 'USA', 0, 'Director', 'gunn.png')
person15.showValue();
let person16 = new Professional ('Nicole Perlman', 41, 62, 162, 'false', 'USA', 0, 'Writer', 'perlman.png')
person16.showValue();
let person17 = new Professional ('Chris Pine', 43, 80, 184, 'false', 'USA', 0, 'Actor', 'pine.png')
person17.showValue();
let person18 = new Professional ('John Francis Daley', 38, 76, 183, 'false', 'USA', 0, 'Director', 'daley.png')
person18.showValue();
let person19 = new Professional ('Jonathan Goldstein', 58, 75, 183, 'false', 'USA', 0, 'Writer', 'goldstein.png')
person19.showValue();
let person20 = new Professional ('Jeremy Latcham', 53, 70, 175, 'false', 'USA',0, 'Producer', 'latcham.png')
person20.showValue();


let arrProfessional = [person1, person2, person3, person4, person5, person6,
person7, person8, person9, person10, person11, person12, person13, person14,
person15, person16, person17, person18, person19, person20];


}


}