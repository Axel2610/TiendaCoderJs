class Celular {
    constructor(marca, modelo, pantalla, procesador, ram, almacenamiento, bateria, precio) {
        this.marca = marca;
        this.modelo = modelo;
        this.pantalla = pantalla;
        this.procesador = procesador;
        this.ram = ram;
        this.almacenamiento = almacenamiento;
        this.bateria = bateria;
        this.precio = precio;
    }

    sumaIva() {
        this.precioconIva = this.precio * 1.21;
        return this.precioconIva
    }
    doceCuotas() {
        this.precioDoceCuotas = this.precioconIva * 1.30;
        return this.precioDoceCuotas
    }
}

const celular1 = new Celular("Samsung", "A52", "6.5", "Snapdragon 720", "6gb", "128gb", "4500mah", 47000);
const celular2 = new Celular("Samsung", "A71", "6.7", "Snapdragon 730", "8gb", "128gb", "4500mah", 52000);
const celular3 = new Celular("Motorola", "G50", "6.5", "Mediatek 700", "4gb", "128gb", "5000mah", 39500);
const celular4 = new Celular("Motorola", "G8 Plus", "6.3", "Snapdragon 665", "4gb", "64gb", "4000mah", 27500);
const celular5 = new Celular("Xiaomi", "Redmi 10", "6.5", "Mediatek G88", "4gb", "64gb", "5000mah", 34000);
const celular6 = new Celular("Xiaomi", "Redmi Note 9", "6.53", "Mediatek G85", "3gb", "64gb", "5020mah", 38000);

const modeloCelulares = [{ marca: "Samsung", modelo: "A52" }, { marca: "Samsung", modelo: "A71" }, { marca: "Motorola", modelo: "G50" },
{ marca: "Motorola", modelo: "G8 Plus" }, { marca: "Xiaomi", modelo: "Redmi 10" }, { marca: "Xiaomi", modelo: "Redmi Note 9" }];

console.log(modeloCelulares);

const precioCelulares = [{ modelo: "A52", precio: 47000 }, { modelo: "A71", precio: 52000 }, { modelo: "G50", precio: 39500 },
{ modelo: "G8 Plus", precio: 27500 }, { modelo: "Redmi 10", precio: 34000 }, { modelo: "Redmi Note 9", precio: 38000 }];

console.log(precioCelulares);

const soloPrecios = [47000, 52000, 39500, 27500, 34000, 38000];

const preciosOrdenados = soloPrecios.sort((a, b) => a - b);

console.log(preciosOrdenados);

const encontrarSamsung = modeloCelulares.filter(celular => celular.marca.includes("Samsung"));

console.log(encontrarSamsung);


celular1.sumaIva(), celular1.doceCuotas();
celular2.sumaIva(), celular2.doceCuotas();
celular3.sumaIva(), celular3.doceCuotas();
celular4.sumaIva(), celular4.doceCuotas();
celular5.sumaIva(), celular5.doceCuotas();
celular6.sumaIva(), celular6.doceCuotas();


let eleccion = prompt("Que marca desea? (Samsung/Moto/Xiaomi)").toUpperCase();

if (eleccion == "SAMSUNG") {
    console.log(celular1);
    console.log(celular2);
} else if (eleccion == "MOTO") {
    console.log(celular3);
    console.log(celular4);
} else if (eleccion == "XIAOMI") {
    console.log(celular5);
    console.log(celular6);
} else {
    console.log("No tenemos ningun producto de esa marca");
}