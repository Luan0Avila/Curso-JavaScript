// 1 - variáveis
let nome = "Luan";
console.log(nome);
console.log("Luan");

nome = "Luan Avila";
console.log(nome);

const idade = 20;
console.log(idade);
// idade = 21; const não pode mudar de valor

console.log(typeof nome);
console.log(typeof idade);

// 2 - Mais sobre variaveis
//let @teste = "invalido";
// let teste = "invalido";

let a = 1,
b = 2,
c = 3;

console.log(a,b,c);

const nomecompleto = "Luan Avila";

const nomeCompleto = "Luanzitos";

console.log(nomecompleto);
console.log(nomeCompleto);

let _teste = "valido";

let $teste = "ok";

console.log(_teste, $teste);

// 3 - Funções => prompt
// const age = prompt("Digite sua idade");

// console.log("Voce tem " + age + " anos");

// 4 - Funções => alert
// alert("Testando");

// const z = 11;
// alert(`O numero é ${z}`);

// 5 - Funções => Math.x
console.log(Math.max(1,2,10,20));

console.log(Math.floor(5.15));

console.log(Math.ceil(5.15));

// 6 - Funções => console.x
console.log("teste!");

console.error("erro!");

console.warn("Aviso!");

// 7 - Estruturas de controle => if
const n = 10;

if (n > 5) {
    console.log(`${n} é maior que 5`);
}

const user = "João";

if (user === "João") {
    console.log(`${user} é igual João`);
}

// 8 - else
const loggedIn = false;

if (loggedIn) {
    console.log("Está autenticado");
} else {
    console.log("Não está autenticado");
}

const q = 10;
const w = 15;

if (q > 5 && w > 20) {
    console.log("Numeros mais altos!")
} else {
    console.log("Numeros mais baixos!")
}
