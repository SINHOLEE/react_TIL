function sum(a:number, b:number):number{
    return a+b;
}

console.log(sum(1,2));


const sum2 = (a:number, b:number):number => {
    return a+b;
}


console.log(sum2(1,9));


const sumArray = (arrList: number []) : number => {
    return arrList.reduce((prev, curr)=>{
        return prev + curr;
    },0);
}

const arr : number[] = [1,2,3,4,5];

console.log(sumArray(arr));

const returnNothing = (): void =>{
    console.log("I am just saying hello world");
}

returnNothing();

// interface for class

interface Shape{
    getArea(): number;
}

class Circle implements Shape {
    public radius: number;
    constructor(radius:number){
        this.radius = radius;
    }
    getArea() {
        return this.radius * this.radius * Math.PI;
    }
}

class Rectangle implements Shape {
    private width: number;
    protected height: number;
    constructor(width:number, height:number){
        this.width = width
        this.height = height
    }

    getArea() {
        return this.height * this.width;
    }
}

const shapes: Shape[] = [new Circle(5), new Rectangle(10, 4)]

shapes.forEach(shape => {
    console.log(shape.getArea());
})

// interface for normal 