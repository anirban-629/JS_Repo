"use strict";
// ! IIFE - Immediately Invoked Function Expression
function q1() {
  (function abc() {
    console.log("IIFE1");
  })();
  (() => {
    console.log("IIFE2");
  })();
  (async () => {
    console.log("IIFE3");
  })();
}
// q1();

// ! Difference Between Let and Var
function q2() {
  let a = 10;
  if (a == 10) {
    let c = 30;
    var b = 20;
  }
  console.log(b);
  //   console.log(c); // * Throws error
}
// q2();

// ! what is "use strict"?
// ? ECMAScript is a standard for scripting languages, including JavaScript, JScript, and ActionScript. It is best known as a JavaScript standard intended to ensure the interoperability of web pages across different web browsers. LINK - https://tc39.es/

// ! Basic Questions
function q3() {
  // console.log("1 + 1   - ", 1 + 1);
  // console.log('"1" + 1 - ', "1" + 1);
  // console.log('"a" + 1 - ', "a" + 1);
  // console.log('"1" + 1 - ', "1" + 1);
  // console.log('1 + "3" - ', 1 + "3");
  // console.log('1 * "3" - ', 1 * "3");
  // console.log('"3" + 1 - ', "3" + 1);
  // console.log('"3" * 1 - ', "3" * 1);
  // console.log('"3" / 1 - ', "3" / 1);
  // console.log('"3" / "1" - ', "3" / "1");
  // console.log('"3" / "a" - ', "3" / "a");
  // console.log('"3" + "1" - ', "3" + "1");
  // console.log("typeof [] - ", typeof []);
  // console.log("typeof null - ", typeof null);
  // console.log("typeof undefined - ", typeof undefined);
  // console.log("typeof NaN - ", typeof NaN);

  // console.log('"3" + "3" - ', "3" + "3"); // * As string so string addition
  // console.log('"3" + 3 - ', "3" + 3);
  // console.log('"3" - "3" - ', "3" - "3");
  // console.log('"3" * "3" - ', "3" * "3");
  // console.log('"3" / "3" - ', "3" / "3");

  // console.log('"3" + "ABC" - ', "3" + "ABC"); // * Only 3ABC

  // ? All will be NAN
  // console.log('"3" - "ABC" - ', "3" - "ABC");
  // console.log('"3" * "ABC" - ', "3" * "ABC");
  // console.log('"3" / "ABC" - ', "3" / "ABC");

  // console.log(3 + "3" + 3);
  // console.log("4" + 4 + "4");
  // console.log("4" * 4);
  // console.log(("4" * 4) / "4");
  // console.log(("4" + 4) * "4");

  console.log(1 != "1");
  console.log(1 !== "1");
}
// q3();

// ! Datatype Conversions
function q4() {
  console.log(typeof 1);
  console.log(typeof "1");
  console.log(typeof Number("1"));
  console.log(typeof Number("1a"));
  console.log(Number("1a"));
  console.log(Boolean(""));
  console.log(Boolean("Anirban"));
  console.log(Boolean(true), Boolean(false));
  console.log(typeof 1 + "1");
  console.log(typeof (1 + "1"));

  // * Exception Occurs (LOGICAL)
  console.log(1 + 1 + "1");
  console.log("1" + 1 + 1);
  // * Exception Occurs (LOGICAL)

  console.log(+true);
  console.log(1 + true);

  let n1, n2, n3;
  n1 = n2 = n3 = (1, 2, 3);
  console.log(n1, n2, n3);
  n1 = n2 = n3 = 2;
  console.log(n1, n2, n3);
}
// q4();

// ! Datatype Comparision
function q5() {
  console.log(1 == true);
  console.log(1 === true);
  console.log(121 == "11"); // * Value Checking
  console.log(121 == "121"); // * Value Checking
  console.log(121 === "121"); // * Value + Type Checking
}
// q5();

// ! Datatype Summary
/*  Premitive Datatype (Call by Value (copy of val) - 7 types)
       String, Number, Boolean, null (empty), undefined, Symbol, BigInt




   Non-Premitive/Reference Datatype(Call by ref)
       Arrays, Objects, Functions
 
   => JavaScript is a dynamically typed language, which means that data types of variables are determined by the value they hold at runtime and can change throughout the program as we assign different values to them.




   => TypeScript is primarily a statically typed language, not a dynamically typed one
*/

