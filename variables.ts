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

  //never

  function throwError(msg: string): never {
    throw new Error(msg);
  }  // This function never returns a value

  function gameLoop(): never {
    while (true) {
      console.log("Game is running...");
    }
  }  // This function never returns a value



  // **********************************************
// ******************* PART 1 *******************
// **********************************************
// Write a function called "twoFer" that accepts a person's name
// It should return a string in the format "one for <name>, one for me"
// If no name is provided, it should default to "you"

// twoFer() => "One for you, one for me"
// twoFer("Elton") => "One for Elton, one for me"

function twoFer(person: string = "you") : string {
  return `One for ${person}, one for me.`
}

// **********************************************
// ******************* PART 2 *******************
// **********************************************
// Write a isLeapyear() function that accepts a year and returns true/false depending on if the year is a leap year
// isLeapYear(2012) => true
// isLeapYear(2013) => false

// To determine whether a year is a leapyear, use this "formula":
// A YEAR IS A LEAPYEAR IF
// - year is a multiple of 4 AND not a multiple of 100
// OR...
// - year is a multiple of 400
// hint - use modulo

const isLeapYear = (year: number): boolean => {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
};
