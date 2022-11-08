class Movie {
    constructor(title, studio, rating) {
        this.title = title;
        this.studio = studio;
        this.rating = rating;
        if (rating == null) {
            this.rating = "PG";
        }
        else {
            this.rating = rating;
        }

    }
    getPG(array) {
        let result = array.filter((element) => element.rating == "PG");
        return result;

    }

}
let movie1 = new Movie("naayagan", "Muktha Films", "PG13");
let movie2 = new Movie("Ponniyan selvan","Lyca Productions", "PG1");
let movie3 = new Movie("Vickram", "Raaj Kamal Films");
let movie4 = new Movie("Casino Royale","Eon Productions","PG");

let array = [movie1,movie2,movie3,movie4];

console.log(movie2.getPG(array));
console.log(movie3.getPG(array));
