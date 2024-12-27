//  union in typescript, helps in avoid any
// used when you are not sure which data type is going to be there
var score = 33;
score = 44;
score = "23";
var binayak = {
    name: "binyak",
    email: "fnzfksd"
};
binayak = { name: "admin", email: "sahi" };
/* function getDbID(id: number | string){
    // other db , api op's here
    console.log(`Db is is : ${id}`);
} */
getDbID(5);
getDbID("9");
function getDbID(id) {
    // id.toLowerCase() //cant do it, cause not sure what is id data type
    if (typeof (id) === "string") {
        id.toLowerCase();
    }
    else if (typeof (id) === "number") {
        return id;
    }
    // other db , api op's here
    console.log("Db is is : ".concat(id));
}
// array
var data = [1, 2, 3, 43, 5, 43, 54, 6];
var dataSTR = ["asfd", "fas", "as", "das"];
// union data type of array
// const dataSTRNUM:string[] | number[] = ["asfd","fas","as","das",23,2,43,54,435]
// dataSTRNUM array can have only all the number or only the strings in the array not the mix of  number and string
var dataSTRNUuM = ["asfd", "fas", "as", "das", 23, 2, 43, 54, 435];
// Now,dataSTRNUuM can have both mix match of string and number in the array
// literal type of assignment
var seatAllotment;
// seatAllotment = "skfjkej" //not allowed should be of only the above 3 type
