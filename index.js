class Subject  {
    constructor() {
        this.observers = [];
    }

    subscribe(observer) {
        this.observers.push(observer);
    }

    unsubscribe(observer) {
        this.observers = this.observers.filter(obs => obs !== observer);
    }

    notify(data) {
        this.observers.forEach(observer => observer.update(data));
    }

}


class Observer {
    constructor(name) {
        this.name = name;
    }

    // Método que será llamado cuando el sujeto notifique cambios
    update(data) {
        console.log(`${this.name} received data:`, data);
    }
}


const subject = new Subject();

// Crear observadores
const observer1 = new Observer('Observer 1');
const observer2 = new Observer('Observer 2');

// Suscribir los observadores al sujeto
subject.subscribe(observer1);
subject.subscribe(observer2);


function changeState(colorName) {
    subject.notify(colorName);
}



function getVelocidad() {
    const min = 1;
    const max = 5;

    var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

    return " ".repeat(randomNumber);

}

function getCarroVelocidad(velocidad, nombre) {

    return velocidad + "▄▄▌ ▐  ▐▄▄▄▄\n" + velocidad + "██" + nombre +"█\n" + velocidad +"▀❍▀▀▀▀▀▀▀❍▀▀\n";

}


function initRace() {
    let count = 0;
    const maxCount = 30; // Número de veces que deseas ejecutar el código

    var fondo1 = "ı̴̴̡̡̡ ̡͌l̡̡̡ ̡͌l̡*̡̡ ̴̡ı̴̴̡ ̡̡͡|̲̲̲͡͡͡ ̲▫̲͡ ̲̲̲͡͡π̲̲͡͡ ̲̲͡▫̲̲͡͡ ̲|̡̡̡ ̡ ̴̡ı̴̡̡ ̡͌l̡̡̡̡.ı̴̴̡̡̡ ̡͌l̡*̡̡ ̴̡ı̴̴̡ ̡̡͡|̲̲̲͡͡͡ ̲▫̲͡ ̲̲̲͡͡π̲̲͡͡ ̲̲͡▫̲̲͡͡ ̲|̡̡̡ ̡ ̴̡ı̴̡̡ ̡͌l̡̡̡̡.ı̴̴̡̡̡ ̡͌l̡̡̡ ̡͌l̡*̡̡ ̴̡ı̴̴̡ ̡̡͡|̲̲̲͡͡͡ ̲▫̲͡ ̲̲̲͡͡π̲̲͡͡ ̲̲͡▫̲̲͡͡ ̲|̡̡̡ ̡ ̴̡ı̴̡̡ ̡͌l̡̡̡̡.ı̴̴̡̡̡ ̡͌l̡*̡̡ ̴̡ı̴̴̡ ̡̡͡|̲̲̲͡͡͡ ̲▫̲͡ ̲̲̲͡͡π̲̲͡͡ ̲̲͡▫̲̲͡͡ ̲|̡̡̡ ̡ ̴̡ı̴̡̡ ̡͌l̡̡̡̡.̡͡|̲̲̲͡͡͡ ̲▫̲͡ ̲̲̲͡͡π̲̲͡͡ ̲̲͡▫̲̲͡͡ ̲|̡̡̡̡͡|̲̲̲͡͡͡ ̲▫̲͡ ̲̲̲͡͡π̲̲͡͡ ̲̲͡▫̲̲͡͡ ̲|̡̡̡\n";
    var fondo2 = "──────────────────────────────────────────────────────────────────────────────────────────────────────────────────\n";

    
    var velocidad1 = " ";
    var velocidad2 = " ";

    const intervalId = setInterval(() => {
        console.clear()

        var vel1 = getVelocidad();
        var vel2 = getVelocidad();


        velocidad1 = velocidad1 + vel1;
        velocidad2 = velocidad2 + vel2;

        var carro1 =  getCarroVelocidad(velocidad1, "  SOBUSA ");
        var carro2 =  getCarroVelocidad(velocidad2, "COOLITORAL");

        race = fondo1 + carro1 + carro2 + fondo2; 

        console.log(race)

        count++;
        if (count >= maxCount) {
            clearInterval(intervalId);
            console.log("FINISH");
        }
    }, 100);


}