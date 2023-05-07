interface Person {
    name: string;
    age: number;
    email: string;
}
const persons: Person[] = [

    {
        name: 'John',
        age: 32,
        email: 'fahim@gmail.com'
    },
    {
        name: 'Jane',
        age: 28,
        email: 'karim@gmail.com'
    },

]

function print(personArray:Person[],age:string,email:string):Person | null {
   return personArray.find((person:Person) => person.email === email ) ?? null;
}
console.log(print(persons,'28','karim@gmail.com'));
 