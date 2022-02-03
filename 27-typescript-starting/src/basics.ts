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




