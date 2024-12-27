let greetings: string = "Hello"; //to declare a data type use : colon
console.log(greetings);


// number
let userID: number = 4193;

// boolean
let isActive: boolean = false;
console.log(isActive.valueOf);

// type interference
/* 
Type inference in TypeScript is a feature where the compiler automatically determines the type of a variable based on the value it is assigned. This means that you don't always have to explicitly specify the type, as TypeScript will infer it from the context. For example:
*/
let num = 5; // TypeScript infers that num is of type number

/* 
In this case, num is automatically inferred to be of type number without needing an explicit type annotation. This helps to reduce redundancy and improve code readability.
*/

// dont use too much Any type, used only when you dont do what data type you might get
// through Ts config we can avoid using any , by setting rule of noImplicitAny


export {}