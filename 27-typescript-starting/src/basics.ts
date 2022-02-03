// Primitives: number, string, boolean
// Complex: arrays, objects
// Function: parameters

  // Primitives
    let age: number;

    age = 12;

    let userName: string;

    userName = 'Max'

    let isInstructor: boolean;
    
    isInstructor = false

  // Complex / Type Aliases
    let hobbies: string[];

    hobbies = ['bball', 'cooking']

    type Person = {
      name: string,
      age: number
    };

    let person: Person;
    person = {
      name: 'Max', 
      age: 32
    }

    let people: Person[]; 
    // this is wanting an an array of multiple objects instead of just 

// Type Inference

  let course = 'React JS course'

  // course = true
    // the above code will show an error because on line 41, typescript already 

// Union Types

  let courses: string | number = 'react JS Courses'

  courses = 3

// Function Types

    function add(a: number, b: number): number {
      return a + b
    }

    function print(value: any) {
      console.log(value)
    }

// Generics 

  function insertAtBeginning<T>(array: T[], value: T) {
    const newArray = [value, ...array];
    return newArray;
  }

  const demoArray = [1, 2, 3]

  const updatedArray = insertAtBeginning(demoArray, -1); // [-1, 1, 2, 3]

  // updatedArray[0].split('')
  // the above code will show a CODE BECAUSE the array of numbers CANNOT be split. 
  // if we DIDN'T have the <T> code on line 62, then Typescript would NOT be able to detect the error. We would only find the code AFTER development on the server.  
  // We are telling Typescript that the array and value in the function, HAVE to be the SAME. Whether we try to add onto an array of numbers or a new array of strings.