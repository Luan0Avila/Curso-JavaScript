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

// 5 - Removendo e criando novas propriedades
const car = {
    engine : 2.6,
    brand : "Ford",
    model : "Escort",
    km : 200000,
};

console.log(car);

car.doors = 2;

console.log(car);

delete car.km;

console.log(car);

const obj = {
    a : "teste",
    b : true,
};

console.log(obj instanceof Object);

const obj2 = {
    c : [],
};

Object.assign(obj2, obj);
console.log(obj2);

// 6 - Conhecendo melhor objetos
console.log(Object.keys(obj));
console.log(Object.keys(obj2));
console.log(Object.keys(car));

console.log(Object.entries(car))

// 7 - Mutação
const a = {
    name : "Luna",
};

const b = a;
console.log(a);
console.log(b);


console.log(a === b);

a.age = 20;
console.log(a);
console.log(b);

delete b.age;

console.log(a);
console.log(b);

// 8 - Loops em arrays
const users = ["Luan", "Lady", "Luna", "Matheus"];

for(let i = 0; i < users.length; i++) {
    console.log(`Listando o usuário: ${users[i]}`)
}

// 9 - push e pop
const array = ["a", "b", "c"];

array.push("d");

console.log(array)

console.log(array.length);

array.pop();
console.log(array);

const itemRemovido = array.pop();
console.log(array);
console.log(itemRemovido);

array.push("z", "x", "y");
console.log(array)

// 10 - Shift e unshift
const letters = ["a", "b", "c"];

const letter = letters.shift();

console.log(letter);
console.log(letters);

letters.unshift("p", "q", "r");
letters.unshift("z");
console.log(letters);

// 11 - idexOf e lastindexOf
const myElements = ["Morango", "Maçã", "Abacate", "Banana", "Banana"];

console.log(myElements.indexOf("Maçã"));
console.log(myElements[myElements.indexOf("Banana")]);
console.log(myElements[3]);

console.log(myElements.lastIndexOf("Banana"));

console.log(myElements.indexOf("Pera"));
console.log(myElements.lastIndexOf("Pera"));

// 12 - slice
const testeSlice = ["a", "b","c","d","e","f"];
const subArray = testeSlice.slice(2,4);

console.log(testeSlice);
console.log(subArray);

const subArray2 = testeSlice.slice(2,4 + 1);
console.log(subArray2);

const subArray3 = testeSlice.slice(10, 20);
console.log(subArray3);

const subArray4 = testeSlice.slice(2);
console.log(subArray4);

// 13 - forEach
const nums = [1,2,3,4,5];

nums.forEach((numero) => {
    console.log(`O numero é ${numero}`)
})

const posts = [
    {title : "Primeiro post", category : "PHP"},
    {title : "Segundo post", category : "Python"},
    {title : "Terceiro post", category : "Java"},
]

posts.forEach((post) => {
    console.log(`Exibindo post: ${post.title}, da categoria ${post.category}`)
})

// 14 - Include
const brands = ["BMW", "VW", "Fiat"];

console.log(brands.includes("Fiat"));
console.log(brands.includes("Ford"));

if (brands.includes("BMW")) {
    console.log("Há carros da marca BMW")
};

// 15 - Reverse
const reverseTest = [1,2,3,4,5];

reverseTest.reverse();

console.log(reverseTest);

// 16 - Trim
const trimTest = "  testando \n   ";
console.log(trimTest);
console.log(trimTest.trim());

console.log(trimTest.length);
console.log(trimTest.trim().length);

// 17 - padStart
const testePadStart = "1";
const newNumber = testePadStart.padStart(4,"0");

console.log(testePadStart);
console.log(newNumber);

const testePadEnd = newNumber.padEnd(10, "0");

console.log(testePadEnd);

// 18 - Split
const frase = "O rato roeu a roupa do rei de Roma";

const arrayFrase =  frase.split(" ");

console.log(arrayFrase);

// 19 - Join
const fraseDenovo = arrayFrase.join(" ");
console.log(fraseDenovo);

const itensParaComprar = ["Mouse", "Teclado", "Monitor"];

const fraseDeCompra = `Precisamos comprar: ${itensParaComprar.join(", ")}`;
console.log(fraseDeCompra);

// 20 - repeat
const palavra = "Testando ";
console.log(palavra.repeat(5));

// 21 - Rest Operator
const somaInfinita = (...args) => {
    let total = 0;

    for(let i = 0; i < args.length;i ++) {
        total += args[i];
    }
    return total;
};

console.log(somaInfinita(2,4,6,8));
console.log(somaInfinita(2,4,6,8,10,25,32,91));

// 22 - For of
const somaInfinita2 = (...args) => {
    let total = 0;
    for(num of args){
        total += num;
    }
    return total;
}

console.log(somaInfinita2(10,20,30));

// 23 - Destructuring em objetos
const userDetails = {
    firstName : "Luan",
    lastName : "Avila",
    job : "Programador"
}

const {firstName, lastName, job} = userDetails;

console.log(firstName, lastName, job);

// renoaear variaveis
const {firstName : primeiroNome} = userDetails;
console.log(primeiroNome);

// 24 - destructuring em arrays
const myList = ["avião", "submarino", "carro", "moto"];
const [veiculoA, veiculoB, veiculoC] = myList;

console.log(veiculoA, veiculoB, veiculoC);

// 25 - JSON
const myJSon = '{"name" : "Luan", "age" : 20, "Skills" : ["Python", "Javascript", "Django"]}';
console.log(myJSon);

// 26 - JSON para objeto e objeto para JSON
const myObject = JSON.parse(myJSon);
console.log(myObject);
console.log(myObject.age);
console.log(typeof myObject);

//json invalido
const badJson = '{"name" : Luan, "age" : 20}';
// const myBadObject = JSON.parse(badJson);

myObject.isOpenToWork = true;
console.log(myObject);

const myNewJson = JSON.stringify(myObject);
console.log(myNewJson);

console.log(typeof myNewJson);