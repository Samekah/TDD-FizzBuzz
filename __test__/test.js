const checkerFuncs = require("../multipleChecker")

describe("fizzBuzz function", () =>{
    const fizzBuzz = checkerFuncs.fizzBuzz
    
    test("fizzBuzz exists", () =>{
        expect(fizzBuzz).toBeDefined;
    });

    test("fizzBuzz is a function", () =>{
        expect(fizzBuzz).toBeInstanceOf(Function);
    });

    test("It should take in a number and output fizz if a multiple of 3", () =>{
        let num1 = Math.floor(Math.random() * 100)*3;
        // let num1 = 30;
        let result = fizzBuzz(num1);
        expect(result).toEqual("Fizz");
    });
    
    test("It should take in a number and output it if not a multiple of 3", () =>{
        let num1 = Math.floor(Math.random() * 100)*3 + 1;
        // let num1 = 30;
        let result = fizzBuzz(num1);
        expect(result).toEqual(num1);
    });

    test("It should take in a number and output buzz if a multiple of 5", () =>{
        let num1 = Math.floor(Math.random() * 100)*5;
        // let num1 = 30;
        let result = fizzBuzz(num1);
    });

    test("It should take in a number and output it if not a multiple of 5", () =>{
        let num1 = Math.floor(Math.random() * 100)*5 + 1;
        // let num1 = 30;
        let result = fizzBuzz(num1);
        expect(result).toEqual(num1);
    });
    
    test("It should take in a number and output fizzbuzz if a multiple of 5 and 3", () =>{
        let num1 = Math.floor(Math.random() * 100)*15;
        // let num1 = 30;
        let result = fizzBuzz(num1);
        expect(result).toEqual("FizzBuzz");
    });



});