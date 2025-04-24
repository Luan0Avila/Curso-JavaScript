// 1 - Number
console.log(typeof 2);
console.log(typeof 5.14);
console.log(typeof -127);

// 2 - Ops. aritmeticas

console.log(2 + 4);
console.log(10 - 5);
console.log(2 * 10);
console.log(100 / 5);

console.log(5*(10 + 2));

// 3 - Special Numbers

console.log(typeof Infinity);
console.log(typeof -Infinity);

console.log(12 * "asd");
console.log(typeof Nan);

// 4 - Strings
console.log("Hello Wolrd!");
console.log('Hello Wolrd!');
console.log("11");

// 5 - Carcteres especiais
console.log("Testando a barra \nquebra de linha");
console.log("Espaçamento \tde tab");

// 6 - Concatenação
console.log("oi, " + "tudo " + "bem?");
console.log(`testando ` + `com ` + `crase`);

// 7 - Interpolação
console.log(`A soma de 2 + 2 e: ${2 + 2}`);

console.log(`Podemos excutar qualquer coisa aqui ${console.log("teste")}`);

// 8 - Booleans
console.log(true);
console.log(5 > 20);
console.log(30 > 10);

// 9 - Comparações
console.log( 5 <= 5);
console.log( 5 < 5);
console.log(10 == 10);
console.log(10 == 9);
console.log(10 != 9);

// 10 - Identico
console.log(9 == "9");
console.log(9 + "9");
console.log(9 === "9");

console.log(9 != "9");
console.log(9 !== "9");

// 11 - Operadores Lógicos
console.log(true && true);
console.log(true && false);
console.log(5 > 2 && 2 < 10);
console.log(5 > 2 && "Luan" === 10);

console.log(5 > 2 || "Luan" === 10);
console.log(5 < 2 || "Luan" === 10);

console.log(!true);
console.log(!5 > 2);

// 12 - Empty Values
console.log(typeof null, typeof undefined);

console.log(null == undefined);
console.log(null === undefined);

console.log(null == false);
console.log(undefined == false);

// 13 - Mudança de tipos
console.log(5 * null);
console.log("teste" * "opa");
console.log("10" + 1);
console.log("10" - 1);