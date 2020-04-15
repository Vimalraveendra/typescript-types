//boolean

let isCool: boolean = true;

// number

let age: number = 43;

// string
// this works with ES6 template string as well
let eyeColor: string = "brown";
let favouriteQuote: string = `I 'm not old . I 'm only ${age}`;

//Arrays
// there are two ways we can define the arrays
let pets: string[] = ["cats", "dogs", "rabbits"];
let cars: Array<string> = ["benz", "bmw", "ford"];

// objects
// here you noticed that it's lowercase object type because
// uppercase Object  you can use in javascript.
let wizard: object = {
  a: "john"
};

// null and undefined

let meh: undefined = undefined;
let noo: null = null;

// Tuple
// with tuple you can have different types inside of it
let basket: [string, number];
basket = ["basketball", 5];

//enum
enum Size {
  small = 1,
  medium = 2,
  large = 3
}
let sizeName: string = Size[2];
let sizeName1: number = Size.small;

//Any  -!!!!!!!!!!  Be Careful
// whatever can be whatever we want
//Any type as the name suggest can be any type that we want.
//Any type neglects  all the benefits that typescript would give you
// because  whatever will never throw out an error it can be whatever
// we want.
let whatever: any = "aghhhhhhhh nooooooo";
whatever = basket;
whatever = 10;

//void
//function that return nothing is a void

let sing = (): void => {
  console.log("lalalalalaallallallalal");
};

//never
//Never types actually test two things
//one is that function that never returns
// and other one  is that variable  under some sort fo type is
// never true means a not a reachable end point.always throw an error
//The never type is used for functions which never return a value.
//This means, a function which only throws an error, returns never a value.
//Even not void.
let error = (): never => {
  throw Error("Oooops");
};

// interface
// interface can be used really really well with objects
// we created a interface RobotArmy thats says that from now
//on  this RobotArmy can act as a type that has these parmaters
interface RobotArmy {
  count: number;
  name: string;
  magic: string;
}

let fightRobotArmy = (robots: RobotArmy) => {
  // this interface RobotArmy is going to make sure that the
  // robots parmater that i'm recieving is going to have  count
  // that has type of number , name of type strin & magic of type string.
  // otherwise  its kind of throw an error. this might be useful for react & props
  console.log("fight");
};

let fightRobotArmy1 = (robots: {
  count: number;
  name: string;
  magic: string;
}) => {
  console.log("fight1");
};

// type
// type can be used really really well with objects
// we created a type FavouritePets thats says that from now
//on  this FavouritePet can act as a type that has these parmaters
type FavouritePet = {
  id: number;
  name: string;
};

let mostFavouritePets = (pets: FavouritePet) => {
  console.log("petssss");
};
