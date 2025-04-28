// 1 - arrays
const lista = [1,2,3,4,5];

console.log(lista);
console.log(typeof lista);

const itens = ["Luan", true, 2, 4.15, []]

console.log(itens);

const arr = ["a", "b", "c", "d"];
console.log(arr[0]);
console.log(arr[2]);
console.log(arr[5]);

// 2 - Propriedades
const numbers = [5, 3, 4];

console.log(numbers.length);
console.log(numbers["length"]);

const myName = "Luan";
console.log(myName.length)

// 3 - Métodos
const otherNumbers = [1, 2, 3];

const allNumbers = numbers.concat(otherNumbers);

console.log(allNumbers);

const text = "algum texto";
console.log(text.toUpperCase());
console.log(typeof text.toUpperCase);

console.log(text.indexOf("g"));

// 4 - Objetos => igual a dicionários em python
const person = {
    name : "Luan",
    age : 20,
    job : "Programador",
}

console.log(person);
console.log(person.name);
console.log(typeof person);
