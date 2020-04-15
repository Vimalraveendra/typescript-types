//boolean
var isCool = true;
// number
var age = 43;
// string
// this works with ES6 template string as well
var eyeColor = "brown";
var favouriteQuote = "I 'm not old . I 'm only " + age;
//Arrays
// there are two ways we can define the arrays
var pets = ["cats", "dogs", "rabbits"];
var cars = ["benz", "bmw", "ford"];
// objects
// here you noticed that it's lowercase object type because
// uppercase Object  you can use in javascript.
var wizard = {
    a: "john"
};
// null and undefined
var meh = undefined;
var noo = null;
// Tuple
// with tuple you can have different types inside of it
var basket;
basket = ["basketball", 5];
//enum
var Size;
(function (Size) {
    Size[Size["small"] = 1] = "small";
    Size[Size["medium"] = 2] = "medium";
    Size[Size["large"] = 3] = "large";
})(Size || (Size = {}));
var sizeName = Size[2];
var sizeName1 = Size.small;
//Any  -!!!!!!!!!!  Be Careful
// whatever can be whatever we want
//Any type as the name suggest can be any type that we want.
//Any type neglects  all the benefits that typescript would give you
// because  whatever will never throw out an error it can be whatever
// we want.
var whatever = "aghhhhhhhh nooooooo";
whatever = basket;
whatever = 10;
//void
//function that return nothing is a void
var sing = function () {
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
var error = function () {
    throw Error("Oooops");
};
var fightRobotArmy = function (robots) {
    // this interface RobotArmy is going to make sure that the
    // robots parmater that i'm recieving is going to have  count
    // that has type of number , name of type strin & magic of type string.
    // otherwise  its kind of throw an error. this might be useful for react & props
    console.log("fight");
};
var fightRobotArmy1 = function (robots) {
    console.log("fight1");
};
var mostFavouritePets = function (pets) {
    console.log("petssss");
};
