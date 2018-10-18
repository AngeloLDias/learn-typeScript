class Spacecraft {
    constructor(public propulsor: string) { };

    jumpIntoHyperspace() {
        console.log(`Entering hyperspace with ${this.propulsor}`)
    };

};

let ship = new Spacecraft('hyperdrive');
ship.jumpIntoHyperspace();

class MillenniumFalcon extends Spacecraft {
    constructor() {
        super('hyperDrive')
    };
    jumpIntoHyperspace() {
        if (Math.random() >= 0.5) {
            super.jumpIntoHyperspace()
        }else{
            console.log('failed')
        }
    }
};

let falcon = new MillenniumFalcon()
falcon.jumpIntoHyperspace();

interface Containership{

    cargoContainers: number;
};