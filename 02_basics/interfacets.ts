// interface in ts, basic overview of fields, its like loose form of class

interface Userr {
    readonly _id: string
    name:String
    email:string
    googleID?: number
    startTrial: () => string // return a string no matter on which data type the operation is done
    // startTrial(): string
    getCoupon(couponname:string, discount:number): number
}

// reopening the interface 
interface Userr {
    githubID: string
}

interface Admmin extends Userr{
    role:"adminn" | "ta" | "assf"
}
const binayak: Admmin = {
    _id:"ei",
    name:"jsfd",
    email:"hksfdh",
    googleID:234,
    startTrial:() => {
        return "Trial Started"
    },
    getCoupon: (couponname: "yk10", discountGiven:15) : number=> {
        return 10
    },
    githubID:"nayipos",
    role:"adminn"
}

// binayak._id = "ahsd" cann't ressign and its only readonly

console.log(binayak);
console.log(binayak.startTrial());
 