"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var user = {
    name: "binayak",
    age: 21,
    isActive: true
};
// the function return type is objects
function returnUser() {
    return user;
}
console.log(returnUser());
function addDogDetails(dogbreed) {
    return dogbreed;
}
console.log(addDogDetails({ breed: "Shephard", maxAge: 20, nature: "protective" }));


var myUser = {
    _id: "123243",
    name: "h",
    email: "h@askj.com",
    isActive: false
};
myUser.email = "sadk@afs";
