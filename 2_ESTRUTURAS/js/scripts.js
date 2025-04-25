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

// 9 - else if
if (1 > 2) {
    console.log("teste")
} else if(2 > 3) {
    console.log("teste 2")
} else if(5 > 1) {
    console.log("teste 3")
};

const userName = "Luan";
const userAge = 20;

if (userName === "Luna") {
    console.log(`Bem vindo ${userName}`)
} else if (userName === "Luan" && userAge === 20) {
    console.log(`Bem vindo ${userName}, voce tem ${userAge} anos`)
} else {
    console.log("Nenhuma condição aceita")
}

// 10 - Estruturas de Repetição
let p = 0;

while(p < 5) {
    console.log(`repetindo ${p}`)
    p = p + 1;
}

// 11 - Do while
let o = 10;

do {
    console.log(`valor de ${o}`)
    o--;
} while(o > 1);

// 12 - for
for (let t = 0; t < 10; t++) {
    console.log("Repetindo for...");
}

let r = 10;

for(r; r > 0; r = r - 1){
    console.log(`o r está dimnuindo ${r}`)
};

// 13 - break
for(let g = 20; g > 10; g--) {
    console.log(`O valor de g é: ${g}`)

    if( g === 12) {
        console.log("O g é igual a 12")
        break;
    }
}

// 14 - continue
for(let s = 0; s < 10; s++) {
    // operador de resto = %
    if(s % 2 === 0 && s != 0){
        console.log(`${s} é par`)
        continue
    }
}

// 15 - switch
const job = "advogado";

switch (job) {
    case "policial":
        console.log(`voce é ${job}`);
        break;
    case "advogado":
        console.log(`voce é ${job}`);
        break;
    case "engenheiro":
        console.log(`voce é ${job}`);
        break
    default:
        console.log("Profissão não encontrada")
        break;
}