function q6() {
  let a = 12938984984198491651951981n;
  let b = 12938984984189131231231233;
  console.log(a);
  console.log(typeof a);
  console.log(typeof b);
}
// q6();

// ! Stack(Primitive) and Heap(Non-Primitive) Memory
function q7() {
  // * Stack
  let a = 10;
  let b = a;
  b = "AD";
  console.log(a, b);
  a = "SD";
  console.log(a, b);
  // * Heap
  let obj1 = {
    name: "ABC",
    age: 22,
  };
  let obj2 = obj1;
  console.log(obj1, obj2);
  obj2.name = "XYZ";
  console.log(obj1, obj2);
}
// q7();

// ! Strings
function q8() {
  //   console.log("object" + "object");
  //   console.log("object" + 50);
  //   console.log("object" + 50 + [1, 2, 3, 4]);
  //   console.log("object" + 50 + { a: 1, b: 2 });
  const str = new String("Anirban");
  //   console.log(str);
  //   console.log(str[0]);
  //   console.log(typeof str);
  //   console.log(str.__proto__);
  //   console.log(str.length);
  //   console.log(str.toUpperCase());
  //   console.log(str.toLocaleUpperCase());
  //   console.log(str.charAt(2));
  //   console.log(str.indexOf("l"));

  const str2 = str.substring(0, 5);
  //   console.log(str2);
  //   console.log(str2.slice(0, 5));
  //   console.log(str2.slice(-3, 5));

  const str3 = "      " + str2 + "an          ";
  //   console.log(str3);
  //   console.log(str3.trim());
  //   console.log(str3.trimEnd());
  //   console.log(str3.trimStart());
  //   console.log(str3.replace("an", "AN"));
  //   console.log(str.includes("an"));
  //   console.log(str.includes("na"));

  console.log(
    str
      .trim()
      .split("")
      .join("-")
      .split("")
      .filter((e) => e != "-")
      .join("")
  );
}
// q8();

// ! Number
function q9() {
  const score1 = 400;
  const score2 = new Number(400);
  //   console.log(score2);
  //   console.log(typeof score2);
  //   console.log(score2.toString());
  //   console.log(typeof score2.toString());
  //   console.log(score2.toString().length);

  //   console.log(score2.toFixed(1));
  //   console.log(typeof score2.toFixed(1));
  // console.log(typeof Number(score2.toFixed(1)));

  const score3 = 21.589;
  console.log(typeof score3);
  console.log(score3.toPrecision(3));

  const score4 = 1232.23;
  console.log(score4.toPrecision(3));
  console.log(Number(100000).toLocaleString());
}
// q9();

// ! Maths
function q10() {
  //   console.log(Number.MAX_VALUE, Number.MIN_VALUE);
  //   console.log(Math.abs(-213));
  //   console.log(Math.round(-213.123));
  //   console.log(Math.ceil(213.123));
  //   console.log(Math.floor(213.123));
  //   console.log(Math.max(1, 2, 3, 4, 5));

  console.log(Math.random());
  console.log(Math.random() * 10); // * 1 Digit shift (0-9)
  console.log(Math.random() * 10 + 1); // * (1-9)

  const randomMin = 10;
  const randomMax = 20;

  console.log(Math.random() * (randomMax - randomMin + 1) + randomMin); // * (10-20)
}

// q10();

// ! Date and Time
function q11() {
  const myDate = new Date();

  //   console.log(myDate);
  //   console.log(typeof myDate);
  //   console.log(myDate.toString());
  //   console.log(myDate.toISOString());
  //   console.log(myDate.toJSON());
  //   console.log(myDate.toLocaleString());
  //   console.log(myDate.toLocaleDateString());

  //   const myDate2 = new Date(2002, 6, 21); // *  Date index starts from 0
  //   console.log(myDate2.toString());

  //   console.log(new Date("2002-07-21").toString());
  //   console.log(new Date("21-07-2002").toString());

  console.log(new Date("2002-07-21").getTime()); // *  Time in milliseconds
  console.log(Date.now()); // *  Time in milliseconds
  console.log(Math.floor(Date.now() / 1000)); // *  Time in seconds

  console.log(
    new Date("2002-07-21").toLocaleString("default", {
      weekday: "long",
    })
  );
}
// q11();

