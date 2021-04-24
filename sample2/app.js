System.register(["./math/circle.js", "./math/rectangle.js"], function (exports_1, context_1) {
    "use strict";
    var circle_js_1, rectangle_js_1, person;
    var __moduleName = context_1 && context_1.id;
    function greet(person) {
        console.log("Hello " + person.firstName);
    }
    function calc(fn) {
        fn(1, 2);
    }
    return {
        setters: [
            function (circle_js_1_1) {
                circle_js_1 = circle_js_1_1;
            },
            function (rectangle_js_1_1) {
                rectangle_js_1 = rectangle_js_1_1;
            }
        ],
        execute: function () {
            console.log(circle_js_1.calculateCircumference(10));
            console.log(rectangle_js_1.calculateArea(5, 2));
            person = { firstName: "Bhavani", age: 22 };
            greet(person);
            calc(function (x, y) { return x + y; });
        }
    };
});
