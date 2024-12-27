// generics make our component reusable

const score: Array<number> = []
const names: Array<string> = []

function identityOne(val: boolean | number): boolean | number{
    return val
}

function identityTwo(val: any): any{
    return val
}


// accepting any data type, when a certain type is passed that value type is locked, so later on op done on the locked data type
function identityThree<Type>(val:Type): Type{
    return val
}

identityThree("what") // accepts what as a data type and locked it

// shortcut to TYpe
function identityThre<T>(val:T): T{
    return val
}

interface bottle{
    brand:string,
    type: number
}

identityThre<bottle>({
    brand:"GYM-buttle",
    type:3
})

function getSearchProduct<T>(products: T[]): T{
    // that should be one of the value from the array
    return products[3];
}

// arrow functions , <T,> this is done to say this not a jsx or html tag but a TS code
const getMoreSearchProducts = <T,> (products : T[]):T =>{
    // do some databse operations
    const myIndex = 4;
    return products[myIndex]
}

function anotherFunction<T, U extends number>(valOne:T, valTwo:U):object{
    return{
        valOne,
        valTwo
    }
}

anotherFunction(2,4.5);

interface Quiz{
    name:string,
    type:string
}

interface Course{
    name:string,
    author:string,
    subject:string
}

class Sellable<T>{
    public cart: T[] = [];


    addToCart(products: T){
        this.cart.push(products)
    }
}