// ! Arrays - Part1
function q12() {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // * Heap
  //   console.log(arr[0]);
  const arr2 = arr;
  arr2.push(11);
  //   console.log(arr, arr2);

  const arr3 = new Array(1, 2, 3, 4, 5, 6);
  //   arr3.unshift(10); // * Insertion at start
  console.log(arr3);
  arr3.shift();
  //   console.log(arr3); // * Deletion of first element

  //   console.log(arr3.includes(21));

  const arr4 = arr3.join();
  //   console.log(arr4);
  //   console.log(typeof arr4);

  // ? Slice & Splice
  const arr5 = [0, 1, 2, 3, 4, 5, 6, 7];
  console.log("Slice - ", arr5.slice(0, 5));
  console.log("arr5 - ", arr5);
  console.log("Splice - ", arr5.splice(0, 5));
  console.log("arr5 - ", arr5); // *** Changes the array
}
// q12();

// ! Arrays - Part2
function q13() {
  const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  arr1.push(13);
  // console.log(arr1);

  const arr2 = [1, 2, 3, 4, 5, 6];
  const arr3 = [7, 8, 9, 10, 11, 12];
  arr2.push(arr3); // * Pushes the whole array as a element
  // console.log(arr2);

  const arr4 = [7, 8, 9, 10, 11, 12];
  const arr5 = [13, 14, 15, 16, 17, 18];
  const newArr1 = arr4.concat(arr5); // * Pushes all elements
  const newArr2 = arr4.concat(1); // * Pushes all elements
  // console.log(newArr1);
  // console.log(newArr2);

  const newArr3 = [...arr4, ...arr5, 19, 20]; // * Spread Operator - Spreads all elements
  const newArr4 = [...arr4, ...arr5, [1, 2, 3, 4]];
  const newArr5 = [...arr4, ...arr5, 19, 20, ...[1, 2, 3, 4]];

  // console.log(newArr3);
  // console.log(newArr4);
  // console.log(newArr5);

  const newArr6 = [
    1,
    2,
    3,
    4,
    [5, 6, 7],
    [8, [9, [10, 11, [12, [13, 14, 15, 16]]]]],
  ];
  // console.log(newArr6.flat(1));
  // console.log(newArr6.flat(2));
  // console.log(newArr6.flat(3));

  // console.log(Array.isArray("ABC"));
  // console.log(Array.from("ABC")); // * Converts all chars in array
  // console.log(Array.from({ name: "XYZ" }));
  // console.log(Array.from(Object.keys({ name: "XYZ" })));

  const score1 = 100;
  const score2 = 200;
  const score3 = 300;

  console.log(Array.of(score1, score2, score3));
}

// q13();

// ! Objects Part 1
/*
   Singleton
   Object Literals
*/
function q14() {
  // ? Literals
  const obj1 = {
    name: "ANIRBAN",
    age: 22,
    "my address": "Kolkata",
  };
  // console.log(obj1.name, obj1["age"], obj1["my address"]);

  const symbol1 = Symbol("KEY1");
  const symbol2 = Symbol("KEY2");
  const obj2 = {
    name: "ANIRBAN",
    age: 22,
    symbol1: "KEY1",
    [symbol2]: "KEY1-Actual", // * Syntax of symbol
  };

  // console.log(obj2); // * Look at the console and differentiate between symbol1 and symbol2
  // console.log(obj2.symbol1);
  // console.log(obj2[symbol2]);
  // console.log(typeof obj2[symbol2]); // * String because, value is string

  const obj3 = {
    name: "ANIRBAN",
    age: 22,
  };
  obj3.age = 21;
  // console.log(obj3);
  Object.freeze(obj3);
  // obj3.age = 18; // * throws error as freezed

  const obj4 = {
    name: "ANIRBAN",
    age: 22,
  };

  obj4.greetings = function () {
    console.log("ADDING A FUNCTION ATTRIBUTE IN OBJ4");
  };
  // console.log(obj4);
  // console.log(obj4.greetings);

  // obj4.greetings(); // * Executes Successfully

  obj4.greetings2 = function () {
    console.log(`Accessing the data of obj4 - [${this.name}-${this.age}]`);
  };

  obj4.greetings2();
}
// q14();

