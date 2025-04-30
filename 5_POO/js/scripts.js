// 1 - métodos
const animal = {
    nome : "Bob",
    latir : function() {
        console.log("au au")
    },
};

console.log(animal.nome);
animal.latir();

const pessoa = {
    nome : "Luan",
    getNome : function() {
        return this.nome
    },
    setNome : function(novoNome) {
        this.nome = novoNome;
    }
}

console.log(pessoa.getNome());

pessoa.setNome("Luna");

console.log(pessoa.getNome());

// 2 - prototype
const text = "asd";
console.log(Object.getPrototypeOf(text));

const bool = true;
console.log(Object.getPrototypeOf(bool));

const arr = [];
console.log(arr.length);
console.log(Object.getPrototypeOf(bool));

const myObject = {
    a : "b",
};

console.log(Object.getPrototypeOf(myObject));

const mySecondObject = Object.create(myObject);

console.log(mySecondObject);

console.log(mySecondObject.a);

// 3 - Classes basicas
const cachorro = {
    raca : null,
    patas : 4,
}

const pastorAlemao = Object.create(cachorro);

pastorAlemao.raca = "Pastor Alemão";

console.log(pastorAlemao);
console.log(pastorAlemao.patas);

const bulldog = Object.create(cachorro);

bulldog.raca = "Bulldog";
console.log(bulldog);

// 4 - função como classe - função construtora
function criarCachorro(nome, raca) {
    const cachorro = Object.create({});

    cachorro.nome = nome;
    cachorro.raca = raca;

    return cachorro;
};

const bob = criarCachorro("Bob", "Via lata");

console.log(bob);

const jack = criarCachorro("Jack", "Poodle");

console.log(jack);

// 5 - funções como classe
function Cachorro(nome, raca) {
    this.nome = nome;
    this.raca = raca;
}

const husky = new Cachorro("Ozzy", "Husky");

console.log(husky);

// 6 - metodos na função construtora
Cachorro.prototype.uivar = function() {
    console.log("Auuuuu");
};

husky.uivar();

// 7 - classes es6
class CachorroClasse {
    constructor(nome, raca) {
        this.nome = nome;
        this.raca = raca;
    }
}

const jeff = new CachorroClasse("Jeff", "Labrador");
console.log(jeff);

class Caminhao {
    constructor(exios, cor) {
        this.exios = exios;
        this.cor = cor;
    }

    descreverCaminhao() {
        console.log(`Este caminhão tem ${this.exios} e é da cor ${this.cor}`);
    }
}

const scania = new Caminhao(6, "vermelho");

console.log(scania);

scania.descreverCaminhao();

Caminhao.prototype.motor = 4.0;

const c2 = new Caminhao(6, "Azul");

console.log(c2.motor);


// 8 - override
class Humano {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
}

const lady = new Humano("Lady", 20);

console.log(lady);

Humano.prototype.idade = "Não definida";

console.log(lady.idade);
console.log(Humano.prototype.idade);

// 9 - symbol
class Aviao {
    constructor(marca, turbina) {
        this.marca = marca;
        this.turbina = turbina;
    };
};

const asas = Symbol();
const pilotos = Symbol();
Aviao.prototype[asas] = 2;
Aviao.prototype[pilotos] = 3;

const boeing = new Aviao("boeing", 10);

console.log(boeing);
console.log(boeing[asas]);
console.log(boeing[pilotos]);

// 10 - Getters e Setters
class Post {
    constructor(titulo, descricao, tags) {
        this.titulo = titulo;
        this.descricao = descricao;
        this.tags = tags;
    }

    get exibirTitulo() {
        return `Você está lendo: ${this.titulo}`;
    }

    set adicionarTags(tags){
        const tagsArray = tags.split(", ");
        this.tags = tagsArray;
    }
}

const myPost = new Post("Algum post", "um post");

console.log(myPost);

console.log(myPost.exibirTitulo);

myPost.adicionarTags = "programação, javascript, js" ;
console.log(myPost);


// 11 - Herança
class Mamifero {
    constructor(patas) {
        this.patas = patas;
    };
};

class Lobo extends Mamifero {
    constructor(patas, nome) {
        super(patas, patas);
        this.nome = nome;
    };
};

const shark = new Lobo(4, "Shark");
console.log(shark);
console.log(shark.patas);

// 12 - Instanceof
console.log(shark instanceof Lobo);
console.log(Lobo instanceof Mamifero);
