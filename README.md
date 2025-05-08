<h2>Some differences between interfaces and types in TypeScript?</h3>

<h5>In TypeScript, one of the first things is the need to define types. TypeScript offer to way to define type, which called type and interface. Both are used for define the object structure but they have some differences between.</h5>

<h3>type in TypeScript</h3>

<p>In TypeScript, the term "types" refers to the different ways data structures are defined for variables, including both built-in types like number, string, and boolean, as well as custom types such as type aliases. Union types and tuples, for instance, are defined using the type keyword, providing flexibility in how data structures are handled.</p>

1. Primitive Type Aliases

   type Name = string;

2. Object Type

   type Book = {
    title: string, price:100
   }

3. Union and Intersection Types

   type Mobile = "samsung" | "oppo"
   type Int = "samsung" & "Oppo"

4. function type

   type greet = (name: string)=>string


<h3>interface in TypeScript</h3>

<p>An interface defines a contract that specifies the structure an entity must follow, including properties, methods, and events without implementation. It ensures that implementing classes adhere to this required structure. When deciding between types and interfaces, factors like readability, context, personal preference, and performance should be considered.</p>

interface Book {
   name: string;
   price: number;
}


<h3>Some differences key between type and interface</h3>

1. <p>interface: Can be extended using the extends keyword. Multiple interface declarations can be merged.</p>
   <p>type: Cannot be extended directly, but can be combined using intersections (&).</p>

2. <p>interface: Supports declaration merging</p>
   <p>type: Does not support declaration merging</p>

3. <p>interface: Primarily used for defining the shape of objects and classes.</p>
   <p>type: More flexible, used for unions, intersections, tuples, and primitive types.</p>

------------------------------------------------------------------

<h2>The use of enums in TypeScript</h2>


<h3>What is an enum?</h3>

<p>An enum in TypeScript is a feature that lets you define a set of named constants, making your code more readable and organized. It groups related values under meaningful names, which improves clarity and maintainability. Enums can use both numbers and strings based on what suits your code best.</p>

<h3>Numeric enum</h3>

<p>In numeric enum, automatically assigns incremental numeric values starting from 0, useful for performance or compact data, Also manually you can assign specific numbers if needed.</p>

Example: 

        enum Day {
                  Monday,
                  Tuesday,
                  Wednesday,
                  Thursday,
                  Friday,
                  Saturday,
                  Sunday
                  }
         let day: Day = Day.Monday
         console.log(day)

      Automatically assign numeric values(like: Monday = 0,Tuesday=1)

      Also you can add manually numeric values

       enum Day {
                  Monday = 1,
                  Tuesday = 3,
                  }

<h3>String enum</h3>

<p>By using String enum, it's allow you to assign string values. Making the code more readable and ideal.</p>

Example: 

         enum Mobiles{
            Samsung = "Samsung",
            Apple = "Apple",
         }
         

<p>Enums in TypeScript give your code structure, clarity, and safety when dealing with fixed sets of values. Use numeric enums for performance-sensitive logic and string enums for clearer, more descriptive output.</p>