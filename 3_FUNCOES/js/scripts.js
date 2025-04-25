// 1 - Criando uma função
function minhaFuncao(){
    console.log("Testando");
}

minhaFuncao();
minhaFuncao();

const minhaFuncaoEmVariavel = function () {
    console.log("Funão em variavel");
}

minhaFuncaoEmVariavel();

function funcaoComParametro(txt) {
    console.log(`Imprimindo: ${txt}`);
}

funcaoComParametro("alguma coisa");
funcaoComParametro("Outra coisa");

// 2 - Funções com retorno
const a = 10;
const b = 20;
const c = 30;
const d = 40;

function soma(n1, n2) {
    return n1 + n2;
}

const resultado = soma(a,b);

console.log(resultado);
console.log(soma(c,d));

// 3 - escopo
let y = 10;

function testandoEscopo() {
    let y = 20;
    console.log(`Y dentro da função ${y}`);
}

testandoEscopo();
console.log(`Y fora da função ${y}`)

// 4 - Escopo aninhado
let m = 10;

function escopoAninhado() {
    let m = 20;

    if (true) {

        let m = 30;
        
        if(true) {
        
            let m = 40;
        
            console.log(m)
        }
        
        console.log(m);
        
    }

    console.log(m);
}

escopoAninhado();
console.log(m);

// 5 - arrow function
const testeArrow = () => {
    console.log("Está é uma arrow function");
}

testeArrow();

const parOuImpar = (n) => {
    if (n % 2 === 0) {
        console.log(`${n} é par`);
        return;
    } 
    console.log(`${n} é impar`);
}

parOuImpar(2);
parOuImpar(5);

const raizQuadrada = (x) => {
    return x * x;
}

console.log(raizQuadrada(4));

const raizQuadrada2 = (x) => x * x;

console.log(raizQuadrada2(5));

const helloworld = () => console.log("Hello World")

helloworld();

// 6 - argumentos opcionais
const multiplication = function(m, n) {

    if (n === undefined) {
        return m * 2;
    } else {
        return m * n;
    }
}

console.log(multiplication(5));
console.log(multiplication(5, 10));


const greeting = (name) => {

    if (!name) {
        return `boas vindas usuário`
    } else {
        return `boas vindas ${name}`
    }
}

console.log(greeting());
console.log(greeting("Luan"));

// 7 - valor default
const customGreeeting = (name, greet = "Olá") => {
    return `${greet}, ${name}!`
}

console.log(customGreeeting("Luan"));
console.log(customGreeeting("Luna", "Bom dia"))

const repeatText = (text, repeat = 2) => {

    for(let i = 0; i < repeat; i++) {
        console.log(text)
    }
}

repeatText("oi");
repeatText("ola", 5)

// 8 - Closure
function someFunction() {
    let txt = "alguma coisa";

    function display() {
        console.log(txt)
    }
    display();
}

someFunction();

const multiplicationClosure = (n) => {
    return (m) => {
        return n * m;
    }
}

const c1 = multiplicationClosure(5);
const c2 = multiplicationClosure(10);

console.log(c1);
console.log(c2);

console.log(c1(5));
console.log(c2(10));

// 9 - Recursão
const unitlTen = (n,m) => {

    if (n < 10) {
        console.log("A função parou de executar");
    } else {
        const x = n - m;
        console.log(x);

        unitlTen(x, m);
    }
}

unitlTen(100,7);

function fatorial(x) {
    if (x === 0) {
        return 1;
    } else {
        return x * fatorial(x - 1);
    }
}

const num = 6;
const result = fatorial(num);

console.log(`o fatorial de ${num} é ${result}`);