// ! Objects Part 2
function q15() {
  // ? Singleton
  const literalObj = {}; // * Literal Object
  const obj1 = new Object(); // * Singleton Object
  // console.log(obj1);

  obj1.name = "ANIRBAN";
  obj1.age = 22;

  // console.log(obj1);

  const obj2 = {
    fullName: {
      firstName: "ANIRBAN",
      lastName: "MISHRA",
    },
    age: 22,
  };
  // console.log(obj2);
  // console.log(obj2.fullName.firstName);

  // ? Optioning
  // console.log(obj2.fullName?.firstName);

  const obj3 = { A: 1, B: 2 };
  const obj4 = { C: 3, D: 4 };

  // console.log({ obj3, obj4 });

  // ? (Source, Obj1, Obj2, ...)
  // console.log(Object.assign(obj3, obj4));
  // console.log(Object.assign({}, obj3, obj4));

  // console.log({ ...obj3, ...obj4 });

  const arrOfObjects = [
    { id: 1, name: "A" },
    { id: 2, name: "B" },
    { id: 3, name: "C" },
    { id: 4, name: "D" },
  ];

  // console.log(Object.keys(arrOfObjects));
  // console.log(Object.values(arrOfObjects));
  // console.log(Object.entries(arrOfObjects));

  console.log(obj4.hasOwnProperty("C"));
  console.log(obj4.hasOwnProperty("E"));
}
// q15();

// ! Objects - Destructuring and JSON API
function q16() {
  const obj1 = { A: 1, B: 2 };
  const { A, B } = obj1;

  // console.log(A, B);

  const obj2 = { A: 1, B: 2 };
  const { A: firstValue, B: secondValue } = obj2;
  console.log(firstValue, secondValue);
}
// q16();

// ! Functions
function q17() {
  function q17Test() {
    console.log("ANIRBAN");
  }
  function q17AddNumbers(a, b) {
    return a + b;
  }
  function q17AddNumbers2(a, b) {
    console.log(a + b);
  }
  function q17AddNumberRestOperators(...nums) {
    return nums;
  }

  // q17Test();
  // console.log(q17AddNumbers(1, 2));
  // console.log(q17AddNumbers(1, null));

  const test = q17AddNumbers2(1, 2);
  // console.log(test);

  console.log(q17AddNumberRestOperators(1, 2, 3, 4, 5, 6));
}
// q17();

// ! Global and local scopes
function q18() {
  // ? GLOBAL SCOPE
  let a = 10;
  var b = 20;
  const c = 30;

  {
    let d = 40;
    var e = 50;
    const f = 60;
  }
  // console.log(d); // * error local/block scope variable
  console.log(e);
  // console.log(f); // * error local/block scope variable
}
// q18();

// ! Scope level
function q19() {
  const username = "anirban";

  function one() {
    const oneUsername = "first";
    console.log(username);
  }
  // console.log(oneUsername); // * throws error
  one();

  // * Function
  function two() {
    console.log("second");
  }
  // * Expression
  const three = function () {
    console.log("third");
  };
  two();
  three();
}
// q19();

// ! Mini hoisting
function q20() {
  one();
  function one() {
    const oneUsername = "first";
    console.log(oneUsername);
  }

  two(10);
  function two(c) {
    console.log(c);
  }

  // *  Here comes the concept hoisting in case of function expressions hoisting occurs means the express is called before intialization

  three(20);
  const three = function (c) {
    console.log(3);
  };
}
// q20();

// ! This keyword
function q21() {
  const user = {
    name: "Anirban",
    age: 22,
    intro: function () {
      console.log(`${this.name}-${this.age}`);
      console.log(this);
    },
  };
  user.intro();
  user.name = "Rahul";
  user.intro();
}
// q21();

// ! Arrow Functions
function q22() {
  // console.log(this);
  // console.log(globalThis);
  // const username = "Anirban";
  // console.log(this.username);

  const arrowFunc = () => {
    console.log(globalThis);
    console.log(this);
  };
  arrowFunc();

  // const arrowFunc2 = (num1, num2) => num1 + num2;    // * Implicitly Return
  // const arrowFunc2 = (num1, num2) => (num1 + num2);  // * Implicitly Return
  const arrowFunc2 = (num1, num2) => {
    return num1 + num2;
  }; // * Explicitly Return
}
// q22();

