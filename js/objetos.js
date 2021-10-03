class CelularModelo {
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

const celular1 = new CelularModelo("Samsung", "A52", "6.5", "Snapdragon 720", "6gb", "128gb", "4500mah", 47000);
const celular2 = new CelularModelo("Samsung", "A71", "6.7", "Snapdragon 730", "8gb", "128gb", "4500mah", 52000);
const celular3 = new CelularModelo("Motorola", "G50", "6.5", "Mediatek 700", "4gb", "128gb", "5000mah", 39500);
const celular4 = new CelularModelo("Motorola", "G60s", "6.3", "Snapdragon 665", "4gb", "64gb", "4000mah", 48500);
const celular5 = new CelularModelo("Xiaomi", "Redmi 10", "6.5", "Mediatek G88", "4gb", "64gb", "5000mah", 34000);
const celular6 = new CelularModelo("Xiaomi", "Redmi Note 9", "6.53", "Mediatek G85", "3gb", "64gb", "5020mah", 38000);

let CelularesModelo = [celular1,celular2,celular3,celular4,celular5,celular6];

const guardar = (clave, valor) => { localStorage.setItem(clave, valor) };

guardar("listaModelo", JSON.stringify(CelularesModelo));

const precioCelulares = [{marca:"Samsung", modelo: "A52", precio: 47000 }, {marca:"Samsung", modelo: "A72", precio: 52000 }, {marca:"Moto", modelo: "G50", precio: 39500 },
{marca:"Moto", modelo: "G60", precio: 48500 }, {marca:"Xiaomi", modelo: "Redmi 10", precio: 34000 }, {marca:"Xiaomi", modelo: "Redmi Note 9", precio: 38000 }];


const encontrarSamsung =JSON.stringify(precioCelulares.filter(celular => celular.marca.includes("Samsung")));
const encontrarMoto =JSON.stringify(precioCelulares.filter(celular => celular.marca.includes("Moto")));
const encontrarXiaomi =JSON.stringify(precioCelulares.filter(celular => celular.marca.includes("Xiaomi")));


let botonMoto = document.getElementById("botonMoto")
let botonSamsung = document.getElementById("botonSamsung")
let botonXiaomi = document.getElementById("botonXiaomi")
let botonApple = document.getElementById("botonApple")

botonSamsung.addEventListener("click", respuestaClickSamsung)
function respuestaClickSamsung(){
    document.getElementById("textoNovedad").innerHTML = "El Samsung Galaxy A52 es la variante LTE del sucesor del Galaxy A51. Con una pantalla Super AMOLED de 6.5 pulgadas, el Galaxy A52 está potenciado por un procesador Snapdragon 720G con opciones de 4GB, 6GB o 8GB de memoria RAM y 128GB o 256GB de almacenamiento interno.";
    document.getElementById("textoNovedad2").innerHTML = "El Samsung Galaxy A72 llega para suceder al Galaxy A70 con una pantalla Super AMOLED de 6.7 pulgadas a resolución FHD+. Utilizando un procesador Snapdragon 730 de ocho núcleos, el Galaxy A71 cuenta con variantes de 6GB o 8GB de memoria RAM con 128GB de espacio de almacenamiento interno expandible microSD.";
    document.getElementById("imagenNovedad").src = "./img/galaxy-a52.png";
    document.getElementById("imagenNovedad2").src = "./img/galaxyInicio.png";
}


botonMoto.addEventListener("click",respuestaClickMoto)
function respuestaClickMoto(){
    document.getElementById("textoNovedad").innerHTML = "El Motorola Moto G50 es un smartphone Android con una pantalla HD+ de 6.5 pulgadas. Por dentro, encontramos un procesador Snapdragon 480 de Qualcomm que provee conectividad 5G, acompañado de 4GB de memoria RAM, con opciones de 64GB o 128GB de almacenamiento interno expandible vía microSD.";
    document.getElementById("textoNovedad2").innerHTML = "Con una pantalla de 6.8 pulgadas FHD+ con tasa de refresco de 120 Hz, el Moto G60 está potenciado por un procesador Qualcomm Snapdragon 732G con 6GB de RAM y 128GB de almacenamiento interno. La cámara triple posterior tiene un lente principal de 108 MP y secundarios de 8 MP y 2MP, y su cámara selfie es de 32 MP.";
    document.getElementById("imagenNovedad").src = "./img/motog50.png";
    document.getElementById("imagenNovedad2").src = "./img/motog60s.png";
}

botonXiaomi.addEventListener("click", respuestaClickXiaomi)
function respuestaClickXiaomi(){
    document.getElementById("textoNovedad").innerHTML = "El Xiaomi Redmi Note 10 es el líder de la décima reencarnación de la serie Redmi Note. Con una pantalla Super AMOLED de 6.43 pulgadas a resolución Full HD+, el Redmi Note 10 está potenciado por un procesador Snapdragon 678 con 4GB de memoria RAM con opciones de 64GB o 128GB de almacenamiento interno expandible vía microSD.";
    document.getElementById("textoNovedad2").innerHTML = "El Xiaomi Redmi Note 9 es un smartphone Android con una pantalla Full HD+ de 6.53 pulgadas y potenciado por un procesador Mediatek Helio G85, acompañado de variantes de 3GB de memoria RAM con 64GB de espacio de almacenamiento interno o 4GB de RAM con 128GB de almacenamiento.";
    document.getElementById("imagenNovedad").src = "./img/redmi10.png";
    document.getElementById("imagenNovedad2").src = "./img/Redmi-Note-9.png";
}

botonApple.addEventListener("click", respuestaClickApple)
function respuestaClickApple(){
    document.getElementById("textoNovedad").innerHTML = "El Apple iPhone 12 Pro Max es la variante con mayor tamaño de pantalla de la serie iPhone 12. Con una pantalla OLED de 6.7 pulgadas, el iPhone 12 Pro Max cuenta con un procesador Apple A14 Bionic con opciones de 128GB, 256GB, o 512GB de almacenamiento.";
    document.getElementById("textoNovedad2").innerHTML = "El Apple iPhone 12 mini es la variante más pequeña de la serie iPhone 12. Con unapantalla OLED de 5.4 pulgadas, el iPhone 12 mini está potenciado por el chip A14 Bionic, con opciones de 64GB, 128GB o 256GB de almacenamiento interno.";
    document.getElementById("imagenNovedad").src = "./img/i_Phone_12_Pro_Max.png";
    document.getElementById("imagenNovedad2").src = "./img/apple-iphone-12-mini.jpg";
}