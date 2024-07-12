let movieTitle: string = "Inception";
movieTitle = "The Dark Knight";

movieTitle = 10; // Error: Type 'number' is not assignable to type 'string'.

let age: number = 30;

age = "30"; // Error: Type 'string' is not assignable to type 'number'.

age += 1; // 31 Can do increment operation

// type inference

let movieName = "Inception"; // Type is inferred as string
movieName = 10; // Error: Type 'number' is not assignable to type 'string'.

// any type - can be any type
let movie: any = "Inception";
movie = 10; // No Error
movie = true; // No Error
movie = ["Inception", "The Dark Knight"]; // No Error
movie.toUpperCase(); // No Error

//type intonation


const movies = ["Inception", "The Dark Knight", "Interstellar", "Dunkirk", "Tenet"];
let foundMovie: string;
for (let movie of movies) {
    if (movie === "Interstellar") {
        foundMovie = movie;
    }
  }


  //functions


  const something = (person: string, age: number, isFunny: boolean)  => {};

  something("John", 30, true);


  function greet(person: string = "stranger") {
    return "Hello, " + person;
  }

  greet(); // Hello, stranger
  greet("John"); // Hello, John

  function rando(num: number){
    if(Math.random() < 0.5){
      return num.toString();
    }
    return num;
  }

  function add(a: number, b: number): number {
    return a + b;
  }


  const colors = ["red", "green", "blue"];
  colors.map(color => {
    color.toUpperCase();
  })

  //Void

  function printTwice(msg: string): void{
    console.log(msg);
    console.log(msg);
  }
