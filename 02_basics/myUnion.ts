//  union in typescript, helps in avoid any
// used when you are not sure which data type is going to be there
let score: number | string = 33
score = 44
score = "23"


// can use union in custom datat type
type User = {
    name:String
    email:string
}

type Admin = {
    name:String
    email:string
}

let binayak : User | Admin = {
    name:"binyak",
    email:"fnzfksd"
}

binayak = { name:"admin", email:"sahi"}

/* function getDbID(id: number | string){
    // other db , api op's here
    console.log(`Db is is : ${id}`);
} */

getDbID(5);
getDbID("9");

function getDbID(id: number | string){
    // id.toLowerCase() //cant do it, cause not sure what is id data type

    if(typeof(id) === "string" ){
        id.toLowerCase()
    }else if(typeof(id) === "number" ){
        return id;
    }
    // other db , api op's here
    console.log(`Db is is : ${id}`);
}


// array
const data:number[] = [1,2,3,43,5,43,54,6]
const dataSTR:string[] = ["asfd","fas","as","das"]

// union data type of array
// const dataSTRNUM:string[] | number[] = ["asfd","fas","as","das",23,2,43,54,435]
// dataSTRNUM array can have only all the number or only the strings in the array not the mix of  number and string

const dataSTRNUuM:(string | number)[] = ["asfd","fas","as","das",23,2,43,54,435]
// Now,dataSTRNUuM can have both mix match of string and number in the array

// literal type of assignment
let seatAllotment: "aisle" | "middle" | "window"
// seatAllotment = "skfjkej" //not allowed should be of only the above 3 type