// ! IIFE
function q23() {
  (function () {
    console.log("IIFE-1");
  })(); // * this last semicolon matters because with out this it'll not know where to stop

  (() => {
    console.log("IIFE-2");
  })();

  ((name) => {
    console.log(name);
  })("IIFE-3");

  const test = ((name) => {
    console.log(name);
  })("IIFE-4");

  console.log(test); // * undefined && test() wrong as not callable
}
// q23();

// ! ----------------------****************************----------------------
// ! *** Execution Context
/**
 * * {} -> Global Execution Context (this)
 *          - at the time of writing code
 *    * Function Execution Context
 *    * Eval Execution Context
 *
 *
 * * {} -> Memory Creation Phase / Creation Phase
 *    * Execution Phase
 *
 */
function q24() {
  // ? Execution Process of this code
  {
    let v1 = 10;
    let v2 = 20;

    function totalSum(v1, v2) {
      let ans = v1 + v2;
      return ans;
    }

    let result1 = totalSum(v1, v2);
    let result2 = totalSum(100, 200);
    console.log(result1, result2);
  }
  /**
   * * step 1 -> Global Execution - this
   * * step 2 -> Memory Phase - collects all vars (1st cycle - line(644-653))
   *    ? v1 -> undefined, v2 -> undefined
   *    ? totalSum -> defination of function
   *    ? result1 -> undefined, result2 -> undefined
   *
   * * step 3 -> Execution Phase - collects all vars (2nd cycle)
   *    ? v1 -> 10, v2 -> 5
   *    ? totalSum -> Nothing to do - idle (line(647-649))
   *    ? result1 -> totalSum (creates a new context), (line - 652)
   *                          [c1] new variables, new environment + exe thread
   *                          [c1] (Memory Phase + Execution Phase) -> Repeat
   *                          [c1] Deleted after work
   *
   *    ? result2 -> totalSum (creates a new context), (line - 653)
   *                          [c1] new variables, new environment + exe thread
   *                          [c1] (Memory Phase + Execution Phase) -> Repear
   *                          [c1] Deleted after work
   * ! CALL STACK
   *    ? One by one as stack works
   *    ?
   *    |          |
   *    |          |
   *    |          |
   *    |          |
   *    |----------|
   *    |CALL STACK|
   * [ic1] TO UNDERSTAND CALL STACK GO AND PRACTICE IN BROWSER CONSOLE (source>snippets)
   */
  {
    // [c1] Call Stack

    function f1() {
      console.log("f1");
    }
    function f2() {
      console.log("f2");
    }
    function f3() {
      console.log("f3");
    }
    f1();
    f2();
    f3();
  }
}
// q24();

// ! ----------------------****************************----------------------

// [->] -------------------***********ADVANCED***********--------------------

// [c2] Control Flow
/**
 *
 */
function adv01() {
  let a = 10;
  // console.log(a);
  // if (a == 10) console.log(a)
  //  console.log(a + 1);

  // * IF ELSE
  // if (a == 10) console.log(a), console.log(a + 1);

  // * Switch Case
  // let b = 10;
  // let b = "10";
  const swithcase = () => {
    let b = 5;
    switch (b) {
      case 10:
        console.log(10);
        break;
      case 5:
        console.log(10 + " | " + 5);
        break;
      case 10 || "10":
        console.log('10 || "10"');
        break;

      default:
        console.log("DEFAULT");
        break;
    }
  };
  // swithcase();
  // [c1] Falsy values  - false, 0, -0, BigInt - 0n, null, undefined, Nan
  // [c1] Truthy values - "0", "false", " ", [], {}, function(){} - [Empty()]

  // [c1] Nullish Collaesing Operators (??) - Only for [null, undefined]
  let val1 = 5 ?? 10;
  let val2 = 5 ?? 10 ?? 20;
  let val3 = 15 ?? 10 ?? 20;

  let val4 = null;
  let val5 = 20;

  // console.log(val4 ?? val5);
  // console.log(null ?? undefined);
  // console.log(undefined ?? null);

  // console.log(null ?? undefined ?? 122 ?? 555);

  // [c1] Ternary Operator
  console.log(10 > 20 ? true : false);
}
// adv01();

