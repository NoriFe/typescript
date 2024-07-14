const person = {
  name: "john",
  age: 30,
  nationality: "french"
}

// object types

function printName(person: {first: string, last: string}) {}


printName({ first: "bob", last: "black"})
