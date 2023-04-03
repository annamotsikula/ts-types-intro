// ES6
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var a = 12;
var b = 'test';
// let & const 
var c = 13; //explicit
var x = '20'; // implicit
c = 14;
var d = 15;
var isWinter = false;
var numbers = [1, 2, 3, 4, 5, 6];
var y = 23;
var joe = {
    name: 'Joe',
    age: 24,
};
var student = {
    name: 'Kate',
    age: 32,
    isStudent: false
};
var Course = /** @class */ (function () {
    function Course(name, type) {
        this.name = name;
        this.type = type;
        this.course_id = this.getCourse();
    }
    Course.prototype.getCourse = function () {
        switch (this.type) {
            case 'Angular':
                return 106;
            case 'React':
                return 107;
            case 'Vue':
                return 108;
            default:
                return 0;
        }
    };
    return Course;
}());
var ngCourse = new Course('angular intro', "Angular");
// console.log(ngCourse)
var myCourse = ngCourse.getCourse();
// console.log(myCourse)
function sum(x, y) {
    return x + y;
}
var myNumber = sum(20, 21);
// console.log(myNumber)
function getArray() {
    return [
        { a: 34, b: 56 },
        { a: 34, b: 56 },
        { a: 34, b: 56 },
        { a: 34, b: 56 },
        { a: 34, b: 56 }
    ];
}
var myBool = false;
// if(!myBool) {
//     let innerVariable: string = 'Inner variable' 
//     console.log('This variable is  ', myBool)
//     console.log('This variable is  ', innerVariable)
// }
var Rectangle = /** @class */ (function () {
    function Rectangle(width, length) {
        this.width = width;
        this.length = length;
    }
    Rectangle.prototype.perimeter = function () {
        return 2 * (this.width + this.length);
    };
    Rectangle.prototype.area = function () {
        return this.width * this.length;
    };
    return Rectangle;
}());
var ab = new Rectangle(4, 5);
console.log(ab.perimeter());
console.log(ab.area());
var Square = /** @class */ (function (_super) {
    __extends(Square, _super);
    function Square(a) {
        var _this = _super.call(this, a, a) || this;
        _this.a = a;
        return _this;
    }
    return Square;
}(Rectangle));
var mySquare = new Square(8);
console.log('Area of square is  ', mySquare.area());
