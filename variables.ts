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


