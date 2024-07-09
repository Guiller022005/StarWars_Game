class Personaje {
    constructor(nombre, fuerza){
        this.nombre = nombre;
        this.fuerza = fuerza;
    }

    presentarse(){
        return `Soy ${this.nombre} y mi nivel de fuerza es ${this.fuerza}.`;
    }
}

//instancia para personaje
const personaje1 = new Personaje("Guillermo", 20);

// document.querySelector("#personajes").innerHTML = /*html*/`
//     <h1>${personaje1.presentarse()}</h1>
// `;


class Jedi extends Personaje{
    constructor(nombre, fuerza){
        super(nombre, fuerza);
    }

    usarFuerza(){
        return `${this.nombre} está utilizando la Fuerza para proteger la galaxia.`;
    }

    entrenar(){
        this.fuerza += 10;
        return this.fuerza;
    }
}

const jedi1 = new Jedi("Kylo Ren", 40);

// // Display information in HTML
// document.querySelector("#personajes").innerHTML = /*html*/`
//     <h1>${jedi1.presentarse()}</h1>
//     <p>${jedi1.usarFuerza()}</p>
//     <p>Después de entrenar, su nivel de fuerza es ${jedi1.entrenar()}.</p>
// `;

class sith extends Personaje{
    constructor(nombre, fuerza){
        super(nombre, fuerza);
    }

    usarFuerza(){
        return `${this.nombre} está utilizando la Fuerza para conquistar la galaxia`;
    }

    corromper(){
        this.fuerza -= 5;
        return this.fuerza;
    }
}

//instancia para sith
const sith1 = new sith("Darth Vader", 90);

// document.querySelector("#personajes").innerHTML = /*html*/`
//     <h1>${sith1.presentarse()}</h1>
//     <p>${sith1.usarFuerza()}</p>
//     <p>Después de entrenar, su nivel de fuerza es ${sith1.corromper()}.</p>
// `;


class MaestroJedi extends Jedi{
    constructor(nombre, fuerza){
        super(nombre, fuerza);
    }

    enseñar(){
        this.fuerza += 20;
        return this.fuerza;
    }
}

//instancia para Maestro
const maestro1 = new MaestroJedi("Yoda", 85);
// document.querySelector("#personajes").innerHTML = /*html*/`
//     <h1>${maestro1.presentarse()}</h1>
//     <p>${maestro1.usarFuerza()}</p>
//     <p>Después de entrenar, su nivel de fuerza es ${maestro1.enseñar()}.</p>
// `;

// Función para simular una batalla entre dos personajes
function batalla(personaje1, personaje2) {
    // Mensaje inicial de la batalla
    let mensaje = `Comienza la batalla entre ${personaje1.nombre} y ${personaje2.nombre}!<br>`;
    mensaje += `${personaje1.presentarse()}<br>`;
    mensaje += `${personaje2.presentarse()}<br><br>`;

    // Simulación de la batalla
    while (personaje1.fuerza > 0 && personaje2.fuerza > 0) {
        // Personaje 1 ataca a Personaje 2
        let ataque1 = Math.floor(Math.random() * 10) + 1; // Ataque aleatorio entre 1 y 10
        personaje2.fuerza -= ataque1;
        mensaje += `${personaje1.nombre} ataca a ${personaje2.nombre} y le causa ${ataque1} puntos de daño.<br>`;
        if (personaje2.fuerza <= 0) {
            mensaje += `${personaje2.nombre} ha sido derrotado.<br>`;
            break;
        }

        // Personaje 2 contraataca a Personaje 1
        let ataque2 = Math.floor(Math.random() * 10) + 1; // Ataque aleatorio entre 1 y 10
        personaje1.fuerza -= ataque2;
        mensaje += `${personaje2.nombre} contraataca a ${personaje1.nombre} y le causa ${ataque2} puntos de daño.<br>`;
        if (personaje1.fuerza <= 0) {
            mensaje += `${personaje1.nombre} ha sido derrotado.<br>`;
            break;
        }
    }

    // Mostrar resultado de la batalla en HTML
    document.querySelector("#resultado-batalla").innerHTML = mensaje;
}

batalla(maestro1, sith1);