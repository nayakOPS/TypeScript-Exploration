// private and publlic in ts

/* class User{
    public email:string
    name:string
    private readonly city: string = "Jaipur"
    constructor(email:string, name:string){
        this.email = email;
        this.name = name;
    }
} */

    // better code
    class User{
        private _courseCount = 1
        protected courseInstructor = "Hari"

        // private can't be access outside of the class
        private readonly city: string = "Jaipur"
        constructor(public email:string, public name:string){
            this.email = email;
            this.name = name;
        }  

        // getter example
        get getAppleEmail(): string{
            return `Apple${this.email}`
        }

        get courseCount(): number{
            return this._courseCount
        }

        // setter example
        // you cant make a setter return type to void, no any retun type
        set courseCount(courseNum){
            if(courseNum <= 1){
                throw new Error("Course Count Should be more than 1")
            }
            this._courseCount = courseNum
        }

        private deleteToken(){
            console.log("Token Deleted");
        }


    }

const hit = new User("binayak@sf", "askfbh")
// console.log(hit.city); // only accesible within the clas

// hit.deleteToken() //cant access the private prop fn

class subUser extends User{
    // this subUser can't acquire the private prop of User
    isMember: boolean = true
    changeCourseInstructor(){
        this.courseInstructor = "Shyam"; // this protected can be accesed via the extended class
    }
}