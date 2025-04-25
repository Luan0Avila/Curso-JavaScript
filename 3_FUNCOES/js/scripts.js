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