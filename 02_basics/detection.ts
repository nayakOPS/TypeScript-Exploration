// Type Narrowing in TypeScript

function detectType(val: number | string){ //be cautious by using type guards a.k.a typeof and then do data operations
    if(typeof val === "string"){
        return val.toLocaleLowerCase()
    }
    return val+3
}

function provideID(id:string | null){
    if(!id){
        console.log("Please Provide ID");
        return
    }
    id.toLowerCase();
}


// handling all the data cautiously bt type narrowing
function printAll(strs: string | string[] | null){
    if(strs){
        if(typeof strs === "object"){
            for(const s of strs){
                console.log(s);
            }
        }else if(typeof strs === "string"){
            console.log(strs);
            
        }
    }
}

// Instance Of and Type Predicates

// instanceof narrowing, checks for any object is of any given class type

function logValue(x: Date | string) {
    if (x instanceof Date) {
      console.log(x.toUTCString());      
    } else {
      console.log(x.toUpperCase());
    }
}

// Type Predicate
type Fish = {
    swim:() => "Fihsed Swik"
}

type Bird = {
    fly:() => "Birds Do fly not Swim"
}

// this fn should return boolean, returinng a boolean is not returning the type of pet : fish|bird
// after returing the type we can achieve the pet type , : pet is fish
function isFish(pet: Fish | Bird): pet is Fish {
    return (pet as Fish).swim !== undefined;
}

function getFoodForPet(pet: Fish | Bird){
    if(isFish(pet)){
        pet
        return "Fish Food";
    }else{
        pet
        return "Bird Food"
    }
}


// Discriminated Union
interface Circle{
    kind:"circle",
    radius:number
}
interface Square{
    kind:"square",
    side:number
}
interface Rectangle{
    kind:"rectangle",
    length:number,
    width:number
}

interface Polygon{
    kind:"poly"
}

type Shape = Circle | Rectangle | Square //| Polygon

function getTrueShape(shape:Shape){
    if(shape.kind === "circle"){
        return Math.PI * shape.radius ** 2;
    }
    else if(shape.kind === "rectangle"){
        return shape.length * shape.width
    }
    else{
        return shape.side * shape.side;
    }

}


// Never Type and Exhaustive Check

function getArea(shape: Shape){
    // Exhaustive Checking using switch cases
    switch(shape.kind){
        case "circle":
            return Math.PI * shape.radius ** 2;

        case "rectangle":
            return shape.length * shape.width;
        
        case "square":
            return shape.side * shape.side;

        // Exhaustivenss checking with never for the shape that can be added later
        default:
            const _defaultforshape: never = shape;
            return _defaultforshape
    }


}