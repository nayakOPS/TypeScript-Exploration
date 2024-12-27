// abstract class cant have object created
// but can create object from the class who is inherting the abstract class

abstract class TakePhoto{
    constructor(public cameraMode: string, public filter: string){

    }

    abstract getSepia(): void;
}


class Insta extends TakePhoto{
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number
    ){
        super(cameraMode,filter)
    }

    getSepia(): void {
        console.log("SEPIA USED");
    }
}

// const hc = new Insta("test","test")