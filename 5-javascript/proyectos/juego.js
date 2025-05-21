class Personaje {
    constructor(nombre, vida, ataque, defensa, velocidad) {
        this.nombre = nombre;
        this.vida = vida;
        this.ataque = ataque;
        this.defensa = defensa;
        this.velocidad = velocidad;
    }

    saludar() {
        console.log(`¡Hola! Soy ${this.nombre}.`);
    }

    atacar(objetivo) {
        const daño = this.ataque - objetivo.defensa;
        objetivo.vida -= daño > 0 ? daño : 0;
        console.log(`${this.nombre} ataca a ${objetivo.nombre} causando ${daño > 0 ? daño : 0} de daño.`);
    }
}

class Mago extends Personaje {
    constructor(nombre, vida, ataque, defensa, velocidad, hechizos) {
        super(nombre, vida, ataque, defensa, velocidad);
        this.hechizos = hechizos;
    }

    lanzarHechizo(objetivo) {
        const hechizo = this.hechizos[Math.floor(Math.random() * this.hechizos.length)];
        const daño = hechizo.daño;
        objetivo.vida -= daño;
        console.log(`${this.nombre} lanza el hechizo ${hechizo.nombre} a ${objetivo.nombre}, causando ${daño} de daño.`);
    }
}

class Guerrero extends Personaje {
    constructor(nombre, vida, ataque, defensa, velocidad, armas) {
        super(nombre, vida, ataque, defensa, velocidad);
        this.armas = armas;
    }

    atacarConArma(objetivo) {
        const arma = this.armas[Math.floor(Math.random() * this.armas.length)];
        const daño = arma.daño;
        objetivo.vida -= daño;
        console.log(`${this.nombre} ataca a ${objetivo.nombre} con ${arma.nombre}, causando ${daño} de daño.`);
    }
}

class Arquero extends Personaje {
    constructor(nombre, vida, ataque, defensa, velocidad, flechas) {
        super(nombre, vida, ataque, defensa, velocidad);
        this.flechas = flechas;
    }

    dispararFlecha(objetivo) {
        if (this.flechas.length > 0) {
            const flecha = this.flechas.pop();
            console.log(`${this.nombre} dispara una flecha a ${objetivo.nombre}.`);
            objetivo.vida -= 20; // Daño fijo de la flecha
        } else {
            console.log(`${this.nombre} no tiene más flechas.`);
        }
    }
}

// Crear personajes
const personajes = [
    new Mago("Merlín", 100, 20, 10, 30, [{ nombre: "Fuego", daño: 50 }, { nombre: "Hielo", daño: 40 }]),
    new Mago("Gandalf", 120, 18, 12, 25, [{ nombre: "Rayo", daño: 45 }, { nombre: "Viento", daño: 35 }]),
    new Guerrero("Leonidas", 150, 25, 15, 20, [{ nombre: "Espada", daño: 30 }, { nombre: "Hacha", daño: 40 }]),
    new Guerrero("Conan", 140, 22, 18, 18, [{ nombre: "Maza", daño: 35 }, { nombre: "Lanza", daño: 25 }]),
    new Arquero("Robin", 110, 20, 12, 28, ["Flecha común", "Flecha envenenada", "Flecha explosiva"])
];

// Simulación de combate
for (let i = 0; i < 5; i++) {
    const atacante = personajes[Math.floor(Math.random() * personajes.length)];
    let objetivo;
    do {
        objetivo = personajes[Math.floor(Math.random() * personajes.length)];
    } while (objetivo === atacante);

    if (atacante instanceof Mago) {
        atacante.lanzarHechizo(objetivo);
    } else if (atacante instanceof Guerrero) {
        atacante.atacarConArma(objetivo);
    } else if (atacante instanceof Arquero) {
        atacante.dispararFlecha(objetivo);
    }
}

console.log("Fin del combate.");