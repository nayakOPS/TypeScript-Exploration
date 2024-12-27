const user = {
    name:"binayak",
    age:21,
    isActive:true
}

// the function return type is objects
function returnUser():{} {
    return user;
}

console.log(returnUser());


// this is the type alias
type dog = {
    breed:string,
    maxAge:number,
    nature:string
}

function addDogDetails(dogbreed: dog): dog{
    return dogbreed;
}

console.log(addDogDetails({breed:"Shephard",maxAge:20,nature:"protective"}));


type User = {
    readonly _id: string //noone can manipulate the _id cause of readonly
    name:String
    email:string
    isActive:boolean
     // to make anything optional mark using ?
     credCardDetails?: number
}

let myUser: User = {
    _id:"123243",
    name:"h",
    email:"h@askj.com",
    isActive:false
}

myUser.email = "sadk@afs"
// myUser._id = "123"  cant do it cause it has readonly property


/* function createUser(usr: User){

} */

type cardNumber = {
    cardnumber: string
}

type cardDate = {
    carddate: string
}

type cardDetails = cardNumber & cardDate & {
    cvv: number
}

let binayakCard: cardDetails = {
    cardnumber:"234",
    carddate:"2343",
    cvv:123
}


export {}