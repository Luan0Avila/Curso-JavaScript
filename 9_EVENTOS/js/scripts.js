1 // - adicionando eventos
const btn = document.querySelector("#my-button");

btn.addEventListener("click", function() {
    console.log("clicou");
});

// 2 - removendo eventos
const secondbtn = document.querySelector("#btn");

function imprimiMensagem() {
    console.log("teste");
}

secondbtn.addEventListener("click", imprimiMensagem);

const thirdBtn = document.querySelector("#other-btn");

thirdBtn.addEventListener("click", () => {
    console.log("Evento removido");
    secondbtn.removeEventListener("click", imprimiMensagem);
});

// 3 - Objeto do evento
const myTitle = document.querySelector("#my-title");

myTitle.addEventListener("click", (event) => {
    console.log(event);
})

// 4 - Propagação
const containerBtn = document.querySelector("#btn-container");
const btnInsideContainer = document.querySelector("#div-btn");

containerBtn.addEventListener("click", () => {
    console.log("Evento 1")
})

btnInsideContainer.addEventListener("click", (e) => {
    e.stopPropagation();
    console.log("Evento 2")
})

// 5 - Removendo evento padrão
const a = document.querySelector("a");

a.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("preveniu")
})

// 6 - eventos de tecla
document.addEventListener("keyup", (e) => {
    console.log(`Soltou a tecla ${e.key}`)
})

document.addEventListener("keydown", (e) => {
    console.log(`apertou a tecla ${e.key}`)
})

// 7 - outros eventos de mouse
const mouse = document.querySelector("#mouse");

mouse.addEventListener("mousedown", () => {
    console.log("Pressionou o botão")
})

mouse.addEventListener("mouseup", () => {
    console.log("Soltou o botão")
})

mouse.addEventListener("dblclick", () => {
    console.log("Clique duplo")
})

// 8 - Movimento do mouse
// document.addEventListener("mousemove", (e) => {
//     console.log(`no eixo x: ${e.x}`)
//     console.log(`no eixo y: ${e.y}`)
// })

// 9 - Evento de scroll
window.addEventListener("scroll", (e) => {
    if (window.scrollY > 200) {
        console.log("Passamos de 200px")
    }
})

// 10 - evento por foco
const input = document.querySelector("#my-input");

input.addEventListener("focus", (e) => {
    console.log(`Entrou no input ${e}`)
})
input.addEventListener("blur", (e) => {
    console.log(`saiu do input ${e}`)
})

// 11 - evento de carregamento de pagina
window.addEventListener("load", () => {
    console.log("A pagina carregou")
})

window.addEventListener("beforeunload", (e) => {
    e.preventDefault();
    e.returnValue = "teste";
})

// 12 - debounce
const debounce = (f, delay) => {

    let timeout;

    return(...arguments) => {
        if (timeout) {
            clearTimeout(timeout)
        };

        timeout = setTimeout(() => {
            f.apply(arguments);
        }, delay);
    };
};

window.addEventListener("mousemove", debounce(() => {
    console.log("executando evento a cada 400ms");
},400));