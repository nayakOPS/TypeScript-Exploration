// this is array
// const user: (string | number)[] = ["as","sfds","asf",12,2,3]


// in case oF Tuple the order of array really matters
let tuser: [boolean, string, number];
tuser = [true,"neaf",89]; // the order of data type matters


let rgb: [number,number, number] = [255, 123, 422]

type User = [number, string]
const newUser: User = [112, "rae@kajfs.com"]

newUser[1] = "few@cosm" //in tuple can resign to const