// [c2] Loops
function adv02() {
  const forLoop = () => {
    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
    for (let i = 0; i < arr.length; i++) {
      const element = arr[i];
      if (arr[i] == 5) continue;
      if (arr[i] == 11) break;
      console.log(element);
    }
  };

  const whileLoop = () => {
    let i = 0;
    while (true) {
      // if (i === 10) break;
      if (i == "10") break;
      // if (i === "10") break; // * Infinite loop
      console.log(i++);
    }
  };
  // whileLoop();

  const doWhileLoop = () => {
    // let i = 0;
    // do {
    //   console.log(i);
    //   i++;
    // } while (i <= 10);

    let a = 10;
    do {
      console.log(a + "triggered");
    } while (a < 10);
  };
  // doWhileLoop();
}
// adv02();

// [c2] High Order Arrays
function adv03() {
  let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  // for (const ele of arr) console.log(ele);

  let map = new Map();
  // map.set("A", "B", "C", "D"); // * Map(1) { 'A' => 'B' }
  map.set("A", "B"); // * Unique (Set)
  map.set("A", "B");
  map.set("C", "D");

  // for (const ele of map) console.log(ele);
  // for (const [key, value] of map) console.log(key, value);

  //* It'll only return key which is index
  for (const ele in arr) {
    console.log(ele, "-", arr[ele]);
  }
}
// adv03();

// [c2] Object and Array advanced
function adv04() {
  const obj1 = {
    firstName: "ANIRBAN",
    lastName: "MISHRA",
    age: 22,
  };

  // for (const key in obj1) {
  //   console.log(key);
  // }

  // for (const [key, value] in obj1) {
  //   console.log(key, value);
  // }

  const arr = [1, 2, 3, 4, 5, 6, 7, 8];
  const printArrItem = (item) => console.log(item);
  const printArrItem2 = (item, index) => console.log(item, index);
  const printArrItem3 = (item, index, test) => console.log(item, index, test);

  // arr.forEach(printArrItem);
  // arr.forEach(printArrItem2);
  [1, 2, 3, 4].forEach(printArrItem3);
}
// adv04();

// [c2] Filter-Map-Reduce
function adv05() {
  const arr = [1, 2, 3, 4, 5];

  // const printArr = arr.forEach((item) => console.log(item));
  // const printArr2 = arr.forEach((item) => item); // *  returns nothing
  // console.log(printArr);
  // console.log(printArr2);

  // const value5 = arr.filter((item) => item === 5);
  const val1 = arr.filter((item) => item > 1);

  // console.log(value5);
  // console.log(val1);

  const val2 = arr.map((e) => e);
  // console.log(val2);

  const val3 = arr
    .map((e) => e * 10) // * 1st chain
    .map((e) => e + 1) // * 2nd chain
    .filter((e) => e > 30); // * 3rd chain
  // console.log(val3);

  const i = 0;
  const val5 = arr.reduce((acc, item) => acc + item, i);

  // [c1] From where to start reduce does'nt know so we add this 0 or i after ending that where to start with
  const val4 = arr.reduce((acc, item) => {
    console.log(acc, item);
    return acc + item;
  }, 0);

  console.log(val4);
}
// adv05();

// [->] ***DOM*** - CHECK dom File function adv06() {} adv06();

// [->] ASYNCHRONUS
/**
 *    * JAVASCRIPT - [Synchronous, Single threaded (works in single threaded - slow)]
 *    * EXECUTION CONTEXT - [Executes one line of code at a time]
 *    *                     [Each operation waits for the last one to be completed]
 *
 *    ? Blocking Code -
 *           * Block the flow of python
 *           * Read file sync
 *
 *    ? Non-Blocking Code
 *           * Don't Block the flow of python
 *           * Read file async
 *
 */

// [c1]
function adv07() {
  const a = 10;
  const b = 20;

  // * non blocking
  // setTimeout(() => {
  //   console.log(a);
  // }, 2000);
  // console.log(b);

  // * Call stack - ***
  setTimeout(() => {
    console.log(a);
  }, 1);
  console.log(b);
}
// adv07();

// [c1] check async project folder function adv08() {} adv08();

// [c1] function adv08() {} adv08();
// [c1] function adv10() {} adv10();

// ? INTERVIEW ASKED QUESTIONS

// ! Create function with required params
function error() {
  const noParamError = () => {
    throw new Error("Params required");
  };
  const one = (c = noParamError()) => {
    console.log(c);
  };

  one(10);
  one();
}

// ! Name of the global object in browser
// * WINDOW
