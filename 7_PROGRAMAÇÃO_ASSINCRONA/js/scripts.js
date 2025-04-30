// 1 - setTimeout
console.log("Ainda não executou");

setTimeout(function() {
    console.log("Requisição assincrona")
}, 2000);

console.log("Ainda não executou 2");

// 2 - setInterval
console.log("Ainda não executou");

// setInterval(function() {
//     console.log("Intervalo assincrono");
// }, 3000)

console.log("Ainda não executou 2");

// 3 - Promise
const promessa = Promise.resolve(5 + 5);

console.log("Algum codigo")

promessa.then(value => {
    console.log(`A soma é ${value}`);
    return value;
})
.then((value) => value - 1)
.then((value) => console.log(`agora value é ${value}`));

console.log("Outro codigo")

// 4 - falha nas promises
Promise.resolve(4 * "asd")
.then((n) => {
    if (Number.isNaN(n)) {
        throw new Error("Valores inválidos");
        
    }
})
.catch((err) => console.log(`Um erro ocorreu! ${err}`));

// 5 - Rejeição de Promises
function checkNumber(n) {
    return new Promise((resolve, reject)=> {
        if (n > 10) {
            resolve(`O numero é maior que 10`);
        } else {
            reject(new Error("Numero muito baixo!"));
        }
    }); 
}

const a = checkNumber(20);
const b = checkNumber(10);

a.then((v) => console.log(`O resultado é ${v}`)).catch((err) =>
    console.log(`Um erro ocorreu ${err}`)
);

b.then((v) => console.log(`O resultado é ${v}`)).catch((err) =>console.log(`Um erro ocorreu ${err}`));