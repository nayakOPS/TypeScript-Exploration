// Functions in TypeScript

let total : number;
let totalRest : number;

function Summ(n1: number, n2: number): number {
    return n1 + n2;
}

total = Summ(1,90);


// Unlimited Arguments (Rest Parameters)

function SumRest(...numbers: number[]): number {
    return numbers.reduce((total, num) => total + num, 0);
}

totalRest = SumRest(1,3,4,5,34,66,7,453,342);

console.log(total);
console.log(totalRest);


function signUp(name:string, email:string, password:string, isMember:boolean){
     if (!name || name.trim() === "") {
        console.log("Name is required.");
        return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
        console.log("Invalid email address.");
        return;
    }

    if (!password || password.length < 8) {
        console.log("Password must be at least 8 characters long.");
        return;
    }

    if (isMember !== false) {
        console.log("isMember must be false for new sign-ups.");
        return;
    }

    console.log("Sign-up successful for:", name);
}
signUp("John Doe", "john.doe@example.com", "password123", false);



// default value pass as false for the isMember
let login = (email: string, password: string, isMember:boolean = false): void => {
    // Validate the email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
        console.log("Invalid email address.");
        return;
    }

    // Validate the password length
    if (!password || password.length < 8) {
        console.log("Password must be at least 8 characters long.");
        return;
    }

    // Proceed with the login logic
    console.log("Login successful for email:", email, "and isMember:",isMember);
    // Here you can add logic to check the user's credentials against a database or perform other actions
};

// Example usage
login("john.doe@example.com", "password123");


// to handle returning of more than one data type

function getValue(myVal: number): boolean | string{
    if(myVal>5){
        return true
    }
    return "200 OK"
}

console.log(getValue(1));


const heros = ["shaktiman","rajesh_hamal","deadpool"]
heros.map((hero): string => {
    return `hero is ${hero}`
})

// some functions never return a value
function fail(msg:string):never{
    throw new Error(msg)
}
console.log(fail("Failed at Db Connection"));
