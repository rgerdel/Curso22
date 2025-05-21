class Personaje {
    constructor(nombre, vida, ataque, defensa, velocidad) {
        this.nombre = nombre;
        this.vida = vida;
        this.ataque = ataque;
        this.defensa = defensa;
        this.velocidad = velocidad;
    }

    atacar(enemigo) {
        const daño = Math.max(0, this.ataque - enemigo.defensa);
        enemigo.vida -= daño;
        console.log(`${this.nombre} ataca a ${enemigo.nombre} causando ${daño} de daño.`);
    }

    saludar() {
        console.log(`¡Hola! Soy ${this.nombre}.`);
    }
}

class Mago extends Personaje {
    constructor(nombre, vida, ataque, defensa, velocidad, hechizos) {
        super(nombre, vida, ataque, defensa, velocidad);
        this.hechizos = hechizos;
    }

    lanzarHechizo(enemigo) {
        const hechizo = this.hechizos[Math.floor(Math.random() * this.hechizos.length)];
        enemigo.vida -= hechizo.daño;
        console.log(`${this.nombre} lanza ${hechizo.nombre} a ${enemigo.nombre}, causando ${hechizo.daño} de daño.`);
    }
}

class Guerrero extends Personaje {
    constructor(nombre, vida, ataque, defensa, velocidad, armas) {
        super(nombre, vida, ataque, defensa, velocidad);
        this.armas = armas;
    }

    atacarConArma(enemigo) {
        const arma = this.armas[Math.floor(Math.random() * this.armas.length)];
        enemigo.vida -= arma.daño;
        console.log(`${this.nombre} ataca con ${arma.nombre} a ${enemigo.nombre}, causando ${arma.daño} de daño.`);
    }
}

class Arquero extends Personaje {
    constructor(nombre, vida, ataque, defensa, velocidad, flechas) {
        super(nombre, vida, ataque, defensa, velocidad);
        this.flechas = flechas;
    }

    dispararFlecha(enemigo) {
        enemigo.vida -= this.ataque;
        console.log(`${this.nombre} dispara una flecha a ${enemigo.nombre}, causando ${this.ataque} de daño.`);
    }
}

// Creación de personajes con atributos aleatorios
const magos = [
    new Mago("Merlín", Math.floor(Math.random() * (100 - 80) + 80), Math.floor(Math.random() * (20 - 10) + 10), Math.floor(Math.random() * (15 - 5) + 5), Math.floor(Math.random() * (10 - 1) + 1), [{ nombre: "Fuego", daño: 50 }, { nombre: "Hielo", daño: 40 }]),
    new Mago("Gandalf", Math.floor(Math.random() * (100 - 80) + 80), Math.floor(Math.random() * (20 - 10) + 10), Math.floor(Math.random() * (15 - 5) + 5), Math.floor(Math.random() * (10 - 1) + 1), [{ nombre: "Rayo", daño: 45 }, { nombre: "Sombra", daño: 35 }])
];

const guerreros = [
    new Guerrero("Conan", Math.floor(Math.random() * (120 - 100) + 100), Math.floor(Math.random() * (30 - 20) + 20), Math.floor(Math.random() * (20 - 10) + 10), Math.floor(Math.random() * (15 - 5) + 5), [{ nombre: "Espada", daño: 30 }, { nombre: "Hacha", daño: 35 }]),
    new Guerrero("Kratos", Math.floor(Math.random() * (120 - 100) + 100), Math.floor(Math.random() * (30 - 20) + 20), Math.floor(Math.random() * (20 - 10) + 10), Math.floor(Math.random() * (15 - 5) + 5), [{ nombre: "Martillo", daño: 40 }, { nombre: "Daga", daño: 25 }])
];

const arquero = new Arquero("Legolas", Math.floor(Math.random() * (110 - 90) + 90), Math.floor(Math.random() * (25 - 15) + 15), Math.floor(Math.random() * (10 - 5) + 5), Math.floor(Math.random() * (20 - 10) + 10), ["Flecha rápida", "Flecha explosiva"]);

// Prueba de ataques
magos[0].lanzarHechizo(guerreros[0]);
guerreros[1].atacarConArma(arquero);
arquero.dispararFlecha(magos[1]);