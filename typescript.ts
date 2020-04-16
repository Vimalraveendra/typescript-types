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
  // that has type of number , name of type string & magic of type string.
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

// main difference between interface and a type
//one difference is that interface create a new name that we can use
// everywhere  such as RobotArmy by exporting & importing it.
// type alias don't create a new name
let mostFavouritePets = (pets: FavouritePet) => {
  console.log("petssss");
};

// type assertions
// type assertions entire script allows  you to override a type  in any
// way you want .

interface CatArmy {
  count: number;
  name: string;
  magic: string;
}
//here I am saying hey dog, i'm telling you that don't worry about it
//this is catArmy regardless of the fact that dog actually doesn't have
// dog dot count. I'm overriding whatever errors you are going to give
//me  & telling you that  trust me  this is a CatArmy.
let dog = {} as CatArmy;
dog.count;

// optional type
// optional type can be just say a question mark and now
// this question mark says this may or may not  happens
// so in here the magic property may or may not happens

interface DogArmy {
  count: number;
  name: string;
  magic?: string;
}

let fightRobotArmy3 = (robots: DogArmy) => {
  console.log("fight3");
};

fightRobotArmy3({ count: 1, name: "hello" });

// functions

let fightRobotArmy4 = (robots: DogArmy): void => {
  // in here the function type is going to be void
  // because we are not returning anyting
  console.log("fight3");
};

let fightRobotArmy5 = (robots: DogArmy): number => {
  // in here the function type is going to be number
  // because we are  returning a number
  console.log("fight3");
  return 10;
};

let fightRobotArmy6 = (robots: DogArmy): string => {
  // in here the function type is going to be string
  // because we are  returning a string
  console.log("fight3");
  return "hello";
};

// class
// cool thing in typescript we can set the property to private or public

class Animal {
  public sing: string = "lalallalallalalla";
  constructor(sound: string) {
    this.sing = sound;
  }
  greet(): string {
    return `Hello ${this.sing}`;
  }
  greetings = (): string => {
    return `Hello welcome sound${this.sing}`;
  };
}

let lion = new Animal("Rawwwrrrr");
lion.greet();
lion.greetings();
lion.sing;

//union
//union type can be used define types using the OR syntax
// it could be string or  could be number or boolean

let confuse: string | number = 10;

// type inference
//type inference are used to provide type  information  where there
//is  no explicit mentioning of type
// typescript is smart enough  to know or infer  & say do you mean
// a number or do you mean a string.

let x = 10;
x = "hello";
