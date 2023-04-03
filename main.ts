// ES6

var a = 12;
var b = 'test'

// let & const 

let c: number = 13; //explicit
let x = '20' // implicit
c = 14;
const d = 15; 
let isWinter: boolean = false
let numbers : Array<number> = [1,2,3,4,5,6]

let y: any = 23;
// unknown , type
interface IPerson {
    name: string,
    age: number,
    isStudent?: boolean
}

const joe: IPerson = {
    name: 'Joe',
    age: 24,
}
let student : IPerson = {
    name: 'Kate',
    age: 32,
    isStudent: false
}

type TCourse = 'Angular' | 'React' | 'Vue'

class Course { 
    name: string;
    course_id: number;
    type: TCourse

    constructor(name: string, type: TCourse) {
        this.name = name
        this.type = type
        this.course_id = this.getCourse()
    }

    getCourse(): number {
        switch(this.type) {
            case 'Angular':
                return 106
            case 'React':
                return 107
            case 'Vue':
                return 108
            default :
                return 0
            
        }
    }
}

const ngCourse = new Course('angular intro', "Angular")
// console.log(ngCourse)
const myCourse = ngCourse.getCourse()
// console.log(myCourse)


function sum(x: number, y: number): number {
    return x+y
}
const myNumber = sum(20,21)
// console.log(myNumber)

function getArray(): IPoints[] // Array<IPoint> 
{
    return [
            { a: 34, b: 56},
            { a: 34, b: 56},
            { a: 34, b: 56},
            { a: 34, b: 56},
            { a: 34, b: 56}
        ]
    
}
interface IPoints {
    a: number,
    b: number
}

let myBool : boolean = false

// if(!myBool) {
//     let innerVariable: string = 'Inner variable' 
//     console.log('This variable is  ', myBool)
//     console.log('This variable is  ', innerVariable)
// }

class Rectangle {
    width: number;
    length: number;

    constructor(width: number, length: number){
        this.width = width
        this.length = length
    }
    perimeter(): number {
        return 2*(this.width + this.length)
    }

    area() {
        return this.width * this.length
    }
}

const ab = new Rectangle(4,5)
console.log(ab.perimeter())
console.log(ab.area())

class Square extends Rectangle {
    a: number
    constructor(a: number) {
        super(a, a);
        this.a = a
    }
}

const mySquare = new Square(8);
console.log('Area of square is  ', mySquare.area())
